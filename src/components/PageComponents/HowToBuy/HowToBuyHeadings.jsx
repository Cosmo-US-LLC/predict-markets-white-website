import { fiatPayBadges } from "../../../data/howToBuyPageData.js";

/** Step label Inter bold #0080ED; title Inter bold (sizes per breakpoint). */
export function StepHeadingLeft({ stepLabel, title }) {
  return (
    <div className="mb-0 flex flex-col gap-2 md:gap-2">
      <p className="text-left text-[20px] font-bold leading-7 tracking-[0.4px] text-[#0080ED] md:text-[30px] md:leading-8 md:tracking-[0.6px]">
        {stepLabel}
      </p>
      <h2 className="text-left font-['Inter',sans-serif] text-[28px] font-bold leading-[34px] tracking-[-2px] text-black capitalize md:text-[44px] md:leading-[50px] md:tracking-[0.88px]">
        {title}
      </h2>
    </div>
  );
}

export function StepHeadingCenter({ stepLabel, title, subtitle }) {
  return (
    <div className="mb-8 flex flex-col items-center gap-2 text-center md:mb-10 md:gap-3">
      <p className="text-[20px] font-bold leading-7 tracking-[0.4px] text-[#0080ED] md:text-[30px] md:leading-8 md:tracking-[0.6px]">
        {stepLabel}
      </p>
      <h2 className="max-w-[900px] font-['Inter',sans-serif] text-[28px] font-bold leading-[34px] tracking-[-1px] text-black capitalize md:text-[44px] md:leading-[50px] md:tracking-[0.88px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-1 max-w-[640px] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black md:text-base md:leading-6 md:tracking-[0.32px]">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function FiatBadgeRow() {
  return (
    <div className="mx-auto flex flex-wrap justify-center gap-6 md:w-auto md:flex-nowrap md:gap-[18px]">
      {fiatPayBadges.map((b) => (
        <div
          key={b.id}
          className="flex h-[53px] w-[86px] shrink-0 items-center justify-center rounded-lg border border-[#DDD] bg-white text-[11px] font-semibold uppercase text-black md:w-[86px]"
        >
          {b.label}
        </div>
      ))}
    </div>
  );
}
