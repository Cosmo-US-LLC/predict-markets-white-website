import featureImage1 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image1.webp";
import featureImage2 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image2.webp";
import featureImage3 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image3.webp";
import featureImage4 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image4.webp";
import featureImage5 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image5.webp";
import featureImage6 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image6.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";


export default function PredictsTheFeatures({
  title = "Redefining How the World Predicts the Future",
  subtitle = "The building blocks behind the world's most rewarding prediction platform",
  features = [
    {
      id: 1,
      image: featureImage1,
      title: "Real Time Prediction Markets",
      description: "Users can participate in live markets covering politics, finance, sports, and global events as they unfold.",
    },
    {
      id: 2,
      image: featureImage2,
      title: "Crowd Powered Probabilities",
      description: "Market prices reflect collective intelligence, turning public sentiment into clear probability signals.",
    },
    {
      id: 3,
      image: featureImage3,
      title: "Buyback & Burn Mechanism",
      description: "Markets settle based on predefined real world outcomes using trusted resolution mechanisms.",
    },
    {
      id: 4,
      image: featureImage4,
      title: "Onchain Transparency",
      description: "All markets and outcomes are recorded on-chain, ensuring verifiable and tamper resistant results.",
    },
    {
      id: 5,
      image: featureImage5,
      title: "24/7 Open Markets",
      description: "Built on efficient blockchain infrastructure, displaying live market movements for fast execution with instant trades and withdrawals.",
    },
    {
      id: 6,
      image: featureImage6,
      title: "Hold-To-Earn",
      description: "By holding the $PREDICT token, users earn daily USDT through the community revenue sharing model.",
    },
  ],
}) {
  return (
    <section
      className="w-full py-12 md:py-[84px] relative bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-12 items-center">
        {/* Header */}
        <div className="flex flex-col gap-2 md:gap-[8px] items-center text-center max-w-[834px]">
          <h2 className="heading-two capitalize text-black max-w-[952px] whitespace-pre-wrap">
             {title}
          </h2>
          <p className="text-[#4b4b4b] paragraph-regular whitespace-pre-wrap">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        {/* Mobile: Carousel */}
        <div className="w-full md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id} className="basis-[85%]">
                  <div className="w-full overflow-hidden rounded-[18px] border border-[#e5e5e5] bg-white flex flex-col gap-3 pb-6 pt-4 px-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    {/* Image */}
                    <div className="h-[152px] relative rounded-[15px] overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Title and Description */}
                    <div className="flex flex-col gap-1.5 items-start">
                      <h4 className="heading-four capitalize w-full text-black">
                        {feature.title}
                      </h4>
                      <p className="paragraph-regular w-full whitespace-pre-wrap text-[#4b4b4b]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop / Tablet: Grid */}
        <div className="hidden md:flex flex-wrap gap-5 w-full justify-center md:justify-start">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="w-full md:w-[390px] overflow-hidden flex flex-col gap-3 md:gap-[12px] pb-6 md:pb-[24px] pt-4 md:pt-[16px] px-4 md:px-[16px] rounded-[18px] border border-[#e5e5e5] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              {/* Image */}
              <div className="h-[152px] relative rounded-[15px] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Title and Description */}
              <div className="flex flex-col gap-1.5 md:gap-[6px] items-start">
                <h4 className="text-base md:text-[20px] font-medium leading-[28px] capitalize w-full text-black">
                  {feature.title}
                </h4>
                <p className="text-[#4b4b4b] text-base md:text-[16px] font-normal leading-[24px] tracking-[0.32px] w-full whitespace-pre-wrap">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}