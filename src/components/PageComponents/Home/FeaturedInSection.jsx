export default function FeaturedInSection({
  title = "Featured In:",
  logos = [],
}) {
  if (!logos || logos.length === 0) {
    return null;
  }


  return (
    
      <div className="w-full max-w-[1280px]  py-0 md:py-2 mx-auto">
        <div 
          className="rounded-[15px] border-[0.5px] border-white flex flex-row md:flex-row gap-4 max-h-[50px] items-center justify-center md:justify-start px-4 py-6"
          style={{
            background: 'rgba(245, 245, 245, 0.26)'
          }}
        >
          {/* Title */}
          <p className="text-black text-[10px] md:text-[16px] font-bold leading-6 tracking-[0.32px] whitespace-nowrap shrink-0">
            {title}
          </p>

          {/* Logos - Using marquee for smooth infinite scroll */}
          <div className="overflow-hidden w-full relative">
            <div className="flex items-center gap-6 animate-marquee w-[5000px] whitespace-nowrap">
              {/* First set of logos */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-1-${logo.id || index}`}
                  className="flex items-center justify-center h-6 md:h-8 shrink-0"
                >
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.name || `Logo ${index + 1}`}
                      className="object-cover h-full w-auto max-w-full"
                    />
                  ) : (
                    <span className="text-black text-sm md:text-base font-bold">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo, index) => (
                <div
                  key={`logo-2-${logo.id || index}`}
                  className="flex items-center justify-center h-6 md:h-8 shrink-0"
                >
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.name || `Logo ${index + 1}`}
                      className="object-cover h-full w-auto max-w-full"
                    />
                  ) : (
                    <span className="text-black text-sm md:text-base font-bold">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
               {logos.map((logo, index) => (
                <div
                  key={`logo-3-${logo.id || index}`}
                  className="flex items-center justify-center h-6 md:h-8 shrink-0"
                >
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.name || `Logo ${index + 1}`}
                      className="object-cover h-full w-auto max-w-full"
                    />
                  ) : (
                    <span className="text-black text-sm md:text-base font-bold">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
               {logos.map((logo, index) => (
                <div
                  key={`logo-4-${logo.id || index}`}
                  className="flex items-center justify-center h-6 md:h-8 shrink-0"
                >
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.name || `Logo ${index + 1}`}
                      className="object-cover h-full w-auto max-w-full"
                    />
                  ) : (
                    <span className="text-black text-sm md:text-base font-bold">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
     
  );
}