import Parse from 'parse'
import {
  PARSE_SERVER_URL,
  PARSE_APP_ID,
  PROJECT_NAME,
  getPredictConfig,
  setCachedWalletConfig,
} from './config.js'

Parse.initialize(PARSE_APP_ID)
Parse.serverURL = PARSE_SERVER_URL

/** Fetch PREDICT wallet config from Parse and cache it for getPredictConfig */
export async function fetchPredictConfigFromParse() {
  const configs = await getWalletConfig()
  const eth = configs.find((c) => c.network?.includes('ETH'))
  const bsc = configs.find((c) => c.network?.includes('BSC') || c.network?.includes('BNB'))
  if (eth || bsc) {
    const ethWallet = eth?.walletAddress ?? null
    const bscWallet = bsc?.walletAddress ?? null
    const transactionClassETH = eth?.transactionClassName ?? null
    const transactionClassBSC = bsc?.transactionClassName ?? null
    setCachedWalletConfig({
      ethWallet: ethWallet ?? '0x0000000000000000000000000000000000000000',
      bscWallet: bscWallet ?? '0x0000000000000000000000000000000000000000',
      transactionClassETH,
      transactionClassBSC,
    })
  }
}

/**
 * Fetch current token price for PREDICT from Parse TokenPrice.
 * Queries by projectName; uses first wallet from WalletConfig if needed.
 */
export async function getCurrentPrice() {
  const query = new Parse.Query('TokenPrice')
  query.equalTo('projectName', PROJECT_NAME)
  query.descending('createdAt')
  const result = await query.first()
  if (!result) return { price: 0, marketCap: 0, listingPrice: null, walletAddress: null }
  const listingRaw =
    result.get('listingPrice') ??
    result.get('listing_price') ??
    result.get('publicListingPrice') ??
    null
  const listingNum = listingRaw != null ? Number(listingRaw) : NaN
  const listingPrice = Number.isFinite(listingNum) ? listingNum : null
  return {
    price: result.get('price') ?? 0,
    marketCap: result.get('marketCap') ?? 0,
    listingPrice,
    walletAddress: result.get('walletAddress'),
  }
}

/**
 * Fetch current bonus percentage from Parse TokenBonus.
 */
export async function getCurrentBonus() {
  const query = new Parse.Query('TokenBonus')
  query.equalTo('projectName', PROJECT_NAME)
  query.descending('createdAt')
  const result = await query.first()
  if (!result) return 0
  return result.get('bonusPercentage') ?? 0
}

/**
 * Fetch WalletConfig for PREDICT to get wallet addresses and transaction classes.
 */
export async function getWalletConfig() {
  const query = new Parse.Query('WalletConfig')
  query.equalTo('projectName', PROJECT_NAME)
  query.equalTo('isActive', true)
  const configs = await query.find()
  return configs.map((c) => ({
    walletAddress: c.get('walletAddress'),
    network: c.get('network'),
    transactionClassName: c.get('transactionClassName'),
  }))
}

/**
 * Fetch user contribution stats from Transaction classes.
 */
export async function getUserStats(walletAddress) {
  if (!walletAddress) return { totalContribution: 0, totalContributionAll: 0, tokenAwarded: 0, bonusTokens: 0 }
  const addr = walletAddress.toLowerCase()
  const config = getPredictConfig()
  const classes = [config.transactionClassBSC, config.transactionClassETH].filter(Boolean)
  if (classes.length === 0) return { totalContribution: 0, totalContributionAll: 0, tokenAwarded: 0, bonusTokens: 0 }

  let totalContrib = 0
  let totalContribAll = 0
  let totalTokens = 0
  let totalBonus = 0

  for (const className of classes) {
    const query = new Parse.Query(className)
    const txs = await query.find()
    txs.forEach((tx) => {
      const amt = tx.get('amountInUSD') || 0
      totalContribAll += amt
      if ((tx.get('contributor') || '').toLowerCase() === addr) {
        totalContrib += amt
        totalTokens += tx.get('baseTokens') || 0
        totalBonus += tx.get('bonusTokens') || 0
      }
    })
  }

  return {
    totalContribution: totalContrib,
    totalContributionAll: totalContribAll,
    tokenAwarded: totalTokens,
    bonusTokens: totalBonus,
  }
}

/**
 * Fetch transaction history for user from Parse.
 */
export async function getTransactionHistory(walletAddress, limit = 50) {
  if (!walletAddress) return []
  const addr = walletAddress.toLowerCase()
  const config = getPredictConfig()
  const classes = [config.transactionClassBSC, config.transactionClassETH].filter(Boolean)
  const items = []

  for (const className of classes) {
    const query = new Parse.Query(className)
    query.equalTo('contributor', addr)
    query.descending('createdAt')
    query.limit(limit)
    const txs = await query.find()
    txs.forEach((tx) => {
      items.push({
        amountInUSD: tx.get('amountInUSD') ?? 0,
        baseTokens: tx.get('baseTokens') ?? 0,
        bonusTokens: tx.get('bonusTokens') ?? 0,
        tokenType: tx.get('tokenType') ?? 'ETH',
        createdAt: tx.get('createdAt'),
      })
    })
  }

  items.sort((a, b) => (b.createdAt?.getTime?.() ?? 0) - (a.createdAt?.getTime?.() ?? 0))
  return items.slice(0, limit)
}
