// Ethereum logo from Figma
const ethereumLogo = "https://www.figma.com/api/mcp/asset/63858b56-2bdf-4705-9ea5-6e8800dc814e";

export default function FeaturedIn({
  leftText = "First Hold-To-Earn Token",
  rightText = "Built on Ethereum",
  logo = ethereumLogo,
}) {
  return (
    <div className="flex items-center justify-center w-full mb-6">
      <div className="bg-white flex gap-2 items-center px-4 py-1.5 rounded-[40px]">
        <p className="text-black text-[12px] md:text-[14px] font-normal leading-[22px] tracking-[0.28px] whitespace-nowrap">
          {leftText}
        </p>
        <div className="bg-black h-5 w-px shrink-0" />
        <div className="h-[22.8px] w-[14px] flex items-center justify-center shrink-0">
          <img
            src={logo}
            alt="Ethereum"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <p className="text-black text-sm font-normal leading-[22px] tracking-[0.28px] whitespace-nowrap">
          {rightText}
        </p>
      </div>
    </div>
  );
}