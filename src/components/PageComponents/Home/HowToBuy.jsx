import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../../ui/carousel';

export default function HowToBuy({
  steps = [],
  title = 'How to Buy',
  subtitle = 'Follow the guide below to purchase $PREDICT during the presale. The process supports both crypto and card payments and is designed to be quick, secure, and easy to follow.',
  buyButtonText = 'BUY $PREDICT',
  buyButtonLink = '/buy',
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

  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section 
      id="how-to-buy"
      className="bg-white py-12 md:py-20 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-[9px] items-center text-center mb-12 md:mb-12">
          <h2 className="heading-two">
            {title}
          </h2>
          <p className="paragraph-regular max-w-[703px]">
            {subtitle}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-12 flex flex-col items-center gap-6">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {steps.map((step) => (
                <CarouselItem key={step.id} className="pl-3">
                  <div className="bg-white rounded-[10px] border-[1px] border-[#DDD] 
                  p-4 flex flex-col gap-4 min-h-[343px]">
                    {/* Image Container */}
                    <div className="h-[160px] rounded-[15px] overflow-hidden relative bg-gray-100">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-3">
                      {/* Step Indicator */}
                     <div className="flex items-center gap-2">
                     <div className="bg-white border border-[#0080ED] rounded-full px-3 py-[3px] w-fit">
                        <span className="text-[#000] text-[12px] !leading-[12px] !font-medium">
                          {step.stepNumber}
                        </span>
                      </div>

                      {/* Heading */}
                      <h3 className="text-[#000] !font-[500]">
                        {step.title}
                      </h3>
                     </div>

                      {/* Description */}
                      <p className="text-[#000] text-sm leading-[22px] tracking-[0.28px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  current === index
                    ? "bg-[#0080ED] w-2 h-2"
                    : "bg-gray-300 w-2 h-2"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-[21px] mb-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-lg shadow-md p-[26px] flex flex-col gap-[19px]"
            >
              {/* Image Container */}
              <div className="h-[186px] rounded-[15px] overflow-hidden relative bg-gray-100">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2">
                {/* Step Header */}
                <div className="flex gap-3 items-center">
                  <div className="bg-[#0080ED] rounded-full w-[70px] h-[70px] flex items-center justify-center shrink-0">
                    <span className="text-white text-sm leading-[22px] tracking-[0.28px] whitespace-nowrap">
                      {step.stepNumber}
                    </span>
                  </div>
                  <h3 className="text-[#000] text-2xl leading-8">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base leading-6 tracking-[0.32px] whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
          <Link
            to={buyButtonLink}
            className="btn_primary w-full sm:w-[232px] flex items-center justify-center shadow-md"
          >
            {buyButtonText}
          </Link>
          <Link
            to="/support"
            className="bg-white border max-md:text-center border-gray-300 text-[#000] rounded-full px-[60px] py-3 text-sm font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-md"
          >
            NEED SUPPORT?
          </Link>
        </div>
      </div>
    </section>
  );
}