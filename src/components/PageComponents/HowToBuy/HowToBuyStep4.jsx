import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep4({ step4 }) {
  return (
    <SectionShell className="lg:min-h-0">
      <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
        <div className="flex flex-[1_0_0] flex-col lg:max-w-[520px]">
          <StepHeadingLeft stepLabel={step4.stepLabel} title={step4.title} />
          <p className="mt-8 font-['Inter',sans-serif] text-[15px] font-normal leading-6 tracking-[0.32px] text-black md:text-[16px]">
            {step4.lead}
          </p>
          <ul className="mt-4 flex flex-col gap-6">
            {step4.bullets.map((b) => (
              <li key={b} className="font-['Inter',sans-serif] text-[15px] font-normal leading-6 tracking-[0.28px] text-black md:text-[16px] md:tracking-[0.32px]">
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-center">
          <img
            src={step4.visual}
            alt={step4.visualAlt}
            className="h-auto w-full max-w-[511px] rounded-[10px] border border-black/5 object-cover shadow-md"
          />
        </div>
      </div>
    </SectionShell>
  );
}
