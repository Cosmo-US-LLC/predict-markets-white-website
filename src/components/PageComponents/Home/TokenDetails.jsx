import { useState } from "react";
import { Copy } from "lucide-react";
import tokenDetailsImageDesktop from "../../../assets/images/home/token_details/token_details_desktop_light.webp";
import tokenDetailsImageMobile from "../../../assets/images/home/token_details/token_details_mobile.webp";

export default function TokenDetails({
  title = "Token Details",
  subtitle = "The token allocation is structured to give early supporters the strongest advantage.",
  // chartImage,
  details = [],
}) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id, value) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-white py-12 px-4 md:py-20 md:px-8 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize text-black">
            {title}
          </h2>
          <p className="max-w-[713px] text-base leading-6 tracking-[0.32px] text-[#4b4b4b]">
            {subtitle}
          </p>
        </div>

        {/* Chart (optional) */}
        <div className="mx-auto flex h-[422px] w-full max-w-[1209px] items-center justify-center rounded-[15px] border border-[#dddddd] bg-white md:h-[600px]">
          <div className="relative hidden h-[422px] w-full max-w-full md:block">
            <h4 className="heading-four absolute left-[36%] top-[8px] text-black">
              1% Marketing
            </h4>
            <h4 className="heading-four absolute left-[52%] top-[12px] text-black">
              1% Team
            </h4>
            <h4 className="heading-four absolute left-[15.5%] top-[17%] text-black">
              3% Development
            </h4>
            <h4 className="heading-four absolute left-[62%] top-[15%] text-black">
              40% Public Sale
            </h4>
            <img
              src={tokenDetailsImageDesktop}
              alt="Token Allocation Chart"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <h4 className="heading-four absolute left-[17%] top-[32%] max-w-[187px] text-black">
              10% Reserved for CEX Listing
            </h4>
            <h4 className="heading-four absolute bottom-[24%] left-[10.5%] text-black">
              25% Liquidity Pool
            </h4>
            <h4 className="heading-four absolute bottom-[21%] right-[15%] text-black">
              20% Staking Rewards
            </h4>
          </div>
          <div className="relative h-[294px] w-full max-w-full md:hidden">
            <p className="paragraph-regular absolute left-[2%] top-[11%] text-black">
              3% Development
            </p>
            <p className="paragraph-regular absolute left-[23%] top-[-10%] text-black">
              1% Marketing
            </p>
            <p className="paragraph-regular absolute right-[32%] top-[10%] text-black">
              1% Team
            </p>
            <p className="paragraph-regular absolute right-[8%] top-[8%] max-w-[52px] text-black">
              40% Public Sale
            </p>
            <img
              src={tokenDetailsImageMobile}
              alt="Token Allocation Chart"
              className="h-full w-full object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <p className="paragraph-regular absolute bottom-[16%] left-[2%] max-w-[107px] text-black">
              10% <br /> Reserved for CEX Listing
            </p>
            <p className="paragraph-regular absolute bottom-[-9%] left-[8%] max-w-[152px] text-black">
              25% Liquidity Pool
            </p>
            <p className="paragraph-regular absolute bottom-[-10%] right-[-1%] max-w-[122px] text-black">
              20% Staking Rewards
            </p>
          </div>
        </div>

        {/* Token details cards grid */}
        {details.length > 0 && (
          <div className="mx-auto flex max-w-full flex-col gap-3 md:grid md:max-w-[1209px] md:grid-cols-3 md:gap-4">
            {/* Row 1: First 3 cards in 3 columns on mobile */}
            <div className="grid grid-cols-3 gap-3 md:contents">
              {details.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5"
                >
                  <span className="text-sm font-normal leading-[22px] tracking-[0.28px] text-[rgba(0,0,0,0.7)]">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-medium leading-6 tracking-[0.32px] text-black md:text-base">
                      {item.value}
                    </span>
                    {item.copyable && (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.value)}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[#0080ED] text-[#0080ED] transition-colors hover:bg-[#0080ED] hover:text-white"
                        aria-label="Copy address"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  {item.copyable && copiedId === item.id && (
                    <span className="text-xs text-[#4b4b4b]">Copied!</span>
                  )}
                </div>
              ))}
            </div>

            {/* Row 2: Next 2 cards in 2 columns on mobile */}
            {details.length > 3 && (
              <div className="grid grid-cols-2 gap-3 w-full md:contents">
                {details.slice(3, 5).map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5"
                  >
                    <span className="text-sm font-normal leading-[22px] tracking-[0.28px] text-[rgba(0,0,0,0.7)]">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-base font-medium leading-6 tracking-[0.32px] text-black md:text-base">
                        {item.value}
                      </span>
                      {item.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(item.id, item.value)}
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[#0080ED] text-[#0080ED] transition-colors hover:bg-[#0080ED] hover:text-white"
                          aria-label="Copy address"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                    {item.copyable && copiedId === item.id && (
                      <span className="text-xs text-[#4b4b4b]">Copied!</span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Remaining cards: Full width on both mobile and desktop */}
            {details.slice(5).map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5 ${
                  index === details.length - 6 ? "md:col-span-3" : ""
                }`}
              >
                <span className="text-sm font-normal leading-[22px] tracking-[0.28px] text-[rgba(0,0,0,0.7)]">
                  {item.label}
                </span>
                <div className="flex items-center gap-3">
                  <span
                    className={`leading-6 tracking-[0.32px] text-black ${
                      item.value.length > 40
                        ? "text-[11px] md:text-base font-medium"
                        : "text-base font-medium"
                    }`}
                  >
                    {item.value}
                  </span>
                  {item.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.value)}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-[#0080ED] text-[#0080ED] transition-colors hover:bg-[#0080ED] hover:text-white"
                      aria-label="Copy address"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  )}
                </div>
                {item.copyable && copiedId === item.id && (
                  <span className="text-xs text-[#4b4b4b]">Copied!</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
