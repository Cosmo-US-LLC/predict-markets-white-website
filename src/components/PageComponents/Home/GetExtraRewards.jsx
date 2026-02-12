import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../../ui/carousel';

import checkIcon from "../../../assets/images/home/get_extra_rewards/golden_check.webp";
import infoIcon from "../../../assets/images/home/get_extra_rewards/infoIcon.webp";


export default function GetExtraRewards({
  title = "Get Extra Rewards Starting From $1,000",
  subtitle = "Not only will you get more $PREDICT, but you'll also unlock greater rewards! Enroll in the exclusive Elite PREDICT Members Club and enjoy incredible benefits starting from as little as $1000. These advantages are exclusively available during the presale.",
  sliderLabel = "How much do you want to spend?",
  sliderValue = "$56,256",
  sliderMin = 1000,
  sliderMax = 100000,
  membershipCards = [],
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "/buy",
  disclaimer = "(You will get the membership NFT automatically when you purchase $PREDICT)",
}) {
  const [api, setApi] = useState();
  const [sliderValueState, setSliderValueState] = useState(56256);

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
    <section className="bg-white py-12 md:py-[60px] md:px-0 px-4">
      <div className="max-w-[1220px] mx-auto rounded-[38px] border border-[#e5e5e5] bg-white p-4 md:p-10">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Side - Static Slider Section */}
          <div className="flex flex-col gap-6 flex-1 max-w-[597px] w-full">
            {/* Slider */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 max-w-[640px] w-full mb-10 md:mb-4">
                <h2 className="heading-two capitalize md:!leading-[48px] !leading-[34px] text-black">
                  {title}
                </h2>
                <p className="text-[#4b4b4b] text-base md:text-[18px] font-normal leading-[24px] tracking-[0.32px]">
                  {subtitle}
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-black text-base font-bold leading-6 tracking-[0.32px]">
                  {sliderLabel}
                </p>
                <p className="text-black text-base font-bold leading-6 tracking-[0.32px] text-right">
                  {formatCurrency(sliderValueState)}
                </p>
              </div>
              <div className="relative w-full">
                {/* Slider Track */}
                <div className="relative w-full h-[18.347px] bg-[rgba(0,0,0,0.04)] border-[0.764px] border-[rgba(0,0,0,0.08)] rounded-[76.444px] overflow-hidden">
                  {/* Filled Portion */}
                  <div
                    className="absolute left-0 top-0 h-full bg-[#0080ED] rounded-bl-[76.444px] rounded-tl-[76.444px]"
                    style={{ width: `${sliderPercentage}%` }}
                  />
                  {/* Inner Shadow Effects */}
                  <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-3.058px_7.644px_0px_rgba(255,255,255,0.58),inset_0px_3.058px_45.867px_0px_rgba(255,255,255,0.08),inset_0px_3.058px_14.524px_0px_rgba(255,255,255,0.25)]" />
                </div>
                {/* Slider Thumb */}
                <input
                  type="range"
                  min={sliderMin}
                  max={sliderMax}
                  value={sliderValueState}
                  onChange={handleSliderChange}
                  className="absolute top-1/2 -translate-y-1/2 w-full h-[30.578px] appearance-none bg-transparent cursor-pointer z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[5.644px] [&::-webkit-slider-thumb]:h-[30.578px] [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-[5.644px] [&::-moz-range-thumb]:h-[30.578px] [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
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
                    <div className="rounded-[15.289px] border border-[#e5e5e5] bg-white p-6 flex flex-col lg:flex-row gap-[40px] items-center min-h-[349px] relative overflow-hidden">
                      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-6 items-center">
                        {/* Left Side - NFT Card */}
                        <div className="flex flex-col gap-5 w-full lg:w-[294px]">
                          <div className="flex flex-col gap-2.5">
                            <h3 className="text-2xl md:text-[30px] font-medium leading-[1.1] uppercase text-black">
                              {card.tier}
                              <br />
                              MEMBERSHIP
                            </h3>
                            <p className="text-[16px] md:text-[18px] font-normal leading-[1.4] tracking-[0.32px] text-[#4b4b4b]">
                              When you buy $PREDICT for {formatCurrency(card.minAmount)}
                            </p>
                          </div>

                          {/* NFT Card with single image */}
                          <div
                            className="bg-black rounded-[15px] md:h-[174px] h-[157px] w-full relative overflow-hidden shadow-lg"
                            style={{ boxShadow: `0px 0px 10.1px 0px ${card.shadowColor}` }}
                          >
                            {/* Background Gradient */}
                            {/* <div
                              className="absolute inset-0 rounded-[13px]"
                              style={{ backgroundImage: card.nftBackgroundGradient }}
                            /> */}

                            {/* Single Card Image */}
                            {card.cardImage && (
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
                            )}

                            {/* Member Text */}
                            {/* <div className="absolute left-[19.5px] bottom-[19.5px] text-white text-base font-medium leading-[1.1] uppercase">
                              <p className="mb-0">{card.tier}</p>
                              <p>Member</p>
                            </div> */}
                          </div>
                        </div>

                        {/* Right Side - Benefits */}
                        <div className="flex flex-col gap-3 flex-1 w-full lg:w-[353px]">
                          {card.benefits && card.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-3 items-center">
                              <div className="bg-white border border-[#0080ED] rounded-[3.058px] w-[19.876px] h-[19.876px] flex items-center justify-center shrink-0">
                                <img
                                  src={checkIcon}
                                  alt=""
                                  className="w-3 h-3"
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              </div>
                              <div className="flex gap-1 items-start flex-1">
                                <h5 className="text-[14px] font-medium leading-[1.3] capitalize text-black">
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
                          ))}

                          {/* Buy Button */}
                          <div className="flex flex-col gap-[18px] items-center mt-4">
                            <Link
                              to={buyButtonLink}
                              className="btn_primary w-full max-w-[361.711px] h-[52.988px] flex items-center justify-center text-sm md:text-base"
                            >
                              {buyButtonText}
                            </Link>
                            <p className="text-[#4b4b4b] text-sm md:text-base font-normal leading-[1.3] text-center tracking-[-0.14px]">
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