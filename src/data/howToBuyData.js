import step1Image from "../assets/images/home/how_to_buy/how_to_buy_card4.webp";
import step2Image from "../assets/images/home/how_to_buy/how_to_buy_card3.webp";
import step3Image from "../assets/images/home/how_to_buy/how_to_buy_card2.webp";
import step4Image from "../assets/images/home/how_to_buy/how_to_buy_card1.webp";

export const howToBuySteps = [
  {
    id: 'step-1',
    stepNumber: 'Step 1',
    title: 'Connect Your Wallet',
    description: 'Click Connect Wallet and link your decentralized wallet like MetaMask, Trust Wallet, Phantom, or any other supported \n\ wallet in seconds.',
    image: step1Image,
  },
  {
    id: 'step-2',
    stepNumber: 'Step 2',
    title: 'Choose Payment Currency',
    description: 'Choose your payment method: card or crypto (BTC, ETH, USDT, and more than 10 other cryptocurrencies).',
    image: step2Image,
  },
  {
    id: 'step-3',
    stepNumber: 'Step 3',
    title: 'Confirm the Transaction',
    description: 'Set the amount you want to use to purchase PREDICT, \n\ click Buy Now, and confirm the purchase in your wallet.',
    image: step3Image,
  },
  {
    id: 'step-4',
    stepNumber: 'Step 4',
    title: 'Claim Tokens',
    description: 'Congratulations! Your $PREDICT tokens will appear in your dashboard and can be claimed with one click after the presale ends.',
    image: step4Image,
  },
];

export const howToBuyConfig = {
  title: 'How to Buy',
  subtitle: 'Follow the guide below to purchase $PREDICT during the presale. The process supports both crypto and card payments and is designed to be quick, secure, and easy to follow.',
  buyButtonText: 'BUY $PREDICT',
  buyButtonLink: '#wallet',
};