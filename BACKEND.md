# Presale widget + backend

The **PresaleDashboard** UI (white card, tabs, progress, ETH/BNB/USDT) stays in `src/components/PageComponents/Home/PresaleDashboard.jsx`.

Live data and transactions use the same stack as the `predict` app:

| Feature | Source |
|--------|--------|
| Parse API URL | `src/lib/config.js` + `VITE_PARSE_SERVER_URL` |
| Token price, bonus, wallets | `src/lib/parse.js` → Parse `TokenPrice`, `TokenBonus`, `WalletConfig` |
| ETH/BNB USD rates | `src/lib/coingecko.js` |
| Wallet + send tx | Wagmi + `src/lib/web3/util.js` |

Hook: `src/hooks/usePresaleBackend.js`.

**Local dev:** copy `.env.example` to `.env` and set `VITE_PARSE_SERVER_URL` (e.g. `http://localhost:1337/parse`).

**Netlify:** set `VITE_PARSE_SERVER_URL` to your HTTPS Parse URL, then build.
