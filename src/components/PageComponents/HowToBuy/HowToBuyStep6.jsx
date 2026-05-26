import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";
import exchangeIconsDesktop from "../../../assets/images/how_to_buy/container.webp";
import exchangeIconsMobile from "../../../assets/images/how_to_buy/icons_and_exchanges_container.webp";

function ExchangeCard({ title }) {
  return (
    <div className="w-full rounded-[12px] border border-[rgba(84,84,84,0.5)] bg-white p-5 backdrop-blur-[6px] lg:w-[460px]">
      <p className="mb-4 text-center font-['Inter',sans-serif] text-[16px] font-medium leading-6 tracking-[0.32px] text-black opacity-80">
        {title}
      </p>
      <img src={exchangeIconsMobile} alt="Supported exchanges" className="w-full lg:hidden" />
      <img src={exchangeIconsDesktop} alt="Supported exchanges" className="hidden w-full lg:block" />
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
