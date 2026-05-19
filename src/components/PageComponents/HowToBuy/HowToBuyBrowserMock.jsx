import browserMock from "../../../assets/images/how_to_buy/step3_send&confirm.webp";

export function BrowserMockConfirm() {
  return (
    <div className="w-full shrink-0 md:max-w-[452px]">
      <img
        src={browserMock}
        alt="MetaMask transaction confirmation dialog showing 1 ETH = $2200"
        className="w-full rounded-[11.52px] object-contain"
        decoding="async"
      />
    </div>
  );
}
