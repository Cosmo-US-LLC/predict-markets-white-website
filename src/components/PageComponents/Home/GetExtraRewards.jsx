import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import { scrollToWallet } from "../../../lib/utils";

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
  buyButtonLink = "#wallet",
  disclaimer = "(You will get the membership NFT automatically when you buy $PREDICT)",
}) {
  const [api, setApi] = useState();
  const [sliderValueState, setSliderValueState] = useState(1000);

  // Calculate slider percentage
  const sliderPercentage =
    ((sliderValueState - sliderMin) / (sliderMax - sliderMin)) * 100;

  // Find matching membership card based on slider value
  const getMatchingCard = () => {
    const sortedCards = [...membershipCards].sort(
      (a, b) => a.minAmount - b.minAmount,
    );
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
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValueState(value);

    // Find and scroll to matching card
    const sortedCards = [...membershipCards].sort(
      (a, b) => a.minAmount - b.minAmount,
    );
    const cardIndex = sortedCards.findIndex((card, index) => {
      const nextCard = sortedCards[index + 1];
      return (
        value >= card.minAmount && (!nextCard || value < nextCard.minAmount)
      );
    });

    if (cardIndex !== -1 && api) {
      api.scrollTo(cardIndex);
    }
  };

  if (!membershipCards || membershipCards.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#F7FCFF] py-12 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-2">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Left Side - Static Slider Section */}
          <div className="flex flex-col gap-6 flex-1 max-w-[597px] w-full">
            {/* Slider */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-8 md:max-w-[640px] max-w-[370px] w-full mb-0">
                <h2 className="heading-two max-md:!text-center">{title}</h2>
                <p className="paragraph-regular md:!text-start !text-center">
                  {subtitle}
                </p>
              </div>
              <div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#000] !font-[600] paragraph-medium">
                    {sliderLabel}
                  </p>
                  <p className="text-[#006AC6] !font-[600] paragraph-medium text-right">
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
                      className="md:p-6 max-md:px-[16px] max-md:py-[20px] flex rounded-[12px] md:rounded-[15px] flex-col
                       lg:flex-row gap-6 items-center min-h-[349px] relative overflow-hidden"
                      style={{
                        border: "0.764px solid rgba(255, 255, 255, 0.10)",
                        background:
                          "radial-gradient(212.58% 103.8% at 83.43% 21.95%, rgba(255, 255, 255, 0.80) 0%, rgba(222, 222, 222, 0.45) 50.48%, rgba(247, 247, 247, 0.80) 100%)",
                        backdropFilter: "blur(7.644444465637207px)",
                      }}
                    >
                      <div className="relative z-10 w-full flex flex-col lg:flex-row gap-6 ">
                        {/* Left Side - Membership Info */}
                        <div className="flex items-start flex-col md:gap-3 gap-3 w-full lg:w-[294px]">
                          <div className="flex flex-col gap-2.5 pb-4">
                            <h3 className="heading-three !text-start">
                              {card.tier} <br className="max-md:hidden" />
                              MEMBERSHIP
                            </h3>
                            <p className="text-[#000] text-base font-normal leading-[1.4] tracking-[0.32px]">
                              When you buy $PREDICT for{" "}
                              {formatCurrency(card.minAmount)}
                            </p>
                          </div>

                          {card.cardImage && (
                            <div
                              className="md:hidden mt-2 mb-2 block rounded-[15px] min-h-[224px] w-full 
                            relative overflow-hidden "
                            >
                              <div
                                className="absolute inset-0 flex items-center 
                              justify-center w-full "
                              >
                                <img
                                  src={card.cardImage}
                                  alt={`${card.tier} membership`}
                                  className="w-full h-full object-contain rounded-[15px]"
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {card.benefits &&
                            card.benefits.map((benefit, idx) => {
                              // Check if benefit is included (first 2 for Bronze, more for higher tiers)
                              // For Bronze: first 2 are included, rest are excluded
                              const isIncluded =
                                card.tier === "Bronze"
                                  ? idx < 2
                                  : card.tier === "Silver"
                                    ? idx < 3
                                    : card.tier === "Gold"
                                      ? idx < 4
                                      : card.tier === "Diamond"
                                        ? idx < 5
                                        : true;

                              return (
                                <div
                                  key={idx}
                                  className="flex gap-3 max-md:gap-2 items-center"
                                >
                                  <div
                                    className="rounded-[3.058px] w-[19.876px] 
                                  h-[19.876px] flex items-center justify-center shrink-0"
                                  >
                                    {isIncluded ? (
                                      <>
                                        <div className="p-[2px] bg-[#fff] rounded-[3.058px]">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                          >
                                            <path
                                              d="M6.63362 12.7521C6.63183 12.7521 6.62974 12.7521 6.62795 12.7521C6.55389 12.7506 6.48402 12.7189 6.43385 12.6646L1.31386 7.09726C1.22607 7.00171 1.21801 6.85778 1.29475 6.75296C1.3715 6.64845 1.51125 6.61262 1.6289 6.66756L6.315 8.86176C6.35442 8.88027 6.401 8.87131 6.43116 8.83996L13.5793 1.36901C13.6761 1.26778 13.8343 1.25673 13.9442 1.34392C14.0541 1.43112 14.0795 1.58759 14.0027 1.70494L6.89222 12.5977C6.88207 12.6135 6.87012 12.6278 6.85698 12.6413L6.82563 12.6726C6.77457 12.7234 6.70529 12.7521 6.63362 12.7521Z"
                                              fill="#0080ED"
                                            />
                                          </svg>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className="bg-[#fff] rounded-[3.058px]">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                          >
                                            <path
                                              d="M6.10156 13.1169L13.1736 6.04688M6.10156 6.04688L13.1736 13.1169"
                                              stroke="black"
                                              stroke-width="1.5"
                                              stroke-linecap="round"
                                            />
                                          </svg>
                                        </div>
                                      </>
                                    )}
                                  </div>
                                  <div className="flex gap-1 items-start flex-1">
                                    <h5 className="text-[#000] text-[14px] font-medium leading-[1.1]">
                                      {benefit}
                                    </h5>
                                    <div className="">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          d="M7.64453 4.93701V8.28146"
                                          stroke="black"
                                          stroke-width="1.14667"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M13.429 5.4659V9.82321C13.429 10.5367 13.0468 11.1992 12.4288 11.5623L8.64484 13.7474C8.02691 14.1041 7.26245 14.1041 6.63816 13.7474L2.85416 11.5623C2.23623 11.2056 1.854 10.5431 1.854 9.82321V5.4659C1.854 4.75241 2.23623 4.08987 2.85416 3.72676L6.63816 1.54173C7.25608 1.18498 8.02054 1.18498 8.64484 1.54173L12.4288 3.72676C13.0468 4.08987 13.429 4.74604 13.429 5.4659Z"
                                          stroke="black"
                                          stroke-width="1.14667"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M7.64453 10.3201V10.3838"
                                          stroke="black"
                                          stroke-width="1.52889"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>

                        {/* Right Side - Benefits */}
                        <div className="flex flex-col gap-3 flex-1 w-full lg:w-[353px]">
                          {card.cardImage && (
                            <div className="bg-gray-800 hidden md:block border border-gray-600 rounded-[15px] h-[174px] w-full relative overflow-hidden shadow-lg">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <img
                                  src={card.cardImage}
                                  alt={`${card.tier} membership`}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                />
                              </div>
                            </div>
                          )}

                          {/* Buy Button */}
                          <div className="flex flex-col gap-[18px] items-center mt-2">
                            <button
                              onClick={scrollToWallet}
                              className="btn_primary w-full max-w-[361.711px] h-[52.988px] flex items-center justify-center"
                            >
                              {buyButtonText}
                            </button>
                            <p className="text-[#000] text-sm md:text-[14px] font-normal leading-[157.143%] text-center tracking-[-0.14px]">
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
