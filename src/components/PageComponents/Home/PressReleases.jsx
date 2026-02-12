export default function PressReleases({ 
  pressReleases = [],
  title = 'Press Releases',
}) {
  if (!pressReleases || pressReleases.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#020b10] py-12 md:py-20 ">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-[48px] items-center mb-12 md:mb-12">
          <h2 className="heading-two capitalize bg-gradient-to-t from-[#b2ddff] to-white bg-clip-text text-transparent text-center">
            {title}
          </h2>

          {/* Press Release Cards */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-[21px] items-center justify-center w-full">
            {pressReleases.map((release) => (
              <div
                key={release.id}
                className="bg-[#0f0f0f] gradient-border-rounded !rounded-[15px] p-[18px] flex flex-col gap-4 w-full md:w-[390px]"
              >
                {/* Image Section */}
                <div className="relative h-[303px] rounded-[15px] overflow-hidden flex flex-col justify-end">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="relative px-[18px] py-[9px] z-10">
                    <h4 className="text-white heading-four capitalize mb-1.5">
                      {release.title}
                    </h4>
                    <div className="text-[#cacaca] paragraph-regular whitespace-pre-line">
                      {release.description}
                    </div>
                  </div>
                </div>

                {/* Logo Section */}
                <div className="h-[42px] flex items-center">
                  <img
                    src={release.logo}
                    alt={`${release.id} logo`}
                    className="h-full w-auto object-contain"
                    style={{ maxWidth: release.logoWidth }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}