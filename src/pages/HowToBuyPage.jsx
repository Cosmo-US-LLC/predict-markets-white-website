import HowToBuyPageCta from "../components/PageComponents/HowToBuy/HowToBuyPageCta.jsx";
import HowToBuyPageHero from "../components/PageComponents/HowToBuy/HowToBuyPageHero.jsx";
import HowToBuyStep1 from "../components/PageComponents/HowToBuy/HowToBuyStep1.jsx";
import HowToBuyStep2 from "../components/PageComponents/HowToBuy/HowToBuyStep2.jsx";
import HowToBuyStep3 from "../components/PageComponents/HowToBuy/HowToBuyStep3.jsx";
import HowToBuyStep4 from "../components/PageComponents/HowToBuy/HowToBuyStep4.jsx";
import HowToBuyStep5 from "../components/PageComponents/HowToBuy/HowToBuyStep5.jsx";
import HowToBuyStep6 from "../components/PageComponents/HowToBuy/HowToBuyStep6.jsx";
import {
  cryptoTickerSymbols,
  howToBuyPageCta,
  howToBuyPageIntro,
  step1,
  step2,
  step2Panels,
  step3,
  step4,
  step5,
  step6,
  walletTableRows,
} from "../data/howToBuyPageData.js";
import {
  howToBuyHeroCoins,
  howToBuyHeroCoinsMobile,
  howToBuyHeroEthIcon,
  howToBuyWalletLogos,
} from "../data/howToBuyFigmaAssets.js";

/**
 * Same composition pattern as `Home.jsx`: page imports data + section components,
 * passes props explicitly; no “god” content file pulling data on its own.
 */
export function HowToBuyPage() {
  return (
    <div className="min-h-screen">
      <HowToBuyPageHero
        badgeLeft={howToBuyPageIntro.badgeLeft}
        badgeRight={howToBuyPageIntro.badgeRight}
        title={howToBuyPageIntro.title}
        subtitle={howToBuyPageIntro.subtitle}
        coinsImageSrc={howToBuyHeroCoins}
        coinsMobileImageSrc={howToBuyHeroCoinsMobile}
        ethIconSrc={howToBuyHeroEthIcon}
      />
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 pb-14 pt-8 md:px-8 md:pb-24 md:pt-14">
          <HowToBuyStep1
            step1={step1}
            walletTableRows={walletTableRows}
            walletLogos={howToBuyWalletLogos}
          />
          <HowToBuyStep2
            step2={step2}
            cryptoTickerSymbols={cryptoTickerSymbols}
            step2Panels={step2Panels}
          />
          <HowToBuyStep3 step3={step3} />
          <HowToBuyStep4 step4={step4} />
          <HowToBuyStep5 step5={step5} />
          <HowToBuyStep6 step6={step6} />
          {/* <HowToBuyPageCta
            caption={howToBuyPageCta.caption}
            buttonText={howToBuyPageCta.buttonText}
            to={howToBuyPageCta.to}
          /> */}
        </div>
      </div>
    </div>
  );
}
