import { step6ExchangeLogos } from "../../../data/howToBuyFigmaAssets.js";
import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

const EXCHANGES = [
  { id: "uniswap",     label: "UNISWAP",    iconBg: "#FF007A", icon: step6ExchangeLogos.uniswap,     circle: false },
  { id: "pancakeswap", label: "PancakeSwap", iconBg: null,      icon: step6ExchangeLogos.pancakeswap,  circle: false },
  { id: "aerodrome",   label: "Aerodrome",   iconBg: null,      icon: step6ExchangeLogos.aerodrome,    circle: false },
  { id: "fluid",       label: "Fluid",       iconBg: "#FFFFFF", icon: step6ExchangeLogos.fluid,        circle: true  },
  { id: "curve",       label: "Curve",       iconBg: "#FFFFFF", icon: step6ExchangeLogos.curve,        circle: true  },
];

function ExchangeItem({ ex, blurred }) {
  return (
    <div
      className={[
        "flex items-center gap-2 rounded-[6px] border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] backdrop-blur-[6px] px-2 py-3 h-[61px]",
        blurred ? "blur-[2px]" : "",
      ].join(" ")}
    >
      {ex.circle ? (
        <div className="flex size-[38px] shrink-0 items-center justify-center rounded-full overflow-hidden bg-white">
          <img src={ex.icon} alt="" className="size-6 object-contain" />
        </div>
      ) : ex.iconBg ? (
        <div
          className="flex size-[38px] shrink-0 items-center justify-center rounded-full"
          style={{ background: ex.iconBg }}
        >
          <img src={ex.icon} alt="" className="size-7 object-contain" />
        </div>
      ) : (
        <div className="size-[38px] shrink-0 overflow-hidden rounded-full">
          <img src={ex.icon} alt="" className="size-full object-contain" />
        </div>
      )}
      <span className="font-['Inter',sans-serif] text-[14px] font-semibold leading-5 text-[#808080] whitespace-nowrap">
        {ex.label}
      </span>
    </div>
  );
}

function ExchangeCard({ title }) {
  return (
    <div className="w-full rounded-[12px] border border-[rgba(84,84,84,0.5)] bg-white p-5 backdrop-blur-[6px] lg:w-[460px]">
      <p className="mb-4 text-center font-['Inter',sans-serif] text-[16px] font-medium leading-6 tracking-[0.32px] text-black opacity-80">
        {title}
      </p>

      {/* Mobile: wrap layout */}
      <div className="flex flex-wrap justify-center gap-2.5 lg:hidden">
        {EXCHANGES.map((ex, i) => (
          <div key={ex.id} className="w-[120px]">
            <ExchangeItem ex={ex} blurred={i !== 0} />
          </div>
        ))}
      </div>

      {/* Desktop: absolute grid layout matching Figma */}
      <div className="relative mx-auto hidden h-[215px] w-full max-w-[418px] lg:block">
        <div className="absolute left-0 top-0 w-[48%]">
          <ExchangeItem ex={EXCHANGES[0]} blurred={false} />
        </div>
        <div className="absolute right-0 top-0 w-[48%]">
          <ExchangeItem ex={EXCHANGES[1]} blurred />
        </div>
        <div className="absolute left-0 top-[50%] -translate-y-1/2 w-[48%]">
          <ExchangeItem ex={EXCHANGES[3]} blurred />
        </div>
        <div className="absolute right-0 top-[50%] -translate-y-1/2 w-[48%]">
          <ExchangeItem ex={EXCHANGES[4]} blurred />
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[48%]">
          <ExchangeItem ex={EXCHANGES[2]} blurred />
        </div>
      </div>
    </div>
  );
}

export default function HowToBuyStep6({ step6 }) {
  const { headlineCard } = step6;
  return (
    <SectionShell>
      {/* Mobile: text first, card below. Desktop: card left, text right (flex-row-reverse) */}
      <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-20">
        <div className="flex flex-[1_0_0] flex-col">
          <StepHeadingLeft stepLabel={step6.stepLabel} title={step6.title} />
          {step6.lead && (
            <p className="mt-6 font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]">
              {step6.lead}
            </p>
          )}
          <ul className="mt-4 list-disc pl-6 space-y-4">
            {step6.bullets.map((b) => (
              <li
                key={b}
                className="font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-center lg:justify-start">
          <ExchangeCard title={headlineCard.title} />
        </div>
      </div>
    </SectionShell>
  );
}
