export default function FeaturedInSection({
  title = "Featured In:",
  logos = [],
}) {
  if (!logos || logos.length === 0) {
    return null;
  }

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

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
         <div className="overflow-hidden w-full">
  <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
    {duplicatedLogos.map((logo, index) => (
      <div
        key={logo.id || index}
        className="flex items-center justify-center h-8 md:h-10 shrink-0"
      >
        {logo.image ? (
          <img
            src={logo.image}
            alt={logo.name || `Logo ${index + 1}`}
            className="object-cover"
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