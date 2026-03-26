import { http } from 'wagmi'
import { mainnet, bsc } from '@reown/appkit/networks'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { metaMask, walletConnect, coinbaseWallet } from '@wagmi/connectors'
import { createAppKit } from '@reown/appkit'
import { WALLET_CONNECT_PROJECT_ID } from '../config.js'

const metadata = {
  name: 'Predict',
  description: 'Predict - Decentralised Prediction Platform',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  icons: [typeof window !== 'undefined' ? `${window.location.origin}/favicon.svg` : ''],
}

// Singleton to avoid "WalletConnect Core is already initialized" when module
// is re-evaluated (HMR) or app remounts (React Strict Mode)
const SETUP_KEY = '__predict_wallet_setup__'
function getSetup() {
  if (typeof globalThis !== 'undefined' && globalThis[SETUP_KEY]) return globalThis[SETUP_KEY]
  const connectors = [
    metaMask(),
    walletConnect({ projectId: WALLET_CONNECT_PROJECT_ID, metadata }),
    coinbaseWallet({
      appName: 'Predict',
      appLogoUrl: typeof window !== 'undefined' ? `${window.location.origin}/favicon.svg` : '',
    }),
  ]
  const wagmiAdapter = new WagmiAdapter({
    transports: { [mainnet.id]: http(), [bsc.id]: http() },
    connectors,
    networks: [mainnet, bsc],
    chains: [mainnet, bsc],
    projectId: WALLET_CONNECT_PROJECT_ID,
  })
  const walletConnectModal = createAppKit({
    adapters: [wagmiAdapter],
    projectId: WALLET_CONNECT_PROJECT_ID,
    networks: [mainnet, bsc],
    metadata,
    themeMode: 'dark',
  })
  const setup = { connectors, wagmiAdapter, config: wagmiAdapter.wagmiConfig, walletConnectModal }
  if (typeof globalThis !== 'undefined') globalThis[SETUP_KEY] = setup
  return setup
}

const setup = getSetup()
export const connectors = setup.connectors
export const wagmiAdapter = setup.wagmiAdapter
export const config = setup.config
export const walletConnectModal = setup.walletConnectModal

/** Resolves the injected MetaMask connector from wagmi config (id is usually `metaMaskSDK`). */
export function getMetaMaskConnector() {
  return (
    config.connectors.find(
      (c) =>
        c.id === 'metaMaskSDK' ||
        c.id === 'io.metamask' ||
        (typeof c.name === 'string' && c.name.toLowerCase() === 'metamask'),
    ) ?? null
  )
}

/**
 * Opens MetaMask directly (no AppKit modal). User must authorize accounts.
 * @returns {Promise<import('@wagmi/core').ConnectReturnType>}
 */
export async function connectWithMetaMask() {
  const connector = getMetaMaskConnector()
  if (!connector) {
    throw new Error('MetaMask connector not available')
  }
  const { connect } = await import('@wagmi/core')
  return connect(config, { connector })
}

const localWalletConnectedKey = 'predict-connect-wallet-id'

export const loadStoredConnection = () => {
  if (typeof window === 'undefined') return
  const connectedConnection = localStorage.getItem(localWalletConnectedKey)
  if (!connectedConnection) return
  const connector = config.connectors.find((c) => c.id === connectedConnection)
  if (!connector) return
  import('@wagmi/core').then(({ connect }) => {
    connect(config, { connector })
  })
}

if (typeof window !== 'undefined') {
  import('@wagmi/core').then(({ watchConnections, watchAccount }) => {
    watchConnections(config, {
      onChange: (connections) => {
        if (connections.length === 0) {
          localStorage.removeItem(localWalletConnectedKey)
        } else {
          localStorage.setItem(localWalletConnectedKey, connections[0].connector.id)
        }
      },
    })
    watchAccount(config, {
      onChange: (accounts) => {
        if (!accounts.isConnected) {
          localStorage.removeItem(localWalletConnectedKey)
        }
      },
    })
  })
}
