import { termsOfServiceConfig, termsSections } from '../data/termsOfServiceData';

export function TermsOfService() {
  const { pageTitle, documentTitle, effectiveDate, introParagraphs, closingStatement } =
    termsOfServiceConfig;

  return (
    <div className="min-h-screen bg-[#020b10] overflow-x-hidden">
      {/* Hero / Page Title - centered with gradient glow */}
      <section className="radial-dark-glow md:h-[220px] h-[190px] flex items-center justify-center"
      >
        <div className="max-w-[1280px] mx-auto text-center px-4 md:px-0">
          <h1 className="heading-one bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent">  
              {pageTitle}       
          </h1>
        </div>
      </section>

      {/* Main content - single column, max-width, left-aligned */}
      <section className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-[800px] mx-auto w-full min-w-0">
          {/* Document title & effective date */}
          <h2 className="text-white heading-two mb-2">
            {documentTitle}
          </h2>
          <p className="text-[#cacaca] text-[14px] font-normal leading-[22px] tracking-[0.28px] mb-6 md:mb-8">
            {effectiveDate}
          </p>

          {/* Intro paragraphs */}
          <div className="flex flex-col gap-4 mb-8 md:mb-10">
            {introParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#cacaca] !text-[14px] paragraph-regular"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-8 md:gap-10">
            {termsSections.map((section) => (
              <article key={section.id} className="flex flex-col gap-4">
                <h3 className="text-white heading-three">
                  {section.id}. {section.title}
                </h3>

                {/* Numbered list items */}
                {section.items && (
                  <div className="flex flex-col gap-4">
                    <ol className="flex flex-col gap-2 pl-6" style={{ listStyleType: 'decimal' }}>
                      {section.items.map((item, index) => (
                        <li
                          key={index}
                          className="text-white !text-[14px] paragraph-regular"
                          style={{ display: 'list-item' }}
                        >
                          <span className="text-[#cacaca]">{item}</span>
                        </li>
                      ))}
                    </ol>
                    {section.footer && (
                      <p className="text-[#cacaca] !text-[14px] paragraph-regular">
                        {section.footer}
                      </p>
                    )}
                  </div>
                )}

                {/* Contact section with email */}
                {section.contactEmail && (
                  <div className="flex flex-col gap-3">
                    {section.intro && (
                      <p className="text-[#cacaca] !text-[14px] paragraph-regular">
                        {section.intro}
                      </p>
                    )}
                    <p className="!text-[14px] paragraph-regular">
                      <span className="font-bold text-white">Email:</span>
                      <span className="text-[#cacaca]"> {section.contactEmail}</span>
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Closing statement */}
          <div className="mt-10 md:mt-14 pt-6 md:pt-8 border-t border-white/10">
            <p className="text-white text-[16px] leading-6 md:leading-[24px] tracking-[0.28px] md:tracking-[0.32px] font-bold">
              {closingStatement}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
