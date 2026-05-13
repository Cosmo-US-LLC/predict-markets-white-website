/** Top 3 rows match Figma: semibold wallet/rank & blue referrals count */
function highlightReferrals(rank) {
  return rank <= 3;
}

function LeaderboardRows({ rows }) {
  return (
    <tbody>
      {rows.map(([wallet, total, refs], idx) => {
        const rank = idx + 1;
        const tier = highlightReferrals(rank);
        const cellNum = tier ? "font-semibold" : "font-medium";
        return (
          <tr
            key={wallet}
            className={idx % 2 === 0 ? "bg-[#f6f6f6]" : "bg-white"}
          >
            <td
              className={`border-b border-[#ccd2dd] px-4 py-4 leading-6 ${cellNum} text-black`}
            >
              {rank}
            </td>
            <td
              className={`border-b border-[#ccd2dd] px-4 py-4 text-center text-[14.7px] leading-[22px] ${cellNum} text-black`}
            >
              <span className="whitespace-nowrap">{wallet}</span>
            </td>
            <td
              className={`border-b border-[#ccd2dd] px-4 py-4 text-center leading-6 ${cellNum} text-black`}
            >
              <span className="whitespace-nowrap">{total}</span>
            </td>
            <td
              className={`border-b border-[#ccd2dd] px-4 py-4 text-center leading-6 ${cellNum} ${tier ? "text-[#0080ED]" : "text-black"}`}
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
}) {
  return (
    <section className="bg-white pb-12 pt-4 md:pb-14">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:justify-center">
          <div className="relative flex w-full max-w-xl shrink-0 justify-center  ">
            <div className="overflow-hidden rounded-lg bg-[#0080ED]">
              <img
                alt=""
                src={heroIllustrationSrc}
                className="h-full w-full max-w-[574px] object-cover object-center"
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="overflow-hidden rounded-[24px] border border-transparent bg-white shadow-sm">
              <div className="bg-[#f2f2f2] pb-6 pt-9 text-center">
                <h2 className="text-[28px] font-medium uppercase leading-10 tracking-normal text-[#0080ED] md:text-[32px]">
                  {title}
                </h2>
              </div>
              <div className="border border-[#ccd2dd]">
                <div className="max-h-full overflow-auto">
                  <table className="w-full min-w-[640px] border-collapse">
                    <thead className="sticky top-0 z-[1] bg-[#ecf4fc] shadow-sm">
                      <tr className="text-[16px] font-medium leading-4 text-black">
                        <th className="border-b border-[#ccd2dd] px-4 pb-6 pt-4 text-start">
                          Rank
                        </th>
                        <th className="border-b border-[#ccd2dd] px-4 pb-6 pt-4 text-center">
                          Wallet
                        </th>
                        <th className="border-b border-[#ccd2dd] px-4 pb-6 pt-4 text-center">
                          Referred Total
                        </th>
                        <th className="border-b border-[#ccd2dd] px-4 pb-6 pt-4 text-center">
                          Referrals
                        </th>
                      </tr>
                    </thead>
                    <LeaderboardRows rows={leaderboardRows} />
                  </table>
                </div>
              </div>
              <div className="border-x border-b border-[#ccd2dd] bg-white px-4 py-6">
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
