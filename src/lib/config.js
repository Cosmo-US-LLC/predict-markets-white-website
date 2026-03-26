/**
 * PREDICT project config for bfx-dashboard (Parse) backend.
 * Production builds always use the droplet; local dev uses .env (VITE_PARSE_SERVER_URL=http://localhost:1337/parse).
 */
const PRODUCTION_PARSE_URL = 'https://152.42.234.160/parse'
const envUrl = import.meta.env?.VITE_PARSE_SERVER_URL
export const PARSE_SERVER_URL =
  import.meta.env?.PROD
    ? (envUrl && !envUrl.includes('localhost') ? envUrl : PRODUCTION_PARSE_URL)
    : (envUrl || PRODUCTION_PARSE_URL)
export const PARSE_APP_ID = 'myAppId'

/** Project name as configured in bfx-dashboard */
export const PROJECT_NAME = 'PREDICT'

/**
 * Wallet addresses for PREDICT (ETH and BSC).
 * Set these when you add the project in bfx-dashboard → Project Settings.
 * Or leave as null to fetch from Parse WalletConfig at runtime.
 */
export const PREDICT_CONFIG = {
  /** ETH mainnet wallet - update when configured, or null to fetch from WalletConfig */
  ethWallet: null,
  /** BSC mainnet wallet - update when configured, or null to fetch from WalletConfig */
  bscWallet: null,
  transactionClassBSC: null,
  transactionClassETH: null,
}

/** Get transaction class names from wallet addresses */
function getTransactionClassName(walletAddress, network) {
  if (!walletAddress || walletAddress === '0x0000000000000000000000000000000000000000') return null
  const hex = walletAddress.replace(/^0x/i, '').substring(0, 6)
  return `Transaction_${hex}_${network}`
}

/** Cached config from WalletConfig - set by fetchPredictConfigFromParse */
let cachedWalletConfig = null

export function setCachedWalletConfig(config) {
  cachedWalletConfig = config
}

export function getPredictConfig() {
  if (cachedWalletConfig) {
    return cachedWalletConfig
  }
  const eth = PREDICT_CONFIG.ethWallet
  const bsc = PREDICT_CONFIG.bscWallet
  return {
    ethWallet: eth ?? '0x0000000000000000000000000000000000000000',
    bscWallet: bsc ?? '0x0000000000000000000000000000000000000000',
    transactionClassBSC: PREDICT_CONFIG.transactionClassBSC ?? getTransactionClassName(bsc, 'BSC'),
    transactionClassETH: PREDICT_CONFIG.transactionClassETH ?? getTransactionClassName(eth, 'ETH'),
  }
}

/** WalletConnect project ID - use your own from https://cloud.walletconnect.com */
export const WALLET_CONNECT_PROJECT_ID = '668eabf1b16f42638563d2240322a4c8'
