const MOCK_PICKER_CHIPS = [
  "ETH • ERC-20",
  "BNB • BEP-20",
  "USDT • ERC-20",
  "BTC • BITCOIN",
  "SOL • SOLANA",
  "More",
];

export function MockAmountPanel({
  heading,
  mockPayExample,
  mockPayLabel,
  mockReceiveAmount,
  mockReceivePrimary,
  mockReceiveAccent,
  showCta,
  ctaText,
}) {
  return (
    <div className="flex flex-col gap-8 rounded-[14px] bg-[#F3F4F6] px-4 py-6 md:flex-row md:items-stretch md:gap-16 md:px-6 md:py-8">
      <div className="flex flex-[1_0_0] items-center md:max-w-[400px] md:py-4">
        <p className="text-left font-['Inter',sans-serif] text-[16px] font-normal leading-6 tracking-[0.32px] text-black md:text-[18px] md:leading-[26px] md:tracking-[0.36px]">
          {heading}
        </p>
      </div>
      <div className="flex w-full shrink-0 flex-col gap-3 md:max-w-[360px]">
        <div className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-sm">
          <p className="text-[12px] leading-[18px] text-black/55">{mockPayLabel}</p>
          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="text-[26px] font-semibold tabular-nums text-black">{mockPayExample}</span>
            <span className="flex shrink-0 flex-col rounded-md border border-[#DDD] bg-white px-2 py-1 text-center text-[13px] font-semibold leading-4">
              USDT<span className="text-[11px] font-normal text-black/65"> ERC-20</span>
            </span>
          </div>
        </div>
        <div className="rounded-lg border border-[#E5E7EB] bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-baseline gap-x-1 gap-y-0 text-[12px] leading-[18px]">
            <span className="text-[#0d9488]">{mockReceivePrimary}</span>
            <span className="font-semibold text-[#0d9488]">{mockReceiveAccent}</span>
          </div>
          <div className="mt-2 flex items-center justify-between gap-3">
            <span className="text-[26px] font-semibold tabular-nums text-[#0080ED]">{mockReceiveAmount}</span>
            <span className="flex items-center gap-1 rounded-full border border-[#DDD] bg-[#f8fafc] px-2 py-1 text-[11px] font-bold text-black">
              PREDICT
            </span>
          </div>
        </div>
        {showCta ? (
          <button type="button" className="btn_primary mt-1 w-full rounded-lg !py-[14px] shadow-[0_0_22px_-4px_rgba(0,128,237,0.75)] cursor-default">
            {ctaText ?? "BUY $PREDICT"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export function MockPickerPanel({ heading }) {
  return (
    <div className="flex flex-col gap-8 rounded-[14px] bg-[#F3F4F6] px-4 py-6 md:flex-row md:items-stretch md:gap-16 md:px-6 md:py-8">
      <div className="flex flex-[1_0_0] items-center md:max-w-[400px] md:py-4">
        <p className="text-left font-['Inter',sans-serif] text-[16px] font-normal leading-6 tracking-[0.32px] text-black md:text-[18px] md:leading-[26px] md:tracking-[0.36px]">
          {heading}
        </p>
      </div>
      <div className="flex w-full flex-col gap-3 md:max-w-[360px]">
        <button
          type="button"
          className="flex w-full cursor-default items-center justify-center gap-2 rounded-lg border border-[#CBD5E1] bg-white py-3 text-[14px] font-semibold text-black shadow-sm"
        >
          <span aria-hidden className="text-[10px] opacity-70">
            MC
          </span>
          <span aria-hidden className="text-[10px] opacity-70">
            VISA
          </span>
          Buy with Card
        </button>
        <div className="grid grid-cols-3 gap-x-3 gap-y-2">
          {MOCK_PICKER_CHIPS.map((chip) => (
            <button
              key={chip}
              type="button"
              className="flex min-h-[60px] cursor-default items-center justify-center rounded-md border border-[#DDD] bg-white px-2 py-2 text-center text-[11px] font-medium leading-snug text-black shadow-sm"
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
