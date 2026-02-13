export default function ExchangeListings({
  title = "Multiple Exchange\nListings After Launch",
  exchanges = [],
}) {
  return (
    <section className="w-full bg-[#F7FCFF] py-12 md:py-[84px]">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col md:gap-12 gap-6 items-center">
        {/* Title */}
        <h2 className="heading-two text-center max-w-[840px] text-[#000] font-bold">
          {title.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              {index < title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Exchange Cards */}
        <div className="flex flex-wrap gap-4 items-center justify-center w-full">
          {exchanges.map((exchange, index) => (
            <div
              key={exchange.id}
              className="bg-white rounded-lg border border-gray-300 p-4 md:p-6 flex items-center justify-center min-w-[200px] md:min-w-[250px] h-[100px] md:h-[120px"
            >
                <div className="flex items-center gap-3">
                  <img
                    src={exchange.logo}
                    alt={exchange.name}
                    className={`h-8 w-auto ${index === 0 ? 'md:h-[50px]' : 'md:h-[80px]'} ${index === 2 || index === 3 ? 'backdrop-blur-2xl' : ''}`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {/* <span className="text-[#000] text-base md:text-lg font-medium">{exchange.name}</span> */}
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}