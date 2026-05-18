import iconLinkWallet from "../../../assets/images/home/referral-section/icon_link_wallet.svg";
import iconUniqueCode from "../../../assets/images/home/referral-section/icon_unique_code.svg";
import iconRewarded from "../../../assets/images/home/referral-section/icon_rewarded.svg";
import iconTrack from "../../../assets/images/home/referral-section/icon_track.svg";
import referralWallet from "../../../assets/images/home/referral-section/referral_wallet_3x.webp";

const CARDS = [
  {
    id: "link-wallet",
    icon: iconLinkWallet,
    iconW: 85,
    iconH: 69,
    title: "Link Your Wallet",
    body: (
      <>
        Head to{" "}
        <a
          href="https://predictmarkets.io/referral"
          className="font-semibold text-[#0080ed]"
        >
          PredictMarkets.io/referral
        </a>{" "}
        and connect your wallet. Takes less than a minute.
      </>
    ),
  },
  {
    id: "unique-code",
    icon: iconUniqueCode,
    iconW: 98,
    iconH: 98,
    title: "Get Your Unique Code",
    body: "You will get your own referral link straight away. Share it with friends, post it in your community, put it wherever your audience is.",
  },
  {
    id: "rewarded",
    icon: iconRewarded,
    iconW: 106,
    iconH: 98,
    title: "Everyone Gets Rewarded",
    body: "When someone buys $100 or more using your code, they get 30% extra $PREDICT added to their order automatically. No hoops to jump through.",
    note: "You earn 10% of every qualifying purchase, paid in $PREDICT, straight to your wallet. And if you make it into the Top 20 on the leaderboard, there is an exclusive bonus on the table when the presale ends. The higher you rank, the bigger it gets.",
  },
  {
    id: "track",
    icon: iconTrack,
    iconW: 106,
    iconH: 98,
    title: "Track Everything in Real Time",
    body: "Your dashboard shows your earnings, your referrals and your leaderboard position as it all happens. No waiting around.",
  },
];

function HowItWorksCard({ card }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-[15px] border border-[#ddd] bg-white px-4 py-7 lg:px-12">
      <img
        src={card.icon}
        alt=""
        width={card.iconW}
        height={card.iconH}
        className="object-contain"
        loading="lazy"
      />
      <p className="text-center text-[16px] font-medium leading-[24px] tracking-[0] text-black capitalize lg:text-[20px] lg:leading-[28px] " style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}>
        {card.title}
      </p>
      <hr className="w-full border-t border-[#ddd]" />
      <p className="font-['Inter',sans-serif] text-center text-[16px] leading-[24px] tracking-[0.32px] text-black">
        {card.body}
      </p>
      {card.note && (
        <div className="w-full rounded-[8px] bg-[#c1e2ff] px-[13px] py-3">
          <p className="font-['Inter',sans-serif] text-center text-[12px] leading-[18px] tracking-[0.24px] text-black">
            {card.note}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ReferralProgramSection() {
  return (
    <section className="py-12 lg:py-[60px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-4 md:px-8 lg:gap-[48px]">

        {/* Top: heading+subtitle left, blue card right */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-[42px]">
          {/* Heading + subtitle */}
          <div className="flex flex-col gap-4 text-center lg:flex-1 lg:text-left">
            <h2 className="text-[28px] font-medium leading-[34px] tracking-[-2px] text-black capitalize lg:text-[45px] lg:leading-[53px]">
              Predict Markets Referral Program
            </h2>
            <p className="font-['Inter',sans-serif] text-[16px] leading-[24px] tracking-[0.32px] text-black lg:text-[18px] lg:leading-[26px] lg:tracking-[0.36px]">
              Connect your wallet to get your personal referral code and access your dashboard.
            </p>
          </div>

          {/* Blue card */}
          <div className="flex flex-col overflow-hidden rounded-[16px] bg-[#0080ed] px-4 pb-6 pt-4 lg:h-[308px] lg:w-[720px] lg:shrink-0 lg:flex-row lg:items-start lg:gap-6 lg:px-6 lg:pb-8 lg:pt-6">
            {/* Wallet image area */}
            <div className="relative h-[200px] overflow-hidden rounded-[10px] lg:h-[252px] lg:w-[280px] lg:shrink-0">
              <div className="absolute inset-0 bg-white rounded-[10px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={referralWallet}
                  alt="Crypto wallet illustration"
                  className="w-[222px] object-contain lg:w-[260px]"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card text */}
            <div className="mt-6 flex flex-col justify-between gap-4 text-white lg:mt-0 lg:flex-1 lg:h-full">
              <p style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }} className="text-[20px] leading-[28px] text-white capitalize">
                Connect Wallet
              </p>
              <p className="font-['Inter',sans-serif] text-[18px] leading-[26px] tracking-[0.36px] text-white md:pr-1">
                Have an active crypto community? Put it to work. Earn real money every time someone in your network buys $PREDICT. If you are running a group of 1,000 or more, get in touch with us on Telegram and let&apos;s figure out what we can build together.
              </p>
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div
          className="flex flex-col items-center gap-6 rounded-[22px] border border-[#ddd] px-3 py-12 lg:rounded-[44px] lg:gap-6 lg:p-12"
          style={{
  background:
    "radial-gradient(ellipse at center, #fff 0%, rgba(255,255,255,1) 20%, rgba(0,128,237,0.11) 100%)",
}}
        >
          <h2 className="text-center text-[28px] font-medium leading-[34px] tracking-[-2px] text-black capitalize lg:text-[45px] lg:leading-[53px]">
            How it Works
          </h2>

          {/* Cards: 1-col mobile, 2-col desktop */}
          <div className="flex w-full flex-col gap-[14px] lg:grid lg:grid-cols-2 lg:gap-3">
            {CARDS.map((card) => (
              <HowItWorksCard key={card.id} card={card} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
