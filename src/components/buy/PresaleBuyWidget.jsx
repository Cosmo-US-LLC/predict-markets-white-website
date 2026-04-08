import { useEffect, useMemo, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import toast from 'react-hot-toast'
import { Copy, X } from 'lucide-react'
import { useAccount } from '../../lib/web3/useAccount.js'
import { showConnectionModal } from '../../stores/modalStore.js'
import {
  getAbi,
  getChainIdFromLabel,
  getContractAddress,
  getDecimals,
  isCurrencyNative,
  sendGenericTransaction,
} from '../../lib/web3/util.js'
import { getAccount } from '@wagmi/core'
import {
  config as wagmiConfig,
  connectWithMetaMask,
  getMetaMaskConnector,
} from '../../lib/web3/connections.js'
import { getPredictConfig } from '../../lib/config.js'
import {
  getUserStats,
  getCurrentBonus,
  getTransactionHistory,
} from '../../lib/parse.js'
import { formatDollar } from '../../lib/numberUtils.js'
import bnbIcon from '../../assets/images/wallet-coins/coins (1).svg'
import ethIcon from '../../assets/images/wallet-coins/coins (2).svg'
import usdtIcon from '../../assets/images/wallet-coins/coins (4).svg'
import prdicon from '../../assets/images/wallet-coins/Icon.svg'

function isUserRejectedWalletError(err) {
  const code = err?.code ?? err?.cause?.code
  return code === 4001 || err?.name === 'UserRejectedRequestError'
}

function toBaseUnitString(value, decimals) {
  const safe = Number.isFinite(Number(value)) ? String(value) : '0'
  const [whole, frac = ''] = safe.split('.')
  const wholeNorm = (whole || '0').replace(/[^0-9]/g, '') || '0'
  const fracNorm = frac.replace(/[^0-9]/g, '')
  const fracPadded = (fracNorm + '0'.repeat(decimals)).slice(0, decimals)
  const combined = `${wholeNorm}${fracPadded}`.replace(/^0+(?=\d)/, '')
  return combined || '0'
}

const PAYMENT_TOKENS = [
  { id: 1, symbol: 'ETH', chain: 'ERC-20', price: 0 },
  { id: 2, symbol: 'BNB', chain: 'BEP-20', price: 0 },
  { id: 3, symbol: 'USDT', chain: 'ERC-20', price: 1 },
  { id: 22, symbol: 'USDT', chain: 'BEP-20', price: 1 },
]

function paymentStringToToken(selectedPayment) {
  const s = (selectedPayment || '').trim()
  if (s.startsWith('ETH')) return PAYMENT_TOKENS[0]
  if (s.startsWith('BNB')) return PAYMENT_TOKENS[1]
  if (s.includes('BEP-20') && s.startsWith('USDT')) return PAYMENT_TOKENS[3]
  if (s.startsWith('USDT')) return PAYMENT_TOKENS[2]
  return PAYMENT_TOKENS[2]
}

const paymentOptions = [
  { id: 'eth', name: 'ETH', network: 'ERC-20', iconSrc: ethIcon, networks: ['ERC-20', 'BEP-20'] },
  { id: 'bnb', name: 'BNB', network: 'BEP-20', iconSrc: bnbIcon, networks: ['BEP-20', 'ERC-20'] },
  { id: 'usdt', name: 'USDT', network: 'ERC-20', iconSrc: usdtIcon, networks: ['ERC-20', 'BEP-20'] },
]

function BuyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8.00521 1.16797C6.65371 1.16797 5.33255 1.56874 4.20881 2.31959C3.08508 3.07045 2.20923 4.13767 1.69203 5.3863C1.17484 6.63493 1.03951 8.00888 1.30318 9.33442C1.56684 10.66 2.21766 11.8775 3.17331 12.8332C4.12897 13.7889 5.34656 14.4397 6.67209 14.7033C7.99763 14.967 9.37159 14.8317 10.6202 14.3145C11.8688 13.7973 12.9361 12.9214 13.6869 11.7977C14.4378 10.674 14.8385 9.35281 14.8385 8.0013C14.8368 6.18953 14.1163 4.45247 12.8352 3.17136C11.554 1.89024 9.81698 1.16973 8.00521 1.16797Z"
        fill="currentColor"
      />
    </svg>
  )
}

function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M13.4948 12.25H2.49479C2.1266 12.25 1.82812 12.5485 1.82812 12.9167V13.5833C1.82812 13.9515 2.1266 14.25 2.49479 14.25H13.4948C13.863 14.25 14.1615 13.9515 14.1615 13.5833V12.9167C14.1615 12.5485 13.863 12.25 13.4948 12.25Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.35479 2.09919L2.17479 4.93252C2.06988 4.98993 1.98234 5.07449 1.92135 5.17736C1.86036 5.28022 1.82816 5.3976 1.82812 5.51719V6.18186C1.82813 6.28794 1.87027 6.38968 1.94528 6.4647C2.0203 6.53971 2.12204 6.58186 2.22812 6.58186H13.7615C13.8675 6.58186 13.9693 6.53971 14.0443 6.4647C14.1193 6.38968 14.1615 6.28794 14.1615 6.18186V5.51719C14.1614 5.3976 14.1292 5.28022 14.0682 5.17736C14.0072 5.07449 13.9197 4.98993 13.8148 4.93252L8.63479 2.09919C8.43856 1.99182 8.21847 1.93555 7.99479 1.93555C7.77111 1.93555 7.55102 1.99182 7.35479 2.09919Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M6 12C4.6 12 3.36111 11.5751 2.28333 10.7253C1.20556 9.87556 0.505556 8.78933 0.183333 7.46667C0.138889 7.3 0.172222 7.14733 0.283333 7.00867C0.394444 6.87 0.544444 6.78933 0.733333 6.76667C0.911111 6.74444 1.07222 6.77778 1.21667 6.86667C1.36111 6.95556 1.46111 7.08889 1.51667 7.26667C1.78333 8.26667 2.33333 9.08333 3.16667 9.71667C4 10.35 4.94444 10.6667 6 10.6667C7.3 10.6667 8.40289 10.214 9.30867 9.30867C10.2144 8.40333 10.6671 7.30044 10.6667 6C10.6662 4.69956 10.2136 3.59689 9.30867 2.692C8.40378 1.78711 7.30089 1.33422 6 1.33333C5.23333 1.33333 4.51667 1.51111 3.85 1.86667C3.18333 2.22222 2.62222 2.71111 2.16667 3.33333H3.33333C3.52222 3.33333 3.68067 3.39733 3.80867 3.52533C3.93667 3.65333 4.00044 3.81156 4 4C3.99956 4.18844 3.93556 4.34689 3.808 4.47533C3.68044 4.60378 3.52222 4.66756 3.33333 4.66667H0.666667C0.477778 4.66667 0.319556 4.60267 0.192 4.47467C0.0644445 4.34667 0.000444444 4.18844 0 4V1.33333C0 1.14444 0.0640001 0.986222 0.192 0.858667C0.32 0.731111 0.478222 0.667111 0.666667 0.666667C0.855111 0.666222 1.01356 0.730222 1.142 0.858667C1.27044 0.987111 1.33422 1.14533 1.33333 1.33333V2.23333C1.9 1.52222 2.59178 0.972222 3.40867 0.583333C4.22556 0.194444 5.08933 0 6 0C6.83333 0 7.614 0.158444 8.342 0.475333C9.07 0.792222 9.70333 1.21978 10.242 1.758C10.7807 2.29622 11.2084 2.92956 11.5253 3.658C11.8422 4.38645 12.0004 5.16711 12 6C11.9996 6.83289 11.8413 7.61356 11.5253 8.342C11.2093 9.07044 10.7816 9.70378 10.242 10.242C9.70244 10.7802 9.06911 11.208 8.342 11.5253C7.61489 11.8427 6.83422 12.0009 6 12Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function PresaleBuyWidget({
  priceData,
  paymentPrices = {},
  onRefresh,
  presaleAmountFallback = '$456,398.80',
  softcapPercentage = 60,
  softcapTarget = '$500,000',
  holdersCount = '2748',
  bonusCode = 'PRE20',
}) {
  const accountData = useAccount()
  const [activeTab, setActiveTab] = useState('buy')
  const [selectedPayment, setSelectedPayment] = useState('USDT ERC-20')
  const [openDropdownId, setOpenDropdownId] = useState(null)
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false)
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false)
  const [isQrModalOpen, setIsQrModalOpen] = useState(false)
  const [qrTargetWallet, setQrTargetWallet] = useState('universal')
  const [historyItems, setHistoryItems] = useState([])
  const [paymentTokenValue, setPaymentTokenValue] = useState(1)
  const [bonusPct, setBonusPct] = useState(0)
  const [transactionLoading, setTransactionLoading] = useState(false)
  const [walletAddress, setWalletAddress] = useState(null)
  /** After wallet modal: `'buy'` → submit tx; `'dashboard'` / `'history'` → open modals. */
  const pendingAfterConnectRef = useRef(null)
  const buyRef = useRef(() => Promise.resolve())
  const [userStats, setUserStats] = useState({
    totalContribution: 0,
    totalContributionAll: 0,
    tokenAwarded: 0,
    bonusTokens: 0,
  })
  const dropdownRefs = useRef({})

  const tokenPrice = priceData?.price ?? 0
  const listingDisplay =
    priceData?.listingPrice != null && Number.isFinite(Number(priceData.listingPrice))
      ? formatDollar(Number(priceData.listingPrice))
      : '$0.03'

  const { ethPrice = 0, bnbPrice = 0 } = paymentPrices
  const tokensWithPrice = useMemo(() => {
    return PAYMENT_TOKENS.map((t) => ({
      ...t,
      price:
        t.price > 0 ? t.price : t.symbol === 'ETH' ? ethPrice : t.symbol === 'BNB' ? bnbPrice : 1,
    }))
  }, [ethPrice, bnbPrice])

  const selectedToken = paymentStringToToken(selectedPayment)
  const paymentTokenUsdPrice =
    tokensWithPrice.find((t) => t.id === selectedToken?.id)?.price ?? 1

  const receiveAmount =
    tokenPrice > 0 ? (paymentTokenValue * paymentTokenUsdPrice) / tokenPrice : 0

  const totalRaisedUsd = userStats.totalContributionAll ?? 0
  const formattedTotalRaised = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(totalRaisedUsd)
  const progressPercent =
    totalRaisedUsd > 0 ? Math.min(100, Math.round((totalRaisedUsd / 500000) * 100)) : null

  useEffect(() => {
    if (accountData?.address) setWalletAddress(accountData.address.toLowerCase())
    else setWalletAddress(null)
  }, [accountData?.address])

  useEffect(() => {
    getCurrentBonus().then(setBonusPct).catch(() => setBonusPct(0))
  }, [onRefresh])

  useEffect(() => {
    if (!walletAddress) return
    getUserStats(walletAddress).then(setUserStats)
  }, [walletAddress, transactionLoading, onRefresh])

  useEffect(() => {
    if (isDashboardModalOpen || isHistoryModalOpen || isQrModalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isDashboardModalOpen, isHistoryModalOpen, isQrModalOpen])

  useEffect(() => {
    if (!isHistoryModalOpen || !walletAddress) return
    getTransactionHistory(walletAddress, 20).then(setHistoryItems)
  }, [isHistoryModalOpen, walletAddress, transactionLoading])

  const getSelectedPaymentOption = () => {
    const parts = selectedPayment.split(' ')
    const name = parts[0]
    const network = parts.slice(1).join(' ') || ''
    const option = paymentOptions.find((opt) => opt.name === name)
    if (option) return { ...option, network: network || option.network }
    return paymentOptions[2]
  }
  const selectedPaymentOption = getSelectedPaymentOption()

  const cfg = getPredictConfig()
  const qrWalletAddress = selectedToken?.chain === 'ERC-20' ? cfg.ethWallet : cfg.bscWallet
  const selectedChainId = getChainIdFromLabel(selectedToken?.chain)
  const selectedTokenDecimals = selectedChainId ? getDecimals(selectedChainId, selectedToken?.symbol) ?? 18 : 18
  const tokenContractAddress = selectedChainId ? getContractAddress(selectedChainId, selectedToken?.symbol) : null
  const paymentAmount = Number(paymentTokenValue || 0)
  const amountBaseUnits = useMemo(
    () => toBaseUnitString(paymentAmount, selectedTokenDecimals),
    [paymentAmount, selectedTokenDecimals],
  )
  const metamaskPaymentUri = useMemo(() => {
    if (!qrWalletAddress || !selectedChainId) return ''
    const native = isCurrencyNative(selectedToken?.symbol, selectedChainId)
    if (native) {
      return `https://link.metamask.io/send/${qrWalletAddress}@${selectedChainId}?value=${amountBaseUnits}`
    }
    if (!tokenContractAddress) return ''
    return `https://link.metamask.io/send/${tokenContractAddress}@${selectedChainId}/transfer?address=${qrWalletAddress}&uint256=${amountBaseUnits}`
  }, [qrWalletAddress, selectedChainId, selectedToken?.symbol, tokenContractAddress, amountBaseUnits])
  const trustAsset = useMemo(() => {
    if (!selectedChainId) return ''
    const native = isCurrencyNative(selectedToken?.symbol, selectedChainId)
    if (native) {
      if (selectedChainId === 1) return 'c60'
      if (selectedChainId === 56) return 'c20000714'
      return ''
    }
    if (!tokenContractAddress) return ''
    if (selectedChainId === 1) return `c60_t${tokenContractAddress}`
    if (selectedChainId === 56) return `c20000714_t${tokenContractAddress}`
    return ''
  }, [selectedChainId, selectedToken?.symbol, tokenContractAddress])
  const trustPaymentUri = useMemo(() => {
    if (!trustAsset || !qrWalletAddress) return ''
    return `https://link.trustwallet.com/send?asset=${encodeURIComponent(trustAsset)}&address=${encodeURIComponent(qrWalletAddress)}&amount=${encodeURIComponent(String(paymentAmount || 0))}`
  }, [trustAsset, qrWalletAddress, paymentAmount])
  const universalPaymentUri = useMemo(() => {
    if (!qrWalletAddress || !selectedChainId) return ''
    const native = isCurrencyNative(selectedToken?.symbol, selectedChainId)
    if (native) {
      return `ethereum:${qrWalletAddress}@${selectedChainId}?value=${amountBaseUnits}`
    }
    if (!tokenContractAddress) return ''
    return `ethereum:${tokenContractAddress}@${selectedChainId}/transfer?address=${qrWalletAddress}&uint256=${amountBaseUnits}`
  }, [qrWalletAddress, selectedChainId, selectedToken?.symbol, tokenContractAddress, amountBaseUnits])
  const selectedPaymentUri =
    qrTargetWallet === 'metamask'
      ? metamaskPaymentUri
      : qrTargetWallet === 'trust'
        ? trustPaymentUri
        : universalPaymentUri
  const qrCodeValue = useMemo(() => {
    const payload = selectedPaymentUri || qrWalletAddress || ''
    if (!payload) return ''
    return `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(payload)}`
  }, [selectedPaymentUri, qrWalletAddress])
  const hasValidWallets =
    cfg.ethWallet &&
    cfg.bscWallet &&
    cfg.ethWallet !== '0x0000000000000000000000000000000000000000' &&
    cfg.bscWallet !== '0x0000000000000000000000000000000000000000'

  const buy = async () => {
    if (!hasValidWallets) {
      toast.error('PREDICT project not configured in dashboard.')
      return
    }
    if (tokenPrice <= 0) {
      toast.error('Token price not set. Configure in Price/Time.')
      return
    }
    if (paymentTokenValue <= 0) {
      toast.error('Enter an amount to pay')
      return
    }
    const { address } = getAccount(wagmiConfig)
    if (!address) return

    const currency = selectedToken
    try {
      setTransactionLoading(true)
      const chainId = getChainIdFromLabel(currency.chain)
      if (!chainId) {
        toast.error('Invalid chain')
        return
      }
      const toWallet = chainId === 1 ? cfg.ethWallet : cfg.bscWallet
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
      onRefresh?.()
    } catch (err) {
      console.error(err)
      toast.error(err?.message ?? 'Transaction failed')
      setTransactionLoading(false)
    }
  }

  buyRef.current = buy

  useEffect(() => {
    if (!accountData?.isConnected || !accountData?.address) return
    const pending = pendingAfterConnectRef.current
    if (!pending) return
    pendingAfterConnectRef.current = null
    if (pending === 'buy') void buyRef.current()
    if (pending === 'dashboard') setIsDashboardModalOpen(true)
    if (pending === 'history') setIsHistoryModalOpen(true)
  }, [accountData?.isConnected, accountData?.address])

  useEffect(() => {
    return () => {
      pendingAfterConnectRef.current = null
    }
  }, [])

  const connectOrBuy = async () => {
    if (!hasValidWallets) {
      toast.error('PREDICT project not configured in dashboard.')
      return
    }
    if (tokenPrice <= 0) {
      toast.error('Token price not set. Configure in Price/Time.')
      return
    }
    if (paymentTokenValue <= 0) {
      toast.error('Enter an amount to pay')
      return
    }

    const { address } = getAccount(wagmiConfig)
    if (address) {
      await buy()
      return
    }

    if (getMetaMaskConnector()) {
      try {
        await connectWithMetaMask()
        if (getAccount(wagmiConfig).address) {
          await buy()
          return
        }
      } catch (err) {
        if (isUserRejectedWalletError(err)) {
          toast.error('Connection cancelled')
          return
        }
      }
    }

    pendingAfterConnectRef.current = 'buy'
    toast('Choose a wallet to continue your purchase')
    showConnectionModal()
  }

  const connectWalletForDashboard = async () => {
    const { address } = getAccount(wagmiConfig)
    if (address) {
      setIsDashboardModalOpen(true)
      return
    }
    if (getMetaMaskConnector()) {
      try {
        await connectWithMetaMask()
        if (getAccount(wagmiConfig).address) {
          setIsDashboardModalOpen(true)
          return
        }
      } catch (err) {
        if (isUserRejectedWalletError(err)) {
          toast.error('Connection cancelled')
          return
        }
      }
    }
    pendingAfterConnectRef.current = 'dashboard'
    toast('Choose a wallet to view your dashboard')
    showConnectionModal()
  }

  const connectWalletForHistory = async () => {
    const { address } = getAccount(wagmiConfig)
    if (address) {
      setIsHistoryModalOpen(true)
      return
    }
    if (getMetaMaskConnector()) {
      try {
        await connectWithMetaMask()
        if (getAccount(wagmiConfig).address) {
          setIsHistoryModalOpen(true)
          return
        }
      } catch (err) {
        if (isUserRejectedWalletError(err)) {
          toast.error('Connection cancelled')
          return
        }
      }
    }
    pendingAfterConnectRef.current = 'history'
    toast('Choose a wallet to view your history')
    showConnectionModal()
  }

  const anyModalOpen = isDashboardModalOpen || isHistoryModalOpen || isQrModalOpen

  const tabs = [
    { id: 'buy', label: 'Buy $PREDICT', icon: BuyIcon },
    { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
    { id: 'history', label: 'History', icon: HistoryIcon },
  ]

  const openQrModal = () => {
    if (!hasValidWallets) {
      toast.error('PREDICT project not configured in dashboard.')
      return
    }
    if (paymentTokenValue <= 0) {
      toast.error('Enter an amount to pay')
      return
    }
    setIsQrModalOpen(true)
  }

  const copyQrWalletAddress = async () => {
    if (!qrWalletAddress) return
    try {
      await navigator.clipboard.writeText(qrWalletAddress)
      toast.success('Wallet address copied')
    } catch {
      toast.error('Failed to copy wallet address')
    }
  }

  const openSelectedWalletApp = () => {
    if (!selectedPaymentUri) {
      toast.error('Unable to generate wallet payment link for this token/network')
      return
    }
    if (typeof window !== 'undefined') window.open(selectedPaymentUri, '_blank')
  }

  const renderModal = (content) => {
    if (typeof document === 'undefined') return null
    return createPortal(content, document.body)
  }

  return (
    <div
      className={`relative mx-auto w-full max-w-[100%] rounded-[13.675px] border border-[#D8D8D8] bg-white px-[10px] py-[15px] shadow-xl md:px-[44px] md:py-[24px] ${anyModalOpen ? 'z-[10000]' : ''}`}
    >
      <div className="absolute left-1/2 top-[-15px] mb-4 flex -translate-x-1/2 items-center justify-center">
        <div className="flex items-center gap-2 rounded-[4px] bg-[#0080ED] px-4 py-1.5 font-[Inter] !text-[12px] font-[600] uppercase text-white">
          <div
            className="h-2 w-2 flex-shrink-0 rounded-full bg-white"
            style={{ animation: 'blink 1.5s ease-in-out infinite' }}
          />
          <span>PRESALE IS LIVE</span>
        </div>
      </div>

      <div className="mb-[15px] flex items-center justify-between gap-2 rounded-[100px] border border-gray-800 p-1">
        {tabs.map((tab, index) => {
          const IconComponent = tab.icon
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setActiveTab(tab.id)
                if (tab.id === 'dashboard') void connectWalletForDashboard()
                if (tab.id === 'history') void connectWalletForHistory()
              }}
              className={`flex !items-center justify-center !text-black md:!text-[12px] !text-[11px] font-[Inter] rounded-[100px] px-[2px] py-2 transition-all duration-200 md:px-[10px] flex-1 max-md:gap-[5px] gap-[2px] ${
                index === 0 ? 'md:!min-w-[125px] md:!max-w-[125px]' : ''
              } ${activeTab === tab.id ? 'bg-[#B0B0B01F] text-black' : 'bg-transparent text-gray-700 hover:text-black'}`}
            >
              <span className={`leading-none ${activeTab === tab.id ? 'text-black' : 'text-gray-700'}`}>
                <IconComponent />
              </span>
              <span
                className={`text-center font-[Inter] !text-[10px] leading-tight md:!text-[12px] !font-[400] ${
                  activeTab === tab.id ? 'text-black' : 'text-gray-700'
                }`}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

      <div
        className="mb-[8px] rounded-[8px] px-[16px] py-[8px] bg-[#F5F5F5]"
        style={{ border: '1px solid rgba(0, 0, 0, 0.10)' }}
      >
        <h2 className="heading-two mb-2 !text-center !font-[500] !leading-[100%] md:!text-[32px] !font-[Helvetica Neue Medium Extended]">
          {totalRaisedUsd > 0 ? formattedTotalRaised : presaleAmountFallback}
        </h2>
        <div className="relative mb-3 h-[10px] w-full rounded-full bg-gray-200">
          <div
            className="relative h-3 rounded-full bg-[#0080ED] transition-all duration-300"
            style={{ width: `${progressPercent ?? softcapPercentage}%` }}
          />
        </div>
        <div className="mb-1 flex items-center justify-between border border-[#D4D4D4] !border-b-0 !border-l-0 !border-r-0 p-[5px] !pb-0 text-[14px]">
          <div className="text-[10px] font-[Inter] !font-[700] text-[#7B7B7B]">
            {progressPercent ?? softcapPercentage}% of softcap raised
          </div>
          <div className="h-[10px] border-l border-[#D4D4D4]" />
          <h5 className="text-center text-[10px] font-[Inter] !font-[700] text-[#7B7B7B]">{holdersCount} Holders</h5>
          <div className="h-[10px] border-l border-[#D4D4D4]" />
          <h5 className="text-[10px] font-[Inter] !font-[700] text-[#7B7B7B]">{softcapTarget}</h5>
        </div>
      </div>

      <div className="mb-[10px]">
        <div className="grid grid-cols-3 gap-2">
          {paymentOptions.map((option, index) => {
            const isLast = index === paymentOptions.length - 1
            const hasDropdown = isLast && option.networks?.length > 1
            return (
              <div key={option.id} ref={(el) => (dropdownRefs.current[option.id] = el)} className="relative">
                <button
                  type="button"
                  onClick={() => {
                    if (hasDropdown) {
                      if (!selectedPayment.includes(option.name)) {
                        setSelectedPayment(`${option.name} ${option.network}`)
                      }
                      setOpenDropdownId(openDropdownId === option.id ? null : option.id)
                    } else {
                      setSelectedPayment(`${option.name} ${option.network}`)
                      setOpenDropdownId(null)
                    }
                  }}
                  className={`flex min-h-[40px] w-full items-center gap-2 rounded-lg border px-2 py-1 text-left transition-colors ${
                    openDropdownId === option.id
                      ? 'border-gray-300 bg-blue-50'
                      : selectedPayment.includes(option.name)
                        ? 'border-gray-200 bg-white'
                        : 'border-gray-200 bg-gray-50 hover:bg-gray-50'
                  }`}
                >
                  <img src={option.iconSrc} alt={option.name} className="h-4 w-4 flex-shrink-0 md:h-6 md:w-6" />
                  <div className="flex min-w-0 flex-1 flex-col justify-center">
                    <div className="text-[12px] font-bold leading-[13px] text-gray-800 md:text-[12px]">{option.name}</div>
                    <div className="text-[10px] leading-[13px] text-gray-500 md:text-[12px]">
                      {selectedPayment.includes(option.name)
                        ? selectedPayment.split(' ').slice(1).join(' ') || option.network
                        : option.network}
                    </div>
                  </div>
                  {hasDropdown && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="8"
                      viewBox="0 0 15 8"
                      fill="none"
                      className={`max-md:h-[8px] max-md:w-[10px] transition-transform duration-200 ${
                        openDropdownId === option.id ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d="M14.3696 0.636719L8.71715 6.28921C8.0496 6.95676 6.95725 6.95676 6.2897 6.28921L0.637207 0.636719"
                        stroke="black"
                        strokeWidth="1.27411"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
                {hasDropdown && openDropdownId === option.id && (
                  <div
                    className="absolute left-0 top-full z-50 mt-1 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {option.networks.map((network) => {
                      const sel = selectedPayment === `${option.name} ${network}`
                      return (
                        <button
                          key={network}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            setSelectedPayment(`${option.name} ${network}`)
                            setOpenDropdownId(null)
                          }}
                          className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-gray-50 ${
                            sel ? 'bg-blue-50 font-semibold text-[#0080ED]' : 'text-gray-700'
                          }`}
                        >
                          <img src={option.iconSrc} alt="" className="h-6 w-6 flex-shrink-0" />
                          <div className="min-w-0 flex-1 text-left">
                            <div className="text-left text-[12px] font-medium">{option.name}</div>
                            <div className={`mt-0.5 text-left text-[10px] ${sel ? 'text-[#0080ED]' : 'text-gray-500'}`}>
                              {network}
                            </div>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="mb-[15px] rounded-[4px] border border-[#D4D4D4] bg-[#F7F7F7] px-4 py-[5px]">
        <div className="flex items-center justify-center space-x-2 text-sm">
          <span className="text-[12px] !font-[600] text-black md:text-[12px]">Presale Price = </span>
          <span className="text-[12px] font-bold text-[#0080ED] md:text-[12px]">
            {tokenPrice > 0 ? formatDollar(tokenPrice) : '—'}
          </span>
          <div className="h-4 w-px bg-gray-800" />
          <span className="text-[12px] !font-[600] text-black md:text-[12px]">Listing Price = </span>
          <span className="text-[12px] font-bold text-[#0080ED] md:text-[12px]">{listingDisplay}</span>
        </div>
      </div>

      <div className="mb-[20px] space-y-[12px]">
        <div>
          <label className="mb-1 block text-sm font-bold text-gray-800">You Pay {selectedPaymentOption.name}</label>
          <div className="flex items-center gap-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 md:h-[46px]">
            <input
              type="number"
              min="0"
              step="any"
              value={paymentTokenValue}
              onChange={(e) => setPaymentTokenValue(Math.max(0, parseFloat(e.target.value) || 0))}
              className="max-w-[70%] flex-1 border-none bg-transparent px-4 py-2.5 font-[Inter] !text-[16px] font-[500] text-black outline-none"
            />
            <div className="flex w-[30%] items-center gap-2 border-l border-gray-200 bg-transparent px-3 py-2">
              <img src={selectedPaymentOption.iconSrc} alt="" className="h-5 w-5 flex-shrink-0 md:h-8 md:w-8" />
              <div className="flex flex-col">
                <span className="text-[12px] font-bold leading-tight text-gray-800 md:text-sm">
                  {selectedPaymentOption.name}
                </span>
                <span className="text-[10px] leading-tight text-gray-600 md:text-xs">{selectedPaymentOption.network}</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-bold text-gray-800">
            You Receive PREDICT +{' '}
            <span className="text-[#0080ED] underline">Bronze NFT</span>
          </label>
          <div className="flex items-center gap-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 md:h-[46px]">
            <input
              type="text"
              readOnly
              value={
                tokenPrice > 0
                  ? receiveAmount.toLocaleString('en-US', { maximumFractionDigits: 2 })
                  : '—'
              }
              className="max-w-[70%] flex-1 border-none bg-transparent px-4 py-2.5 text-[16px] font-semibold text-black outline-none"
            />
            <div className="flex w-[30%] items-center gap-2 border-l border-gray-200 bg-transparent px-2 py-3">
              <img src={prdicon} alt="" className="h-8 w-8" />
              <span className="text-[12px] font-bold leading-tight text-gray-800 md:text-sm">PREDICT</span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        disabled={transactionLoading}
        onClick={connectOrBuy}
        className="btn_primary mb-4 w-full !rounded-[8px] !py-[12px] !text-[18px] font-medium uppercase text-white transition-colors hover:bg-[#0066cc] disabled:opacity-60"
      >
        {transactionLoading
          ? 'PROCESSING...'
          : 'BUY $PREDICT'}
      </button>
      <button
        type="button"
        onClick={openQrModal}
        className="mb-4 w-full rounded-[8px] border border-[#0080ED] bg-white py-[12px] text-[16px] font-medium uppercase text-[#0080ED] transition-colors hover:bg-[#eef6ff]"
      >
        Pay With QR Code
      </button>

      <div className="rounded-[8px] border border-gray-100 bg-[#F2F2F2] p-[6px] text-center text-[12px] text-gray-600">
        <span className="font-semibold text-[#0080ED]">Special Bonus:</span>{' '}
        {bonusPct > 0 ? (
          <>
            Get {Math.round(bonusPct * 100)}% more PREDICT tokens <br /> with the code{' '}
          </>
        ) : (
          <>
            Get bonus PREDICT tokens <br /> with the code{' '}
          </>
        )}
        <span className="font-semibold text-[#000]">{bonusCode}</span> (valid for a limited time only).
      </div>

      {renderModal(isDashboardModalOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto bg-black/50 p-4 md:items-center md:p-6 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsDashboardModalOpen(false)
          }}
        >
          <div className="relative my-4 w-full max-w-[500px] rounded-[15px] border border-[#B9E6FE] bg-[#E5F5FF] p-6 shadow-2xl md:my-8">
            <button
              type="button"
              onClick={() => setIsDashboardModalOpen(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#B9E6FE] text-[#0080ED] hover:bg-[#A8DFFE]"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-4 text-center font-[Inter] text-lg font-bold text-[#0080ED]">Your dashboard</h3>
            <div className="space-y-3 rounded-[8px] bg-white p-4 font-[Inter] text-sm">
              <p>
                <span className="font-semibold">Wallet:</span>{' '}
                {accountData?.address
                  ? `${accountData.address.slice(0, 10)}...${accountData.address.slice(-8)}`
                  : '—'}
              </p>
              <p>
                <span className="font-semibold">PREDICT received:</span> {userStats.tokenAwarded.toFixed(4)}
              </p>
              <p>
                <span className="font-semibold">Your contribution (USD):</span>{' '}
                {userStats.totalContribution.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}



      {renderModal(isQrModalOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto bg-black/50 p-4 md:items-center md:p-6 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsQrModalOpen(false)
          }}
        >
          <div className="relative my-4 w-full max-w-[400px] rounded-[14px] bg-white p-4 shadow-2xl md:my-8">
            <button
              type="button"
              onClick={() => setIsQrModalOpen(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-2 text-center text-[20px] font-semibold text-black">Buy Token</h3>
            <p className="mb-3 rounded-[8px] border border-gray-200 bg-[#f9f9f9] p-2 text-center text-[13px] leading-[1.3] text-gray-700">
              Send {Number(paymentTokenValue || 0).toLocaleString('en-US', { maximumFractionDigits: 6 })}{' '}
              <span className="font-semibold">
                {selectedPaymentOption.name} {selectedPaymentOption.network}
              </span>{' '}
              to the address below to get{' '}
              <span className="font-semibold text-[#0080ED]">
                {receiveAmount.toLocaleString('en-US', { maximumFractionDigits: 2 })} PREDICT
              </span>
            </p>
            <div className="mb-2 text-center text-[13px] font-semibold text-gray-800">
              {selectedPaymentOption.name} Wallet Address ({selectedPaymentOption.network})
            </div>
            <div className="mb-2 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setQrTargetWallet('universal')}
                className={`rounded-[6px] px-3 py-1 text-[11px] font-semibold ${qrTargetWallet === 'universal' ? 'bg-[#0080ED] text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Universal
              </button>
              <button
                type="button"
                onClick={() => setQrTargetWallet('trust')}
                className={`rounded-[6px] px-3 py-1 text-[11px] font-semibold ${qrTargetWallet === 'trust' ? 'bg-[#0080ED] text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                Trust Wallet
              </button>
              <button
                type="button"
                onClick={() => setQrTargetWallet('metamask')}
                className={`rounded-[6px] px-3 py-1 text-[11px] font-semibold ${qrTargetWallet === 'metamask' ? 'bg-[#0080ED] text-white' : 'bg-gray-100 text-gray-700'}`}
              >
                MetaMask
              </button>
            </div>
            <div className="mb-2 flex justify-center">
              <div className="rounded-[10px] border border-gray-200 bg-white p-2">
                {qrCodeValue ? (
                  <img src={qrCodeValue} alt="Payment QR code" className="h-[180px] w-[180px] md:h-[200px] md:w-[200px]" />
                ) : (
                  <div className="flex h-[180px] w-[180px] items-center justify-center text-gray-500 md:h-[200px] md:w-[200px]">No QR</div>
                )}
              </div>
            </div>
            <p className="mb-2 text-center text-[12px] text-gray-500">
              Scan in {qrTargetWallet === 'universal' ? 'any compatible wallet' : qrTargetWallet === 'trust' ? 'Trust Wallet' : 'MetaMask'} or copy the address
            </p>
            <div className="mb-2 flex items-center gap-2 rounded-[8px] border border-gray-200 bg-[#f5f5f5] px-2 py-1.5">
              <input
                readOnly
                value={qrWalletAddress || ''}
                className="w-full bg-transparent text-[12px] text-gray-700 outline-none"
              />
              <button type="button" onClick={copyQrWalletAddress} className="text-gray-500 hover:text-gray-700">
                <Copy className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-2 rounded-[6px] border border-[#E1C981] bg-[#FFF7DF] px-2 py-1.5 text-[11px] text-[#856404]">
              Only send {selectedPaymentOption.name} on the {selectedPaymentOption.network} blockchain.
            </div>
            <button
              type="button"
              onClick={openSelectedWalletApp}
              className="mb-2 flex w-full items-center justify-center gap-2 rounded-[8px] border border-[#0080ED] bg-white py-2 text-[13px] font-semibold text-[#0080ED] hover:bg-[#eef6ff]"
            >
              Open in {qrTargetWallet === 'universal' ? 'Wallet App' : qrTargetWallet === 'trust' ? 'Trust Wallet' : 'MetaMask'}
            </button>
            <button
              type="button"
              onClick={copyQrWalletAddress}
              className="mb-2 flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#0080ED] py-2 text-[13px] font-semibold text-white hover:bg-[#006dcc]"
            >
              <Copy className="h-4 w-4" />
              Copy the wallet address
            </button>
            <ol className="list-decimal space-y-0.5 pl-5 text-[10px] leading-[1.35] text-gray-600">
              <li>Tokens and bonuses are credited automatically after payment confirmation.</li>
              <li>Connect the same wallet in Predict to track dashboard and history.</li>
              <li>Any amount sent to this address is matched to your selected network.</li>
            </ol>
          </div>
        </div>
      ))}

      {renderModal(isHistoryModalOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto bg-black/50 p-4 md:items-center md:p-6 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsHistoryModalOpen(false)
          }}
        >
          <div className="relative my-4 max-h-[calc(100vh-32px)] w-full max-w-[500px] overflow-y-auto rounded-[15px] border border-gray-200 bg-white p-6 shadow-2xl md:my-8 md:max-h-[calc(100vh-64px)]">
            <button
              type="button"
              onClick={() => setIsHistoryModalOpen(false)}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="mb-4 font-[Inter] text-lg font-bold">Transaction history</h3>
            {!walletAddress ? (
              <p className="text-sm text-gray-600">Connect your wallet to see history.</p>
            ) : historyItems.length === 0 ? (
              <p className="text-sm text-gray-600">No transactions yet.</p>
            ) : (
              <ul className="space-y-2 text-sm">
                {historyItems.map((h, i) => (
                  <li key={i} className="flex justify-between border-b border-gray-100 py-2">
                    <span>{h.tokenType}</span>
                    <span>${h.amountInUSD?.toFixed?.(2) ?? h.amountInUSD}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
