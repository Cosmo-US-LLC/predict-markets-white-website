import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import { CarouselLeftArrow, CarouselRightArrow } from "../../ui/carousel-arrow";
import { cn } from "../../../lib/utils";

export default function Roadmap({
  roadmapItems = [],
  title = "Roadmap",
  subtitle = "Building the world's most rewarding decentralised prediction platform",
}) {
  const [api, setApi] = useState();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  if (!roadmapItems || roadmapItems.length === 0) {
    return null;
  }

  return (
    <section id="roadmap" className="bg-[#F7FCFF] py-12 md:py-[60px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-2">
        {/* Header Section */}
        <div className="flex flex-col gap-[14px] items-center mb-8 md:mb-12">
          <h2 className="heading-two capitalize text-[#000] text-center">
            {title}
          </h2>
          <p className="text-black paragraph-regular text-[14px] md:!text-[20px] text-center max-w-4xl">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex flex-col gap-4 md:gap-0">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {roadmapItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-2 md:pl-4 basis-[350px] md:basis-[400px]"
                >
                  <div className="flex md:h-[510px] h-[510px] flex-col md:gap-[20px] gap-[12px] rounded-[15px] border border-[#dddddd] bg-white px-4 py-4 md:px-4 md:py-8">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="heading-three !text-[24px] capitalize whitespace-pre-line text-black">
                        {item.title}
                      </h3>
                      <div
                        className={cn(
                          "h-[32px] rounded-full px-3 flex items-center justify-center min-w-[100px] ",
                          item.statusType === "completed"
                            ? "bg-[#0080ED]"
                            : item.statusType === "current"
                              ? "border border-[#0080ED]"
                              : "border border-[#0080ED]",
                        )}
                      >
                        <span
                          className={cn(
                            "text-[14px] font-normal leading-[18px] tracking-[0.24px]",
                            item.statusType === "completed"
                              ? "text-white"
                              : "text-black",
                          )}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <hr className="w-full mt-2 pb-0 border-t border-[#dddddd]" />
                    {/* Items List */}

                    <div className="flex flex-col">
                      {item.items.map((listItem, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex flex-row gap-3 h-[80px] items-center md:py-[17px] py-[14px]",
                            index !== item.items.length - 1 &&
                              "border-b border-[#dddddd]",
                          )}
                        >
                          {/* Checkmark or Empty */}
                          <div className="mt-[3px]">
                            {listItem.iconcheck ? (
                              <div className="flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-[#0080ED] p-[3px]">
                                <Check
                                  className="h-full w-full text-white"
                                  strokeWidth={3}
                                />
                              </div>
                            ) : (
                              <div className="bg-[#fff] rounded-full h-[15px] w-[15px] border-[1px] border-[#0080ED]" />
                            )}
                          </div>

                          {/* Text */}
                          <div className=" !text-start max-w-[280px] !text-[16px] text-black">
                            {listItem.text}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Desktop: Arrow Buttons on sides */}
            <div className="hidden md:block absolute -left-[70px] top-1/2 -translate-y-1/2">
              <CarouselLeftArrow
                onClick={() => api?.scrollPrev()}
                disabled={!canScrollPrev}
              />
            </div>
            <div className="hidden md:block absolute -right-[70px] top-1/2 -translate-y-1/2">
              <CarouselRightArrow
                onClick={() => api?.scrollNext()}
                disabled={!canScrollNext}
              />
            </div>
          </Carousel>

          {/* Mobile: Arrow Buttons below the card */}
          <div className="flex md:hidden items-center justify-center gap-4 pt-2">
            <CarouselLeftArrow
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
            />
            <CarouselRightArrow
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
