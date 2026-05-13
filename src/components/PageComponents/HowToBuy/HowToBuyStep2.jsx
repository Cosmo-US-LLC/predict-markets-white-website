import { FiatBadgeRow, StepHeadingCenter } from "./HowToBuyHeadings.jsx";
import { MockAmountPanel, MockPickerPanel } from "./HowToBuyPaymentMocks.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep2({ step2, cryptoTickerSymbols, step2Panels }) {
  return (
    <SectionShell className="!mb-10 md:!mb-14 lg:min-h-0">
      <StepHeadingCenter stepLabel={step2.stepLabel} title={step2.title} subtitle={step2.subtitle} />
      <div className="-mt-4 flex flex-row flex-wrap justify-center gap-[6px] sm:justify-center md:mt-2 md:w-full md:flex-nowrap md:justify-center md:gap-[14px]">
        {cryptoTickerSymbols.map((sym) => (
          <div
            key={sym}
            className="flex h-[52px] w-[calc((100%-5*6px)/6)] max-w-[60px] min-w-[48px] items-center justify-center rounded-lg border border-[#DDD] bg-white md:h-[54px] md:w-[60px] md:min-w-[60px]"
          >
            <span className="text-[11px] font-bold tracking-tight text-black md:text-[12px]">{sym}</span>
          </div>
        ))}
      </div>

      <div className="mb-12 mt-8 md:mb-14 md:mt-12">
        <FiatBadgeRow />
      </div>

      <div className="flex flex-col gap-8 md:gap-10 lg:gap-12">
        {step2Panels[0]?.heading ? <MockAmountPanel {...step2Panels[0]} showCta={false} /> : null}
        {step2Panels[1]?.heading ? <MockPickerPanel heading={step2Panels[1].heading} /> : null}
        {step2Panels[2] ? <MockAmountPanel {...step2Panels[2]} showCta /> : null}
      </div>
    </SectionShell>
  );
}
