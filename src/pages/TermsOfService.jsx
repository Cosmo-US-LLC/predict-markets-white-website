import { termsOfServiceConfig, termsSections } from '../data/termsOfServiceData';

export function TermsOfService() {
  const { pageTitle, documentTitle, effectiveDate, introParagraphs, closingStatement } =
    termsOfServiceConfig;

  return (
    <section className="min-h-screen bg-[#ffffff] overflow-x-hidden flex flex-col border-b border-[#A6A6A6]">

      {/* Hero Section (SAME as Privacy) */}
      <div
        className="md:h-[220px] h-[190px] flex items-center justify-center"
        style={{
          background: `
            radial-gradient(48.25% 48.25% at 50% 50%, rgba(0, 128, 237, 0.00) 0%, rgba(0, 128, 237, 0.11) 100%)
          `,
        }}
      >
        <div className="max-w-[360px] md:max-w-[1080px] mx-auto text-center px-4">
          <h1 className="heading-one text-[#0080ED]">
            {pageTitle}
          </h1>
        </div>
      </div>

      {/* Content */}
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

          {/* Intro Paragraphs */}
          <div className="flex flex-col gap-4 mb-8">
            {introParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#4b5563] !text-[14px] paragraph-regular !text-left leading-[1.6]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-8">
            {termsSections.map((section) => (
              <article key={section.id} className="flex flex-col gap-4">

                <h3 className="heading-three text-[#000]">
                  {section.id}. {section.title}
                </h3>

                {/* Numbered List */}
                {section.items && (
                  <div className="flex flex-col gap-4">
                    <ol className="flex flex-col gap-2 pl-5 list-decimal">
                      {section.items.map((item, index) => (
                        <li
                          key={index}
                          className="text-[#4b5563] !text-[14px] paragraph-regular !text-left"
                        >
                          {item}
                        </li>
                      ))}
                    </ol>

                    {section.footer && (
                      <p className="text-[#4b5563] !text-[14px] paragraph-regular !text-left">
                        {section.footer}
                      </p>
                    )}
                  </div>
                )}

                {/* Contact Email */}
                {section.contactEmail && (
                  <div className="flex flex-col gap-3">
                    {section.intro && (
                      <p className="text-[#4b5563] !text-[14px] paragraph-regular !text-left">
                        {section.intro}
                      </p>
                    )}

                    <span className="text-black !text-[14px] paragraph-regular !text-left !font-bold">
                      Email: {" "}
                        <a
                          href={`mailto:${section.contactEmail}`}
                          className="text-black !text-[14px] paragraph-regular !text-left hover:underline"
                        >
                          {section.contactEmail}
                        </a>
                    </span>
                  </div>
                )}

              </article>
            ))}
          </div>

          {/* Closing */}
          <div className="pt-5">
            <p className="text-[#4b5563] paragraph-regular !text-left !text-[14px] !font-bold leading-[1.6]">
              {closingStatement}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}