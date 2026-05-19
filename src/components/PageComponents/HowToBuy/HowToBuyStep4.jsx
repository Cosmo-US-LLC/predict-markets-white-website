import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep4({ step4 }) {
  return (
    <SectionShell className="lg:min-h-[482px]">
      {/* Mobile: text first, image after. Desktop: image left, text right (flex-row-reverse) */}
      <div className="flex flex-col gap-10 lg:flex-row-reverse lg:items-center lg:gap-20">
        <div className="flex flex-[1_0_0] flex-col">
          <StepHeadingLeft stepLabel={step4.stepLabel} title={step4.title} />
          <p className="mt-6 font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]">
            {step4.lead}
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-4">
            {step4.bullets.map((b) => (
              <li key={b} className="font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-center lg:justify-start">
          <img
            src={step4.visual}
            alt={step4.visualAlt}
            className="h-auto w-full max-w-[560px] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </SectionShell>
  );
}
