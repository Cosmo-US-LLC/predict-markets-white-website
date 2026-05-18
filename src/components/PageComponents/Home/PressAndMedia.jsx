import { useState, useRef } from "react";
import logoCoinMarketCap from "../../../assets/images/home/new-section/logo-coinmarketcap.webp";
import logoCryptoNews from "../../../assets/images/home/new-section/logo-cryptonews.webp";
import logoBlockchainReporter from "../../../assets/images/home/new-section/logo-blockchain-reporter.webp";

const pressCards = [
  {
    id: "cmc",
    outlet: "CoinMarketCap",
    logo: logoCoinMarketCap,
    logoMaxWidthMobile: 200,
    logoMaxWidthDesktop: 230,
    dividerStyle: "gray",
    quote: `"PredictMarkets is bringing real-world event forecasting on-chain, combining decentralised prediction markets with a token model designed to reward long-term community participation."`,
  },
  {
    id: "cryptonews",
    outlet: "CryptoNews.com",
    logo: logoCryptoNews,
    logoMaxWidthMobile: 200,
    logoMaxWidthDesktop: 230,
    dividerStyle: "gray",
    quote: `"By turning politics, sports, finance, and global news into transparent peer-to-peer markets, PredictMarkets aims to make crowd-powered probabilities more accessible to crypto users worldwide."`,
  },
  {
    id: "blockchain-reporter",
    outlet: "Blockchain Reporter",
    logo: logoBlockchainReporter,
    logoMaxWidthMobile: 250,
    logoMaxWidthDesktop: 330,
    dividerStyle: "gray",
    quote: `"With $PREDICT at the centre of its ecosystem, PredictMarkets is positioning itself as a next-generation prediction platform built around on-chain transparency, revenue sharing, and community-driven growth."`,
  },
];

function PressCard({ card }) {
  const isWhiteFade = card.dividerStyle === "white-fade";

  return (
    <div
      className="
        backdrop-blur-[10px]
        bg-[rgba(255,255,255,0.8)]
        border border-[rgba(255,255,255,0.1)]
        rounded-[20px]
        p-[16px]
        overflow-hidden
        flex flex-col items-center
        gap-[20px] lg:gap-[24px]
        w-full
        lg:flex-[1_0_0] lg:shrink
      "
    >
      <div className="h-[80px] lg:h-[100px] flex items-center justify-center overflow-hidden w-full">
        <style>{`
          .press-logo-${card.id} { max-width: ${card.logoMaxWidthMobile}px; }
          @media (min-width: 1024px) { .press-logo-${card.id} { max-width: ${card.logoMaxWidthDesktop}px; } }
        `}</style>
        <img
          src={card.logo}
          alt={card.outlet}
          className={`object-contain h-full press-logo-${card.id}`}
        />
      </div>

      <div className="flex flex-col gap-[16px] w-full">
        <div className="flex flex-col gap-[20px] w-full">
          <p className="font-['Helvetica_Neue_Medium_Extended',sans-serif] text-[20px] leading-[28px] tracking-[0] text-black text-center capitalize font-[500] w-full">
            {card.outlet}
          </p>
          {isWhiteFade ? (
            <>
              <div className="h-px w-full bg-[#B4B4B4] lg:hidden" />
              <div className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" />
            </>
          ) : (
            <div className="h-px w-full bg-[#B4B4B4]" />
          )}
        </div>

        <p className="font-['Inter',sans-serif] text-[16px] leading-[24px] tracking-[0.32px] text-black text-center font-normal w-full">
          {card.quote}
        </p>
      </div>

      <div className="hidden lg:block h-px w-full bg-gradient-to-r from-transparent via-white to-transparent" />
    </div>
  );
}

export default function PressAndMedia() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const touchStartX = useRef(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const slideWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollRef.current.scrollLeft / slideWidth);
    setActiveIndex(Math.min(pressCards.length - 1, Math.max(0, index)));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 40) return;
    const next =
      diff > 0
        ? Math.min(activeIndex + 1, pressCards.length - 1)
        : Math.max(activeIndex - 1, 0);
    if (next !== activeIndex && scrollRef.current) {
      scrollRef.current.scrollTo({
        left: next * scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
    touchStartX.current = null;
  };

  return (
    <section
      style={{
        background:
          "radial-gradient(ellipse 75% 50% at 50% 58%, rgba(0,128,237,0.36) 0%, rgba(0,128,237,0) 100%), #ffffff",
      }}
      className="w-full py-[48px] lg:py-[60px] flex flex-col gap-[32px] lg:gap-[48px] items-center"
    >
      <h2 className="font-['Helvetica_Neue_Medium_Extended',sans-serif] text-[28px] leading-[34px] tracking-[-2px] lg:text-[45px] lg:leading-[53px] lg:tracking-[-2.56px] text-black text-center font-[500] w-full px-4 md:px-8 max-w-[1280px] mx-auto lg:px-8">
        Press and Media
      </h2>

      {/* Desktop: side-by-side cards */}
      <div className="hidden lg:flex gap-[20px] w-full max-w-[1280px] mx-auto px-8">
        {pressCards.map((card) => (
          <PressCard key={card.id} card={card} />
        ))}
      </div>

      {/* Mobile: full-width scroll-snap slider */}
      <div className="lg:hidden w-full flex flex-col items-center gap-[10px]">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full flex overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {pressCards.map((card) => (
            <div
              key={card.id}
              style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
                minWidth: "100%",
                maxWidth: "100%",
                paddingLeft: "16px",
                paddingRight: "16px",
              }}
            >
              <PressCard card={card} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-[10px] h-[10px]">
          {pressCards.map((_, i) =>
            activeIndex === i ? (
              <div key={i} className="w-[25px] h-[10px] rounded-full bg-[#0080ED]" />
            ) : (
              <div key={i} className="w-[10px] h-[10px] rounded-full bg-white border border-gray-200" />
            )
          )}
        </div>
      </div>
    </section>
  );
}
