import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight } from 'lucide-react';

// Arrow button background
const arrowBg = "https://www.figma.com/api/mcp/asset/4697b9cd-add7-410b-a680-6151b744250b";
const chevronLeftIcon = "https://www.figma.com/api/mcp/asset/1e84ba43-a8f1-4512-bdf5-66934472fb0c";
const chevronRightIcon = "https://www.figma.com/api/mcp/asset/0261db15-8ed0-4bc1-bf12-46dedd85191f";
const arrowRightIcon = "https://www.figma.com/api/mcp/asset/07138506-3648-4e52-93e1-51dbf4bc3df3";

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
    <section className="w-full bg-white py-12 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-start justify-between w-full">
          <h2 className="heading-two capitalize text-black">
            {title}
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2 items-center h-[52px] w-[112px]">
            {/* Previous Button */}
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="relative w-[52px] h-[52px] rounded-[40px] border-0 text-white hover:cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              style={{
                backgroundImage: `url(${arrowBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-[14px] flex items-center justify-center">
                <img
                  src={chevronLeftIcon}
                  alt="Previous"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </button>

            {/* Next Button */}
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="relative w-[52px] h-[52px] rounded-[40px] border-0 text-white hover:cursor-pointer hover:opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              style={{
                backgroundImage: `url(${arrowBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                <img
                  src={chevronRightIcon}
                  alt="Next"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex gap-[10px]">
            {markets.map((market) => (
              <div
                key={market.id}
                className="flex-[0_0_296px] min-w-[296px] shrink-0 h-[460px] relative rounded-[13px] overflow-hidden shadow-[0px_40px_80px_0px_rgba(102,91,124,0.1)]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-[13px]">
                  <div className="absolute inset-0 pointer-events-none rounded-[13px]">
                    <img
                      src={market.image}
                      alt={market.title}
                      className="absolute inset-0 w-full h-full object-cover rounded-[13px]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-[13px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(0, 0, 0, 0.08) 0%, rgba(0, 0, 0, 0.08) 100%), linear-gradient(210.58deg, rgba(0, 0, 0, 0) 48.357%, rgba(0, 0, 0, 0.7) 85.342%)",
                      }}
                    />
                  </div>
                </div>

                {/* Top Overlay */}
                {/* <div className="absolute top-0 left-0 right-0 h-[100px] bg-gradient-to-b from-[#0a0a0a] to-transparent opacity-40" /> */}

                {/* Icon */}
                <div className="absolute left-4 top-8 w-8 h-8 z-10">
                  {market.iconBackground && (
                    <div className="relative w-full h-full">
                      <img
                        src={market.iconBackground}
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      {market.iconImage && (
                        <div className="absolute inset-[7px_5px_2px_5px]">
                          <img
                            src={market.iconImage}
                            alt=""
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-4">
                  <div className="flex flex-col items-start text-white">
                    <h3 className="text-[18px] md:text-[20px] font-[600] md:leading-[28px] leading-[26px] md:tracking-[0.4px] tracking-[0.36px] mb-0">
                      {market.title}
                    </h3>
                    <p className="text-[12px] md:text-[14px] h-[110px] font-normal md:leading-[22px] leading-[20px] md:tracking-[0.28px] tracking-[0.24px] opacity-80 mt-1">
                      {market.description}
                    </p>
                  </div>

                  {/* View Markets Link */}
                  {/* <div className="relative h-[34px] w-full mt-2">
                    <div className="absolute top-0 left-0 right-0 h-px bg-white opacity-10" />
                    <div className="absolute top-[13px] left-0 right-0 h-[21px] flex items-center justify-between">
                      <Link
                        to={market.link || '#'}
                        className="text-base font-medium text-white leading-[24px] tracking-[0.32px] hover:opacity-80 transition-opacity"
                      >
                        View markets
                      </Link>
                      <div className="w-[21px] h-[21px] flex items-center justify-center">
                        <img
                          src={arrowRightIcon}
                          alt=""
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <ChevronRight className="w-5 h-5 text-white hidden" />
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* Border */}
                <div className="absolute inset-0 border border-white/10 rounded-[13px] pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}