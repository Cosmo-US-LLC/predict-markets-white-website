export default function ExchangeListings({
  title = "Multiple Exchange\nListings After Launch",
  exchanges = [
    { id: 1, logo: uniswapLogo1 },
    { id: 2, logo: uniswapLogo2 },
    { id: 3, logo: uniswapLogo3 },
    { id: 4, logo: uniswapLogo4 },
    { id: 5, logo: uniswapLogo5 },
  ],
}) {
  return (
    <section className="w-full bg-white py-12 md:py-[84px]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:gap-12 gap-6 items-center">
        {/* Title */}
        <h2 className="heading-two capitalize text-center max-w-[840px] text-black">
          {title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Exchange Cards */}
        <div className="flex flex-wrap gap-[15px] items-start justify-center w-full">
          {exchanges.map((exchange) => (
            <div
              key={exchange.id}
              className="relative flex h-[70px] w-[100px] items-center justify-center overflow-hidden rounded-[15px] border border-[#e5e5e5] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] md:h-[156px] md:w-[229px]"
            >
              <div className="flex items-center justify-center w-full h-full p-4">
                <img
                  src={exchange.logo}
                  alt={`Exchange ${exchange.id}`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}