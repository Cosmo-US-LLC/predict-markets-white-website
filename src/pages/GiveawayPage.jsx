import heroGraphic from "../assets/images/giveaway/hero_graphic.webp";
import heroGraphicMobile from "../assets/images/giveaway/hero_graphic_mobile.webp";

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
  </svg>
);

const XEntryIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const CoinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <circle cx="12" cy="12" r="9.5" stroke="white" strokeWidth="1.5" />
    <path d="M12 7v1.5M12 15.5V17M9.5 10.25C9.5 9.284 10.619 8.5 12 8.5s2.5.784 2.5 1.75S13.381 12 12 12s-2.5.784-2.5 1.75S10.619 15.5 12 15.5s2.5-.784 2.5-1.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const WalletIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
    <path d="M21 18v1a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1" />
    <path d="M23 13v-2a2 2 0 00-2-2h-7a2 2 0 00-2 2v2a2 2 0 002 2h7a2 2 0 002-2z" />
    <circle cx="17" cy="12" r="1" fill="#0080ed" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" className="w-full h-full">
    <path d="M12 2.5l2.63 5.33 5.88.85-4.25 4.14 1 5.85L12 15.77l-5.26 2.77 1-5.85-4.25-4.14 5.88-.85z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="#333" className="w-full h-full">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 018 0v4" stroke="#333" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="12" cy="16" r="1.5" fill="white" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="black" className="w-full h-full">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="black" className="w-full h-full">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="#5865F2" className="w-full h-full">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.031.056a19.9 19.9 0 005.993 3.03.077.077 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const PredictMarketsLogo = () => (
  <div className="flex gap-[8px] md:gap-[8px] items-center">
    <div className="bg-[#0080ed] flex items-center justify-center rounded-[4px] md:rounded-[5.5px] shrink-0 size-[32px] md:size-[37px] p-[4.5px] md:p-[5.2px]">
      <div className="relative w-full h-full">
        {[
          { left: "69.5%", top: "0%"  }, { left: "34.5%", top: "0%"  },
          { left: "69.5%", top: "26%" }, { left: "34.5%", top: "52%" },
          { left: "0%",    top: "0%"  }, { left: "0%",    top: "26%" },
          { left: "0%",    top: "78%" }, { left: "0%",    top: "52%" },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-tl-[1px] rounded-br-[1px]"
            style={{ left: pos.left, top: pos.top, width: "28%", height: "22%" }}
          />
        ))}
      </div>
    </div>
    <span
      className="text-white text-[15px] md:text-[17px] font-bold tracking-tight"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      PredictMarkets
    </span>
  </div>
);

const entryMethods = [
  { icon: <GlobeIcon />,    bg: "bg-[#0080ed]", label: "Visit The PredictMarkets Website",          points: "+5"  },
  { icon: <XEntryIcon />,   bg: "bg-[#0080ed]", label: "Follow @Prediction_eth on X",               points: "+15" },
  { icon: <TelegramIcon />, bg: "bg-[#0080ed]", label: "Join @predict_markets_chat on Telegram",    points: "+15" },
  { icon: <RedditIcon />,   bg: "bg-[#0080ed]", label: "Post About PredictMarkets On Reddit",       points: "+20" },
  { icon: <TikTokIcon />,   bg: "bg-[#0080ed]", label: "Post About PredictMarkets On TikTok",       points: "+15" },
  { icon: <CoinIcon />,     bg: "bg-[#0080ed]", label: "Buy PREDICT (Min $100)",                    points: "+30" },
  { icon: <WalletIcon />,   bg: "bg-[#0080ed]", label: "Submit Your Crypto Wallet Address",         points: "+20" },
  { icon: <WalletIcon />,   bg: "bg-[#0080ed]", label: "Complete Every Action For 45 Bonus Entries", points: "+15" },
  { icon: <StarIcon />,     bg: "bg-[#f2c34e]", label: "Complete Every Action For 45 Bonus Entries", points: null, locked: true },
];

export function GiveawayPage() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(0,128,237,0.28) 0%, transparent 70%), #ffffff",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-20 py-12 md:py-[60px] flex flex-col items-center gap-8 md:gap-12">
        {/* Page Title */}
        <div className="w-full max-w-[1037px]">
          <h1
            className="text-black text-center text-[30px] md:text-[45px] leading-[38px] md:leading-[53px] tracking-[-2.56px] font-normal"
            style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
          >
            PredictMarkets $250,000 Giveaway!🎉
          </h1>
        </div>

        {/* Main Content Card */}
        <div
          className="w-full backdrop-blur-[7px] bg-[#e7f6ff] rounded-[24px] flex flex-col items-center gap-10 pb-4 md:pb-6 px-4 md:px-[45px]"
        >
          {/* Main Section: Stats + Hero Graphic */}
          <div className="w-full flex flex-col items-start">
            {/* Stats Section */}
            <div className="w-full flex items-stretch justify-center">
              {/* Your Entries */}
              <div className="flex-1 flex flex-col items-center gap-[6px] py-4 border-b-[5px] border-[#005eae] text-center">
                <span
                  className="text-black text-[24px] md:text-[36px] leading-[32px] md:leading-[53px] tracking-[-2px] capitalize"
                  style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
                >
                  0
                </span>
                <span className="text-black text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.28px] md:tracking-[0.36px] font-normal" style={{ fontFamily: "Inter, sans-serif" }}>
                  Your Entries
                </span>
              </div>
              {/* Divider */}
              <div className="w-px bg-[#cdcdcd] self-stretch mx-0" />
              {/* Total Entries */}
              <div className="flex-1 flex flex-col items-center gap-[6px] py-4 border-b-[5px] border-[#0080ed] text-center">
                <span
                  className="text-black text-[24px] md:text-[36px] leading-[32px] md:leading-[53px] tracking-[-2px] capitalize"
                  style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
                >
                  5,227
                </span>
                <span className="text-black text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.28px] md:tracking-[0.36px] font-normal" style={{ fontFamily: "Inter, sans-serif" }}>
                  Total Entries
                </span>
              </div>
              {/* Divider */}
              <div className="w-px bg-[#cdcdcd] self-stretch mx-0" />
              {/* Days Left */}
              <div className="flex-1 flex flex-col items-center gap-[6px] py-4 border-b-[5px] border-[#cdcdcd] text-center">
                <span
                  className="text-black text-[24px] md:text-[36px] leading-[32px] md:leading-[53px] tracking-[-2px] capitalize"
                  style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
                >
                  148
                </span>
                <span className="text-black text-[14px] md:text-[18px] leading-[22px] md:leading-[26px] tracking-[0.28px] md:tracking-[0.36px] font-normal" style={{ fontFamily: "Inter, sans-serif" }}>
                  Days Left
                </span>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className="relative w-full h-[710px] md:h-[710px] overflow-hidden">
              {/* Full-bleed background: mobile image < 768px, desktop image >= 768px */}
              <div className="absolute inset-0">
                <picture>
                  <source media="(min-width: 768px)" srcSet={heroGraphic} />
                  <img
                    src={heroGraphicMobile}
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </picture>
              </div>
            </div>
          </div>

          {/* Text Sections */}
          <div className="w-full max-w-[800px] mx-auto flex flex-col gap-8">
            {/* Giveaway Section */}
            <div className="flex flex-col gap-4 items-center">
              <h2
                className="text-black text-[24px] md:text-[36px] leading-[32px] md:leading-[53px] tracking-[-2px] capitalize text-center w-full"
                style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
              >
                PredictMarkets $250,000 Giveaway
              </h2>
              <p
                className="text-black text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0.32px] md:tracking-[0.36px] font-normal text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                We are celebrating the PredictMarkets presale with a $250,000 $PREDICT giveaway, where the first-place winner takes home $100,000, and there are 65 winners in total.
                <br /><br />
                This is your chance to get in early and secure a serious allocation before the platform goes live.
              </p>
            </div>

            {/* What is PredictMarkets Section */}
            <div className="flex flex-col gap-4 items-center">
              <h2
                className="text-black text-[24px] md:text-[36px] leading-[32px] md:leading-[53px] tracking-[-2px] capitalize text-center w-full"
                style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
              >
                What is PredictMarkets?
              </h2>
              <p
                className="text-black text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0.32px] md:tracking-[0.36px] font-normal text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                PredictMarkets is a decentralized prediction markets platform where users trade on real-world outcomes and see probabilities update live as sentiment changes.
                <br /><br />
                From crypto and global markets to politics, sports, and major events, PredictMarkets transforms collective opinion into real-time market odds. As news breaks, markets move, creating fast, transparent signals of what the crowd believes will happen next.
              </p>
            </div>

            {/* How to Enter Section */}
            <div className="flex flex-col gap-4 items-center">
              <h2
                className="text-black text-[24px] md:text-[36px] leading-[32px] md:leading-[53px] tracking-[-2px] capitalize text-center w-full"
                style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
              >
                🔥 How to enter
              </h2>
              <p
                className="text-black text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0.32px] md:tracking-[0.36px] font-normal text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Complete the tasks below to earn entries. Every action boosts your chances of winning.
              </p>
            </div>

            {/* Massive Prize Drop Section */}
            <div className="flex flex-col gap-4 items-center">
              <h2
                className="text-black text-[24px] md:text-[36px] leading-[32px] md:leading-[53px] tracking-[-2px] uppercase text-center w-full"
                style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
              >
                MASSIVE PRIZE DROP
              </h2>
              <div
                className="text-black text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0.32px] md:tracking-[0.36px] font-normal text-center"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <p>65 Winners. One Giant Prize Pool. Everyone Has a Shot. 🚀💰</p>
                <p>
                  🥇 1st Place — $100,000 👑💎<br />
                  🥈 2nd Place — $50,000 ⚡🔥<br />
                  🥉 3rd Place — $30,000 🚀✨<br />
                  🏆 4th Place — $20,000 🛡️💪<br />
                  🎯 5th Place — $10,000 🎯💥<br />
                  💼 6th Place — $5,000 📊<br />
                  ⚙️ 7th Place — $3,000 🔩<br />
                  💡 8th Place — $2,000 💡<br />
                  💵 9th Place — $1,500 💵<br />
                  🎁 10th Place — $1,000 🎁
                </p>
                <p>
                  🎉 11th–65th Place — $500 EACH 🎊💸<br />
                  (Yes… that&rsquo;s 55 more winners getting paid)
                </p>
              </div>
            </div>

            {/* Total Prize Pool Section */}
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col gap-4 items-center w-full">
                <h2
                  className="text-black text-[24px] md:text-[36px] leading-[32px] md:leading-[53px] tracking-[-2px] capitalize text-center w-full"
                  style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
                >
                  Total prize pool: $250,000
                </h2>
                <p
                  className="text-black text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0.32px] md:tracking-[0.36px] font-normal text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Time is limited. Enter now, complete the actions, and put yourself in the running for one of the biggest giveaways of the year!
                </p>
              </div>

              {/* CTA Button */}
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0080ed] blur-[8px] rounded-full opacity-70" />
                <button
                  className="relative bg-[#0080ed] text-white rounded-full w-[289px] h-[69px] uppercase text-[18px] leading-7 text-center"
                  style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
                >
                  JOIN THE PRESALE
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#fff5e3] rounded-[8px] p-2 w-full text-center">
              <p
                className="text-black text-[12px] leading-[18px] tracking-[0.24px]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="font-bold">Disclaimer: </span>
                Do not use a centralized exchange wallet (e.g. The giveaway will only take place if the $PREDICT presale is completely sold out and will be distributed in tokens.
              </p>
            </div>
          </div>

          {/* Login + Entry Methods Section */}
          <div className="w-full flex flex-col gap-4">
            {/* Login Methods Header */}
            <div className="bg-white rounded-2xl px-6 py-4 md:py-5 flex items-center justify-center gap-3 w-full">
              <span
                className="text-black text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0.32px] md:tracking-[0.36px] font-normal whitespace-nowrap"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Login With:
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <div className="w-[17px] h-[17px] shrink-0">
                  <FacebookIcon />
                </div>
                {/* X / Twitter */}
                <div className="w-[17px] h-[17px] shrink-0">
                  <XIcon />
                </div>
                {/* Google */}
                <div className="w-[20px] h-[20px] shrink-0">
                  <GoogleIcon />
                </div>
                {/* Discord */}
                <div className="w-[20px] h-[20px] shrink-0">
                  <DiscordIcon />
                </div>
              </div>
            </div>

            {/* Entry Methods */}
            <div className="bg-white rounded-2xl w-full flex flex-col items-center gap-3 md:gap-5 pt-4 md:pt-6 px-2 md:px-4">
              <h3
                className="text-black text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] capitalize text-center"
                style={{ fontFamily: "'Helvetica Neue Medium Extended', sans-serif" }}
              >
                9 Ways to Enter
              </h3>
              <div className="w-full flex flex-col gap-3 md:px-4">
                {entryMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="bg-[#f1f1f1] rounded-[8px] flex items-center justify-between px-[11px] md:px-4 py-3 w-full gap-2"
                  >
                    <div className="flex items-center gap-[18px] flex-1 min-w-0">
                      <div
                        className={`${method.bg} rounded-[2.4px] md:rounded-[3px] shrink-0 size-8 md:size-10 flex items-center justify-center overflow-hidden p-[6px] md:p-[8px]`}
                      >
                        {method.icon}
                      </div>
                      <span
                        className="text-black text-[16px] md:text-[20px] leading-[24px] md:leading-[28px] tracking-[0.32px] md:tracking-[0.4px] font-normal"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {method.label}
                      </span>
                    </div>
                    <div className="bg-white rounded-[4px] shrink-0 size-10 flex items-center justify-center overflow-hidden">
                      {method.locked ? (
                        <div className="w-5 h-5 md:w-6 md:h-6"><LockIcon /></div>
                      ) : (
                        <span
                          className="text-black text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0.32px] md:tracking-[0.36px] font-medium whitespace-nowrap"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {method.points}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Terms */}
              <div className="py-3 md:py-[14px]">
                <span
                  className="text-black text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] tracking-[0.32px] md:tracking-[0.36px] font-normal text-center"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Terms &amp; Conditions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
