import marketIcon1 from "../assets/images/home/markets/market_icon_1.svg";
import marketIcon2 from "../assets/images/home/markets/market_icon_2.svg";
import marketIcon3 from "../assets/images/home/markets/market_icon_3.svg";
import marketIcon4 from "../assets/images/home/markets/market_icon_4.svg";
import marketIcon5 from "../assets/images/home/markets/market_icon_5.svg";
import marketIcon6 from "../assets/images/home/markets/market_icon_6.svg";
import marketIcon7 from "../assets/images/home/markets/market_icon_7.svg";
// Market card images
import cryptoImage from "../assets/images/home/markets/markets_image_1.webp";
import politicsImage from "../assets/images/home/markets/markets_image_2.webp";
import economyImage from "../assets/images/home/markets/markets_image_3.webp";
import sportsImage from "../assets/images/home/markets/markets_image_4.webp";
import trendingImage from "../assets/images/home/markets/markets_image_5.webp";
import techImage from "../assets/images/home/markets/markets_image_6.webp";
import cultureImage from "../assets/images/home/markets/markets_image_7.webp";


export const marketsData = [
  {
    id: 1,
    title: "Cryptocurrency",
    description: "Forecasts covering major digital assets like Bitcoin and ETH, leading altcoins, DeFi, Layer 2 ecosystems, and key news across the entire crypto market.",
    image: cryptoImage,
    iconBackground: marketIcon1,
    // iconImage: marketIcon1,
    link: "/markets/crypto",
  },
  {
    id: 2,
    title: "Politics",
    description: "Elections, changes in leadership, major policy decisions, and global events influencing governments around the world.",
    image: politicsImage,
    iconBackground: marketIcon2,
    // iconImage: marketIcon2,
    link: "/markets/politics",
  },
  {
    id: 3,
    title: "Global Economy",
    description: "Inflation trends, interest rate decisions, growth metrics, and labour data shaping global markets and policy.",
    image: economyImage,
    iconBackground: marketIcon3,
    // iconImage: marketIcon3,
    link: "/markets/economy",
  },
  {
    id: 4,
    title: "Sports",
    description: "Championship winners, match results, and standout players across soccer, football, hockey, basketball, tennis, combat sports, esports, and racing.",
    image: sportsImage,
    iconBackground: marketIcon4,
    // iconImage: marketIcon4,
    link: "/markets/sports",
  },
  {
    id: 5,
    title: "Trending News",
    description: "Prediction markets focused on the most talked-about events shaping global attention right now.",
    image: trendingImage,
    iconBackground: marketIcon5,
    // iconImage: marketIcon5,
    link: "/markets/trending",
  },
  {
    id: 6,
    title: "Technology",
    description: "AI advances, hardware and product launches, major tech earnings, and the milestones shaping the tech industry.",
    image: techImage,
    iconBackground: marketIcon6,
    // iconImage: marketIcon6,
    link: "/markets/tech",
  },
  {
    id: 7,
    title: "Culture",
    description: "Entertainment, cultural figures, and trends shaping media, style, and public attention.",
    image: cultureImage,
    iconBackground: marketIcon7,
    // iconImage: marketIcon7,
    link: "/markets/culture",
  },
];

export const marketsConfig = {
  title: "Markets",
};