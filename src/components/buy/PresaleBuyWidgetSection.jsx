import { useEffect, useState, useCallback } from 'react'
import { PresaleBuyWidget } from './PresaleBuyWidget.jsx'
import { fetchEthBnbPrices } from '../../lib/coingecko.js'
import { getCurrentPrice, fetchPredictConfigFromParse } from '../../lib/parse.js'
import { loadStoredConnection } from '../../lib/web3/connections.js'

/**
 * Loads Parse config + ETH/BNB prices and renders the live presale buy widget.
 * Use on `/buy` and on the home hero (`#wallet`) so the dashboard matches the dedicated buy page.
 */
export function PresaleBuyWidgetSection({ className = '' }) {
  const [priceData, setPriceData] = useState(null)
  const [paymentPrices, setPaymentPrices] = useState({ ethPrice: 0, bnbPrice: 0 })
  const [loading, setLoading] = useState(true)

  const refresh = useCallback(async () => {
    const [predict, prices] = await Promise.all([
      getCurrentPrice(),
      fetchEthBnbPrices(),
    ])
    setPriceData(predict)
    setPaymentPrices(prices)
  }, [])

  useEffect(() => {
    const init = async () => {
      try {
        await fetchPredictConfigFromParse()
        await refresh()
      } catch (err) {
        console.error('Failed to load config/price:', err)
        setPriceData({ price: 0, marketCap: 0 })
      } finally {
        setLoading(false)
      }
    }
    init()
    const interval = setInterval(() => {
      fetchEthBnbPrices().then(setPaymentPrices)
    }, 60 * 1000)
    return () => clearInterval(interval)
  }, [refresh])

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('predict-connect-wallet-id')) {
      loadStoredConnection()
    }
  }, [])

  return (
    <div className={className}>
      {loading ? (
        <div className="flex min-h-[200px] items-center justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#0080ED] border-t-transparent" />
        </div>
      ) : (
        <PresaleBuyWidget priceData={priceData} paymentPrices={paymentPrices} onRefresh={refresh} />
      )}
    </div>
  )
}
