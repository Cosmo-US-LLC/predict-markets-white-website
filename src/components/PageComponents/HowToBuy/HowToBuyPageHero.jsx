import { useId } from "react";

/** Figma 3185:9366 radial — opacity applied per design (~0.76). */
function HeroCoinGlowSvg({ className }) {
  const id = useId();
  const gid = id.replace(/:/g, "");
  const gradId = `htb-hero-glow-${gid}`;
  return (
    <svg
      className={className}
      viewBox="0 0 518 494"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <radialGradient
          id={gradId}
          gradientUnits="userSpaceOnUse"
          cx="0"
          cy="0"
          r="10"
          gradientTransform="matrix(-2.5596e-14 -34.35 24.434 -1.1874e-13 259 436)"
        >
          <stop stopColor="rgb(0,128,237)" offset="4.4426%" />
          <stop stopColor="rgba(0,128,237,0)" offset="100%" />
        </radialGradient>
      </defs>
      <rect width="518" height="494" fill={`url(#${gradId})`} opacity={0.76} />
    </svg>
  );
}

function HeroTitleParts({ title }) {
  const m = title.match(/^(.+?)(\(\$PREDICT\))$/);
  const headingClass =
    "w-full font-medium text-black text-[28px] leading-[34px] tracking-[-2px] md:text-[40px] md:leading-[48px] md:tracking-[-2px] lg:text-[50px] lg:leading-[55px] lg:tracking-[-1px]";

  if (!m)
    return <h1 className={headingClass}>{title}</h1>;

  const [, lead, ticker] = m;
  return (
    <h1 className={headingClass}>
      {lead.trimEnd()}{" "}
      <span className="whitespace-nowrap">{ticker}</span>
    </h1>
  );
}

/**
 * Hero for How-to-Buy — node `3185:9344` (1440×462): px-80 py-48 inner, gap-24 columns, glow + coins anchored bottom:-105px.
 */
export default function HowToBuyPageHero({
  badgeLeft,
  badgeRight,
  title,
  subtitle,
  backgroundImageSrc,
  coinsImageSrc,
  ethIconSrc,
}) {
  return (
    <section className="relative isolate">
      {/* Clip only the background artwork; coins/glow extend below frame like Figma */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          alt=""
          className="absolute inset-0 size-full max-w-none object-cover object-bottom"
          src={backgroundImageSrc}
          decoding="async"
        />
      </div>

      {/* 1440 artboard − 80px each side → 1280px content rhythm */}
      <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-28 pt-12 sm:px-6 md:px-8 xl:px-20 lg:pb-32">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:gap-6">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-3">
            <div
              className="flex shrink-0 flex-nowrap items-start gap-2 rounded-[40px] border border-[#f5f5f5] bg-white px-4 py-1.5 sm:w-[412px]"
              role="group"
              aria-label="Product highlights"
            >
              <span className="shrink font-[Inter] text-[16px] font-medium leading-6 tracking-[0.32px] text-black whitespace-nowrap">
                {badgeLeft}
              </span>
              <span className="relative top-px h-[23px] w-px shrink-0 bg-black" aria-hidden />
              <span className="relative top-px h-[22.8px] w-[14px] shrink-0 overflow-hidden">
                <img alt="" src={ethIconSrc} className="size-full max-w-none object-contain object-bottom" />
              </span>
              <span className="shrink-0 font-[Inter] text-[16px] font-medium leading-6 tracking-[0.32px] text-black whitespace-nowrap">
                {badgeRight}
              </span>
            </div>

            <div className="flex w-full max-w-[772px] flex-col items-start gap-4">
              <HeroTitleParts title={title} />
              <p className="w-full max-w-[552px] font-[Inter] text-[16px] font-normal leading-6 tracking-[0.32px] text-black">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="relative mx-auto h-[366px] w-full max-w-[555px] shrink-0 lg:mx-0">
            <HeroCoinGlowSvg className="pointer-events-none absolute bottom-[-105px] left-1/2 h-[min(494px,55vh)] w-[min(518px,96vw)] max-w-none -translate-x-1/2 lg:h-[494px] lg:w-[518px]" />
            <div className="absolute bottom-[-105px] left-1/2 h-[494px] w-[330px] max-w-[85vw] -translate-x-1/2 sm:max-w-none">
              <img
                alt=""
                src={coinsImageSrc}
                className="pointer-events-none absolute inset-0 size-full max-w-none object-contain object-bottom"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
