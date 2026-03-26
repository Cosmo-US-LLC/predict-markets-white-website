import { useCallback, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import {
  getCurrentPrice,
  fetchPredictConfigFromParse,
  getCurrentBonus,
  getUserStats,
} from '../lib/parse.js'
import { fetchEthBnbPrices } from '../lib/coingecko.js'
import { getPredictConfig } from '../lib/config.js'
import { formatDollar } from '../lib/numberUtils.js'
import { useAccount } from '../lib/web3/useAccount.js'
import { showConnectionModal } from '../stores/modalStore.js'
import {
  getAbi,
  getChainIdFromLabel,
  getContractAddress,
  getDecimals,
  isCurrencyNative,
  sendGenericTransaction,
} from '../lib/web3/util.js'
import { config as wagmiConfig } from '../lib/web3/connections.js'

const PAYMENT_TOKENS = [
  { id: 1, symbol: 'ETH', chain: 'ERC-20', price: 0 },
  { id: 2, symbol: 'BNB', chain: 'BEP-20', price: 0 },
  { id: 3, symbol: 'USDT', chain: 'ERC-20', price: 1 },
  { id: 22, symbol: 'USDT', chain: 'BEP-20', price: 1 },
]

/** Map PresaleDashboard `selectedPayment` string → PAYMENT_TOKENS entry */
export function paymentStringToToken(selectedPayment) {
  const s = (selectedPayment || '').trim()
  if (s.startsWith('ETH')) return PAYMENT_TOKENS[0]
  if (s.startsWith('BNB')) return PAYMENT_TOKENS[1]
  if (s.includes('BEP-20')) return PAYMENT_TOKENS[3]
  if (s.startsWith('USDT')) return PAYMENT_TOKENS[2]
  return PAYMENT_TOKENS[2]
}

export function usePresaleBackend() {
  const accountData = useAccount()
  const [priceData, setPriceData] = useState(null)
  const [paymentPrices, setPaymentPrices] = useState({ ethPrice: 0, bnbPrice: 0 })
  const [bonusPct, setBonusPct] = useState(0)
  const [paymentTokenValue, setPaymentTokenValue] = useState(1)
  const [userStats, setUserStats] = useState({
    totalContribution: 0,
    totalContributionAll: 0,
    tokenAwarded: 0,
    bonusTokens: 0,
  })
  const [transactionLoading, setTransactionLoading] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)

  const refresh = useCallback(async () => {
    const [predict, prices, bonus] = await Promise.all([
      getCurrentPrice(),
      fetchEthBnbPrices(),
      getCurrentBonus(),
    ])
    setPriceData(predict)
    setPaymentPrices(prices)
    setBonusPct(typeof bonus === 'number' ? bonus : 0)
  }, [])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        await fetchPredictConfigFromParse()
        if (!cancelled) await refresh()
      } catch (e) {
        console.error(e)
        if (!cancelled) setPriceData({ price: 0, marketCap: 0 })
      }
    })()
    const t = setInterval(() => {
      fetchEthBnbPrices().then(setPaymentPrices)
    }, 60_000)
    return () => {
      cancelled = true
      clearInterval(t)
    }
  }, [refresh])

  useEffect(() => {
    if (accountData?.address) setWalletAddress(accountData.address.toLowerCase())
    else setWalletAddress(null)
  }, [accountData?.address])

  useEffect(() => {
    if (!walletAddress) return
    getUserStats(walletAddress).then(setUserStats)
  }, [walletAddress, transactionLoading])

  const tokenPrice = priceData?.price ?? 0

  const tokensWithPrice = useMemo(() => {
    const { ethPrice = 0, bnbPrice = 0 } = paymentPrices
    return PAYMENT_TOKENS.map((t) => ({
      ...t,
      price:
        t.price > 0 ? t.price : t.symbol === 'ETH' ? ethPrice : t.symbol === 'BNB' ? bnbPrice : 1,
    }))
  }, [paymentPrices])

  const buy = async (selectedPayment) => {
    const currency = paymentStringToToken(selectedPayment)
    const config = getPredictConfig()
    const ethWallet = config.ethWallet
    const bscWallet = config.bscWallet
    const hasValidWallets =
      ethWallet &&
      bscWallet &&
      ethWallet !== '0x0000000000000000000000000000000000000000' &&
      bscWallet !== '0x0000000000000000000000000000000000000000'

    if (!hasValidWallets) {
      toast.error('PREDICT project not configured in dashboard.')
      return
    }
    if (tokenPrice <= 0) {
      toast.error('Token price not set. Configure in Price/Time.')
      return
    }
    if (paymentTokenValue <= 0) {
      toast.error(`Enter amount to pay`)
      return
    }
    const address = accountData?.address
    if (!address) return

    const paymentTokenUsdPrice =
      tokensWithPrice.find((t) => t.id === currency.id)?.price ?? 1

    try {
      setTransactionLoading(true)
      const chainId = getChainIdFromLabel(currency.chain)
      if (!chainId) {
        toast.error(`Invalid chain`)
        return
      }
      const toWallet = chainId === 1 ? ethWallet : bscWallet
      const abi = getAbi(chainId)
      if (!abi) {
        toast.error('Invalid ABI')
        return
      }
      const native = isCurrencyNative(currency.symbol, chainId)
      const contractAddress = getContractAddress(chainId, currency.symbol)
      const decimals = getDecimals(chainId, currency.symbol) ?? 18
      if (!native && !contractAddress) {
        toast.error(`No contract for ${currency.symbol}`)
        return
      }
      toast('Confirm in your wallet')
      await sendGenericTransaction(wagmiConfig, {
        to: toWallet,
        value: paymentTokenValue,
        abi,
        chainId,
        contractAddress,
        decimals,
        native,
      })
      toast.success('Transaction submitted!')
      setTransactionLoading(false)
      await refresh()
    } catch (err) {
      console.error(err)
      toast.error(err?.message ?? 'Transaction failed')
      setTransactionLoading(false)
    }
  }

  const paymentTokenUsdPriceFor = (selectedPayment) => {
    const currency = paymentStringToToken(selectedPayment)
    return tokensWithPrice.find((t) => t.id === currency.id)?.price ?? 1
  }

  const receiveAmount = (selectedPayment) => {
    const usd = paymentTokenValue * paymentTokenUsdPriceFor(selectedPayment)
    if (tokenPrice <= 0) return 0
    return usd / tokenPrice
  }

  const connectOrBuy = async (selectedPayment) => {
    if (!accountData?.isConnected) {
      showConnectionModal()
      return
    }
    await buy(selectedPayment)
  }

  const totalRaisedUsd = userStats.totalContributionAll ?? 0
  const progressPercent =
    totalRaisedUsd > 0 ? Math.min(100, Math.round((totalRaisedUsd / 500000) * 100)) : null

  return {
    accountData,
    priceData,
    tokenPrice,
    bonusPct,
    paymentTokenValue,
    setPaymentTokenValue,
    userStats,
    transactionLoading,
    refresh,
    buy,
    connectOrBuy,
    receiveAmount,
    presalePriceDisplay: tokenPrice > 0 ? formatDollar(tokenPrice) : '—',
    listingPriceDisplay: '$0.03',
    totalRaisedUsd,
    formattedTotalRaised: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(totalRaisedUsd),
    progressPercent,
  }
}
