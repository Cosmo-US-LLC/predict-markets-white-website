import { useState } from "react";
import { Copy } from "lucide-react";
import tokenDetailsImageDesktop from "../../../assets/images/home/token_details/token_details_desktop_light.webp";
import tokenDetailsImageMobile from "../../../assets/images/home/token_details/token_details_desktop_light.webp";

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

  const reorderedDetails = [...details];
if (reorderedDetails.length >= 6) {
  // Swap index 3 (4th item) and index 5 (6th item)
  const temp = reorderedDetails[3];
  reorderedDetails[3] = reorderedDetails[5];
  reorderedDetails[5] = temp;
}

  return (
    <section id="tokenomics" className="relative overflow-hidden bg-white py-12 px-4 md:py-20 md:px-8 lg:px-[80px]
    ">

      <div className="max-w-[1280px] mx-auto flex flex-col gap-6 md:gap-12"
      
      >
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="heading-two font-medium leading-[53px] tracking-[-2px] capitalize text-black">
            {title}
          </h2>
          <p className="max-w-[813px] md:!text-[18px] paragraph-regular">
            {subtitle}
          </p>
        </div>

        {/* Chart (optional) */}
        <div className="mx-auto flex md:h-[462px] h-[222px] w-full max-w-[1209px] items-center justify-center rounded-[15px] border border-[#dddddd] bg-white "
         style={{
          borderRadius: "15px",
          background:
            "radial-gradient(41.18% 41.18% at 50% 58.84%, rgba(0, 128, 237, 0.50) 0%, rgba(255, 255, 255, 0.50) 70%)",
        }}
        >
          <div className="relative hidden h-[422px] w-full max-w-full md:block">
            <h4 className="heading-four md:!text-[14px] md:!leading-[150%] absolute left-[36%] top-[12px] text-black">
              1% Marketing
            </h4>
            <h4 className="heading-four md:!text-[14px] md:!leading-[150%] absolute left-[52%] top-[13px] text-black">
              1% Team
            </h4>
            <h4 className="heading-four md:!text-[14px] md:!leading-[150%] absolute left-[15.5%] top-[20%] text-black">
              3% Development
            </h4>
            <h4 className="heading-four md:!text-[14px] md:!leading-[150%] absolute left-[62%] top-[18%] text-black">
              40% Public Sale
            </h4>
            <img
              src={tokenDetailsImageDesktop}
              alt="Token Allocation Chart"
              className="w-full h-full min-h-[460px] object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <h4 className="heading-four md:!text-[14px] md:!leading-[150%] absolute left-[17%] top-[38%] max-w-[187px] text-black">
              10% Reserved for CEX Listing
            </h4>
            <h4 className="heading-four md:!text-[14px] md:!leading-[150%] absolute bottom-[20%] left-[10.5%] text-black">
              25% Liquidity Pool
            </h4>
            <h4 className="heading-four md:!text-[14px] md:!leading-[150%] absolute bottom-[16%] right-[15%] text-black">
              20% Staking Rewards
            </h4>
          </div>
          <div className="relative w-full max-w-full md:hidden">
            <p className="absolute left-[8%] top-[21%] !font-[Helvetica] !text-left text-black !font-[500] !text-[10px] !leading-[10px]">
              3% <br /> Development
            </p>
            <p className="absolute left-[22%] top-[-1%] !font-[Helvetica] !text-left text-black !font-[500] !text-[10px] !leading-[10px]">
              1% Marketing
            </p>
            <p className="absolute right-[34%] top-[1%] !font-[Helvetica] !text-left text-black !font-[500] !text-[10px] !leading-[10px]">
              1% Team
            </p>
            <p className="absolute right-[4%] top-[8%] max-w-[72px] !font-[Helvetica] !text-left text-black !font-[500] !text-[10px] !leading-[10px]">
              40% Public Sale
            </p>
            <img
              src={tokenDetailsImageMobile}
              alt="Token Allocation Chart"
              className="h-full w-full min-h-[175px]"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
            <p className="absolute bottom-[39%] left-[6%] max-w-[60px] !font-[Helvetica] !text-left text-black !font-[500] !text-[10px] !leading-[10px]">
              10% <br /> Reserved for CEX Listing
            </p>
            <p className="absolute bottom-[6%] left-[8%] max-w-[72px] !font-[Helvetica] !text-left text-black !font-[500] !text-[10px] !leading-[10px]">
              25% Liquidity Pool
            </p>
            <p className="absolute bottom-[3%] right-[10%] max-w-[72px] !font-[Helvetica] !text-left text-black !font-[500] !text-[10px] !leading-[10px]">
              20% Staking Rewards
            </p>
          </div>
        </div>

        {/* Token details cards grid */}
        {reorderedDetails.length > 0 && (
          <div className="mx-auto md:hidden flex max-w-full flex-col gap-3 md:grid md:max-w-[1209px] md:grid-cols-3 md:gap-4">
            {/* Row 1: First 3 cards in 3 columns on mobile */}
            <div className="grid grid-cols-3 md:gap-3 gap-2 md:contents">
              {reorderedDetails.slice(0, 3).map((item) =>(
                <div
                  key={item.id}
                  className="flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5"
                >
                  <span className="font-normal   text-[rgba(0,0,0,0.7)] md:text-[16px] text-[12px] md:leading-[24px] leading-[15px] md:tracking-[0.32px] tracking-[0.24px]">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-medium max-md:w-[72px] text-black md:!text-[16px] text-[12px] md:leading-[24px] leading-[15px] md:tracking-[0.32px] tracking-[0.28px]">
                      {item.value}
                    </span>
                    {item.copyable && (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.value)}
                        className="cursor-pointer"
                        aria-label="Copy address"
                      >
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1775_4604)">
    <path d="M15.3584 14.1001C15.3584 15.1284 14.5249 15.9619 13.4966 15.9619H6.04932C5.02106 15.9619 4.1875 15.1284 4.1875 14.1001V6.65283C4.1875 5.62458 5.02106 4.79102 6.04932 4.79102H13.4966C14.5249 4.79102 15.3584 5.62458 15.3584 6.65283V14.1001Z" fill="#0080ED"/>
    <path d="M10.3054 3.39429C10.5264 3.39429 10.7054 3.21521 10.7054 2.99429V2.92884C10.7054 1.90058 9.8719 0.601563 8.84366 0.601563L1.86182 0.601562C0.833564 0.601562 7.75875e-07 1.43513 6.87875e-07 2.46338L0 10.3761C-8.8e-08 11.4043 0.833564 12.2379 1.86182 12.2379H2.39272C2.61364 12.2379 2.79272 12.0588 2.79272 11.8379V6.65247C2.79272 4.85303 4.25147 3.39429 6.05091 3.39429H10.3054Z" fill="#0080ED"/>
  </g>
  <defs>
    <clipPath id="clip0_1775_4604">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
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
          {reorderedDetails.length > 3 &&(
              <div className="grid grid-cols-2 md:gap-3 gap-2 w-full md:contents">
              {reorderedDetails.slice(3, 5).map((item) =>(
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5"
                  >
                    <span className="font-normal text-[rgba(0,0,0,0.7)] md:text-[16px] text-[12px] md:leading-[24px] leading-[15px] md:tracking-[0.32px] tracking-[0.24px]">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-3 !w-full min-w-[410px] !max-w-[410px] ">
                      <span className="font-medium font-[Inter] max-w-[280px]  text-black  md:!text-[16px] !text-[12px] md:leading-[24px]  leading-[15px] md:tracking-[0.32px] tracking-[0.28px]">
                        {item.value}
                      </span>
                      {item.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(item.id, item.value)}
                          className="cursor-pointe"
                          aria-label="Copy address"
                        >
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1775_4604)">
    <path d="M15.3584 14.1001C15.3584 15.1284 14.5249 15.9619 13.4966 15.9619H6.04932C5.02106 15.9619 4.1875 15.1284 4.1875 14.1001V6.65283C4.1875 5.62458 5.02106 4.79102 6.04932 4.79102H13.4966C14.5249 4.79102 15.3584 5.62458 15.3584 6.65283V14.1001Z" fill="#0080ED"/>
    <path d="M10.3054 3.39429C10.5264 3.39429 10.7054 3.21521 10.7054 2.99429V2.92884C10.7054 1.90058 9.8719 0.601563 8.84366 0.601563L1.86182 0.601562C0.833564 0.601562 7.75875e-07 1.43513 6.87875e-07 2.46338L0 10.3761C-8.8e-08 11.4043 0.833564 12.2379 1.86182 12.2379H2.39272C2.61364 12.2379 2.79272 12.0588 2.79272 11.8379V6.65247C2.79272 4.85303 4.25147 3.39429 6.05091 3.39429H10.3054Z" fill="#0080ED"/>
  </g>
  <defs>
    <clipPath id="clip0_1775_4604">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
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
            {reorderedDetails.slice(5).map((item, index) =>(
              <div
                key={item.id}
                className={`flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5 ${
                  index === details.length - 6 ? "md:col-span-3" : ""
                }`}
              >
                <span className="font-normal text-[rgba(0,0,0,0.7)] md:!text-[16px] text-[12px] md:leading-[24px] leading-[15px] md:tracking-[0.32px] tracking-[0.24px]">
                  {item.label}
                </span>
                <div className="flex  items-center md:gap-3 gap-2">
                  <span
                    className={`md:leading-6 tracking-[0.32px] text-black ${
                      item.value.length > 40
                        ? "md:!text-[16px] !text-[12px] font-medium"
                        : "md:!text-[16px] !text-[12px] font-semibold"
                    }`}
                  >
                    {item.valueForMobile ? item.valueForMobile : item.value}
                  </span>
                  {item.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.value)}
                      className="cursor-pointer"
                      aria-label="Copy address"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1775_4604)">
    <path d="M15.3584 14.1001C15.3584 15.1284 14.5249 15.9619 13.4966 15.9619H6.04932C5.02106 15.9619 4.1875 15.1284 4.1875 14.1001V6.65283C4.1875 5.62458 5.02106 4.79102 6.04932 4.79102H13.4966C14.5249 4.79102 15.3584 5.62458 15.3584 6.65283V14.1001Z" fill="#0080ED"/>
    <path d="M10.3054 3.39429C10.5264 3.39429 10.7054 3.21521 10.7054 2.99429V2.92884C10.7054 1.90058 9.8719 0.601563 8.84366 0.601563L1.86182 0.601562C0.833564 0.601562 7.75875e-07 1.43513 6.87875e-07 2.46338L0 10.3761C-8.8e-08 11.4043 0.833564 12.2379 1.86182 12.2379H2.39272C2.61364 12.2379 2.79272 12.0588 2.79272 11.8379V6.65247C2.79272 4.85303 4.25147 3.39429 6.05091 3.39429H10.3054Z" fill="#0080ED"/>
  </g>
  <defs>
    <clipPath id="clip0_1775_4604">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
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
        {details.length > 0 && (
          <div className="mx-auto md:flex hidden  max-w-full flex-col gap-3 md:grid md:max-w-[1209px] md:grid-cols-3 md:gap-4">
            {/* Row 1: First 3 cards in 3 columns on mobile */}
            <div className="grid grid-cols-3 md:gap-3 gap-2 md:contents">
              {details.slice(0, 3).map((item) =>(
                <div
                  key={item.id}
                  className="flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5"
                >
                  <span className="font-normal   text-[rgba(0,0,0,0.7)] md:text-[16px] text-[12px] md:leading-[24px] leading-[15px] md:tracking-[0.32px] tracking-[0.24px]">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-medium max-md:w-[72px] text-black md:!text-[16px] text-[12px] md:leading-[24px] leading-[15px] md:tracking-[0.32px] tracking-[0.28px]">
                      {item.value}
                    </span>
                    {item.copyable && (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.id, item.value)}
                        className="cursor-pointer"
                        aria-label="Copy address"
                      >
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1775_4604)">
    <path d="M15.3584 14.1001C15.3584 15.1284 14.5249 15.9619 13.4966 15.9619H6.04932C5.02106 15.9619 4.1875 15.1284 4.1875 14.1001V6.65283C4.1875 5.62458 5.02106 4.79102 6.04932 4.79102H13.4966C14.5249 4.79102 15.3584 5.62458 15.3584 6.65283V14.1001Z" fill="#0080ED"/>
    <path d="M10.3054 3.39429C10.5264 3.39429 10.7054 3.21521 10.7054 2.99429V2.92884C10.7054 1.90058 9.8719 0.601563 8.84366 0.601563L1.86182 0.601562C0.833564 0.601562 7.75875e-07 1.43513 6.87875e-07 2.46338L0 10.3761C-8.8e-08 11.4043 0.833564 12.2379 1.86182 12.2379H2.39272C2.61364 12.2379 2.79272 12.0588 2.79272 11.8379V6.65247C2.79272 4.85303 4.25147 3.39429 6.05091 3.39429H10.3054Z" fill="#0080ED"/>
  </g>
  <defs>
    <clipPath id="clip0_1775_4604">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
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
          {details.length > 3 &&(
              <div className="grid grid-cols-2 md:gap-3 gap-2 w-full md:contents">
              {details.slice(3, 5).map((item) =>(
                  <div
                    key={item.id}
                    className="flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5"
                  >
                    <span className="font-normal text-[rgba(0,0,0,0.7)] md:text-[16px] text-[12px] md:leading-[24px] leading-[15px] md:tracking-[0.32px] tracking-[0.24px]">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-3 !w-full min-w-[410px] !max-w-[410px] ">
                      <span className="font-medium font-[Inter] max-w-[280px]  text-black  md:!text-[16px] !text-[12px] md:leading-[24px]  leading-[15px] md:tracking-[0.32px] tracking-[0.28px]">
                        {item.value}
                      </span>
                      {item.copyable && (
                        <button
                          type="button"
                          onClick={() => handleCopy(item.id, item.value)}
                          className="cursor-pointe"
                          aria-label="Copy address"
                        >
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1775_4604)">
    <path d="M15.3584 14.1001C15.3584 15.1284 14.5249 15.9619 13.4966 15.9619H6.04932C5.02106 15.9619 4.1875 15.1284 4.1875 14.1001V6.65283C4.1875 5.62458 5.02106 4.79102 6.04932 4.79102H13.4966C14.5249 4.79102 15.3584 5.62458 15.3584 6.65283V14.1001Z" fill="#0080ED"/>
    <path d="M10.3054 3.39429C10.5264 3.39429 10.7054 3.21521 10.7054 2.99429V2.92884C10.7054 1.90058 9.8719 0.601563 8.84366 0.601563L1.86182 0.601562C0.833564 0.601562 7.75875e-07 1.43513 6.87875e-07 2.46338L0 10.3761C-8.8e-08 11.4043 0.833564 12.2379 1.86182 12.2379H2.39272C2.61364 12.2379 2.79272 12.0588 2.79272 11.8379V6.65247C2.79272 4.85303 4.25147 3.39429 6.05091 3.39429H10.3054Z" fill="#0080ED"/>
  </g>
  <defs>
    <clipPath id="clip0_1775_4604">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
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
            {details.slice(5).map((item, index) =>(
              <div
                key={item.id}
                className={`flex flex-col gap-2 rounded-[15px] border border-[#dddddd] bg-white p-3 md:p-5 ${
                  index === details.length - 6 ? "md:col-span-3" : ""
                }`}
              >
                <span className="font-normal text-[rgba(0,0,0,0.7)] md:!text-[16px] text-[12px] md:leading-[24px] leading-[15px] md:tracking-[0.32px] tracking-[0.24px]">
                  {item.label}
                </span>
                <div className="flex items-center md:gap-3 gap-2">
                  <span
                    className={`leading-6 tracking-[0.32px] text-black ${
                      item.value.length > 40
                        ? "md:!text-[16px] !text-[12px] font-medium"
                        : "md:!text-[16px] !text-[12px] font-semibold"
                    }`}
                  >
                    {item.valueForMobile ? item.valueForMobile : item.value}
                  </span>
                  {item.copyable && (
                    <button
                      type="button"
                      onClick={() => handleCopy(item.id, item.value)}
                      className="cursor-pointer"
                      aria-label="Copy address"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_1775_4604)">
    <path d="M15.3584 14.1001C15.3584 15.1284 14.5249 15.9619 13.4966 15.9619H6.04932C5.02106 15.9619 4.1875 15.1284 4.1875 14.1001V6.65283C4.1875 5.62458 5.02106 4.79102 6.04932 4.79102H13.4966C14.5249 4.79102 15.3584 5.62458 15.3584 6.65283V14.1001Z" fill="#0080ED"/>
    <path d="M10.3054 3.39429C10.5264 3.39429 10.7054 3.21521 10.7054 2.99429V2.92884C10.7054 1.90058 9.8719 0.601563 8.84366 0.601563L1.86182 0.601562C0.833564 0.601562 7.75875e-07 1.43513 6.87875e-07 2.46338L0 10.3761C-8.8e-08 11.4043 0.833564 12.2379 1.86182 12.2379H2.39272C2.61364 12.2379 2.79272 12.0588 2.79272 11.8379V6.65247C2.79272 4.85303 4.25147 3.39429 6.05091 3.39429H10.3054Z" fill="#0080ED"/>
  </g>
  <defs>
    <clipPath id="clip0_1775_4604">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
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
