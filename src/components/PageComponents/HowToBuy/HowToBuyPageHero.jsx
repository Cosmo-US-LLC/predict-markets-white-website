import { useId } from "react";

function HeroCoinGlowSvg({ className, viewBox, gradientTransform }) {
  const id = useId();
  const gid = id.replace(/:/g, "");
  const gradId = `htb-hero-glow-${gid}`;
  return (
    <svg
      className={className}
      viewBox={viewBox}
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
          gradientTransform={gradientTransform}
        >
          <stop stopColor="rgb(0,128,237)" offset="4.4426%" />
          <stop stopColor="rgba(0,128,237,0)" offset="100%" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${gradId})`} opacity={0.76} />
    </svg>
  );
}

function HeroTitleParts({ title }) {
  const m = title.match(/^(.+?)(\(\$PREDICT\))$/);
  const headingClass =
    "w-full font-medium text-black text-[40px] leading-[34px] tracking-[-2px] md:text-[40px] md:leading-[48px] lg:text-[50px] lg:leading-[55px] lg:tracking-[-1px] capitalize";

  if (!m) return <h1 className={headingClass}>{title}</h1>;

  const [, lead, ticker] = m;
  return (
    <h1 className={headingClass}>
      {lead.trimEnd()}{" "} <br className="md:hidden" />
      <span className="whitespace-nowrap">{ticker}</span>
    </h1>
  );
}

export default function HowToBuyPageHero({
  badgeLeft,
  badgeRight,
  title,
  subtitle,
  coinsImageSrc,
  coinsMobileImageSrc,
  ethIconSrc,
}) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* CSS gradient background matching Figma — radial blue blob from top-left */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 120% at -5% 40%, #b3d9ff 0%, #d6ecff 30%, #edf6ff 50%, #ffffff 72%)",
        }}
      />
      {/* Bottom fade to white so steps section connects cleanly */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-white to-transparent" />

      {/* ── Desktop layout ── */}
      <div className="relative hidden lg:flex mx-auto w-full max-w-[1440px] items-center gap-6 px-20 py-12">
        {/* Left: badge + heading + subtitle */}
        <div className="flex min-w-0 flex-1 flex-col items-start gap-3 py-12">
          <div
            className="flex shrink-0 flex-nowrap items-center gap-2 rounded-[40px] border border-[#f5f5f5] bg-white px-4 py-1.5"
            role="group"
            aria-label="Product highlights"
          >
            <span className="shrink-0 font-[Inter] text-[16px] font-medium leading-6 tracking-[0.32px] text-black whitespace-nowrap">
              {badgeLeft}
            </span>
            <span className="h-[23px] w-px shrink-0 bg-black" aria-hidden />
            <span className="relative h-[22.8px] w-[14px] shrink-0 overflow-hidden">
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

        {/* Right: coin image + glow, extending below the section like Figma */}
        <div className="relative h-[366px] w-[555px] shrink-0">
          <HeroCoinGlowSvg
            className="pointer-events-none absolute bottom-[-105px] left-1/2 h-[494px] w-[518px] max-w-none -translate-x-1/2"
            viewBox="0 0 518 494"
            gradientTransform="matrix(-2.5596e-14 -34.35 24.434 -1.1874e-13 259 436)"
          />
          <div className="absolute bottom-[-45px] left-1/2 h-[494px] w-[330px] max-w-none -translate-x-1/2">
            <img
              alt=""
              src={coinsImageSrc}
              className="pointer-events-none absolute inset-0 size-full max-w-none object-contain object-bottom"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="relative flex lg:hidden flex-col items-start gap-6 px-4 py-12">
        {/* Badge pill — full width centered on mobile */}
        <div
          className="flex w-full shrink-0 items-center justify-center gap-2 rounded-[40px] border border-[#f5f5f5] bg-white px-4 py-1.5"
          role="group"
          aria-label="Product highlights"
        >
          <span className="shrink-0 font-[Inter] text-[14px] font-medium leading-[22px] tracking-[0.28px] text-black whitespace-nowrap">
            {badgeLeft}
          </span>
          <span className="h-5 w-[0.5px] shrink-0 bg-black" aria-hidden />
          <span className="relative h-5 w-[13px] shrink-0 overflow-hidden">
            <img alt="" src={ethIconSrc} className="size-full max-w-none object-contain object-bottom" />
          </span>
          <span className="shrink-0 font-[Inter] text-[14px] font-medium leading-[22px] tracking-[0.28px] text-black whitespace-nowrap">
            {badgeRight}
          </span>
        </div>

        {/* Heading + subtitle — centered on mobile */}
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <HeroTitleParts title={title} />
          <p className="w-full font-[Inter] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black">
            {subtitle}
          </p>
        </div>

        {/* Coin image below text on mobile, extending below section */}
        <div className="relative h-[236px] w-full">
          <HeroCoinGlowSvg
            className="pointer-events-none absolute bottom-[-208px] left-1/2 h-[349px] w-[366px] max-w-none -translate-x-1/2"
            viewBox="0 0 366 349"
            gradientTransform="matrix(-1.8085e-14 -24.268 17.264 -8.3885e-14 183 308.02)"
          />
          <div className="absolute bottom-[-58px] left-1/2 h-[302px] w-[302px] max-w-none -translate-x-1/2">
            <img
              alt=""
              src={coinsMobileImageSrc || coinsImageSrc}
              className="pointer-events-none absolute inset-0 size-full max-w-none object-contain object-bottom"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
