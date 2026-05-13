import { showConnectWalletModal } from "../../../presale-gg/stores/modal.store.js";

export default function ReferralProgramHero({ title, subtitle, connectWalletLabel }) {
  return (
    <section className="bg-white px-4 pb-10 pt-8 md:px-8 lg:pb-12 lg:pt-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 text-center lg:gap-9">
        <div className="flex max-w-[1037px] flex-col gap-4">
          <h1 className="text-[clamp(26px,4vw,45px)] font-medium leading-[1.18] tracking-[-2.56px] text-black">
            {title}
          </h1>
          <p className="font-[Inter] text-[16px] font-normal leading-[26px] tracking-[0.36px] text-black md:text-[18px] md:tracking-[0.36px]">
            {subtitle}
          </p>
        </div>
        <div className="flex justify-center pt-2">
          <div className="relative flex items-center justify-center py-4">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[69px] w-[289px] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0080ED]/45 blur-[7px]"
            />
            <button
              type="button"
              className="relative z-1 flex min-h-[52px] w-[clamp(264px,72vw,288px)] shrink-0 items-center justify-center rounded-full bg-[#0080ED] px-8 capitalize text-[18px] font-medium leading-[28px] text-white transition hover:bg-[#0070d6]"
              onClick={() => showConnectWalletModal()}
            >
              {connectWalletLabel}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
