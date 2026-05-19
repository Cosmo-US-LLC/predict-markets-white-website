import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep1({ step1, walletTableRows, walletLogos }) {
  return (
    <SectionShell className="min-h-0 lg:min-h-[480px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-20">
        <div className="min-w-0 flex-[1_0_0]">
          <StepHeadingLeft stepLabel={step1.stepLabel} title={step1.title} />
          <div className="mt-6 flex flex-col gap-4">
            <p className="font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[18px] md:leading-[26px] md:tracking-[0.36px]">
              {step1.body}
            </p>
            <p className="font-['Inter',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-[16px] md:leading-[24px] md:tracking-[0.32px]">
              <span className="font-bold text-[#0080ED]">Note:</span>
              <span>{step1.noteAfterLabel}</span>
            </p>
          </div>
        </div>

        <div className="flex w-full shrink-0 overflow-x-auto lg:max-w-[453px]">
          <div className="min-w-[300px] w-full overflow-hidden rounded-[6px] border border-[#333] bg-white">
            <div className="grid grid-cols-[116px_1fr] bg-[#0080ED]">
              <div className="border-r border-[#333] px-4 py-2 font-['Inter',sans-serif] text-[14px] font-bold leading-6 tracking-[-0.36px] text-white md:text-[18px]">
                Platform
              </div>
              <div className="px-4 py-2 font-['Inter',sans-serif] text-[14px] font-bold leading-6 tracking-[-0.36px] text-white md:text-[18px]">
                Wallet Option
              </div>
            </div>
            {walletTableRows.map((row, i) => (
              <div
                key={row.platform}
                className={`grid grid-cols-[116px_1fr]${i < walletTableRows.length - 1 ? " border-b border-[#333]" : ""}`}
              >
                <div className="border-r border-[#333] px-4 py-2 font-['Inter',sans-serif] text-[13px] font-normal leading-6 tracking-[0.32px] text-black md:text-[16px]">
                  {row.platform}
                </div>
                <div className="px-4 py-2 font-['Inter',sans-serif] text-[13px] font-normal leading-6 tracking-[0.32px] text-black opacity-50 md:text-[16px]">
                  {row.option}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: infinite scrolling marquee */}
      <div className="relative my-4 w-[325px] overflow-hidden pt-6 lg:hidden">
        <style>{`
          @keyframes wallet-marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .wallet-marquee-track {
            animation: wallet-marquee 14s linear infinite;
          }
          .wallet-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="wallet-marquee-track flex w-max items-center gap-10">
          {[...walletLogos, ...walletLogos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto shrink-0 object-contain"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Desktop: static justified row */}
      <div className="mt-10 hidden items-center justify-between gap-8 lg:flex lg:mx-auto lg:max-w-[1040px]">
        {walletLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.src}
            alt={logo.alt}
            className="h-9 w-auto shrink-0 object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </SectionShell>
  );
}
