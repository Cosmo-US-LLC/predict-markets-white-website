import { BrowserMockConfirm } from "./HowToBuyBrowserMock.jsx";
import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep3({ step3 }) {
  return (
    <SectionShell className="lg:min-h-[482px]">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[80px]">
        <div className="min-w-0 flex-[1_0_0] lg:pb-8">
          <StepHeadingLeft stepLabel={step3.stepLabel} title={step3.title} />
          <div className="mt-12 flex flex-col gap-6 md:mt-14">
            {step3.items.map((item) => (
              <div key={item.num} className="flex gap-[10px] md:items-center">
                <span className="shrink-0 font-['Inter',sans-serif] text-[15px] font-medium leading-6 tracking-[0.32px] text-black md:text-[16px]">
                  {item.num}
                </span>
                <p className="font-['Inter',sans-serif] text-[15px] font-normal leading-6 tracking-[0.28px] text-black md:text-[16px] md:tracking-[0.32px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-[1_0_0] justify-center lg:justify-end lg:pb-10">
          <BrowserMockConfirm />
        </div>
      </div>
    </SectionShell>
  );
}
