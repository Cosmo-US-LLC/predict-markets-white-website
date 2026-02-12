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
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section 
      id="how-to-buy"
      className="relative overflow-hidden bg-white py-12 md:py-20"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col gap-[9px] items-center text-center mb-12 md:mb-12">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2.56px] capitalize text-black">
            {title}
          </h2>
          <p className="text-[#4b4b4b] text-base md:text-[20px] leading-[22.4px] md:leading-[28px] tracking-[0.32px] max-w-[703px]">
            {subtitle}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mb-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-3">
              {steps.map((step) => (
                <CarouselItem key={step.id} className="pl-3">
                  <div className="bg-white rounded-[15px] border border-[#e5e5e5] p-4 flex flex-col gap-[19px]">
                    {/* Image Container */}
                    <div 
                        className="h-[160px] rounded-[15px] overflow-hidden relative bg-[#0080ED]"
                    >
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
                      <div className="flex gap-3 flex-col">
                        <div className="border border-[#0080ED] max-w-[80px] rounded-[41.006px] px-3 py-1 bg-white">
                          <span className="text-[13px] font-normal leading-[22px] tracking-[0.28px] text-[#0080ED] whitespace-nowrap">
                            {step.stepNumber}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium leading-7 capitalize text-black">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-[#4b4b4b] text-sm leading-[22px] tracking-[0.28px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-[21px] mb-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-[15px] border border-[#e5e5e5] p-[26px] flex flex-col gap-[19px]"
            >
              {/* Image Container */}
              <div 
                className="h-[186px] rounded-[15px] overflow-hidden relative bg-[#0080ED]"
              >
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
                  <div className="border border-[#0080ED] rounded-[41.006px] px-3 py-1 bg-white">
                    <span className="text-[13px] font-normal leading-[22px] tracking-[0.28px] text-[#0080ED] whitespace-nowrap">
                      {step.stepNumber}
                    </span>
                  </div>
                  <h3 className="text-2xl font-medium leading-8 capitalize text-black">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#4b4b4b] text-base leading-6 tracking-[0.32px] whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to={buyButtonLink}
            className="btn_primary w-[232px] flex items-center justify-center text-sm md:text-base"
          >
            {buyButtonText}
          </Link>
          <button
            type="button"
            className="w-[200px] rounded-full border border-black bg-white px-6 py-3 text-sm font-medium leading-6 text-black shadow-[0_0_0_0.5px_rgba(0,0,0,0.08)] hover:bg-black/5 transition-colors"
          >
            Need Support?
          </button>
        </div>
      </div>
    </section>
  );
}