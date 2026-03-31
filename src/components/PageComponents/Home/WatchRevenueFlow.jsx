import { scrollToWallet } from "../../../lib/utils";
import liveActivityImage from "../../../assets/images/home/watch_revenue_flow/live-activity.webp";

export default function WatchRevenueFlow({
  title = "Watch Revenue Flow In On Autopilot",
  description = "Every payment goes straight to your stripe account. Keep 100% of your profits no middleman, no fees, no limits. Your business runs on autopilot while you sleep. Scale without hiring a team.",
  buttonText = "BUY $PREDICT",
}) {
  return (
    <section className="bg-[#EAF5FF] px-4 pb-12 md:px-6 md:pb-16">
      <div className="mx-auto max-w-[1280px] rounded-[24px] border border-[#DADADA] bg-white p-5 shadow-[0_10px_28px_rgba(4,25,54,0.05)] md:rounded-[28px] md:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(420px,0.95fr)] lg:gap-10">
          <div className="flex max-w-[460px] flex-col items-start gap-5">
            <h2 className="text-[34px] font-[500] leading-[1.05] tracking-[-0.04em] text-black md:text-[46px]">
              Watch Revenue Flow
              <br />
              In On Autopilot
            </h2>

            <p className="max-w-[420px] text-[15px] leading-[1.6] text-black/75 md:text-[16px]">
              {description}
            </p>

            <button
              onClick={() => scrollToWallet(140)}
              className="btn_primary min-h-[54px] min-w-[200px] !rounded-[999px] !px-8 shadow-[0_0_0_2px_rgba(255,255,255,0.9)_inset,0_0_20px_rgba(0,128,237,0.24)]"
            >
              {buttonText}
            </button>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={liveActivityImage}
              alt="Live activity revenue flow preview"
              className="h-auto w-full max-w-[620px] object-contain"
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
