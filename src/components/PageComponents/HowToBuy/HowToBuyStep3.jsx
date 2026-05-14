import { BrowserMockConfirm } from "./HowToBuyBrowserMock.jsx";
import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep3({ step3 }) {
  return (
    <SectionShell>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20">
        <div className="min-w-0 flex-[1_0_0]">
          <StepHeadingLeft stepLabel={step3.stepLabel} title={step3.title} />
          <div className="mt-10 flex flex-col gap-6 md:mt-12">
            {step3.items.map((item) => (
              <div key={item.num} className="flex gap-3">
                <span className="shrink-0 font-['Inter',sans-serif] text-[14px] font-medium leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]">
                  {item.num}
                </span>
                <p className="font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-[1_0_0] justify-center lg:justify-end">
          <BrowserMockConfirm />
        </div>
      </div>
    </SectionShell>
  );
}
