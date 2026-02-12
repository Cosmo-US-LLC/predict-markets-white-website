export default function FeaturedInSection({
  title = "Featured In:",
  logos = [],
}) {
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    
      <div className="w-full max-w-[1280px] py-8 md:py-12 mx-auto">
        <div className="backdrop-blur-[23.65px] bg-[#020B106B] border-[1px] border-[#020B106B] rounded-[15px] px-6 md:px-8 py-6 md:py-8 flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start">
          {/* Title */}
          <p className="text-white text-[18px] md:text-lg font-medium leading-6 tracking-[0.32px] whitespace-nowrap shrink-0">
            {title}
          </p>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-6 flex-1">
            {logos.map((logo, index) => (
              <div
                key={logo.id || index}
                className="flex items-center justify-center h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity"
              >
                {logo.image ? (
                  <img
                    src={logo.image}
                    alt={logo.name || `Logo ${index + 1}`}
                    className="h-full w-auto max-w-[120px] md:max-w-[150px] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : logo.name ? (
                  <span className="text-white text-sm md:text-base font-medium">
                    {logo.name}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
     
  );
}