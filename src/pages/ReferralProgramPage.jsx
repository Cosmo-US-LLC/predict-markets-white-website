import ReferralProgramHero from "../components/PageComponents/ReferralProgram/ReferralProgramHero.jsx";
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
  referralHowItWorksPanelSrc,
} from "../data/referralProgramAssets.js";

export function ReferralProgramPage() {
  return (
    <div className="min-h-screen bg-white">
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
      />
      <ReferralProgramHowItWorks
        sectionTitle={referralHowItWorksTitle}
        steps={referralHowItWorksSteps}
        panelImageSrc={referralHowItWorksPanelSrc}
        closingBannerTitle={referralClosingBanner.title}
        closingBannerLines={referralClosingBanner.lines}
      />
    </div>
  );
}
