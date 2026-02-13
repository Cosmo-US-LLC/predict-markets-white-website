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
        <div className="md:hidden mb-12">
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
                  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-[19px]">
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
                    <div className="flex flex-col gap-2">
                      {/* Step Header */}
                      <div className="flex gap-3 flex-col">
                        <div className="bg-[#0080ED] rounded-full w-[70px] h-[70px] flex items-center justify-center">
                          <span className="text-white text-sm leading-[22px] tracking-[0.28px] whitespace-nowrap">
                            {step.stepNumber}
                          </span>
                        </div>
                        <h3 className="text-[#000] text-xl leading-7">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-sm leading-[22px] h-[90px] tracking-[0.28px]">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={buyButtonLink}
            className="btn_primary w-full sm:w-[232px] flex items-center justify-center"
          >
            {buyButtonText}
          </Link>
          <Link
            to="/support"
            className="bg-white border border-gray-300 text-[#000] rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto"
          >
            Need Support?
          </Link>
        </div>
      </div>
    </section>
  );
}