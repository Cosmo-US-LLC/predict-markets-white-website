import { Link } from 'react-router-dom';
import backgroundImage from "../../../assets/images/home/revenue_sharing/revenue_sharing_bg.webp";
import coinsImage from "../../../assets/images/home/revenue_sharing/revenue_sharing_coin.webp";

export default function RevenueSharing({
  title = "Experience a Revolutionary revenue sharing system",
  description = "Every day, 50% of all trading revenue is shared with $PREDICT holders. Simply hold $PREDICT and receive USDT.\n\nRewards are distributed automatically and proportionally from platform trading fees, fully on-chain, transparent, and driven by real trading activity.\n\nTake part in the ecosystem and benefit daily from the growth of PredictMarkets.",
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
  revenuePercentage = "50% Daily Revenue",
}) {
  return (
    <section className="relative w-full overflow-hidden bg-black py-12 md:py-[60px] flex items-center justify-center px-2 md:px-0">
      {/* Blurred Background */}
      <div className="absolute w-full h-full">
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
      <div className="relative z-10 flex w-full max-w-[1220px] flex-col items-center overflow-hidden rounded-[32px] border border-[#dddddd] bg-white/95 px-4 py-8 backdrop-blur-[18.65px] md:flex-row md:gap-8 md:px-8 md:py-6 gap-0">
        
        {/* Left Content */}
        <div className="flex flex-col gap-[22px] items-start z-10">
          {/* Title */}
          <h2 className="heading-two capitalize text-black w-full">
            {title}
          </h2>

          {/* Description */}
          <p className="paragraph-regular max-w-[526px] whitespace-pre-wrap text-[#4b4b4b]">
            {description}
          </p>

          {/* Buy Button */}
          <Link
            to={buyButtonLink}
            className="btn_primary w-full sm:w-[210px] h-[50px] flex items-center justify-center text-sm md:text-base"
          >
            {buyButtonText}
          </Link>
        </div>

        {/* Right Visual Content */}
        <div className="flex relative w-full md:w-[511px] md:h-[464px] h-[340px] items-center justify-center z-10">
          {/* Coins Background (Blurred) */}
          <div className="rotate-[-13.18deg] absolute md:left-[-190px] left-[-40px] md:top-[13px] top-[50px] md:w-[600.38px] w-[400px] md:h-[600px] h-[380px] blur-[15.163px] opacity-47 flex items-center justify-center pointer-events-none">
     
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
          <div className="absolute md:left-[-190px] left-[-40px] md:top-[-6px] top-[50px] md:w-[600px] w-[400px] md:h-[600px] h-[380px] pointer-events-none">
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
          <div className="absolute md:left-[14.65px] left-[90px] md:top-[190.9px] top-[170px] bg-[#0080ED] rounded-[124.901px] md:w-[200.803px] w-[140px] md:h-[200.803px] h-[140px] flex flex-col items-center justify-center py-[32.896px] shadow-[0_12px_40px_rgba(0,0,0,0.35)] z-1">
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