import { Helmet } from "react-helmet-async";
import ReferralProgramHero from "../components/PageComponents/ReferralProgram/ReferralProgramHero.jsx";
import ReferralProgramSection from "../components/PageComponents/Home/ReferralProgramSection.jsx";
import ReferralProgramHowItWorks from "../components/PageComponents/ReferralProgram/ReferralProgramHowItWorks.jsx";
import ReferralProgramLeaderboardBlock from "../components/PageComponents/ReferralProgram/ReferralProgramLeaderboardBlock.jsx";
import {
  referralClosingBanner,
  referralHowItWorksSteps,
  referralHowItWorksTitle,
  referralLeaderboardDisclaimer,
  referralLeaderboardRows,
  referralLeaderboardTitle,
  referralPageHero,
} from "../data/referralProgramPageData.js";
import {
  referralHeroPhoneArtSrc,
  referralHeroPhoneArtMobileSrc,
  referralHowItWorksPanelSrc,
  referralStartEarningBgSrc,
} from "../data/referralProgramAssets.js";

export function ReferralProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Referral Program | Earn $PREDICT | PredictMarkets</title>
        <meta name="description" content="Share your PredictMarkets referral link and earn 10% of every qualifying purchase in $PREDICT. Your buyers get a 30% token bonus too." />
      </Helmet>
      <ReferralProgramHero
        title={referralPageHero.title}
        subtitle={referralPageHero.subtitle}
        connectWalletLabel={referralPageHero.connectWalletLabel}
      />
      <ReferralProgramLeaderboardBlock
        title={referralLeaderboardTitle}
        leaderboardRows={referralLeaderboardRows}
        disclaimer={referralLeaderboardDisclaimer}
        heroIllustrationSrc={referralHeroPhoneArtSrc}
        heroMobileIllustrationSrc={referralHeroPhoneArtMobileSrc}
      />
      <ReferralProgramSection />
      {/* <ReferralProgramHowItWorks
        sectionTitle={referralHowItWorksTitle}
        steps={referralHowItWorksSteps}
        panelImageSrc={referralHowItWorksPanelSrc}
        closingBannerTitle={referralClosingBanner.title}
        closingBannerLines={referralClosingBanner.lines}
        closingBannerBgSrc={referralStartEarningBgSrc}
      /> */}
    </div>
  );
}
