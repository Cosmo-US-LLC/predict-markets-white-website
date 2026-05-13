function StepBodyParagraph({ paragraph, highlightSubstring }) {
  if (!highlightSubstring || !paragraph.includes(highlightSubstring)) {
    return <p className="font-[Inter] text-[16px] leading-6 tracking-[0.32px]">{paragraph}</p>;
  }
  const [before, ...rest] = paragraph.split(highlightSubstring);
  return (
    <p className="font-[Inter] text-[16px] leading-6 tracking-[0.32px]">
      {before}
      <span className="font-medium text-[#0080ED]">{highlightSubstring}</span>
      {rest.join(highlightSubstring)}
    </p>
  );
}

export default function ReferralProgramHowItWorks({
  sectionTitle,
  steps,
  panelImageSrc,
  closingBannerTitle,
  closingBannerLines,
}) {
  return (
    <section className="bg-white px-4 py-14 md:px-8 xl:px-[120px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        <h2 className="text-center text-[clamp(28px,4vw,45px)] font-medium leading-[53px] tracking-[-2.56px] text-black uppercase">
          {sectionTitle}
        </h2>
        <div className="flex flex-col items-stretch gap-10 lg:flex-row lg:gap-12">
          <div className="flex flex-col gap-4 lg:flex-1">
            {steps.map((step, i) => (
              <div key={i} className="rounded-lg bg-[#f2f2f2] px-4 py-6">
                <div className="mb-4 font-[Inter] text-[18px] font-bold leading-7 tracking-[0.4px] md:text-[20px]">
                  <span className="text-[#0080ED]">{step.titlePrefix}</span>
                  <span className="text-black">{step.titleAccent}</span>
                </div>
                {step.paragraph != null ? (
                  <StepBodyParagraph
                    paragraph={step.paragraph}
                    highlightSubstring={step.highlightSubstring}
                  />
                ) : (
                  <div className="font-[Inter] text-[16px] leading-6 tracking-[0.32px] text-black">
                    {step.paragraphs.map((para, j) => (
                      <p key={j} className={j < step.paragraphs.length - 1 ? "mb-3" : ""}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex lg:flex-1">
            <div className="w-full overflow-hidden rounded-lg bg-[#0080ED]">
              <img alt="" src={panelImageSrc} className="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-[800px] overflow-hidden rounded-lg bg-[#c9e6ff] px-4 py-8 text-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[60%] h-48 w-[978px] max-w-[140%] -translate-x-1/2 opacity-70"
          />
          <h3 className="relative z-[1] font-[Inter] text-[18px] font-bold leading-7 tracking-[0.4px] text-black md:text-xl">
            {closingBannerTitle}
          </h3>
          <div className="relative z-[1] mt-4 space-y-1 font-[Inter] text-[15px] font-normal leading-6 tracking-[0.32px] text-black md:text-[16px]">
            {closingBannerLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
