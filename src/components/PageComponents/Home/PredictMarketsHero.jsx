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
  title = "Own The Future Of Prediction Markets",
  description = "$PREDICT powers PredictMarkets, the most rewarding decentralised prediction platform that turns real world events into live on-chain markets and shares platform revenue with token holders.",
  buttonText = "Buy $PREDICT",
  buttonLink = "/presale",
  centerImage,
  featuredInLeftText = "First Hold-To-Earn Token",
  featuredInRightText = "Built on Ethereum",
}) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white">
      {/* Floating coins */}
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

        {/* Main content */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-8 md:py-16">
          {/* Left column: text, audit, video, featured logos */}
          <div className="flex w-full flex-col gap-8 md:w-[720px]">
            {/* Badge */}
            <FeaturedIn
              leftText={featuredInLeftText}
              rightText={featuredInRightText}
            />

            {/* Title + description */}
            <div className="flex flex-col gap-4">
              <h1 className="heading-one text-black max-w-[640px]">{title}</h1>
              <p className="paragraph-regular text-[#4b4b4b] max-w-[700px]">
                {description}
              </p>
            </div>

            {/* Primary CTA */}
            <Link
              to={buttonLink}
              className="btn_secondary mt-2 w-fit !text-[#000]"
            >
              {buttonText}
            </Link>

            {/* Verified & Audited */}
            <div className="flex flex-col gap-2 text-sm">
              <span className="font-semibold text-[#000]">
                Verified & Audited by
              </span>
              <div className="flex h-10 w-[170px] items-center justify-center rounded-[8px] bg-white/10 text-xs text-white">
                Coinsult
              </div>
            </div>

            {/* Video placeholder */}
            <div className="aspect-[702/358] w-full overflow-hidden rounded-[8px] bg-black/30 backdrop-blur-sm flex items-center justify-center">
              <button
                type="button"
                className="flex h-16 w-24 items-center justify-center rounded-[12px] bg-[#ff0000]"
              >
                <span className="sr-only">Play video</span>
              </button>
            </div>

            {/* Featured in */}
            <FeaturedInSection
              title={featuredInSectionConfig.title}
              logos={featuredInLogos}
            />
          </div>

          {/* Right column: presale card placeholder */}
          <div className="w-full md:w-[552px]">
            <div className="relative mx-auto flex h-[872px] max-w-[552px] flex-col items-center rounded-[13.675px] border border-[#d8d8d8] bg-white/95 px-4 py-6 backdrop-blur-md">
              {/* Live badge */}
              <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-[4px] bg-[#0080ED] px-2 py-1 text-[12px] font-semibold text-white tracking-[0.24px]">
                <span className="h-[6px] w-[6px] rounded-full bg-white" />
                PRESALE IS LIVE
              </div>

              <div className="mt-6 flex h-full w-full items-center justify-center rounded-[18px] bg-[#f5f7fb] px-4 text-center text-sm text-[#4b4b4b]">
                Presale dashboard UI will render here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
