import stepDashboardVisual from "../assets/images/how_to_buy/step4_product.webp";
import walletVisual from "../assets/images/how_to_buy/step5_claim.webp";

export const howToBuyPageIntro = {
  badgeLeft: "First Hold-To-Earn Token",
  badgeRight: "Built on Ethereum",
  title: "How To Buy Predict Markets ($PREDICT)",
  subtitle:
    "Follow this simple step-by-step guide to secure your $PREDICT tokens and unlock daily crypto rewards. Whether you're paying with crypto or card, everything you need is outlined below.",
};

export const howToBuyPageCta = {
  caption: "Ready when you are — open the presale to connect and buy.",
  buttonText: "Go to Buy $PREDICT",
  to: "/buy",
};

export const walletTableRows = [
  {
    platform: "Desktop",
    option: "MetaMask (Chrome or Firefox extension)",
  },
  {
    platform: "Mobile",
    option: "Trust Wallet, Coinbase Wallet, MetaMask",
  },
  {
    platform: "Any Device",
    option: "WalletConnect-compatible apps",
  },
];

/** Matches Figma Step 2 top row (~11 ticker tiles before “More”). */
export const cryptoTickerSymbols = [
  "ETH",
  "BNB",
  "TRX",
  "BTC",
  "DOGE",
  "SOL",
  "XRP",
  "TON",
  "ADA",
  "LTC",
  "USDC",
];

export const step1 = {
  stepLabel: "Step 1",
  title: "Set up a Wallet",
  body:
    "Before you purchase $PREDICT, make sure you're using a decentralised crypto wallet. This ensures your tokens are properly linked to your wallet address and your rewards are activated.",
  /** Rich text suffix after blue “Note:” label (matches Figma). */
  noteAfterLabel:
    " Do not use centralized exchange wallets (e.g., Binance, Coinbase main app) — they won't display your tokens or rewards",
};

export const step2 = {
  stepLabel: "Step 2",
  title: "Select Payment Method",
  subtitle: "Choose from the following supported options:",
};

export const fiatPayBadges = [
  { id: "gpay", label: "G Pay" },
  { id: "mastercard", label: "Mastercard" },
  { id: "visa", label: "VISA" },
];

export const step2Panels = [
  {
    heading: "Enter the amount of $PREDICT you want to buy.",
    mockPayLabel: "Amount You Pay in USDT",
    mockPayExample: "1000",
    mockReceivePrimary: "You Receive $PREDICT",
    mockReceiveAmount: "6,123,135",
  },
  {
    heading: "Select your preferred currency or card option.",
    showBuyWithCard: true,
    pickerRow1: ["ETH / ERC-20", "BNB / BEP-20", "USDT / ERC-20"],
    pickerRow2: ["BTC", "SOL", "More"],
  },
  {
    heading: 'Click "Buy $PREDICT".',
    mockPayLabel: "Amount You Pay in USDT",
    mockPayExample: "1000",
    mockReceivePrimary: "You Receive $PREDICT",
    mockReceiveAmount: "6,123,135",
    showCta: true,
    ctaText: "BUY $PREDICT",
  },
];

export const step3 = {
  stepLabel: "Step 3",
  title: "Confirm Transaction",
  items: [
    {
      num: "1.",
      text: 'After clicking "Buy Now", a unique wallet address will be generated.',
    },
    {
      num: "2.",
      text: "Send the exact amount of your chosen crypto to that address.",
    },
    {
      num: "3.",
      text: "Approve the transaction through your wallet (MetaMask, Trust Wallet, etc.).",
    },
  ],
};

export const step4 = {
  stepLabel: "Step 4",
  title: "View Your PredictMarket Coins",
  lead: "Once your payment is confirmed:",
  bullets: [
    "Daily PredictMarkets staking rewards will be added to your dashboard.",
    "USDT (ERC-20) payouts are sent to your wallet every Monday.",
    "You can view all rewards and transactions via your PredictMarkets dashboard.",
  ],
  visual: stepDashboardVisual,
  visualAlt: "PredictMarkets dashboard preview",
};

export const step5 = {
  stepLabel: "STEP 5",
  title: "Claim",
  lead: "After the presale ends:",
  bullets: [
    "Your PredictMarkets tokens will be claimable in your dashboard with one click.",
    "Thank you for being part of the PredictMarkets journey.",
  ],
  visual: walletVisual,
  visualAlt: "Wallet and coins illustration",
};

export const step6 = {
  stepLabel: "STEP 6",
  title: "Launch",
  lead: "After the presale ends:",
  bullets: [
    "PredictMarkets will officially launch on multiple top-tier exchanges after the presale concludes.",
    "Stay updated via our website and social channels for listing announcements.",
  ],
  headlineCard: {
    title: "PredictMarkets Launches On Multiple Top-Tier Exchanges",
  },
};
