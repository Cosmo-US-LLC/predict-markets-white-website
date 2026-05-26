import { useRef, useState, useEffect } from "react";
import paymentIconsDesktop from "../../../assets/images/how_to_buy/payment_icons/group_1686561711.webp";
import paymentIconsMobile from "../../../assets/images/how_to_buy/payment_icons/icon_container.webp";
import step1Img from "../../../assets/images/how_to_buy/step1_connectwallet.webp";
import step2Img from "../../../assets/images/how_to_buy/step2_paymentmethod.webp";
import step3Img from "../../../assets/images/how_to_buy/step3_send&confirm.webp";
import step4Img from "../../../assets/images/how_to_buy/step4_viewtokens.webp";
import step5Img from "../../../assets/images/how_to_buy/step5_claimtokens.webp";
import step6Img from "../../../assets/images/how_to_buy/step6_launch.webp";
import { scrollToWallet } from "../../../lib/utils";


const DesktopIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0080ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const MobileIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0080ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <rect x="6" y="1" width="12" height="22" rx="2" />
    <circle cx="12" cy="18" r="0.5" fill="#0080ED" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#0080ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const steps = [
  {
    step: "Step 1",
    title: "Connect Your Wallet",
    img: step1Img,
    content: (
      <div className="flex flex-col gap-4 md:gap-5">
        <p className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]" style={{ fontFamily: "Inter, sans-serif" }}>
          You will need a self-custodial crypto wallet before buying $PREDICT. This links your tokens directly to your address and activates your earnings automatically.
        </p>
        <div className="bg-[#fff5e3] rounded-[8px] p-2">
          <p className="text-black text-[12px] leading-[18px] md:leading-[20px] tracking-[0.24px]" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="font-bold">Important: </span>
            Do not use a centralized exchange wallet (e.g. Binance or Coinbase main app). Your tokens and rewards will not show up correctly if you do.
          </p>
        </div>
        <div className="flex gap-2">
          {[
            { icon: <DesktopIcon />, label: "Desktop", desc: "MetaMask (Chrome or Firefox extension)" },
            { icon: <MobileIcon />, label: "Mobile", desc: "Trust Wallet, Coinbase Wallet, MetaMask" },
            { icon: <GlobeIcon />, label: "Any Device", desc: "Any Wallet Connect-supported app" },
          ].map((d) => (
            <div key={d.label} className="bg-[#f2f2f2] rounded-[8px] flex-1 p-2 flex flex-col gap-2">
              <div className="flex flex-col gap-1.5 items-center">
                <div className="size-5 md:size-6 text-black">{d.icon}</div>
                <span className="text-black text-[12px] md:text-[16px] leading-[20px] md:leading-[24px] capitalize" style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}>{d.label}</span>
              </div>
              <p className="text-black text-[10px] md:text-[14px] leading-[16px] md:leading-[22px] tracking-[0.2px] md:tracking-[0.28px] text-center" style={{ fontFamily: "Inter, sans-serif" }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    step: "Step 2",
    title: "Select Your Payment Method",
    img: step2Img,
    content: (
      <div className="flex flex-col gap-4 md:gap-5">
        <p className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]" style={{ fontFamily: "Inter, sans-serif" }}>
          We support a wide range of payment options including ETH, BNB, USDT, BTC, SOL and more, as well as card payments via Visa, Mastercard and Google Pay.
        </p>
        <div>
          <img src={paymentIconsMobile} alt="Accepted payment methods" className="w-full md:hidden" />
          <img src={paymentIconsDesktop} alt="Accepted payment methods" className="hidden md:block w-full" />
        </div>
        <ul className="list-disc pl-5 flex flex-col gap-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Enter the amount of $PREDICT you want to buy</li>
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Your token amount will be shown straight away</li>
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Choose your preferred currency or card, then click <span className="font-semibold">&ldquo;Buy Now&rdquo;</span></li>
        </ul>
      </div>
    ),
  },
  {
    step: "Step 3",
    title: "Send and Confirm",
    img: step3Img,
    content: (
      <div className="flex flex-col gap-4 md:gap-5">
        <ol className="list-decimal pl-5 flex flex-col gap-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">A deposit address will be generated once you click <span className="font-semibold">&ldquo;Buy Now&rdquo;</span></li>
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Send your chosen crypto to that address. The amount must match exactly</li>
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Approve the transaction in your wallet (MetaMask, Trust Wallet, etc.)</li>
        </ol>
        <div className="bg-[#f2f2f2] rounded-[8px] p-4 flex flex-col gap-2" style={{ fontFamily: "Inter, sans-serif" }}>
          <p className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] font-bold tracking-[0.28px] md:tracking-[0.32px]">Once your payment is sent:</p>
          <ul className="list-disc pl-5 flex flex-col gap-0.5">
            <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Your $PREDICT tokens, rewards and any eligible NFTs are added to your dashboard straight away</li>
            <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Log in with the same wallet at PredictMarkets.io to check your balance</li>
            <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Any funds sent to the address are automatically added to your account</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    step: "Step 4",
    title: "View Your Tokens",
    img: step4Img,
    content: (
      <div className="flex flex-col gap-4" style={{ fontFamily: "Inter, sans-serif" }}>
        <p className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">
          Once your payment has gone through, visit your Predict Markets dashboard to see:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-0.5">
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Daily $PREDICT staking rewards building up in real time</li>
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">USDT (ERC-20) reward payouts sent to your wallet every Monday</li>
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Your full transaction history, bonus tokens and any NFTs you hold</li>
        </ul>
      </div>
    ),
  },
  {
    step: "Step 5",
    title: "Claim Your Tokens",
    img: step5Img,
    content: (
      <div className="flex flex-col gap-4" style={{ fontFamily: "Inter, sans-serif" }}>
        <p className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">After the presale ends:</p>
        <ul className="list-disc pl-5">
          <li className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">Your $PREDICT tokens will be ready to claim from your dashboard in one click</li>
        </ul>
        <p className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">
          Thank you for being an early supporter of Predict Markets.
        </p>
      </div>
    ),
  },
  {
    step: "Step 6",
    title: "Exchange Launch",
    img: step6Img,
    content: (
      <div className="flex flex-col gap-3" style={{ fontFamily: "Inter, sans-serif" }}>
        <p className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">$PREDICT Lists on Major Exchanges</p>
        <p className="text-black text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px]">
          After the presale closes, $PREDICT will be listed on multiple leading exchanges. Follow our official website and social channels to stay up to date on when trading goes live.
        </p>
      </div>
    ),
  },
];

function StepCard({ step, title, img, content }) {
  return (
    <div className="bg-white border border-[#ddd]/50 rounded-[16px] max-md:h-full flex flex-col gap-5 h-full overflow-hidden pb-4 pt-2 px-2 flex-1">
      <div className="rounded-[15px] overflow-hidden shrink-0 w-full h-[150px] md:h-[186px]">
        <img src={img} alt={title} className="w-full h-full object-cover object-center" />
      </div>
      <div className="px-1 flex flex-col gap-4 md:gap-5">
        <div className="flex flex-row md:flex-col gap-2 md:gap-3 items-center md:items-start">
          <div className="border border-[#0080ed] shrink-0 px-3 py-1 rounded-full">
            <span
              className="text-black text-[12px] md:text-[14px] leading-[18px] md:leading-[22px] tracking-[0.24px] md:tracking-[0.28px] font-normal whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {step}
            </span>
          </div>
          <h3
            className="text-black text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] capitalize font-normal"
            style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
          >
            {title}
          </h3>
        </div>
        {content}
      </div>
    </div>
  );
}

const stepGroups = [steps.slice(0, 3), steps.slice(3, 6)];

export default function GiveawayHowToBuy() {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const desktopSliderRef = useRef(null);
  const [desktopActiveIndex, setDesktopActiveIndex] = useState(0);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(index);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = desktopSliderRef.current;
    if (!el) return;
    const onScroll = () => {
      const gap = 12;
      const cardWidth = (el.offsetWidth - gap * 2) / 3;
      const index = Math.round(el.scrollLeft / (cardWidth + gap));
      setDesktopActiveIndex(index);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollTo({ left: i * sliderRef.current.offsetWidth, behavior: "smooth" });
  };

  const goToDesktop = (i) => {
    const el = desktopSliderRef.current;
    if (!el) return;
    const gap = 12;
    const cardWidth = (el.offsetWidth - gap * 2) / 3;
    el.scrollTo({ left: i * (cardWidth + gap), behavior: "smooth" });
  };

  return (
    <section className="w-full py-12 md:py-[60px] flex flex-col items-center gap-8 md:gap-12">
      {/* Heading */}
      <div className="w-full max-w-[1037px] mx-auto px-4 md:px-8 flex flex-col items-center gap-4">
        <h2
          className="text-black text-center text-[28px] md:text-[45px] leading-[34px] md:leading-[53px] tracking-[-2px] md:tracking-[-2.56px] font-normal"
          style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
        >
          How to Buy
        </h2>
        <p
          className="text-black text-center text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.28px] md:tracking-[0.36px] font-normal max-w-[322px] md:max-w-[1004px]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Follow the guide below to purchase $PREDICT during the presale. The process supports both crypto and card payments and is designed to be quick, secure, and easy to follow.
        </p>
      </div>

      {/* Desktop: 3 cards visible, scroll one by one */}
      <div className="hidden md:flex w-full flex-col items-center gap-4">
        <div className="relative w-full max-w-[1290px] mx-auto px-10">
          <button
            onClick={() => goToDesktop(desktopActiveIndex - 1)}
            disabled={desktopActiveIndex === 0}
            aria-label="Previous step"
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-[#ddd] bg-white transition-all duration-200 disabled:opacity-30 hover:border-[#0080ed]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            ref={desktopSliderRef}
            className="w-full flex gap-3 overflow-x-scroll"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {steps.map((s) => (
              <div
                key={s.step}
                style={{
                  scrollSnapAlign: "start",
                  scrollSnapStop: "always",
                  minWidth: "calc((100% - 24px) / 3)",
                  maxWidth: "calc((100% - 24px) / 3)",
                }}
              >
                <StepCard {...s} />
              </div>
            ))}
          </div>

          <button
            onClick={() => goToDesktop(desktopActiveIndex + 1)}
            disabled={desktopActiveIndex === steps.length - 3}
            aria-label="Next step"
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full border border-[#ddd] bg-white transition-all duration-200 disabled:opacity-30 hover:border-[#0080ed]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-black">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: steps.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToDesktop(i)}
              aria-label={`Go to step ${i + 1}`}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === desktopActiveIndex ? "20px" : "8px",
                height: "8px",
                background: i === desktopActiveIndex ? "#0080ed" : "#cdcdcd",
              }}
            />
          ))}
        </div>
      </div>

      {/* Mobile: horizontal scroll-snap slider */}
      <div className="md:hidden w-full flex flex-col items-center gap-[10px]">
        <div
          ref={sliderRef}
          className="w-full flex overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`[data-htb-slide]::-webkit-scrollbar{display:none}`}</style>
          {steps.map((s) => (
            <div
              key={s.step}
              data-htb-slide
              style={{ scrollSnapAlign: "start", scrollSnapStop: "always", minWidth: "100%", maxWidth: "100%", paddingLeft: "16px", paddingRight: "16px" }}
            >
              <StepCard {...s} />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center gap-[6px]">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to step ${i + 1}`}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === activeIndex ? "20px" : "8px",
                height: "8px",
                background: i === activeIndex ? "#0080ed" : "#cdcdcd",
              }}
            />
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div className="relative inline-flex items-center justify-center">
        <button
          onClick={() => scrollToWallet(140)}
          className="btn_primary relative flex h-[40px] w-[calc(100vw-32px)] uppercase items-center justify-center md:h-[69px] md:w-[319px]"
        >
          Buy $PREDICT Now
        </button>
      </div>
    </section>
  );
}
