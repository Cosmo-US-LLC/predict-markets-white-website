/**
 * Fetch ETH and BNB prices in USD from CoinGecko (no API key required).
 * Used for payment token conversion on the Buy page.
 */
const COINGECKO_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum,binancecoin&vs_currencies=usd'

export async function fetchEthBnbPrices() {
  try {
    const res = await fetch(COINGECKO_URL)
    const data = await res.json()
    return {
      ethPrice: Number(data?.ethereum?.usd) || 0,
      bnbPrice: Number(data?.binancecoin?.usd) || 0,
    }
  } catch (err) {
    console.error('CoinGecko ETH/BNB fetch failed:', err)
    return { ethPrice: 0, bnbPrice: 0 }
  }
}
