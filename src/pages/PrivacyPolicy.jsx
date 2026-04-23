import { privacyPolicyConfig, privacySections } from '../data/privacyPolicyData';

export function PrivacyPolicy() {
  const { pageTitle, documentTitle, effectiveDate, closingStatement } = privacyPolicyConfig;

  return (
    <section className="min-h-screen bg-[#ffffff] overflow-x-hidden flex flex-col border-b border-[#A6A6A6]">

      {/* Hero Section */}
      <div 
        className="md:h-[220px] h-[180px] flex items-center justify-center"
        style={{
          background: `
            radial-gradient(48.25% 48.25% at 50% 50%, rgba(0, 128, 237, 0.00) 0%, rgba(0, 128, 237, 0.11) 100%)
          `,
         }}
      >
        <div className="max-w-[1080px] mx-auto text-center px-4">
          <h1 className="heading-one text-[#0080ED]">
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div className="md:px-6 pb-16 md:pb-20 mt-[40px]">
        <div className="max-w-[1080px] mx-auto w-full px-4 p-6 md:p-10 text-left">

          {/* Title */}
          <h2 className="heading-two text-[#000] mb-2">
            {documentTitle}
          </h2>

          {/* Date */}
          <p className="text-[#000] !text-[14px] paragraph-regular !text-left mb-6">
            {effectiveDate}
          </p>

          {/* Sections */}
          <div className="flex flex-col gap-8">
            {privacySections.map((section) => (
              <article key={section.id} className="flex flex-col gap-4">

                <h3 className="heading-three text-[#000]">
                  {section.id}. {section.title}
                </h3>

                {/* Paragraphs */}
                {section.content && !section.bullets && !section.simpleBullets && (
                  <div className="flex flex-col gap-3">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-[#4b5563] !text-[14px] paragraph-regular !text-left leading-[1.6]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}

                {/* Bullets */}
                {section.bullets && (
                  <div className="flex flex-col gap-4">
                    {section.intro && (
                      <p className="text-[#4b5563] !text-[14px] paragraph-regular !text-left">
                        {section.intro}
                      </p>
                    )}

                    <ul className="flex flex-col gap-2 pl-5 list-disc">
                      {section.bullets.map((bullet, index) => {
                        const isObject = typeof bullet === 'object';
                        const label = isObject ? bullet.label : null;
                        const text = isObject ? bullet.text : bullet;

                        return (
                          <li key={index} className="text-[#4b5563] !text-[14px] paragraph-regular !text-left">
                            {label && (
                              <span className="font-semibold text-black">
                                {label}
                              </span>
                            )}
                            <span>{text}</span>
                          </li>
                        );
                      })}
                    </ul>

                    {section.footer && (
                      <p className="text-[#4b5563] !text-[14px] paragraph-regular !text-left">
                        {section.footer}
                      </p>
                    )}
                  </div>
                )}

                {/* Simple bullets */}
                {section.simpleBullets && (
                  <ul className="flex flex-col gap-2 pl-5 list-disc">
                    {section.simpleBullets.map((bullet, index) => (
                      <li key={index} className="text-[#4b5563] !text-[14px] paragraph-regular !text-left">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Contact */}
                {section.contactEmail && (
                  <div className="flex flex-col gap-3">
                    {section.intro && (
                      <p className="text-[#4b5563] !text-[14px] paragraph-regular !text-left">
                        {section.intro}
                      </p>
                    )}
                    <a 
                      href={`mailto:${section.contactEmail}`}
                      className="text-black !text-[14px] paragraph-regular !text-left !font-bold hover:underline">
                      {section.contactEmail}
                    </a>
                  </div>
                )}

              </article>
            ))}
          </div>

          {/* Closing */}
          <div className="pt-5">
            <p className="text-[#4b5563] paragraph-regular !text-left !text-[14px] leading-[1.6]">
              {closingStatement}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
