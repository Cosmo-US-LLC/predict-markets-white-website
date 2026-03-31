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
        <div className="grid gap-8 px-6 pb-6 pt-6 md:px-12 md:pb-8 md:pt-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,0.98fr)] lg:items-center lg:gap-8">
          <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
            <h2 className="heading-two max-w-[520px] text-left text-black">
              {title}
            </h2>

            <div className="flex max-w-[610px] flex-col gap-6">
              {descriptionParagraphs.filter(Boolean).map((paragraph, index) => (
                <p
                  key={index}
                  className="paragraph-regular !text-start !text-[18px] !leading-[1.45] text-black"
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
                className="btn_primary min-h-[58px] min-w-[266px] !rounded-[999px] !px-8 shadow-[0_0_0_2px_rgba(255,255,255,0.8)_inset,0_0_24px_rgba(0,128,237,0.28)]"
              >
                {buyButtonText}
              </button>

              <Link
                to={secondaryButtonLink}
                className="flex min-h-[58px] min-w-[266px] items-center justify-center rounded-[999px] border border-black px-8 text-center text-[16px] font-[600] uppercase leading-none text-black transition-colors hover:bg-black hover:text-white"
              >
                {secondaryButtonText}
              </Link>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative flex w-full max-w-[520px] items-center justify-center">
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

        <div className="border-t border-[#EEEEEE] bg-[#FAFAFA] px-4 py-6 md:px-8 md:py-8">
          <div className="grid grid-cols-3 items-center gap-x-6 gap-y-6 md:grid-cols-6 md:gap-x-8">
            {partnerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex min-h-[64px] items-center justify-center md:min-h-[84px]"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-[46px] w-auto object-contain opacity-80 grayscale md:max-h-[72px]"
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
