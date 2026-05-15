import { showConnectWalletModal } from "../../../presale-gg/stores/modal.store.js";

export default function ReferralProgramHero({ title, subtitle, connectWalletLabel }) {
  return (
    <section className="bg-white px-4 py-[48px] md:px-8 md:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 text-center">
        <div className="flex flex-col gap-4">
          <h1 className="capitalize text-[28px] leading-[34px] tracking-[-2px] text-black md:text-[45px] md:leading-[53px] md:tracking-[-2.56px]">
            {title}
          </h1>
          <p className="font-[Inter] text-[16px] font-normal leading-[24px] tracking-[0.32px] text-black md:text-[18px] md:leading-[26px] md:tracking-[0.36px]">
            {subtitle}
          </p>
        </div>
        <div className="relative flex items-center justify-center py-4">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[69px] w-[288px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0080ED]/45 blur-[7px]"
          />
          <button
            type="button"
            className="relative z-[1] flex h-[69px] w-[288px] shrink-0 items-center justify-center rounded-full bg-[#0080ED] px-8 capitalize text-[18px] font-medium leading-[28px] text-white transition hover:bg-[#0070d6]"
            onClick={() => showConnectWalletModal()}
          >
            {connectWalletLabel}
          </button>
        </div>
      </div>
    </section>
  );
}
