// Ethereum logo from Figma
const ethereumLogo = "https://www.figma.com/api/mcp/asset/63858b56-2bdf-4705-9ea5-6e8800dc814e";

export default function FeaturedIn({
  leftText = "First Hold-To-Earn Token",
  rightText = "Built on Ethereum",
  logo = ethereumLogo,
}) {
  return (
    <div className="flex items-center md:justify-start justify-center w-full ">
      <div className="bg-white flex gap-2 items-center px-4 py-1.5 rounded-[40px]">
        <p className=" paragraph-medium max-md:!text-[12px] !font-[600] whitespace-nowrap">
          {leftText}
        </p>
        <div className="bg-black h-5 w-px shrink-0" />
        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
  <g clip-path="url(#clip0_1775_3360)">
    <path d="M6.99671 0L6.84375 0.519576V15.5951L6.99671 15.7477L13.9945 11.6113L6.99671 0Z" fill="#343434"/>
    <path d="M6.99795 0L0 11.6113L6.99795 15.7477V8.43048V0Z" fill="#8C8C8C"/>
    <path d="M7.00027 17.0718L6.91406 17.1769V22.5471L7.00027 22.7987L14.0023 12.9375L7.00027 17.0718Z" fill="#3C3C3B"/>
    <path d="M6.99795 22.7987V17.0718L0 12.9375L6.99795 22.7987Z" fill="#8C8C8C"/>
    <path d="M7 15.7469L13.9978 11.6105L7 8.42969V15.7469Z" fill="#141414"/>
    <path d="M0 11.6105L6.99795 15.7469V8.42969L0 11.6105Z" fill="#393939"/>
  </g>
  <defs>
    <clipPath id="clip0_1775_3360">
      <rect width="14" height="22.7998" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <p className="paragraph-medium max-md:!text-[12px] !font-[600] whitespace-nowrap">
          {rightText}
        </p>
      </div>
    </div>
  );
}