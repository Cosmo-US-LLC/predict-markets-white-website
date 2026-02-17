import { Link } from "react-router-dom";
import { Circle } from "lucide-react";
import backgroundImage from "../../../assets/images/home/prediction_platform/prediction_platform_bg_light.webp";
import liveIndicatorDot from "../../../assets/images/home/prediction_platform/live_dot.webp";

export default function PredictionPlatform({
  title = "The Most Rewarding Prediction Platform",
  subtitle = "Buy $PREDICT now and get early access benefits before the public launch begins.",
  buyButtonText = "BUY $PREDICT",
  supportButtonText = "24/7 Live Support Here",
  buyButtonLink = "/buy",
  supportButtonLink = "/support",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#fff]">
      {/* Blurred Background */}
      <div className="absolute inset-0  w-full ">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[503px] max-w-[1280px]  flex-col items-center justify-center px-4 py-12 md:px-8 md:py-20">
        {/* Card Container */}
        <div className="relative flex w-full md:min-h-[503px] min-h-[390px] prediction_platform_card_bg items-center justify-center overflow-hidden rounded-[44px] bg-white/95 backdrop-blur-[18.65px]">
          {/* Content */}
          <div className="relative z-10 flex min-h-[290px] flex-col items-center justify-center gap-[22px] px-4 py-8">
            {/* Title */}
            <h2 className="heading-two max-w-[641px] capitalize text-center text-[#000]">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="paragraph-medium max-w-[539px] font-[400] text-center !text-[14px] md:!text-[20px] text-[#000]">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col items-center justify-center gap-[16px] pt-[2px] sm:flex-row">
              <Link
                to={buyButtonLink}
                className="btn_primary w-[231px] text-sm md:text-base"
              >
                {buyButtonText}
              </Link>
              <Link
                to={supportButtonLink}
                className="flex h-[44px] items-center justify-center gap-2.5 rounded-full border border-black bg-transparent px-[13px] py-4 transition-colors hover:bg-black/5"
              >
                <img
                  src={liveIndicatorDot}
                  alt=""
                  className="w-[10px] h-[10px] shrink-0"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <Circle className="w-[10px] h-[10px] fill-green-500 text-green-500 hidden shrink-0" />
                <span className="whitespace-nowrap text-base font-medium leading-6 capitalize text-black">
                  {supportButtonText}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
