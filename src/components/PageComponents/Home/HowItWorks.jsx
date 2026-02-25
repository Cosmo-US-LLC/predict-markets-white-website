import howItWorksBg from "../../../assets/images/home/how_does_work/how_does_work_image.webp";
import howItWorksBgMobile from "../../../assets/images/home/how_does_work/how_does_work_mobile_image.webp";

export default function HowItWorks({
  title = "How Does It Work?",
  subtitle = "PredictMarkets is a decentralised platform where users predict real world events. Every prediction generates fees that directly benefit the $PREDICT ecosystem through daily buybacks, token burns, and revenue sharing with holders, supporting long term token value growth.",
}) {
  return (
    <section className="relative w-full md:bg-[#F7FCFF] py-0 md:py-16" id="how-it-works">
      <div 
        className="w-full md:w-[90%] max-md:!border-none md:border-[0.5px] md:border-[#DDD] md:rounded-[44px] !rounded-0 md:max-w-[1280px] 
        mx-auto px-4 md:px-8 py-16 md:py-12 flex flex-col md:gap-6 gap-8"
        style={{
          background: 'radial-gradient(48.25% 48.25% at 50% 50%, rgba(0, 128, 237, 0.00) 0%, rgba(0, 128, 237, 0.11) 100%), #FFF'
        }}
      >
        <div className="relative z-10 flex flex-col gap-2 md:gap-[8px] items-center text-center">
          <h2 className="heading-two">
            {title}
          </h2>
          <p className="text-[#000] text-base md:text-[16px] font-normal leading-[24px] tracking-[0.32px] max-w-[767px]">
            {subtitle}
          </p>
        </div>

        {/* Flow Diagram Container */}
        <div className="relative w-full max-w-[807px] mx-auto max-md:hidden">
          <h4 className="absolute paragraph-medium top-[21%] left-[35%] z-10 max-w-[250px] text-center text-[#000] text-base md:!text-[14px] font-medium leading-[140%] w-full whitespace-pre-wrap">
            PredictMarkets generates daily revenue from trading fees
          </h4>
          <h4 className="absolute paragraph-medium top-[20%] text-[#000] left-[74%] z-10 max-w-[300px] text-center text-[16px] font-medium leading-[28px] w-full whitespace-pre-wrap">Buys back</h4>
          <h4 className="absolute paragraph-medium top-[53%] left-[-5%] z-10 max-w-[300px] text-center text-[#000] text-base md:!text-[14px] font-medium leading-[140%] w-full whitespace-pre-wrap">
            $PREDICT <br /> Price Goes Up
          </h4>
          <h4 className="absolute paragraph-medium top-[45%] text-[#000] left-[47%] z-10 max-w-[300px] text-center text-[16px] font-medium leading-[28px] w-full whitespace-pre-wrap">50% Burns</h4>
          <img src={howItWorksBg} alt="How It Works" className="object-cover min-h-[500px]" />
          <h4 className="absolute paragraph-medium bottom-[4%] left-[35%] z-10 max-w-[250px] text-center text-[#000] text-base md:!text-[14px] font-medium leading-[140%] w-full whitespace-pre-wrap">
            $PREDICT Holders get daily passive USDT staking income
          </h4>
          <h4 className="absolute paragraph-medium top-[76%] text-[#000] left-[60%] z-10 max-w-[300px] text-center text-[16px] font-medium leading-[28px] w-full whitespace-pre-wrap">50% Rewards</h4>
          <h4 className="absolute paragraph-medium top-[56%] -right-[5%] z-10 max-w-[300px] text-center text-[#000] text-base md:!text-[14px] font-medium leading-[140%] w-full whitespace-pre-wrap">
            $PREDICT
          </h4>
        </div>

        <div className="relative max-w-[370px] mx-auto flex justify-center h-full md:hidden">
          <h4 className="absolute top-[17.5%] left-[30.5%] max-w-[160px] z-10 text-center text-[#000] text-[10px] font-medium leading-[130%] w-full whitespace-pre-wrap">
            PredictMarkets generates daily revenue from trading fees
          </h4>
          <h4 className="absolute top-[30%] left-[86.5%] max-w-[60px] z-10 text-center text-[#000] text-[10px] font-medium leading-[130%] w-full whitespace-pre-wrap">
            Buys back
          </h4>
          <h4 className="absolute top-[55%] left-[2%] z-10 max-w-[80px] text-center text-[#000] 
          text-[10px] font-medium leading-[130%] w-full whitespace-pre-wrap">
            $PREDICT Price Goes Up
          </h4>
          <h4 className="absolute top-[47%] left-[51.5%] max-w-[90px] z-10 text-center text-[#000] text-[10px] font-medium leading-[130%] w-full whitespace-pre-wrap">
            50% Burns
          </h4>
          {/* <img src={howItWorksBgMobile} alt="How It Works" className="w-full h-full object-cover" /> */}
          <h4 className="absolute bottom-[4%] left-[31.5%] z-10 max-w-[130px] 
          text-center text-[#000] text-[10px] font-medium leading-[130%] w-full whitespace-pre-wrap">
            $PREDICT Holders get daily passive USDT staking income
          </h4>
          <h4 className="absolute bottom-[30%] left-[69.5%] text-right max-w-[60px] z-10 text-[#000] text-[10px] font-medium leading-[130%] w-full whitespace-pre-wrap">
            50% Rewards
          </h4>
          <h4 className="absolute top-[53%] -right-[2%] z-10 max-w-[100px] text-center text-[#000] text-[10px] font-medium leading-[18px] w-full whitespace-pre-wrap">
            $PREDICT
          </h4>
          <img src={howItWorksBgMobile} alt="How It Works" className="w-full h-full object-cover" />
        </div>


      </div>
    </section>
  );
}