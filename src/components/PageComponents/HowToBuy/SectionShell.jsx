/** Figma-style bordered card with decorative blue ellipse glow. */
export function SectionShell({ children, className = "", compact = false }) {
  return (
    <section
      className={`relative mb-8 overflow-hidden rounded-[16px] border border-[#ddd] bg-white md:mb-12 md:min-h-[480px] flex items-center justify-center ${className}`}
    >
      {/* CSS ellipse glow — replaces the glitchy image */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-220px] top-[-36px] h-[252px] w-[617px] md:h-[320px] md:w-[783px]"
        style={{
          borderRadius: "783px",
          opacity: 0.4,
          background:
            "radial-gradient(94.53% 131.79% at 50% 58.4%, rgba(0, 128, 237, 0.36) 0%, rgba(0, 128, 237, 0.00) 100%)",
          filter: "blur(150px)",
        }}
      />
      <div
        className={[
          "relative z-[1] w-full px-[17px] py-[25px] md:px-[49px] md:py-[33px]",
          compact ? "" : "lg:py-[48px]",
        ]
          .join(" ")
          .trim()}
      >
        {children}
      </div>
    </section>
  );
}
