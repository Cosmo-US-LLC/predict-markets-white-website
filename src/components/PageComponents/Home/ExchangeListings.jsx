export default function ExchangeListings({
  title = "Multiple Exchange\nListings After Launch",
  exchanges = [],
}) {
  return (
    <section className="w-full bg-white md:bg-[#F7FCFF] py-12 md:py-[84px]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-6 md:gap-12 items-center">
        {/* Title */}
        <h2 className="heading-two text-center max-w-[520px] md:max-w-[840px] text-[#000] font-bold leading-[1.15]">
          {title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Exchange Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 items-center justify-center w-full max-w-[420px] md:max-w-none">
          {exchanges.map((exchange, index) => (
            <div
              key={exchange.id}
              className="bg-white rounded-[15px] border border-[#DDD] px-4 py-3 md:p-6 flex items-center justify-center h-[64px] md:h-[120px]"
            >
              <img
                src={exchange.logo}
                alt={exchange.name}
                className={`w-auto object-contain ${
                  index === 0 ? "h-6 md:h-10" : "h-6 md:h-12"
                }`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}