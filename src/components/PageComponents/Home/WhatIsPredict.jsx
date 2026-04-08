import { Link } from "react-router-dom";
import { scrollToWallet } from "../../../lib/utils";
import checkIcon from "../../../assets/images/home/what_is_predict/what_is_predict_check.webp";
import heroImage from "../../../assets/images/home/what_is_predict/what_is_predict_coin_image2.webp";
import ufcLogo from "../../../assets/images/home/what_is_predict/ufc.webp";
import nflLogo from "../../../assets/images/home/what_is_predict/nfl.webp";
import championsLeagueLogo from "../../../assets/images/home/what_is_predict/champions-league.webp";
import nbaLogo from "../../../assets/images/home/what_is_predict/nba.webp";
import mlbLogo from "../../../assets/images/home/what_is_predict/mlb.webp";
import premierLeagueLogo from "../../../assets/images/home/what_is_predict/premier-league.webp";

const partnerLogos = [
  { src: ufcLogo, alt: "UFC" },
  { src: nflLogo, alt: "NFL" },
  { src: championsLeagueLogo, alt: "UEFA Champions League" },
  { src: nbaLogo, alt: "NBA" },
  { src: mlbLogo, alt: "MLB" },
  { src: premierLeagueLogo, alt: "Premier League" },
];

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
  const descriptionParagraphs = description.includes("\n\n")
    ? description.split("\n\n")
    : description.split(/(?=Holding \$PREDICT)/);

  return (
    <section
      id="what-is-predictmarkets"
      className="w-full bg-[#EAF5FF] px-4 py-12 md:px-6 md:py-16"
    >
      <div className="mx-auto w-full max-w-[1280px] overflow-hidden rounded-[28px] border border-[#D9D9D9] bg-white shadow-[0_10px_30px_rgba(4,25,54,0.06)] md:rounded-[36px]">
        <div className="grid gap-8 px-6 pb-6 pt-6 md:px-12 md:pb-8 md:pt-10 lg:grid-cols-[minmax(0,0.98fr)_minmax(460px,1.02fr)] lg:items-center lg:gap-4 lg:pb-12 xl:grid-cols-[minmax(0,0.95fr)_minmax(520px,1.05fr)]">
          <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
            <h2 className="heading-two max-w-[520px] text-left text-black">
              {title}
            </h2>

            <div className="flex max-w-[610px] flex-col gap-6">
              {descriptionParagraphs.filter(Boolean).map((paragraph, index) => (
                <p
                  key={index}
                  className="paragraph-regular !text-start !text-[16px] !leading-[1.45] text-black"
                >
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <div className="flex w-full max-w-[620px] flex-col gap-3 md:gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img
                    src={checkIcon}
                    alt=""
                    className="mt-1 h-[18px] w-[18px] shrink-0 object-contain"
                    aria-hidden="true"
                  />
                  <p className="heading-four !text-start !text-[18px] !leading-[1.25] text-black">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row sm:flex-wrap">
              <button
                onClick={() => scrollToWallet(140)}
                className="btn_primary min-h-[52px] min-w-[266px] !rounded-[8px] !px-[24px] !py-[12px] !text-[16px]"
              >
                {buyButtonText}
              </button>

              <Link
                to={secondaryButtonLink}
                className="flex min-h-[52px] min-w-[266px] items-center justify-center rounded-[8px] border border-black bg-white px-[24px] py-[12px] text-[16px] font-semibold text-black transition-colors"
              >
                {secondaryButtonText}
              </Link>
            </div>

            <div className="flex items-center justify-center lg:hidden">
              <div className="relative flex w-full h-[300px] max-w-[560px] items-center justify-center">
                <img
                  src={heroImage}
                  alt="PredictMarkets app preview"
                  className="h-auto w-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>

          <div className="order-1 hidden items-center justify-center lg:order-2 lg:flex lg:justify-end">
            <div className="relative flex w-full h-[300px] max-w-[560px] items-center justify-center lg:max-w-[620px] lg:translate-x-3 xl:max-w-[660px]">
              <img
                src={heroImage}
                alt="PredictMarkets app preview"
                className="h-auto w-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#EEEEEE] bg-[#FAFAFA] px-4 py-4 md:px-8 md:py-5">
          <div className="grid grid-cols-3 items-center gap-x-6 gap-y-4 md:grid-cols-6 md:gap-x-8 md:gap-y-5">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-[58px] items-center justify-center md:h-[76px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full max-w-[150px] object-contain opacity-80 grayscale md:max-w-[168px]"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
