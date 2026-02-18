import { Link } from 'react-router-dom';
import backgroundImage from "../../../assets/images/home/revenue_sharing/5377722_2765416_1.webp";
import coinsImage from "../../../assets/images/home/revenue_sharing/revenue_sharing_coin.webp";

export default function RevenueSharing({
  title = "Experience A Revolutionary Revenue Sharing System",
  description = "Every day, 50% of all trading revenue is shared with $PREDICT holders. Simply hold $PREDICT to receive USDT rewards.\n\nRewards are distributed automatically from platform trading fee revenue, fully on chain, transparent, and powered by real trading activity. Be part of the ecosystem and benefit daily from the growth of PredictMarkets. The earlier you join, the larger your allocation and the greater your rewards.",
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
  revenuePercentage = "50% Daily Revenue",
}) {
  // Split description into paragraphs
  const descriptionParagraphs = description.split('\n\n');

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF9F9] md:bg-white  
    py-12 md:py-[60px] flex items-center justify-center px-2 md:px-0">
      {/* Background Image */}
      <div className="absolute md:block hidden w-full h-full">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      
      {/* Main Card Container */}
      <div className="relative z-10 bg-white overflow-hidden 
      rounded-[12px] md:rounded-3xl w-full max-w-[1280px] 
      mx-auto px-[16px] md:px-12 py-[40px] md:py-12 flex flex-col lg:flex-row 
      md:gap-12 gap-8 items-center border-[1px] border-[#DDD]">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 items-start z-10 flex-1 !w-full max-w-[690px] md:min-w-[690px] ">
          {/* Title */}
          <h2 className="heading-two max-md:text-center">
            {title}
          </h2>

          {/* Description - Split into paragraphs */}
          <div className="flex flex-col gap-4">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-[#000] text-base max-md:!text-center md:text-lg font-normal leading-6 max-w-[600px]">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Buy Button */}
          <Link
            to={buyButtonLink}
            className="btn_primary w-full sm:w-[210px] h-[50px] flex items-center justify-center"
          >
            {buyButtonText}
          </Link>
        </div>

        {/* Right Visual Content */}
        <div className="flex max-md:relative max-md:h-[360px] max-md:!mx-auto max-md:w-[340px] w-full  items-center justify-center z-10">
          {/* Coins Background (Blurred) */}
          <div className="rotate-[-13.18deg] md:!min-w-[750px] 
          absolute md:right-[-100px] right-[4px] md:top-[0px] top-[12px]  md:min-w-[0px] 
          md:max-w-[650.38px] w-full max-md:max-h-[300px]
           blur-[15.163px] opacity-47 flex items-center 
           ustify-center pointer-events-none">
     
              <img
                src={coinsImage}
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          

          {/* Coins Foreground */}
          <div className="absolute max-md:z-[9] md:right-[-40px] right-[4px] md:top-[-30px] top-[12px]
           md:min-w-[650.38px] md:max-w-[650.38px] max-md:!max-h-[200px] w-full pointer-events-none">
            <img
              src={coinsImage}
              alt=""
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          {/* Blue Sphere with Revenue Text */}
          <div className="absolute md:right-[180.65px] right-[100px] md:!top-[210.9px] !top-[126px]
           bg-[#0080ED]  rounded-[124.901px] md:w-[200.803px] w-[140px] md:h-[200.803px] h-[140px] flex flex-col items-center justify-center py-[32.896px] shadow-[inset_0px_4.112px_30.429px_0px_rgba(0,0,0,0.85)] z-1">
            <h4 className="text-white md:text-[30px] text-[18px] font-medium leading-[24px] md:leading-[32.896px] text-center">
              {revenuePercentage.includes('Daily') ? (
                <>
                  50% Daily<br />Revenue
                </>
              ) : (
                revenuePercentage
              )}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}