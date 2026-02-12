import { cookiesPolicyConfig, cookiesSections } from '../data/cookiesPolicyData';

export function CookiesPolicy() {
  const { pageTitle, documentTitle, lastUpdated, introParagraphs, closingStatement } =
    cookiesPolicyConfig;

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
          {/* Document title & last updated */}
          <h2 className="text-white heading-two mb-2">
            {documentTitle}
          </h2>
          <p className="text-[#cacaca] !text-[14px] paragraph-regular mb-6 md:mb-8">
            {lastUpdated}
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
            {cookiesSections.map((section) => (
              <article key={section.id} className="flex flex-col gap-4">
                <h3 className="text-white heading-three">
                  {section.id}. {section.title}
                </h3>

                {/* Plain paragraphs (no bullets) */}
                {section.content && (
                  <div className="flex flex-col gap-3">
                    {section.content.map((item, index) => (
                      <p
                        key={index}
                        className="text-[#cacaca] !text-[14px] paragraph-regular"
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                )}

                {/* Sections with intro, bullet list (bold labels), and optional footer */}
                {section.bullets && (
                  <div className="flex flex-col gap-4">
                    {section.intro && (
                      <p className="text-[#cacaca] !text-[14px] paragraph-regular">
                        {section.intro}
                      </p>
                    )}
                    <ul className="flex flex-col gap-2 pl-6" style={{ listStyleType: 'disc' }}>
                      {section.bullets.map((bullet, index) => {
                        const isObject = typeof bullet === 'object' && bullet !== null;
                        const label = isObject ? bullet.label : undefined;
                        const text = isObject ? bullet.text : bullet;

                        return (
                          <li
                            key={index}
                            className="text-white !text-[14px] paragraph-regular"
                            style={{ display: 'list-item' }}
                          >
                            {label && (
                              <span className="font-bold text-white">
                                {label}
                              </span>
                            )}
                            <span className="text-[#cacaca]">{text}</span>
                          </li>
                        );
                      })}
                    </ul>
                    {section.footer && (
                      <p className="text-[#cacaca] !text-[14px] paragraph-regular">
                        {section.footer}
                      </p>
                    )}
                  </div>
                )}

                {/* Simple bullets (no bold labels) for section 5 */}
                {section.simpleBullets && (
                  <div className="flex flex-col gap-4">
                    {section.intro && (
                      <p className="text-[#cacaca] !text-[14px] paragraph-regular">
                        {section.intro}
                      </p>
                    )}
                    <ul className="flex flex-col gap-2 pl-6" style={{ listStyleType: 'disc' }}>
                      {section.simpleBullets.map((bullet, index) => (
                        <li
                          key={index}
                          className="text-white !text-[14px] paragraph-regular"
                          style={{ display: 'list-item' }}
                        >
                          <span className="text-[#cacaca]">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    {section.footer && (
                      <p className="text-[#cacaca] !text-[14px] paragraph-regular">
                        {section.footer}
                      </p>
                    )}
                  </div>
                )}

                {/* Categories with sub-headings (for section 4) */}
                {section.subsections && (
                  <div className="flex flex-col gap-5">
                    {section.subsections.map((sub, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <h4 className="text-white heading-four">
                          {sub.heading}
                        </h4>
                        <ul className="flex flex-col gap-2 pl-6" style={{ listStyleType: 'disc' }}>
                          {sub.items.map((item, itemIndex) => {
                            const isObject = typeof item === 'object' && item !== null;
                            const label = isObject ? item.label : undefined;
                            const text = isObject ? item.text : item;

                            return (
                              <li
                                key={itemIndex}
                                className="text-white !text-[14px] paragraph-regular"
                                style={{ display: 'list-item' }}
                              >
                                {label && (
                                  <span className="font-bold text-white">
                                    {label}
                                  </span>
                                )}
                                <span className="text-[#cacaca]">{text}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Contact section with email */}
                {section.contactEmail && (
                  <div className="flex flex-col gap-4">
                    {section.intro && (
                      <p className="text-[#cacaca]  !text-[14px] paragraph-regular">
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
