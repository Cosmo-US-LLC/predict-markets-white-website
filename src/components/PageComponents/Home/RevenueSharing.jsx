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
    <section className="relative w-full overflow-hidden bg-white  
    py-12 md:py-[60px] flex items-center justify-center px-2 md:px-0">
      {/* Background Image */}
      <div className="absolute  w-full h-full">
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
      rounded-2xl md:rounded-3xl w-full max-w-[1280px] 
      mx-auto px-6 md:px-12 py-8 md:py-12 flex flex-col lg:flex-row 
      md:gap-12 gap-8 items-center ">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 items-start z-10 flex-1">
          {/* Title */}
          <h2 className="heading-two">
            {title}
          </h2>

          {/* Description - Split into paragraphs */}
          <div className="flex flex-col gap-4">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="text-[#000] text-base md:text-lg font-normal leading-6 max-w-[600px]">
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
        <div className="flex relative w-full md:w-[511px] md:h-[464px] h-[340px] items-center justify-center z-10">
          {/* Coins Background (Blurred) */}
          <div className="rotate-[-13.18deg] absolute md:left-[-0px] left-[-40px] md:top-[13px] top-[50px] md:w-[600.38px] w-[400px] md:h-[600px] h-[380px] blur-[15.163px] opacity-47 flex items-center justify-center pointer-events-none">
     
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
          <div className="absolute md:left-[-0px] left-[-40px] md:top-[-6px] top-[50px]
           md:w-[600px] w-[400px] md:h-[600px] h-[380px] pointer-events-none">
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
          <div className="absolute md:left-[200.65px] left-[90px] md:top-[190.9px] top-[170px]
           bg-[#0080ED]  rounded-[124.901px] md:w-[200.803px] w-[140px] md:h-[200.803px] h-[140px] flex flex-col items-center justify-center py-[32.896px] shadow-[inset_0px_4.112px_30.429px_0px_rgba(0,0,0,0.85)] z-1">
            <h4 className="text-white md:text-[30px] text-[20px] font-medium leading-[32.896px] text-center">
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