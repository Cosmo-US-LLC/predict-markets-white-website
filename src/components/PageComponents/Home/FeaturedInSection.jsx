export default function FeaturedInSection({
  title = "Featured In:",
  logos = [],
}) {
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    
      <div className="w-full max-w-[1280px] py-8 md:py-3 mx-auto">
        <div 
          className="rounded-[15px] border-[0.5px] border-white flex flex-col md:flex-row gap-4 items-center justify-center md:justify-start px-4 py-6"
          style={{
            background: 'rgba(245, 245, 245, 0.26)'
          }}
        >
          {/* Title */}
          <p className="text-black text-[18px] md:text-lg font-bold leading-6 tracking-[0.32px] whitespace-nowrap shrink-0">
            {title}
          </p>

          {/* Logos */}
          <div className="flex items-center justify-center gap-6 flex-1">
            {logos.map((logo, index) => (
              <div
                key={logo.id || index}
                className="flex items-center justify-center h-8 md:h-10 
                "
              >
                {logo.image ? (
                  <img
                    src={logo.image}
                    alt={logo.name || `Logo ${index + 1}`}
                    className=" object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : logo.name ? (
                  <span className="text-black text-sm md:text-base font-bold">
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