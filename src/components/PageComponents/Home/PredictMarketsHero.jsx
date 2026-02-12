import { Link } from "react-router-dom";
import FeaturedIn from "./FeaturedIn";
import FeaturedInSection from "./FeaturedInSection";
import {
  featuredInLogos,
  featuredInSectionConfig,
} from "../../../data/featuredInSectionData";

import predictMarketsHeroCoin1 from "../../../assets/images/home/predict_hero/coin_1.webp";
import predictMarketsHeroCoin2 from "../../../assets/images/home/predict_hero/coin_2.webp";
import predictMarketsHeroCoin3 from "../../../assets/images/home/predict_hero/coin_3.webp";
import predictMarketsHeroCoin4 from "../../../assets/images/home/predict_hero/coin_4.webp";
import predictMarketsHeroCoin5 from "../../../assets/images/home/predict_hero/coin_5.webp";

export default function PredictMarketsHero({
  title = "Own the future of prediction markets",
  description = "$PREDICT powers PredictMarkets, the most rewarding decentralised prediction platform that turns real world events into live on-chain markets and shares platform revenue with token holders.",
  buttonText = "Join The Presale",
  buttonLink = "/presale",
  centerImage,
  featuredInLeftText = "First Hold-To-Earn Token",
  featuredInRightText = "Built on Ethereum",
}) {
  return (
    <section className="relative w-full overflow-hidden min-h-screen predict_hero_bg flex items-center justify-center">
      {/* Main Content */}
      <div className="w-full max-w-[1440px] mx-auto relative">
        <div className="absolute md:top-[10%] top-[11%] md:left-[-3%] left-[-8%] md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
          <img
            src={predictMarketsHeroCoin1}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute md:top-[28%] top-[77%] md:left-[20%] left-[23%] md:w-[120px] md:h-[120px] w-[60px] h-[60px]">
          <img
            src={predictMarketsHeroCoin2}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute md:top-[16%] top-[22%] md:right-[-1%] right-[-11%] md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
          <img
            src={predictMarketsHeroCoin3}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[65%] md:left-[2%] left-[-6%] md:w-[100px] md:h-[100px] w-[60px] h-[60px]">
          <img
            src={predictMarketsHeroCoin4}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute md:bottom-[15%] bottom-[1.5%] md:right-0 right-[-2%] md:w-[150px] md:h-[150px] w-[100px] h-[100px]">
          <img
            src={predictMarketsHeroCoin5}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-[1280px] px-4 md:px-8 py-12 md:py-14 mx-auto">
          {/* Featured In Badge - At Top */}

          <FeaturedIn
            leftText={featuredInLeftText}
            rightText={featuredInRightText}
          />

          {/* Hero Content - Below Image */}
          <div className="flex flex-col gap-6 items-center text-center mb-8 md:mb-12">
            {/* Title */}
            <h1 className="heading-one capitalize text-[#ffffff] max-w-[784px]">
              {title}
            </h1>

            {/* Description */}
            <p className="text-white paragraph-regular max-w-[564px]">
              {description}
            </p>

            {/* Button */}
            <Link to={buttonLink} className="btn_secondary mt-2">
              {buttonText}
            </Link>
          </div>

          <div className="predict_hero_dashboard w-full h-full"></div>

          {/* Featured In Section - At Bottom */}
          <div className="w-full">
            <FeaturedInSection
              title={featuredInSectionConfig.title}
              logos={featuredInLogos}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
