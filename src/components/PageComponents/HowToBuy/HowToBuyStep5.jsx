import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep5({ step5 }) {
  return (
    <SectionShell>
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex flex-[1_0_0] flex-col lg:max-w-[520px]">
          <StepHeadingLeft stepLabel={step5.stepLabel} title={step5.title} />
          <p className="mt-8 font-['Inter',sans-serif] text-[15px] font-normal leading-6 tracking-[0.32px] text-black md:text-[16px]">
            {step5.lead}
          </p>
          <ul className="mt-4 flex flex-col gap-6">
            {step5.bullets.map((b) => (
              <li key={b} className="font-['Inter',sans-serif] text-[15px] font-normal leading-6 tracking-[0.28px] text-black md:text-[16px] md:tracking-[0.32px]">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src={step5.visual}
            alt={step5.visualAlt}
            className="h-auto w-full max-w-[480px] object-contain px-4 md:px-8"
          />
        </div>
      </div>
    </SectionShell>
  );
}
