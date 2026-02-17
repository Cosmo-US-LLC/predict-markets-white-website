import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../ui/carousel';

import infoIcon from "../../../assets/images/home/get_extra_rewards/infoIcon.webp";


export default function GetExtraRewards({
  title = "Get Bonus Rewards Starting From $1,000",
  subtitle = "Get more $PREDICT and unlock higher rewards by joining the Elite PREDICT Members Club. Access starts from $1,000 and is available only during the presale.",
  sliderLabel = "How much do you want to spend?",
  sliderValue = "$56,256",
  sliderMin = 1000,
  sliderMax = 100000,
  membershipCards = [],
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
  disclaimer = "(You will get the membership NFT automatically when you buy $PREDICT)",
}) {
  const [api, setApi] = useState();
  const [sliderValueState, setSliderValueState] = useState(1000);

  // Calculate slider percentage
  const sliderPercentage = ((sliderValueState - sliderMin) / (sliderMax - sliderMin)) * 100;

  // Find matching membership card based on slider value
  const getMatchingCard = () => {
    const sortedCards = [...membershipCards].sort((a, b) => a.minAmount - b.minAmount);
    for (let i = sortedCards.length - 1; i >= 0; i--) {
      if (sliderValueState >= sortedCards[i].minAmount) {
        return sortedCards[i];
      }
    }
    return sortedCards[0] || null;
  };

  const matchingCard = getMatchingCard();

  // Update slider value display
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValueState(value);
    
    // Find and scroll to matching card
    const sortedCards = [...membershipCards].sort((a, b) => a.minAmount - b.minAmount);
    const cardIndex = sortedCards.findIndex((card, index) => {
      const nextCard = sortedCards[index + 1];
      return value >= card.minAmount && (!nextCard || value < nextCard.minAmount);
    });
    
    if (cardIndex !== -1 && api) {
      api.scrollTo(cardIndex);
    }
  };

  if (!membershipCards || membershipCards.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-12 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Side - Static Slider Section */}
          <div className="flex flex-col gap-6 flex-1 max-w-[597px] w-full">
            {/* Slider */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 max-w-[640px] w-full mb-0">
                <h2 className="heading-two">
                  {title}
                </h2>
                <p className="paragraph-regular !text-start">
                  {subtitle}
                </p>
              </div>
            <div>
            <div className="flex items-center justify-between w-full">
                <p className="text-[#000] !font-[600] paragraph-medium">
                  {sliderLabel}
                </p>
                <p className="text-[#000] !font-[600] paragraph-medium text-right">
                  {formatCurrency(sliderValueState)}
                </p>
              </div>
              <div className="relative w-full mt-3">
                {/* Slider Track */}
                <div className="relative w-full h-[18.347px] bg-gray-200 border border-gray-300 rounded-[76.444px] overflow-hidden">
                  {/* Filled Portion */}
                  <div
                    className="absolute left-0 top-0 h-full bg-[#0080ED] rounded-bl-[76.444px] rounded-tl-[76.444px]"
                    style={{ width: `${sliderPercentage}%` }}
                  />
                </div>
                {/* Slider Thumb */}
                <input
                  type="range"
                  min={sliderMin}
                  max={sliderMax}
                  value={sliderValueState}
                  onChange={handleSliderChange}
                  className="absolute top-1/2 -translate-y-1/2 w-full h-[30.578px] appearance-none bg-transparent cursor-pointer z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[5.644px] [&::-webkit-slider-thumb]:h-[30.578px] [&::-webkit-slider-thumb]:bg-[#0080ED] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-[5.644px] [&::-moz-range-thumb]:h-[30.578px] [&::-moz-range-thumb]:bg-[#0080ED] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                  style={{
                    left: 0,
                  }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 bg-[#0080ED] rounded-full w-[5.644px] h-[30.578px] pointer-events-none z-20"
                  style={{ left: `calc(${sliderPercentage}% - 2.822px)` }}
                />
              </div>
            </div>
            </div>
          </div>

          {/* Right Side - Carousel with Membership Cards Only */}
          <div className="flex-1 w-full lg:max-w-[650px]">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {membershipCards.map((card, index) => (
                  <CarouselItem key={card.id || index} className="basis-full">
                    <div 
                      className="p-6 flex flex-col lg:flex-row gap-6 items-center min-h-[349px] relative overflow-hidden"
                      style={{
                        borderRadius: '15px',
                        border: '0.764px solid rgba(255, 255, 255, 0.10)',
                        background: 'radial-gradient(212.58% 103.8% at 83.43% 21.95%, rgba(255, 255, 255, 0.80) 0%, rgba(222, 222, 222, 0.45) 50.48%, rgba(247, 247, 247, 0.80) 100%)',
                        backdropFilter: 'blur(7.644444465637207px)',
                      }}
                    >
                      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-6 items-center">
                        {/* Left Side - Membership Info */}
                        <div className="flex flex-col gap-5 w-full lg:w-[294px]">
                          <div className="flex flex-col gap-2.5">
                            <h3 className="heading-three !text-start">
                              {card.tier}
                              <br />
                              MEMBERSHIP
                            </h3>
                            <p className="text-[#000] text-base font-normal leading-[1.4] tracking-[0.32px]">
                              When you buy $PREDICT for {formatCurrency(card.minAmount)}
                            </p>
                          </div>

                         
                            {card.benefits && card.benefits.map((benefit, idx) => {
                            // Check if benefit is included (first 2 for Bronze, more for higher tiers)
                            // For Bronze: first 2 are included, rest are excluded
                            const isIncluded = card.tier === 'Bronze' ? idx < 2 : 
                                              card.tier === 'Silver' ? idx < 3 :
                                              card.tier === 'Gold' ? idx < 4 :
                                              card.tier === 'Diamond' ? idx < 5 : true;
                            
                            return (
                              <div key={idx} className="flex gap-2 items-center">
                                <div 
                                  className="rounded-[3.058px] w-[19.876px] 
                                  h-[19.876px] flex items-center justify-center shrink-0"
                                  style={{
                                    background: isIncluded ? '#E6F6FF' : 'transparent',
                                    border: isIncluded ? '0.764px solid rgba(255, 255, 255, 0.51)' : '0.764px solid #DDD',
                                  }}
                                >
                                  {isIncluded ? (
                                    <Check className="w-3 h-3 text-[#0080ED]" strokeWidth={3} />
                                  ) : (
                                    <X className="w-3 h-3 text-[#000]" strokeWidth={3} />
                                  )}
                                </div>
                                <div className="flex gap-1 items-start flex-1">
                                  <h5 className="text-[#000] text-[14px] font-medium leading-[1.1]">
                                    {benefit}
                                  </h5>
                                  <img
                                    src={infoIcon}
                                    alt=""
                                    className="w-[14.183px] h-[14.183px] shrink-0"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                    }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Right Side - Benefits */}
                        <div className="flex flex-col gap-3 flex-1 w-full lg:w-[353px]">
                        {card.cardImage && (
                            <div className="bg-gray-800 border border-gray-600 rounded-[15px] h-[174px] w-full relative overflow-hidden shadow-lg">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                  src={card.cardImage}
                                  alt={`${card.tier} membership`}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {/* Buy Button */}
                          <div className="flex flex-col gap-[18px] items-center mt-4">
                            <Link
                              to={buyButtonLink}
                              className="btn_primary w-full max-w-[361.711px] h-[52.988px] flex items-center justify-center"
                            >
                              {buyButtonText}
                            </Link>
                            <p className="text-gray-600 text-sm md:text-base font-normal leading-[1.11] text-center tracking-[-0.14px]">
                              {disclaimer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}