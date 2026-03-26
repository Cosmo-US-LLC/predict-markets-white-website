import { walletConnectModal } from '../lib/web3/connections.js'

export function showConnectionModal() {
  walletConnectModal.open()
}

export function closeConnectionModal() {
  // AppKit manages modal state; kept for API compatibility
}
