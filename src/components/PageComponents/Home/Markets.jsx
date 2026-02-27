import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Markets({
  title = "Markets",
  markets = [],
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    loop: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateScrollButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    updateScrollButtons();
    emblaApi.on('select', updateScrollButtons);
    emblaApi.on('reInit', updateScrollButtons);
    emblaApi.reInit();

    return () => {
      emblaApi.off('select', updateScrollButtons);
      emblaApi.off('reInit', updateScrollButtons);
    };
  }, [emblaApi, markets]);

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  if (!markets || markets.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#F7FCFF] py-12 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-2 flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-start justify-between w-full">
          <h2 className="heading-two">
            {title}
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 items-center">
            {/* Previous Button - Light Gray */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-[52px] h-[52px] rounded-full bg-gray-200 hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-[#000]" />
            </button>

            {/* Next Button - Black */}
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-[52px] h-[52px] rounded-full bg-[#000] hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-2">
            {markets.map((market) => {
              // Check if this is the Cryptocurrency card (needs dark theme)
              const isCrypto = market.title.toLowerCase() === 'cryptocurrency';
              
              return (
                <div
                  key={market.id}
                  className="flex-[0_0_296px] min-w-[296px] shrink-0 h-[460px] relative rounded-lg overflow-hidden shadow-md"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-lg">
                    <img
                      src={market.image}
                      alt={market.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                   
                  </div>

                  {/* Icon */}
                  <div className="absolute left-4 top-4 w-6 h-6 z-10">
                    {market.iconBackground && (
                      <img
                        src={market.iconBackground}
                        alt=""
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                  </div>

                  {/* Content at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-4 z-10">
                    <div className={`flex flex-col items-start min-h-[130px] ${isCrypto ? 'text-white' : 'text-[#000]'}`}>
                      <h3 className="paragraph-regular max-md:!text-[20px] !font-[Inter] 
                      !text-[#fff] !font-[600] max-md:mb-2">
                        {market.title}
                      </h3>
                      <p className={`text-[16px] !text-[#fff] md:text-[14px] font-normal 
                      md:leading-[22px] leading-[24px] mt-1 ${
                        isCrypto ? 'text-white/90' : 'text-[#000]'
                      }`}>
                        {market.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}