import { StepHeadingLeft } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

export default function HowToBuyStep6({ step6 }) {
  const { headlineCard } = step6;

  return (
    <SectionShell>
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex flex-[1_0_0] justify-center lg:max-w-[480px]">
          <div className="w-full rounded-[14px] border border-[#DDD] bg-gradient-to-b from-white to-[#F7FCFF] p-6 shadow-sm">
            <h3 className="mb-6 text-left font-['Inter',sans-serif] text-[17px] font-semibold leading-snug text-black md:text-[20px]">
              {headlineCard.title}
            </h3>
            <div className="grid grid-cols-2 gap-[10px] sm:mx-auto sm:max-w-[360px]">
              {headlineCard.exchanges.map((ex) => (
                <div
                  key={ex.id}
                  className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/90 px-3 py-3 shadow-sm md:justify-center md:gap-4"
                >
                  <img src={ex.logo} alt="" className="h-8 w-8 shrink-0 object-contain" loading="lazy" />
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-black md:text-[12px]">{ex.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="min-w-0 flex-[1_0_0] lg:max-w-[560px]">
          <StepHeadingLeft stepLabel={step6.stepLabel} title={step6.title} />
          <ul className="mt-8 flex flex-col gap-6">
            {step6.bullets.map((b) => (
              <li key={b} className="font-['Inter',sans-serif] text-[15px] font-normal leading-6 tracking-[0.28px] text-black md:text-[17px] md:leading-[26px]">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
