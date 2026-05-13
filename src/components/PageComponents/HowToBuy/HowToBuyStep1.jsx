import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep1({ step1, walletTableRows, walletLogos }) {
  return (
    <SectionShell className="min-h-0 lg:min-h-[580px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <div className="min-w-0 flex-[1_0_0]">
          <StepHeadingLeft stepLabel={step1.stepLabel} title={step1.title} />
          <div className="mt-8 flex flex-col gap-6">
            <p className="text-left font-['Inter',sans-serif] text-[16px] font-normal leading-6 tracking-[0.28px] text-black md:text-[18px] md:leading-[26px] md:tracking-[0.36px]">
              {step1.body}
            </p>
            <p className="text-left font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-6 md:tracking-[0.32px]">
              <span className="font-bold text-[#0080ED]">Note:</span>
              <span>{step1.noteAfterLabel}</span>
            </p>
          </div>
        </div>
        <div className="flex w-full shrink-0 lg:max-w-[453px]">
          <div className="overflow-hidden rounded-[6px] border border-[#333] bg-white shadow-sm">
            <div className="grid grid-cols-[116px_1fr] border-b border-[#333] bg-[#0080ED] font-bold leading-[22px] text-white md:leading-[24px]">
              <div className="border-r border-[#333] px-4 py-2 font-['Inter',sans-serif] text-[14px] tracking-[-0.36px] md:text-[18px]">
                Platform
              </div>
              <div className="px-4 py-2 font-['Inter',sans-serif] text-[14px] tracking-[-0.36px] md:text-[18px]">
                Wallet Option
              </div>
            </div>
            {walletTableRows.map((row, i) => (
              <div
                key={row.platform}
                className={`grid grid-cols-[116px_1fr] border-[#333] ${i < walletTableRows.length - 1 ? "border-b" : ""}`}
              >
                <div className="border-r border-[#333] px-4 py-2 pb-3 font-['Inter',sans-serif] text-[13px] font-normal tracking-[0.28px] text-black md:text-[16px] md:tracking-[0.32px] md:leading-6">
                  {row.platform}
                </div>
                <div className="px-4 pb-3 pt-2 font-['Inter',sans-serif] text-[13px] font-normal tracking-[0.28px] text-black opacity-50 md:text-[16px] md:tracking-[0.32px] md:leading-6">
                  {row.option}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-8 border-t border-transparent pt-2 md:mt-12 md:flex-nowrap md:justify-between lg:mx-auto lg:max-w-[1040px]">
        {walletLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            className="h-[28px] w-auto shrink-0 object-contain opacity-95 md:h-[36px]"
            loading="lazy"
          />
        ))}
      </div>
    </SectionShell>
  );
}
