import featureImage1 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image1.webp";
import featureImage2 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image2.webp";
import featureImage3 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image3.webp";
import featureImage4 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image4.webp";
import featureImage5 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image5.webp";
import featureImage6 from "../../../assets/images/home/predicts_the_feature/predicts_the_feature_image6.webp";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../ui/carousel";


export default function PredictsTheFeatures({
  title = "Redefining How The World Predicts The Future",
  subtitle = "The building blocks behind the world's most rewarding prediction platform",
  features = [
    {
      id: 1,
      image: featureImage1,
      title: "Real Time Prediction Markets",
      description: "Users can participate in live markets across politics, finance, sports, and a wide range of global events in real time.",
    },
    {
      id: 2,
      image: featureImage2,
      title: "Crowd Powered Probabilities",
      description: "Market prices reflect collective intelligence, turning public sentiment into clear probability signals, peer to peer, without middlemen.",
    },
    {
      id: 3,
      image: featureImage3,
      title: "Buyback & Burn Mechanism",
      description: "Platform fees are used to buy back and burn $PREDICT tokens, reducing supply and supporting long term price growth.",
    },
    {
      id: 4,
      image: featureImage4,
      title: "Onchain Transparency",
      description: "Markets settle based on predefined real world outcomes, using trusted public sources recorded on chain for full transparency.",
    },
    {
      id: 5,
      image: featureImage5,
      title: "No KYC & 24/7 Open Markets",
      description: "Fully decentralised with no KYC and open markets available 24/7, giving users the freedom to participate anytime, anywhere.",
    },
    {
      id: 6,
      image: featureImage6,
      title: "Hold-To-Earn Token",
      description: "By holding the $PREDICT token, users earn daily USDT through a community revenue sharing model that grows alongside platform usage.",
    },
  ],
}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full relative bg-white py-12 md:py-[84px]">
      <div style={{background: "radial-gradient(29.62% 41.65% at 50% 58.4%, rgba(0, 128, 237, 0.36) 0%, rgba(0, 128, 237, 0.00) 100%)"}} className="absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="max-w-[1280px] relative z-[9] mx-auto px-4 md:px-8 flex flex-col gap-12 items-center"
      >
        {/* Header */}
        <div className="flex flex-col gap-2 md:gap-[8px] items-center text-center max-w-[834px]">
          <h2 className="heading-two text-[#000]  max-w-[800px]">
             {title}
          </h2>
          <p className="text-[#000] paragraph-regular">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        {/* Mobile: Carousel */}
        <div className="w-full md:hidden flex flex-col items-center gap-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {features.map((feature) => (
                <CarouselItem key={feature.id} className="basis-[85%]">
                  <div className="bg-white min-h-[320px] rounded-[10px] border border-[#DDD] flex flex-col items-center gap-[20px] w-[320px] max-w-full pt-[10px] pr-[10px] pb-[16px] pl-[10px]">
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
                      <h4 className="heading-four">
                        {feature.title}
                      </h4>
                      <p className=" paragraph-regular max-md:!text-[14px] max-md:!text-start w-full">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  current === index
                    ? "bg-[#0080ED] w-2 h-2"
                    : "bg-gray-300 w-2 h-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop / Tablet: Grid - 2 rows, 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-[16px] w-full">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-[15px] border-[1px] border-[#DDD] overflow-hidden flex flex-col gap-3 md:gap-[12px] pb-6 md:pb-[24px] pt-4 md:pt-[16px] px-4 md:px-[16px]"
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
                <h4 className="heading-four w-full">
                  {feature.title}
                </h4>
                <p className="paragraph-regular !text-start w-full">
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