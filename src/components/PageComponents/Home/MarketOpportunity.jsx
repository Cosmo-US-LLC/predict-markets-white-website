import { Link } from 'react-router-dom';

export default function MarketOpportunity({
  title = 'Huge Market Opportunity',
  description = 'Prediction markets are one of the fastest growing sectors...',
  chartImage,
  backgroundImage,
  market2026,
  market2030,
  buyButtonText = 'BUY $PREDICT',
  buyButtonLink = '/buy',
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#E6F2FF] to-white w-full overflow-hidden py-12 md:py-20">
      {/* Main Content Container */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-8">
        <div className="bg-white rounded-2xl md:rounded-[44px]
         w-full max-w-[1220px] overflow-hidden flex flex-col lg:flex-row 
         gap-8 md:gap-[18px] items-center px-6 md:px-[80px] py-8 md:py-[32px] border-[1px] border-[#DDD]">
          {/* Left Side - Chart */}
          <div className="relative md:h-[487px] h-[397px] w-full lg:w-[426px] flex-shrink-0">
            {/* Chart Image */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 md:w-[389px] md:h-[351px] w-[289px] h-[251px]">
              <img
                src={chartImage}
                alt="Market Opportunity Chart"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Market 2026 Label - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center text-[#000] w-full">
              <p className="text-base font-medium leading-6 tracking-[0.32px] mb-0.5">
                {market2026?.label || 'Prediction Marketplaces in 2026'}
              </p>
              <p className="text-base font-bold leading-6 tracking-[0.32px] h-[21px]">
                {market2026?.value || 'Currently Valued at $20B+'}
              </p>
            </div>

            {/* Market 2030 Label - Bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-[#000] w-full">
              <p className="text-base font-medium leading-6 tracking-[0.32px] mb-0.5 whitespace-pre-line">
                {market2030?.label || 'Prediction Marketplaces in 2030\nExpected by Industry Experts'}
              </p>
              <p className="text-base font-bold leading-6 tracking-[0.32px] h-[21px]">
                {market2030?.value || 'Valued above $200B+'}
              </p>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col gap-8 md:gap-12 flex-1 max-w-[628px]">
            {/* Text Content */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="heading-two text-[#000] font-bold">
                {title}
              </h2>
              <div className="text-[#000] paragraph-regular !text-start whitespace-pre-line">
                 {description}
              </div>
            </div>

            {/* Buy Button */}
            <div className='flex justify-center md:justify-start'>
              <Link
                to={buyButtonLink}
                className="btn_primary w-[232px] h-[50px] flex items-center justify-center"
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