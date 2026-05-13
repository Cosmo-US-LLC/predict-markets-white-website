import { howToBuyStepBgEllipse } from "../../../data/howToBuyFigmaAssets.js";

/** Figma-style bordered card with decorative ellipse behind content. */
export function SectionShell({ children, className = "" }) {
  return (
    <section
      className={`relative mb-8 overflow-hidden rounded-[16px] border border-[#ddd] bg-white md:mb-12 ${className}`}
    >
      <div className="pointer-events-none absolute left-[-220px] top-[-36px] h-[252px] w-[617px] md:h-[320px] md:w-[783px]">
        <img
          alt=""
          src={howToBuyStepBgEllipse}
          className="h-full w-full max-w-none object-cover opacity-[0.9]"
          draggable={false}
        />
      </div>
      <div className="relative z-[1] px-[17px] py-[25px] md:px-[49px] md:py-[33px]">
        {children}
      </div>
    </section>
  );
}
