import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep5({ step5 }) {
  return (
    <SectionShell className="lg:min-h-[482px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-[1_0_0] flex-col">
          <StepHeadingLeft stepLabel={step5.stepLabel} title={step5.title} />
          <p className="mt-6 font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]">
            {step5.lead}
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-4">
            {step5.bullets.map((b) => (
              <li key={b} className="font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-center lg:justify-end">
          <img
            src={step5.visual}
            alt={step5.visualAlt}
            className="h-auto w-full max-w-[460px] object-contain "
            loading="lazy"
          />
        </div>
      </div>
    </SectionShell>
  );
}
