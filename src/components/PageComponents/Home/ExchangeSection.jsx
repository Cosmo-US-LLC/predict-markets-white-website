import bgAbstract from "../../../assets/images/home/exchange-section/bg-abstract.webp";
import sectionBg from "../../../assets/images/home/what_is_predict/what_is_predict_bg.webp";
import phoneImage from "../../../assets/images/home/exchange-section/phone-image.webp";
import checkmarkIcon from "../../../assets/images/home/exchange-section/checkmark-icon.svg";
import liveDot from "../../../assets/images/home/exchange-section/live-dot.svg";

const desktopBullets = [
  "Daily USDT staking Income from Platform revenue",
  "Lower fees and exclusive membership perks",
  "Only Payment method with cashback",
  "Weekly bonuses and free games",
];

const mobileBullets = [
  "Daily USDT Staking Income\nFrom Platform Revenue",
  "Lower Fees and Exclusive Membership Perks",
  "Only Payment Method\nwith Cashback",
  "Weekly Bonuses and Free Games",
];

const panelGradient =
  "linear-gradient(180deg, rgba(255,255,255,0.34) 24.53%, rgba(0,128,237,0.34) 57.049%), linear-gradient(90deg, #ffffff 0%, #ffffff 100%)";

export default function ExchangeSection() {
  return (
    <section
      className="relative w-full  overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sectionBg})` }}
    >

      <div className="lg:hidden relative flex items-center justify-center px-4 py-10 w-full">
        <img
          src={bgAbstract}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col gap-[10px] items-center w-[357px] px-4 py-6 rounded-[12px] border-[0.5px] border-[#9c9c9c] overflow-clip backdrop-blur-[18.65px] bg-white">
          <div className="flex flex-col gap-[10px] items-center w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col gap-4 items-center w-full">
                <h2 className="font-['Helvetica_Neue_Medium_Extended',sans-serif] text-[28px] leading-[34px] tracking-[-2px] capitalize text-black w-full" style={{ fontWeight: 500 }}>
                  What is $PREDICT?
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] tracking-[0.32px] text-black w-full whitespace-pre-wrap">
                  {`The $PREDICT token gives holders access to a decentralised prediction market ecosystem, enabling anonymous, transparent, and global peer-to-peer predictions on real world events such as elections, sports, news, and much more.`}
                  <br /><br />
                  {`Holding $PREDICT unlocks real utility and exclusive early advantages across the platform.`}
                </p>
              </div>

              <div className="flex flex-col gap-4 items-center w-[326px]">
                {mobileBullets.map((text, i) => (
                  <div key={i} className="flex gap-[10px] items-start justify-center w-full">
                    <div
                      className="flex-shrink-0 bg-[#e6f6ff] border-[0.764px] border-[rgba(255,255,255,0.51)] overflow-clip rounded-[3.058px] flex items-center justify-center"
                      style={{ width: "19.876px", height: "19.876px" }}
                    >
                      <img src={checkmarkIcon} alt="" style={{ width: "15.289px", height: "15.289px" }} aria-hidden="true" />
                    </div>
                    <p className="font-['Inter',sans-serif] font-semibold text-[16px] leading-[20px] tracking-[0.32px] text-black w-[287px] whitespace-pre-wrap">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[10px] items-center w-full">
              <div className="relative w-full h-[50px]">
                <div
                  className="absolute inset-0 rounded-[92px] bg-[#0080ed]"
                  style={{ filter: "blur(8px)", opacity: 0.7 }}
                />
                <button
                  className="relative z-10 w-full h-full rounded-[92px] flex items-center justify-center"
                  style={{
                    backgroundColor: "#0080ed",
                    boxShadow: "inset 0px -0.921px 1.841px 0px #f5e99c, inset 0px 0.921px 1.841px 0px #f5e99c",
                  }}
                >
                  <span className="font-['Helvetica_Neue_Medium_Extended',sans-serif] uppercase text-[14px] leading-[18px] text-white text-center" style={{ fontWeight: 500 }}>
                    BUY $PREDICT
                  </span>
                </button>
              </div>

              <button
                className="w-full h-[50px] bg-transparent rounded-[83.005px] flex items-center justify-center"
                style={{ border: "0.654px solid #000000" }}
              >
                <span className="font-['Helvetica_Neue_Medium_Extended',sans-serif] uppercase text-[12px] leading-[18px] text-black text-center" style={{ fontWeight: 500 }}>
                  VISIT PLATFORM (BETA)
                </span>
              </button>
            </div>
          </div>

          <div
            className="relative w-full h-[325px] rounded-[12.218px] overflow-clip flex-shrink-0"
            style={{ backgroundImage: panelGradient }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: "605.201px", height: "453.9px" }}>
              <img
                src={phoneImage}
                alt="PredictMarkets app"
                className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-[10px] py-[38px]">
        <div className="relative w-full" style={{ height: "624px" }}>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ width: "1532px", height: "999px", filter: "blur(6.9px)" }}
            aria-hidden="true"
          >
            <img
              src={bgAbstract}
              alt=""
              className="absolute inset-0 w-full h-full object-bottom max-w-none pointer-events-none"
            />
          </div>

          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-clip rounded-[44px] backdrop-blur-[18.65px] bg-white"
            style={{ width: "1280px", height: "624px" }}
          >
            <div
              className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-[18px] items-start"
              style={{ left: "50px", width: "649px", height: "502px" }}
            >
              <div className="flex flex-col gap-[20px] items-start" style={{ width: "100%", height: "258px" }}>
                <h2
                  className="font-['Helvetica_Neue_Medium_Extended',sans-serif] text-[45px] leading-[53px] tracking-[-2px] capitalize text-black"
                  style={{ fontWeight: 500, width: "593px" }}
                >
                  What is $PREDICT?
                </h2>
                <p
                  className="font-['Inter',sans-serif] font-normal text-[16px] leading-[24px] tracking-[0.32px] text-black whitespace-pre-wrap"
                  style={{ width: "534px", height: "167px" }}
                >
                  {`The $PREDICT token gives holders access to a decentralised prediction market ecosystem, enabling anonymous (no KYC), transparent, and global peer-to-peer predictions on real world events such as elections, sports, news, and much more.`}
                  <br /><br />
                  {`Holding $PREDICT unlocks real utility and exclusive early advantages across the platform.`}
                </p>
              </div>

              <div className="flex flex-col gap-[12px] items-start" style={{ height: "153px" }}>
                {desktopBullets.map((text, i) => (
                  <div key={i} className="flex gap-[12px] items-center">
                    <div
                      className="flex-shrink-0 bg-[#e6f6ff] border-[0.764px] border-[rgba(255,255,255,0.51)] overflow-clip rounded-[3.058px] flex items-center justify-center"
                      style={{ width: "19.876px", height: "19.876px" }}
                    >
                      <img src={checkmarkIcon} alt="" style={{ width: "15.289px", height: "15.289px" }} aria-hidden="true" />
                    </div>
                    <p
                      className="font-['Helvetica_Neue_Medium_Extended',sans-serif] text-[16px] leading-[24px] capitalize text-black whitespace-nowrap"
                      style={{ fontWeight: 500 }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-[12px] items-start">
                <div
                  style={{ display: "inline-grid", gridTemplateColumns: "max-content", gridTemplateRows: "max-content" }}
                >
                  <div
                    className="bg-[#0080ed] rounded-[152.889px]"
                    style={{
                      gridColumn: 1,
                      gridRow: 1,
                      width: "288.641px",
                      height: "69px",
                      marginLeft: "0.36px",
                      filter: "blur(7.644px)",
                    }}
                  />
                  <div
                    className="overflow-clip rounded-[152.889px] flex items-center justify-center  z-10 ]"
                    style={{
                      gridColumn: 1,
                      gridRow: 1,
                      width: "288.641px",
                      height: "69px",
                      backgroundColor: "#0080ed",
                      boxShadow: "inset 0px -1.529px 3.058px 0px #f5e99c, inset 0px 1.529px 3.058px 0px #f5e99c",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                  >
                    <span
                      className="font-['Helvetica_Neue_Medium_Extended',sans-serif] capitalize text-[18px]  leading-[28px] text-white text-center"
                      style={{ fontWeight: 500 }}
                    >
                      BUY $PREDICT
                    </span>
                  </div>
                </div>

                <button
                  className="bg-transparent flex items-center justify-center"
                  style={{
                    width: "289px",
                    height: "69px",
                    border: "1px solid #000000",
                    borderRadius: "126.923px",
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="font-['Helvetica_Neue_Medium_Extended',sans-serif] uppercase text-[18px] leading-[28px] text-black text-center"
                    style={{ fontWeight: 500 }}
                  >
                    VISIT PLATFORM (BETA)
                  </span>
                </button>
              </div>
            </div>

            <div
              className="absolute top-1/2 -translate-y-1/2 overflow-clip rounded-[20px]"
              style={{ right: "49px", width: "532px", height: "532px", backgroundImage: panelGradient }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: "990.667px", height: "743px" }}>
                <img
                  src={phoneImage}
                  alt="PredictMarkets app"
                  className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
