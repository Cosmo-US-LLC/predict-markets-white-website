import coinImage from "../../../assets/images/home/exclusive_presale_benefits/presale_icon (1).svg";
import laptopImage from "../../../assets/images/home/exclusive_presale_benefits/presale_icon (2).svg";
import treasureChestImage from "../../../assets/images/home/exclusive_presale_benefits/presale_icon (3).svg";
import diamondImage from "../../../assets/images/home/exclusive_presale_benefits/presale_icon (4).svg";

export default function ExclusivePresaleBenefits({
  title = "Exclusive Presale Benefits",
  benefits = [
    {
      id: 1,
      icon: coinImage,
      title: "Lowest Entry Price Before Launch",
      description: "During the presale, you can buy $PREDICT at its lowest price before it launches on centralised and decentralised exchanges.",
    },
    {
      id: 2,
      icon: laptopImage,
      title: "Priority Access To Platform Features",
      description: "Early holders gain exclusive memberships with priority access to higher APY USDT staking pools and Key Features at launch.",
    },
    {
      id: 3,
      icon: treasureChestImage,
      title: "Receive Up To 40% Platform Credits",
      description: "Get up to 40% of your purchase value in free credits to place predictions on PredictMarkets, with no strings attached.",
    },
    {
      id: 4,
      icon: diamondImage,
      title: "$250K Giveaway Participation",
      description: "Participate in our $250k giveaway and go all out to win big. This event is exclusively available for presale $PREDICT buyers.",
    },
  ],
}) {
  if (!benefits || benefits.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-12 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Title */}
        <h2 className="heading-two mb-8 !text-center">
          {title}
        </h2>

        {/* Benefits Grid */}
        <div className="flex flex-col md:flex-row gap-2 items-stretch">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-lg border-[1px] rounded-[15px] border-[#DDD] flex flex-col 
              gap-6 items-center px-[10px] py-7 flex-1 min-w-0"
            >
              {/* Icon */}
              <div className="h-[98px] w-[106px] flex items-center justify-center shrink-0">
                <img
                  src={benefit.icon}
                  alt=""
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 items-center text-center w-full">
                <h3 className="heading-three ">
                  {benefit.title}
                </h3>
                {/* Divider Line */}
                <div className="w-full h-px bg-gray-200"></div>
                <p className="paragraph-regular">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}