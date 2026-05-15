import browserMockEthLarge from "../assets/images/how_to_buy/figma/browser_mock_eth_large.png";
import browserMockEthSmall from "../assets/images/how_to_buy/figma/browser_mock_eth_small.png";
import browserMockWarning from "../assets/images/how_to_buy/figma/browser_mock_warning.png";
import heroCoins from "../assets/images/how_to_buy/figma/hero_coins.webp";
import heroCoinsMobile from "../assets/images/how_to_buy/figma/hero_coins_mobile.webp";
import heroEthBadge from "../assets/images/how_to_buy/figma/hero_eth_badge.svg";
import payGpay from "../assets/images/how_to_buy/figma/pay_gpay.webp";
import payMastercard from "../assets/images/how_to_buy/figma/pay_mastercard.webp";
import payVisa from "../assets/images/how_to_buy/figma/pay_visa.webp";
import stepSectionEllipse from "../assets/images/how_to_buy/figma/step_section_ellipse.webp";
import walletCoinbase from "../assets/images/how_to_buy/figma/wallet_coinbase.webp";
import walletMetamask from "../assets/images/how_to_buy/figma/wallet_metamask.webp";
import walletPhantom from "../assets/images/how_to_buy/figma/wallet_phantom.webp";
import walletTrust from "../assets/images/how_to_buy/figma/wallet_trust.webp";
import walletWalletconnect from "../assets/images/how_to_buy/figma/wallet_walletconnect.webp";

export const howToBuyHeroCoins = heroCoins;
export const howToBuyHeroCoinsMobile = heroCoinsMobile;
export const howToBuyHeroEthIcon = heroEthBadge;

export const howToBuyStepBgEllipse = stepSectionEllipse;

export const howToBuyWalletLogos = [
  { id: "metamask", alt: "MetaMask", src: walletMetamask },
  { id: "coinbase", alt: "Coinbase", src: walletCoinbase },
  { id: "trust", alt: "Trust Wallet", src: walletTrust },
  { id: "phantom", alt: "Phantom", src: walletPhantom },
  { id: "walletconnect", alt: "WalletConnect", src: walletWalletconnect },
];

/** Step 3 browser mock */
export const howToBuyEthIconLarge = browserMockEthLarge;
export const howToBuyWarningIcon = browserMockWarning;
export const howToBuyEthIconSmall = browserMockEthSmall;

/**
 * Step 2 — crypto icon URLs from Figma (remote, valid for 7 days from generation).
 * Each is a 31×31 coin icon rendered in a 60×54 bordered tile.
 */
export const step2CryptoIcons = [
  { id: "eth",  sym: "ETH",  sub: "ERC-20",  src: "https://www.figma.com/api/mcp/asset/0a1a0ce5-f3dc-4023-9dfc-3703063fd48e" },
  { id: "bnb",  sym: "BNB",  sub: "BEP-20",  src: "https://www.figma.com/api/mcp/asset/5f04055f-76bb-444d-b12f-dba634204277" },
  { id: "trx",  sym: "TRX",  sub: "TRON",    src: "https://www.figma.com/api/mcp/asset/0749525c-bc70-4007-8b26-dff2b2e65a75" },
  { id: "btc",  sym: "BTC",  sub: "BITCOIN", src: "https://www.figma.com/api/mcp/asset/27adf83a-9207-4198-9ea7-6a85086675e6" },
  { id: "doge", sym: "DOGE", sub: "DOGE",    src: "https://www.figma.com/api/mcp/asset/ac7fe89b-b887-40a3-95ce-217df6fe9520" },
  { id: "sol",  sym: "SOL",  sub: "SOLANA",  src: "https://www.figma.com/api/mcp/asset/a2293384-c2fd-4aff-baee-b10a10f621e7" },
  { id: "xrp",  sym: "XRP",  sub: "XRP",     src: "https://www.figma.com/api/mcp/asset/731dfed5-ced0-4d5c-8003-ca11f5f86c05" },
  { id: "ton",  sym: "TON",  sub: "TON",     src: "https://www.figma.com/api/mcp/asset/ed82ffcc-e56a-4c77-a073-ce63adbb38ac" },
  { id: "ada",  sym: "ADA",  sub: "CARDANO", src: "https://www.figma.com/api/mcp/asset/e33394b7-f4bf-4651-8860-e9c392651ba3" },
  { id: "ltc",  sym: "LTC",  sub: "LITECOIN",src: "https://www.figma.com/api/mcp/asset/91375b48-32f8-40be-8a2f-c4dbddefd972" },
  { id: "usdc", sym: "USDC", sub: "ERC-20",  src: "https://www.figma.com/api/mcp/asset/92336221-34d6-4509-bf0b-90ec23637cf1" },
];

/** Step 2 payment method logos */
export const step2PaymentLogos = [
  { id: "gpay",       alt: "Google Pay",  src: payGpay },
  { id: "mastercard", alt: "Mastercard",  src: payMastercard },
  { id: "visa",       alt: "Visa",        src: payVisa },
];

/** Step 2 picker — coin icons for picker panel */
export const step2PickerEth  = "https://www.figma.com/api/mcp/asset/03d4e539-44b4-44bd-b73c-4ed721a68f90";
export const step2PickerBnb  = "https://www.figma.com/api/mcp/asset/45e19067-85ee-430c-92a0-586f9a3dfdc3";
export const step2PickerBtc  = "https://www.figma.com/api/mcp/asset/949a38e8-d414-47e3-b506-97d48a910953";
export const step2PickerSol  = "https://www.figma.com/api/mcp/asset/f34d2403-9cc5-4f90-89b3-48b07c5abf17";
export const step2PickerUsdt = "https://www.figma.com/api/mcp/asset/b9dd8584-7b47-4d37-97de-4c5233b33fb3";
export const step2ArrowDown  = "https://www.figma.com/api/mcp/asset/318f5c7b-1a76-41f6-8261-a96b6e69eff4";

/** Step 6 — exchange logos from Figma */
export const step6ExchangeLogos = {
  uniswap:    "https://www.figma.com/api/mcp/asset/971660a4-6313-4e33-9f87-f90dbd46126e",
  pancakeswap:"https://www.figma.com/api/mcp/asset/8b39ed48-301a-40a1-a96f-41e869161afb",
  fluid:      "https://www.figma.com/api/mcp/asset/a513d833-421c-4420-bed5-fa0caf52b3bb",
  curve:      "https://www.figma.com/api/mcp/asset/e37c8f8d-7325-473d-a218-dfdc2585ea02",
  aerodrome:  "https://www.figma.com/api/mcp/asset/a735da26-a911-4c23-9fcf-d8d6813731d2",
};
