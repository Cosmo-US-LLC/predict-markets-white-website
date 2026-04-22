import { useEffect } from 'react'
import { PresaleBuyWidget } from './PresaleBuyWidget.jsx'
import { loadStoredConnection } from '../../presale-gg/web3/connections.js'

export function PresaleBuyWidgetSection({ className = '' }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('predict-connect-wallet-id')) {
      loadStoredConnection()
    }
  }, [])

  return (
    <div className={className}>
      <PresaleBuyWidget />
    </div>
  )
}
