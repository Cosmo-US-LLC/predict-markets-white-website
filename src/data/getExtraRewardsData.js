// Images for membership cards (single image per tier)
import cardImage1 from "../assets/images/home/get_extra_rewards/card1.webp";
import cardImage2 from "../assets/images/home/get_extra_rewards/card2.webp";
import cardImage3 from "../assets/images/home/get_extra_rewards/card3.webp";
import cardImage4 from "../assets/images/home/get_extra_rewards/card4.webp";
import cardImage5 from "../assets/images/home/get_extra_rewards/card5.webp";
import cardImage6 from "../assets/images/home/get_extra_rewards/card6.webp";

export const membershipCards = [
  {
    id: 1,
    tier: "Bronze",
    minAmount: 1000,
    cardImage: cardImage5,
    shadowColor: "#b07356",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(73,57,50,0.895) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(136, 104, 89) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "Staking Enabled",
      "10% $PREDICT Bonus",
      "PredictMarkets Credits",
      "USDT Staking Rewards",
      "Founder VIP Access",
    ],
  },
  {
    id: 2,
    tier: "Silver",
    minAmount: 5000,
    cardImage: cardImage4,
    shadowColor: "#a1a1a1",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(50,50,51,0.67) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(197, 197, 197) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "Staking Enabled",
      "20% $PREDICT Bonus",
      "$1,000 PredictMarkets Credits",
      "USDT Staking Rewards",
      "Founder VIP Access",
    ],
  },
  {
    id: 3,
    tier: "Gold",
    minAmount: 10000,
    cardImage: cardImage3,
    shadowColor: "#c99500",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(92,70,17,0.88) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(231, 172, 0) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "Staking Enabled",
      "30% $PREDICT Bonus",
      "$5,000 PredictMarkets Credits",
      "USDT Staking Rewards",
      "Founder VIP Access",
    ],
  },
  {
    id: 4,
    tier: "Platinum",
    minAmount: 25000,
    cardImage: cardImage1,
    shadowColor: "#504cc2",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(16,9,73,0.75) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(33, 4, 255) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "Staking Enabled",
      "40% $PREDICT Bonus",
      "$10,000 PredictMarkets Credits",
      "USDT Staking Rewards",
      "Founder VIP Access",
    ],
  },
  {
    id: 5,
    tier: "Titanium",
    minAmount: 50000,
    cardImage: cardImage6,
    shadowColor: "#62c9f3",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(18,56,73,0.75) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(0, 178, 255) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "Staking Enabled",
      "50% $PREDICT Bonus",
      "$20,000 PredictMarkets Credits",
      "USDT Staking Rewards",
      "Founder VIP Access",
    ],
  },
  {
    id: 6,
    tier: "Diamond",
    minAmount: 100000,
    cardImage: cardImage2,
    shadowColor: "#62c9f3",
    backgroundGradient: "radial-gradient(ellipse at center, rgba(18,56,73,0.75) 0%, rgba(10,10,12,1) 100%)",
    nftBackgroundGradient: "linear-gradient(180deg, rgba(33, 4, 255, 0) 0%, rgb(0, 178, 255) 100%), linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
    benefits: [
      "Staking Enabled",
      "60% $PREDICT Bonus",
      "$50,000 PredictMarkets Credits",
      "USDT Staking Rewards",
      "Founder VIP Access",
    ],
  },
];

export const getExtraRewardsConfig = {
  title: "Get Bonus Rewards Starting From $1,000",
  subtitle: "Get more $PREDICT and unlock higher rewards by joining the Elite PREDICT Members Club. Access starts from $1,000 \n and is available only during the presale.",
  sliderLabel: "How much do you want to spend?",
  sliderMin: 1000,
  sliderMax: 100000,
  buyButtonText: "BUY $PREDICT",
  buyButtonLink: "#wallet",
  disclaimer: "(You will get the membership NFT automatically when you buy $PREDICT)",
  autoPlayInterval: 5000, // 5 seconds
};