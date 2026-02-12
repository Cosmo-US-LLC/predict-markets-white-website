import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import coinImage from "../../../assets/images/home/what_is_predict/what_is_predict_coin_image2.webp";
import ellipseImage from "../../../assets/images/home/what_is_predict/what_is_predict_ellipse.png";
import backgroundImage from "../../../assets/images/home/what_is_predict/what_is_predict_bg.webp";
import checkIcon from "../../../assets/images/home/what_is_predict/what_is_predict_check.webp";

export default function WhatIsPredict({
  title = "What is $PREDICT?",
  description = "$PREDICT is the cryptocurrency that powers the PredictMarkets decentralised ecosystem, enabling peer-to-peer predictions on real world events such as elections, sports, global financial markets, and much more, without the need for a bookmaker.\n\nPredictMarkets is transparent, global, and anonymous, offering instant withdrawals and full user control in a fair prediction marketplace built for the future.\n\nHolding $PREDICT unlocks real utility and exclusive platform advantages across the platform.",
  benefits = [
    "Daily USDT staking income from trading fee revenue",
    "Lower fees and access to exclusive memberships",
    "Payment method with cashback included",
    "Weekly bonuses and free games",
  ],
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
  secondaryButtonText = "Visit PredictMarkets (Beta)",
  secondaryButtonLink = "/what-is-predictmarkets",
}) {
  return (
    <section
      id="what-is-predictmarkets"
      className="relative w-full overflow-hidden bg-[#fff] flex items-center justify-center px-4 md:px-0 py-12 md:py-16"
    >
      {/* Blurred Background */}
      <div className="absolute inset-0 w-full h-full blur-[16.8px]">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Main Card Container */}
      <div className="relative z-10 backdrop-blur-[18.65px] w-full max-w-[1220px] mx-auto px-6 md:px-12 py-8 md:py-8 md:h-[580px] flex flex-col md:flex-row gap-8 md:gap-[32px] items-center overflow-hidden rounded-[32px] border border-[#dddddd] bg-white/95">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-[22px] items-start z-10">
          {/* Title */}
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize text-black whitespace-nowrap">
            {title}
          </h2>

          {/* Description */}
          <p className="text-[#4b4b4b] text-sm md:text-[14px] font-normal leading-[22px] tracking-[0.28px] max-w-[483px] whitespace-pre-wrap">
            {description}
          </p>

          {/* Benefits List */}
          <div className="flex flex-col gap-3 md:gap-[12px]">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-3 md:gap-[12px] items-center"
              >
                {/* Check Icon */}
                <div className="border-[0.764px] border-[#0080ED] rounded-[3.058px] w-[22px] h-[22px] flex items-center justify-center shrink-0 bg-white">
                  <div className="w-[15.289px] h-[15.289px] flex items-center justify-center">
                    <img
                      src={checkIcon}
                      alt=""
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <Check className="w-full h-full text-[#0080ED] hidden" />
                  </div>
                </div>
                {/* Benefit Text */}
                <h5 className="text-[#4b4b4b] text-base md:text-[16px] font-medium leading-[24px] capitalize">
                  {benefit}
                </h5>
              </div>
            ))}
          </div>

          {/* Buy Button */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              to={buyButtonLink}
              className="btn_primary flex items-center justify-center"
            >
              {buyButtonText}
            </Link>

            <Link
              to={secondaryButtonLink}
              className="btn_outline flex items-center justify-center"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>

        {/* Right Visual Content */}
        <div className="flex-1 relative w-full h-[400px] md:h-[630px] flex items-center justify-center z-10">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[445px] h-[498px] opacity-50">
            <img
              src={ellipseImage}
              alt=""
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>

          <div className="relative w-full max-w-[547px] h-full flex items-center justify-center">
            <img
              src={coinImage}
              alt="PredictMarkets Coin"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
