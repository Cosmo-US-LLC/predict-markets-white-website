import {
  howToBuyEthIconLarge,
  howToBuyEthIconSmall,
  howToBuyWarningIcon,
} from "../../../data/howToBuyFigmaAssets.js";

export function BrowserMockConfirm() {
  return (
    <div className="w-full shrink-0 md:max-w-[452px]">
      <div
        className="overflow-hidden rounded-[11.52px] border border-[#1f2937] bg-[#131414] shadow-[0px_20px_40px_-9px_rgba(0,0,0,0.25)]"
        style={{ minHeight: "234px" }}
      >
        <div className="flex flex-col items-center gap-[14px] px-5 pb-6 pt-[22px]">
          <div className="flex flex-col items-center gap-2">
            <img src={howToBuyEthIconLarge} alt="" className="h-7 w-7 rounded-full object-contain" />
            <p className="font-['Inter',sans-serif] text-[17px] font-medium text-white">1 ETH = $2200</p>
          </div>
          <div className="w-full rounded-[6px] bg-[#202122] px-4 py-4">
            <div className="flex flex-row flex-wrap gap-4 md:justify-between">
              <div className="min-w-[100px]">
                <p className="font-['Inter',sans-serif] text-[13px] font-medium text-white">Network</p>
                <div className="mt-2 flex flex-wrap items-center gap-1">
                  <p className="font-['Inter',sans-serif] text-[13px] font-medium text-white">Request From</p>
                  <img src={howToBuyWarningIcon} alt="" className="size-[9px] opacity-35" />
                </div>
              </div>
              <div className="min-w-[120px] text-left md:text-right">
                <div className="flex items-center gap-2 md:justify-end">
                  <img src={howToBuyEthIconSmall} alt="" className="size-4 object-contain" />
                  <p className="font-['Inter',sans-serif] text-[13px] font-medium text-white">Ethereum</p>
                </div>
                <a
                  href="https://predictmarkets.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block font-['Inter',sans-serif] text-[13px] font-medium text-white underline"
                >
                  Predictmarkets.io
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full gap-2">
            <button
              type="button"
              className="flex-1 cursor-default rounded-full border border-white bg-transparent px-6 py-2 font-['Inter',sans-serif] text-[13px] font-bold capitalize text-white"
            >
              Cancel
            </button>
            <button
              type="button"
              className="relative flex-1 cursor-default overflow-hidden rounded-full border-0 bg-transparent px-0 py-0"
            >
              <span className="absolute inset-0 rounded-full bg-[#0080ed] opacity-95 blur-lg" aria-hidden />
              <span className="relative block rounded-full bg-[#0080ed] px-6 py-2 font-['Inter',sans-serif] text-[13px] font-bold uppercase text-white shadow-[0_8px_20px_-4px_rgba(0,128,237,0.95)]">
                Confirm
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
