import { scrollToWallet } from "../../../lib/utils";

export default function MarketOpportunity({
  title = "Huge Market Opportunity",
  description = "Prediction markets are one of the fastest growing sectors...",
  chartImage,
  backgroundImage,
  backgroundImageMobile,
  market2026,
  market2030,
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "#wallet",
}) {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-20">
      {/* Background Image */}
      <div className="maxmd:hidden">
        {backgroundImage && (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </div>
      <div className="absolute inset-0 z-0 md:hidden">
        {backgroundImageMobile && (
          <div className="absolute inset-0 z-0">
            <img
              src={backgroundImageMobile}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-8">
        <div
          className="bg-white rounded-2xl md:rounded-[44px]
         w-full max-w-[1220px] overflow-hidden flex flex-col lg:flex-row 
         gap-8 md:gap-[12px] items-center px-6 md:px-[80px] py-8 md:py-[32px] border-[1px] border-[#DDD]">
          {/* Left Side - Chart */}
          <div className="relative md:h-[487px] h-[377px] w-full lg:w-[426px] flex-shrink-0">
            {/* Chart Image */}
            <div className="absolute md:left-0  left-[0%] md:top-[12%] top-[10%]  md:w-[389px] md:h-[351px] w-[100%] max-md:!mx-auto h-[281px] ">
              <img
                src={chartImage}
                alt="Market Opportunity Chart"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>

            {/* Market 2026 Label - Top */}
            <div className="absolute top-0 left-[65%] -translate-x-1/2 text-center text-[#000] w-full">
              <p className="md:text-base text-[12px] font-medium md:leading-6 leading-[15px] tracking-[0.32px] mb-0.5">
                {market2026?.label || "Prediction Marketplaces in 2026 "}
              </p>
              <p className="md:text-base text-[12px] font-bold md:leading-6 leading-[15px] tracking-[0.32px] h-[21px]">
                {market2026?.value || "Currently Valued at $20B+"}
              </p>
            </div>

            {/* Market 2030 Label - Bottom */}
            <div className="absolute bottom-0 left-[30%] -translate-x-1/2 text-center text-[#000] w-full">
              <p className="md:text-base text-[12px] font-medium md:leading-6 leading-[15px] tracking-[0.32px] mb-0.5 whitespace-pre-line">
                {market2030?.label ||
                  "Prediction Marketplaces in 2030\nExpected by Industry Experts"}
              </p>
              <p className="md:text-base text-[12px] font-bold md:leading-6 leading-[15px] tracking-[0.32px] h-[21px]">
                {market2030?.value || "Valued above $200B+"}
              </p>
            </div>
          </div>

          <div className="w-full h-[0.5px] bg-black/20 z-10 md:hidden"></div>

          {/* Right Side - Content */}
          <div className="flex flex-col md:border-l-[1px] md:border-[#ddd] md:pl-[30px] gap-8 md:gap-12 flex-1 max-w-[628px]">
            {/* Text Content */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="heading-two text-[#000] max-md:max-w-[200px] mx-auto max-md:!text-center font-bold">
                {title}
              </h2>
              <div className="text-[#000] paragraph-regular !text-center md:!text-start whitespace-pre-line">
                {description}
              </div>
            </div>

            {/* Buy Button */}
            <div className="flex justify-center md:justify-start">
              <button
                onClick={scrollToWallet}
                className="btn_primary w-full md:w-[282px]  flex items-center justify-center"
              >
                {buyButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
