import {
  step2ArrowDown,
  step2CryptoIcons,
  step2PaymentLogos,
  step2PickerBnb,
  step2PickerBtc,
  step2PickerEth,
  step2PickerSol,
  step2PickerUsdt,
} from "../../../data/howToBuyFigmaAssets.js";
import { StepHeadingCenter } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

function UsdtDropdown() {
  return (
    <div className="flex shrink-0 items-center gap-[8px] rounded-full border-[0.5px] border-[rgba(0,0,0,0.2)] px-2 py-0.5">
      <div className="flex items-center gap-1">
        <img src={step2PickerUsdt} alt="USDT" className="size-5 shrink-0 object-contain" />
        <div className="flex flex-col items-start">
          <span className="text-[8px] font-semibold leading-[18px] text-black">USDT</span>
          <span className="text-[8px] font-normal leading-[16px] text-black/50">ERC-20</span>
        </div>
      </div>
      <img src={step2ArrowDown} alt="" className="size-[10px] shrink-0" />
    </div>
  );
}

function PredictBadge() {
  return (
    <div className="flex h-8 shrink-0 items-center gap-1 rounded-full border-[0.5px] border-[rgba(0,0,0,0.2)] px-2 py-0.5" style={{ width: "87px" }}>
      <div className="flex h-5 w-[19px] items-center justify-center rounded-[2.8px] bg-[#0080ED] p-[2.7px] shrink-0">
        <svg width="9" height="12" viewBox="0 0 9 12" fill="none" aria-hidden>
          <rect x="6.48" y="0" width="2.808" height="2.592" rx="0.51" fill="white"/>
          <rect x="3.24" y="0" width="2.808" height="2.592" rx="0.51" fill="white"/>
          <rect x="6.48" y="3.02" width="2.808" height="2.592" rx="0.51" fill="white"/>
          <rect x="3.24" y="6.05" width="2.808" height="2.592" rx="0.51" fill="white"/>
          <rect x="0" y="0" width="2.808" height="2.592" rx="0.51" fill="white"/>
          <rect x="0" y="3.02" width="2.808" height="2.592" rx="0.51" fill="white"/>
          <rect x="0" y="9.07" width="2.808" height="2.592" rx="0.51" fill="white"/>
          <rect x="0" y="6.05" width="2.808" height="2.592" rx="0.51" fill="white"/>
        </svg>
      </div>
      <span className="text-[8px] font-semibold leading-[18px] text-black">PREDICT</span>
    </div>
  );
}

function AmountCard({ showCta }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-lg bg-white px-4 py-2">
        <p className="text-[12px] leading-[18px] text-[#8d8d8d]">Amount You Pay in USDT</p>
        <div className="mt-1 flex items-center justify-between gap-3">
          <span className="text-[18px] font-semibold text-black">1000</span>
          <UsdtDropdown />
        </div>
      </div>
      <div className="rounded-lg bg-white px-4 py-2">
        <div className="flex items-center gap-1">
          <span className="text-[12px] leading-[18px] text-[#8d8d8d]">You Receive $PREDICT</span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-3">
          <span className="text-[18px] font-semibold text-[#0080ED]">6,123,135</span>
          <PredictBadge />
        </div>
      </div>
      {showCta && (
        <button
          type="button"
          className="btn_primary mt-1 w-full cursor-default rounded-[153px] py-3 text-[18px] shadow-[0_0_14px_-2px_rgba(0,128,237,0.8)]"
        >
          BUY $PREDICT
        </button>
      )}
    </div>
  );
}

const PICKER_ROWS = [
  [
    { sym: "ETH",  sub: "ERC-20",  icon: step2PickerEth },
    { sym: "BNB",  sub: "BEP-20",  icon: step2PickerBnb },
    { sym: "USDT", sub: "ERC-20",  icon: step2PickerUsdt },
  ],
  [
    { sym: "BTC",  sub: "BITCOIN", icon: step2PickerBtc },
    { sym: "SOL",  sub: "SOLANA",  icon: step2PickerSol },
    { sym: "More", sub: null,      icon: null },
  ],
];

function PickerChip({ sym, sub, icon }) {
  return (
    <div className="flex flex-1 items-center justify-between rounded bg-white px-2 py-0.5 min-w-0">
      <div className="flex items-center gap-1.5 min-w-0">
        {icon ? (
          <img src={icon} alt={sym} className="size-5 shrink-0 object-contain" />
        ) : null}
        <div className="flex flex-col items-start">
          <span className="text-[10px] font-bold leading-[19px] text-black">{sym}</span>
          {sub && <span className="text-[8px] leading-[14px] text-black/50 whitespace-nowrap">{sub}</span>}
        </div>
      </div>
      <img src={step2ArrowDown} alt="" className="h-1 w-2 shrink-0" />
    </div>
  );
}

function PickerCard() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-center gap-2 rounded-lg bg-white py-2 px-4">
        <img src={step2PaymentLogos[0].src} alt={step2PaymentLogos[0].alt} className="h-[22px] w-auto shrink-0 object-contain" />
        <img src={step2PaymentLogos[1].src} alt={step2PaymentLogos[1].alt} className="h-[22px] w-auto shrink-0 object-contain" />
        <span className="text-[12px] font-semibold text-black whitespace-nowrap">Buy with Card</span>
      </div>
      <div className="flex flex-col gap-2">
        {PICKER_ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-2">
            {row.map((chip) => (
              <PickerChip key={chip.sym} {...chip} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelRow({ heading, children }) {
  return (
    <div className="flex flex-col gap-6 rounded-[12px] bg-[#f2f2f2] p-6 md:flex-row md:items-center md:gap-10 md:p-6">
      <div className="flex flex-[1_0_0] items-start md:items-center md:py-2">
        <p className="font-['Inter',sans-serif] text-[16px] font-normal leading-[26px] tracking-[0.36px] text-black md:text-[18px]">
          {heading}
        </p>
      </div>
      <div className="w-full shrink-0 md:w-[360px]">
        {children}
      </div>
    </div>
  );
}

export default function HowToBuyStep2({ step2, cryptoTickerSymbols, step2Panels }) {
  return (
    <SectionShell compact className="!mb-10 md:!mb-14 lg:min-h-0">
      <StepHeadingCenter stepLabel={step2.stepLabel} title={step2.title} subtitle={step2.subtitle} />

      <div className="flex flex-wrap justify-center gap-4">
        {step2CryptoIcons.map((coin) => (
          <div
            key={coin.id}
            className="flex h-[54px] w-[60px] shrink-0 items-center justify-center rounded-[8px] border border-[rgba(0,0,0,0.24)] bg-white p-0.5"
          >
            <img src={coin.src} alt={coin.sym} className="size-[31px] object-contain" loading="lazy" />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {step2PaymentLogos.map((p) => (
          <div
            key={p.id}
            className="flex h-[53px] w-[86px] shrink-0 items-center justify-center rounded-[8px] border border-[rgba(0,0,0,0.24)] bg-white px-3 py-2"
          >
            <img src={p.src} alt={p.alt} className="max-h-7 max-w-full object-contain" loading="lazy" />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 md:mt-10 md:gap-6">
        <PanelRow heading={<>Enter the amount of <strong>$PREDICT</strong> you want to buy.</>}>
          <AmountCard showCta={false} />
        </PanelRow>
        <PanelRow heading="Select your preferred currency or card option.">
          <PickerCard />
        </PanelRow>
        <PanelRow heading={<>Click <strong>"Buy $PREDICT"</strong>.</>}>
          <AmountCard showCta />
        </PanelRow>
      </div>
    </SectionShell>
  );
}
