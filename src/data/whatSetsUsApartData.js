const checkIcon = 'https://www.figma.com/api/mcp/asset/98735592-09d4-488c-898c-9230ff86e5ca';
const crossIcon = 'https://www.figma.com/api/mcp/asset/9a5df82e-e46b-4c7b-9ed9-c308db3ff115';

import predictMarketsIcon from "../assets/images/home/set_as_apart/cardIcon1.svg";
import polyMarketIcon from "../assets/images/home/set_as_apart/cardIcon2.svg";
import kalshiIcon from "../assets/images/home/set_as_apart/cardIcon3.svg";

export const comparisonTableData = [
  {
    id: 'token-name',
    feature: 'Token Name',
    predictMarkets: '$PREDICT',
    polyMarket: '-',
    kalshi: '-',
  },
  {
    id: 'company-value',
    feature: 'Company Value',
    predictMarkets: 'TBA',
    polyMarket: '$8 Billion',
    kalshi: '$11 Billion',
  },
  {
    id: 'trading-volume',
    feature: 'Trading Volume',
    predictMarkets: 'TBA',
    polyMarket: '$26.3 Billion',
    kalshi: '$50 Billion',
  },
  {
    id: 'prediction-markets',
    feature: 'Prediction Markets',
    predictMarkets: true,
    polyMarket: true,
    kalshi: true,
  },
  {
    id: 'real-time-pricing',
    feature: 'Real-time Pricing',
    predictMarkets: true,
    polyMarket: true,
    kalshi: true,
  },
  {
    id: 'on-chain-settlement',
    feature: 'On-chain Settlement',
    predictMarkets: true,
    polyMarket: true,
    kalshi: false,
  },
  {
    id: 'revenue-sharing',
    feature: 'Revenue Sharing',
    predictMarkets: true,
    polyMarket: false,
    kalshi: false,
  },
  {
    id: 'native-platform-token',
    feature: 'Native Platform Token',
    predictMarkets: true,
    polyMarket: false,
    kalshi: false,
  },
  {
    id: 'cash-back',
    feature: 'Cash Back',
    predictMarkets: true,
    polyMarket: false,
    kalshi: false,
  },
  {
    id: 'hold-to-earn',
    feature: 'Hold-to-Earn',
    predictMarkets: true,
    polyMarket: false,
    kalshi: false,
  },
];

export const whatSetsUsApartConfig = {
  title: 'What Sets Us Apart',
  description: 'Prediction markets are growing fast because of their communities. That\'s why our principle is simple: the community should benefit from the platform\'s growth, not just the company behind it. PredictMarkets is built to be the most rewarding place where you can predict events and earn from the ecosystem at the same time.',
  platforms: {
    predictMarkets: {
      name: 'PredictMarkets',
      icon: predictMarketsIcon,
    },
    polyMarket: {
      name: 'PolyMarket',
      icon: polyMarketIcon,
    },
    kalshi: {
      name: 'Kalshi',
      icon: kalshiIcon,
    },
  },
  icons: {
    check: checkIcon,
    cross: crossIcon,
  },
};