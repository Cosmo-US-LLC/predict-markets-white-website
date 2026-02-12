import { Link } from "react-router-dom";

export default function MarketOpportunity({
  title = "Huge Market Opportunity",
  description = `Prediction markets are one of the fastest growing sectors worldwide, producing multiple unicorns valued at over $1B in record time due to their mainstream relevance. This creates a rare opportunity for all of us while the industry is still in its early stages.\n\nLaunching a prediction platform requires significant capital and deep industry expertise. Powered by crypto, PredictMarkets removes these barriers, allowing $PREDICT holders to participate in prediction markets and benefit directly from platform growth.`,
  chartImage,
  backgroundImage,
  market2026,
  market2030,
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#fff] py-16 md:py-20">
      {/* Blurred Background */}
      <div className="absolute inset-0 mx-auto flex h-full w-full items-center justify-center bg-cover bg-center">
        <div className="h-full w-full rotate-180 blur-[16.8px]">
          <img
            src={backgroundImage}
            alt="Background"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-8">
        <div className="flex w-full max-w-[1220px] flex-col items-center gap-8 overflow-hidden rounded-[44px] border border-[#dddddd] bg-white/95 px-6 py-8 backdrop-blur-[18.65px] md:flex-row md:gap-[30px] md:px-[80px] md:py-[32px]">
          {/* Left Side - Chart */}
          <div className="relative h-[397px] w-full shrink-0 md:h-[487px] md:w-[426px]">
            {/* Chart Image */}
            <div className="absolute left-0 top-1/2 h-[251px] w-[289px] -translate-y-1/2 md:h-[351px] md:w-[389px]">
              <img
                src={chartImage}
                alt="Market Opportunity Chart"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Market 2026 Label - Top */}
            <div className="absolute left-1/2 top-0 w-full -translate-x-1/2 text-center text-black">
              <p className="mb-0.5 text-[14px] font-medium leading-6 tracking-[0.32px] md:text-[16px]">
                {market2026?.label || "Prediction Marketplaces in 2026"}
              </p>
              <p className="text-[14px] font-bold leading-6 tracking-[0.32px] md:text-[16px]">
                {market2026?.value || "Currently Valued at $20B+"}
              </p>
            </div>

            {/* Market 2030 Label - Bottom */}
            <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 text-center text-black">
              <p className="mb-0.5 whitespace-pre-line text-[14px] font-medium leading-6 tracking-[0.32px] md:text-[16px]">
                {market2030?.label ||
                  "Prediction Marketplaces in 2030\nExpected by Industry Experts"}
              </p>
              <p className="text-[14px] font-bold leading-6 tracking-[0.32px] md:text-[16px]">
                {market2030?.value || "Valued above $200B+"}
              </p>
            </div>
          </div>

          {/* Divider line (only on desktop) */}
          <div className="hidden h-[454px] w-px shrink-0 md:block">
            <div className="h-full w-px bg-[#e0e0e0]" />
          </div>

          {/* Right Side - Content */}
          <div className="flex max-w-[628px] flex-1 flex-col gap-6 md:gap-[15px]">
            {/* Text Content */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="heading-two text-black">{title}</h2>
              <div className="whitespace-pre-line text-[16px] leading-6 tracking-[0.32px] text-[#4b4b4b] md:text-[20px] md:leading-[28px]">
                {description}
              </div>
            </div>

            {/* Buy Button */}
            <div className="flex justify-center md:justify-start">
              <Link
                to={buyButtonLink}
                className="btn_primary flex h-[50px] w-[232px] items-center justify-center text-sm md:text-base"
              >
                {buyButtonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
