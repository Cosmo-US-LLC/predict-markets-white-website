import step1Image from "../assets/images/home/how_to_buy/how_to_buy_card1.webp";
import step2Image from "../assets/images/home/how_to_buy/how_to_buy_card2.webp";
import step3Image from "../assets/images/home/how_to_buy/how_to_buy_card3.webp";
import step4Image from "../assets/images/home/how_to_buy/how_to_buy_card4.webp";

export const howToBuySteps = [
  {
    id: 'step-1',
    stepNumber: 'Step 1',
    title: 'Visit the Official Website',
    description: 'Go to the official PredictMarkets.io website and click on the join\nthe presale button. Always make sure you are using the official\nlink before purchasing $PREDICT.',
    image: step1Image,
  },
  {
    id: 'step-2',
    stepNumber: 'Step 2',
    title: 'Connect Your Wallet',
    description: 'Connect your wallet with walletconnect option.',
    image: step2Image,
  },
  {
    id: 'step-3',
    stepNumber: 'Step 3',
    title: 'Choose Payment Currency',
    description: 'Choose your payment method in crypto (BTC, ETH, USDT, card, etc.), set the amount, click Buy Now, and confirm the purchase\nin your wallet',
    image: step3Image,
  },
  {
    id: 'step-4',
    stepNumber: 'Step 4',
    title: 'Claim Tokens',
    description: 'Congratulations! Your $PREDICT tokens will appear in your dashboard balance and can be claimed with one click after\nthe presale ends.',
    image: step4Image,
  },
];

export const howToBuyConfig = {
  title: 'How to Buy',
  subtitle: 'Follow the guide below to purchase $PREDICT during the presale. The process supports both crypto and card payments and is designed to be quick, secure, and easy to follow.',
  buyButtonText: 'BUY $PREDICT',
  buyButtonLink: '/buy',
};