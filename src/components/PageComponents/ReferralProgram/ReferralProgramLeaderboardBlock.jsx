function highlightReferrals(rank) {
  return rank <= 3;
}

function LeaderboardRows({ rows }) {
  const tierCount = rows.filter((_, i) => i < 3).length;
  return (
    <tbody>
      {rows.map(([wallet, total, refs], idx) => {
        const rank = idx + 1;
        const tier = highlightReferrals(rank);
        const cellWeight = tier ? "font-semibold" : "font-medium";
        const isFirstTier = idx === 0;
        const isLastTier = idx === tierCount - 1;

        const rankCellRound = isFirstTier
          ? "rounded-tl-[8px]"
          : isLastTier
          ? ""
          : "";
        const refsCellRound = isFirstTier
          ? "rounded-tr-[8px]"
          : isLastTier
          ? ""
          : "";

        return (
          <tr key={wallet} className={tier ? "bg-[#f6f6f6]" : "bg-white"}>
            <td
              className={`border-b border-[#ccd2dd] px-1 max-md:pl-2 md:px-4 py-3 md:py-4 text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] ${cellWeight} text-black ${rankCellRound}`}
            >
              {rank}
            </td>
            <td
              className={`border-b border-[#ccd2dd] px-1 md:px-4 py-3 md:py-4 text-center text-[14px] leading-[22px] md:text-[16px] md:leading-[22px] ${cellWeight} text-black`}
            >
              <span className="whitespace-nowrap">{wallet}</span>
            </td>
            <td
              className={`border-b border-[#ccd2dd] px-1 md:px-4 py-3 md:py-4 text-center text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] ${cellWeight} text-black`}
            >
              <span className="whitespace-nowrap">{total}</span>
            </td>
            <td
              className={`border-b border-[#ccd2dd] px-1 md:px-4 py-3 md:py-4 text-center text-[14px] leading-[22px] md:text-[16px] md:leading-[24px] ${cellWeight} ${tier ? "text-[#0080ED]" : "text-black"} ${refsCellRound}`}
            >
              {refs}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default function ReferralProgramLeaderboardBlock({
  title,
  leaderboardRows,
  disclaimer,
  heroIllustrationSrc,
  heroMobileIllustrationSrc,
}) {
  return (
    <section className="bg-white pt-4 pb-[20px] md:pt-[32px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-[24px] lg:flex-row lg:gap-[48px] lg:items-stretch">
          {/* Left — Blue image panel */}
          <div className="w-full h-[584px] lg:w-[574px] lg:h-auto lg:shrink-0 lg:self-stretch overflow-hidden rounded-[8px] bg-[#0080ED]">
            {/* Mobile image */}
            <img
              alt=""
              src={heroMobileIllustrationSrc || heroIllustrationSrc}
              className="block lg:hidden h-full w-full object-cover object-center"
            />
            {/* Desktop image */}
            <img
              alt=""
              src={heroIllustrationSrc}
              className="hidden lg:block h-full w-full object-cover object-center"
            />
          </div>

          {/* Right — Leaderboard table */}
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="overflow-hidden rounded-[24px]">
              {/* Title bar */}
              <div className="bg-[#f2f2f2] pt-[25px] pb-[20px] flex items-center justify-center px-4">
                <h2 className="text-[#0080ED] uppercase text-[22px] leading-[32px] md:text-[32px] md:leading-[40px] whitespace-nowrap">
                  {title}
                </h2>
              </div>

              {/* Table */}
              <div className="border border-[#ccd2dd]">
                <div className="max-h-full overflow-auto">
                  <table className="w-full md:min-w-[540px] border-separate border-spacing-0">
                    <thead>
                      <tr className="text-[14px] leading-[22px] md:text-[16px] font-medium text-black">
                        <th className="px-1 md:px-4 pb-[16.5px] pt-[16px] text-start font-medium">
                          Rank
                        </th>
                        <th className="px-1 md:px-4 pb-[16.5px] pt-[16px] text-center font-medium">
                          Wallet
                        </th>
                        <th className="px-1 md:px-4 pb-[16.5px] pt-[16px] text-right font-medium whitespace-nowrap">
                          Referred Total
                        </th>
                        <th className="px-1 md:px-4 pb-[16.5px] pt-[16px] text-center font-medium">
                          Referrals
                        </th>
                      </tr>
                    </thead>
                    <LeaderboardRows rows={leaderboardRows} />
                  </table>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-white px-4 py-6">
                <p className="text-center font-[Inter] text-[14px] font-normal leading-[22px] tracking-[0.28px] text-black">
                  {disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
