import usdtDropdown from "../../../assets/images/how_to_buy/usdt_dropdown_container.webp";
import paymentIconsDesktop from "../../../assets/images/how_to_buy/payment_icons/group_1686561711.webp";
import paymentIconsMobile from "../../../assets/images/how_to_buy/payment_icons/icon_container.webp";
import pickerDesktop from "../../../assets/images/how_to_buy/step_to_fiels on_desktop.webp";
import pickerMobile from "../../../assets/images/how_to_buy/step_to_fiels on_mobile.webp";
import { StepHeadingCenter } from "./HowToBuyHeadings.jsx";
import { SectionShell } from "./SectionShell.jsx";

function UsdtDropdown() {
  return (
    <img src={usdtDropdown} alt="USDT ERC-20" className="h-8 w-auto shrink-0 object-contain" />
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


function PickerCard() {
  return (
    <div>
      <img src={pickerMobile} alt="Select currency or card" className="w-full md:hidden" />
      <img src={pickerDesktop} alt="Select currency or card" className="hidden md:block w-full" />
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

      <div className="w-full">
        <img src={paymentIconsMobile} alt="Accepted payment methods" className="w-full md:hidden" />
        <img src={paymentIconsDesktop} alt="Accepted payment methods" className="hidden md:block w-full" />
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
