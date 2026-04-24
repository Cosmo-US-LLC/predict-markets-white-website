import { useEffect } from 'react'
import { PresaleBuyWidget } from './PresaleBuyWidget'
import { loadStoredConnection } from '../../presale-gg/web3/connections'

export function PresaleBuyWidgetSection({ className = '' }) {
  return (
    <div className={className}>
      <PresaleBuyWidget />
    </div>
  )
}
