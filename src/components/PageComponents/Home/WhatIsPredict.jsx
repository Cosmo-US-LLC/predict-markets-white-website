import { scrollToWallet } from '../../../lib/utils';
import coinImage from "../../../assets/images/home/what_is_predict/what_is_predict_coin_image2.webp";
import ellipseImage from "../../../assets/images/home/what_is_predict/what_is_predict_ellipse.png";
import { Link } from 'react-router-dom';


export default function WhatIsPredict({
  title = "What is $PREDICT?",
  description = "The $PREDICT token gives holders access to a decentralised prediction market ecosystem, enabling anonymous (no KYC), transparent, and global peer-to-peer predictions on real world events such as elections, sports, news, and much more.\n\nHolding $PREDICT unlocks real utility and exclusive early advantages across the platform.",
  benefits = [
    "Daily USDT Staking Income From Platform Revenue",
    "Lower Fees And Exclusive Membership Perks",
    "Only Payment Method With Cashback",
    "Weekly Bonuses And Free Games",
  ],
  buyButtonText = "BUY $PREDICT",
  buyButtonLink = "#wallet",
  secondaryButtonText = "Visit Platform (Beta)",
  secondaryButtonLink = "/what-is-predictmarkets",
}) {
  // Split description into paragraphs
  const descriptionParagraphs = description.split('\n\n');

  return (
    <section id="what-is-predictmarkets" className="relative w-full overflow-hidden 
    flex items-center justify-center px-4 md:px-0 py-12 md:py-16 bg-gradient-to-br
     from-[#E6F2FF] to-[#F0F8FF]">
      {/* Main Card Container */}
      <div className="relative overflow-hidden z-10 bg-white rounded-2xl md:rounded-[44px]
       w-full max-w-[1280px] mx-auto px-6 md:px-12 py-8 md:py-12 flex
        flex-col md:flex-row gap-2 md:gap-6 items-center border-[1px] border-[#9C9C9C]">
        {/* Left Content */}
        <div className="flex flex-col gap-6 items-start z-10 !max-w-[690px] md:min-w-[690px] !w-[100%]">
          {/* Title */}
          <h2 className="heading-two">
            {title}
          </h2>

          {/* Description Paragraphs */}
          <div className="w-full">
            {descriptionParagraphs.map((paragraph, index) => (
              <p key={index} className="!text-start md:!text-[18px] max-w-[661px] paragraph-regular">
The $PREDICT token gives holders access to a decentralised prediction market
 ecosystem, enabling anonymous (no KYC), transparent,
  and global peer-to-peer predictions on real world events such as elections,
   sports, news, and much more. <br /><br />
Holding $PREDICT unlocks real utility and exclusive early advantages across the platform.
              </p>
            ))}
          </div>

          {/* Benefits List */}
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-center">
                {/* Check Icon - Blue */}
                <div 
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: '19.876px',
                    height: '19.876px',
                    padding: '1.938px 2.587px 2.649px 2px',
                    borderRadius: '3.058px',
                    border: '0.764px solid rgba(255, 255, 255, 0.51)',
                    background: '#E6F6FF'
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.63362 12.7521C6.63183 12.7521 6.62974 12.7521 6.62795 12.7521C6.55389 12.7506 6.48402 12.7189 6.43385 12.6646L1.31386 7.09726C1.22607 7.00171 1.21801 6.85778 1.29475 6.75296C1.3715 6.64845 1.51125 6.61262 1.6289 6.66756L6.315 8.86176C6.35442 8.88027 6.401 8.87131 6.43116 8.83996L13.5793 1.36901C13.6761 1.26778 13.8343 1.25673 13.9442 1.34392C14.0541 1.43112 14.0795 1.58759 14.0027 1.70494L6.89222 12.5977C6.88207 12.6135 6.87012 12.6278 6.85698 12.6413L6.82563 12.6726C6.77457 12.7234 6.70529 12.7521 6.63362 12.7521Z" fill="#0080ED"/>
                  </svg>
                </div>
                {/* Benefit Text */}
                <h4 className="text-[#000] md:!text-[18px] !leading-[120%] capitalize heading-four !leading-[120%]">
                  {benefit}
                </h4>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto'>
            <button
              onClick={scrollToWallet}
              className="btn_primary flex items-center !px-[65px] justify-center"
            >
              {buyButtonText}
            </button>

            <Link
              to={secondaryButtonLink}
              className="Helvetica flex items-center justify-center px-[10px] py-3 rounded-full border-[1px] border-[#000] bg-white text-[#000]  md:text-[18px] font-[500] uppercase hover:bg-gray-50 transition-colors "
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>

        {/* Right Visual Content */}
        <div className=" w-full z-10 flex items-center max-md:h-[420px] justify-center">
          <div className=" !w-full md:absolute absolute -bottom-3  md:-bottom-30 md:-mr-8 flex items-center 
          justify-center md:!min-w-[720px] min-w-[460px] ">
            <img
              src={coinImage}
              alt="PredictMarkets Coin"
              className="!w-full md:max-w-[720px]  h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}