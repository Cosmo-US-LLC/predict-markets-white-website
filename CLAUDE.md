# PredictMarkets White Website

## Stack
- **Framework**: Vite + React (SPA)
- **Routing**: React Router v7
- **Styling**: Tailwind CSS 4.x (`@tailwindcss/vite` plugin — no tailwind.config.js)
- **Language**: JavaScript (JSX) + TypeScript
- **UI primitives**: Radix UI (accordion, dialog, tabs, toggle, slot, label)
- **Web3**: Wagmi, TanStack Query, custom presale modal store

## Directory structure
```
src/
  pages/               # Route-level page components
  components/
    layouts/           # Header.jsx, Footer.jsx, Layout.jsx — DO NOT MODIFY
    PageComponents/    # Per-page section components
    ui/                # Shared primitives (button, modal, carousel, sheet)
  data/                # Static content / config data files
  assets/              # Fonts, images, CSS
  presale-gg/          # Web3 integration (wagmi, modal store)
  lib/                 # Utilities (cn, scrollToWallet)
```

## Fonts
- **Headings** (`h1`–`h6`): `Helvetica Neue Medium Extended` — loaded via `@font-face` in `src/index.css`, applied globally
- **Body**: `Inter` variable font

## Colors
- Primary blue: `#0080ED`
- Gradient accent: `#2104FF`
- Background: white `#ffffff`
- Text: black `#000000`

## Container convention
All page content uses:
```
max-w-[1280px] mx-auto px-4 md:px-8
```
(Exception: Header/Footer use their own internal layout)

## Do NOT modify
- `src/components/layouts/Header.jsx`
- `src/components/layouts/Footer.jsx`
- `src/components/layouts/Layout.jsx`

## Web3 modal
To trigger the connect-wallet modal:
```js
import { showConnectWalletModal } from "../presale-gg/stores/modal.store.js"
```
