import { scrollToWallet } from "../../../lib/utils";
import liveActivityImage from "../../../assets/images/home/watch_revenue_flow/live-activity.webp";

export default function WatchRevenueFlow({
  title = "Watch Revenue Flow In On Autopilot",
  description = "Every payment goes straight to your stripe account. Keep 100% of your profits no middleman, no fees, no limits. Your business runs on autopilot while you sleep. Scale without hiring a team.",
  buttonText = "BUY $PREDICT",
}) {
  return (
    <section className="px-4 py-12 md:px-6 md:pt-14 md:pb-16">
      <div className="mx-auto max-w-[1280px] rounded-[24px] border border-[#DADADA] bg-white px-5 py-6 shadow-[0_10px_28px_rgba(4,25,54,0.05)] md:rounded-[28px] md:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(420px,0.95fr)] lg:gap-10">
          <div className="flex w-full max-w-full flex-col items-center gap-5 text-center md:max-w-[460px] md:items-start md:text-left">
            <h2 className="text-[30px] font-[500] leading-[1.05] tracking-[-0.04em] text-black md:hidden">
              Watch Revenue
              <br />
              Flow In On
              <br />
              Autopilot
            </h2>

            <h2 className="hidden text-[46px] font-[500] leading-[1.05] tracking-[-0.04em] text-black md:block">
              <span className="inline-block whitespace-nowrap">
                Watch Revenue Flow
              </span>
              <br />
              <span className="inline-block whitespace-nowrap">
                In On Autopilot
              </span>
            </h2>

            <p className="w-full max-w-full text-[16px] leading-[1.6] text-black md:max-w-[420px] md:text-[16px]">
              {description}
            </p>

            <button
              onClick={() => scrollToWallet(140)}
              className="btn_primary min-h-[52px] min-w-[200px] !rounded-[8px] !px-[24px] !py-[12px] !text-[16px]"
            >
              {buttonText}
            </button>
          </div>

          <div className="flex w-full items-center justify-center overflow-hidden">
            <img
              src={liveActivityImage}
              alt="Live activity revenue flow preview"
              className="block h-auto w-full max-w-[620px] object-contain"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
