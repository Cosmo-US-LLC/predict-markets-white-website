import SocialsAwareness from "../components/PageComponents/Home/SocialsAwareness";
import FrequentlyAskedQuestions from "../components/PageComponents/Home/FrequentlyAskedQuestions";
import Roadmap from "../components/PageComponents/Home/Roadmap";
import PressReleases from "../components/PageComponents/Home/PressReleases";
import HowToBuy from "../components/PageComponents/Home/HowToBuy";
import MarketOpportunity from "../components/PageComponents/Home/MarketOpportunity";
import WhatSetsUsApart from "../components/PageComponents/Home/WhatSetsUsApart";
import TokenDetails from "../components/PageComponents/Home/TokenDetails";
import ExchangeListings from "../components/PageComponents/Home/ExchangeListings";
import WhatIsPredict from "../components/PageComponents/Home/WhatIsPredict";
import PredictsTheFeatures from "../components/PageComponents/Home/PredictsTheFeatures";
import Markets from "../components/PageComponents/Home/Markets";
import RevenueSharing from "../components/PageComponents/Home/RevenueSharing";
import PredictionPlatform from "../components/PageComponents/Home/PredictionPlatform";
import HowItWorks from "../components/PageComponents/Home/HowItWorks";
import ExclusivePresaleBenefits from "../components/PageComponents/Home/ExclusivePresaleBenefits";
import GetExtraRewards from "../components/PageComponents/Home/GetExtraRewards";
import PredictMarketsHero from "../components/PageComponents/Home/PredictMarketsHero";
import { faqData, faqConfig } from "../data/faqData";
import { roadmapData, roadmapConfig } from "../data/roadmapData";
import {
  pressReleasesData,
  pressReleasesConfig,
} from "../data/pressReleasesData";
import { howToBuySteps, howToBuyConfig } from "../data/howToBuyData";
import { marketOpportunityConfig } from "../data/marketOpportunityData";
import {
  comparisonTableData,
  whatSetsUsApartConfig,
} from "../data/whatSetsUsApartData";
import {
  tokenDetailsConfig,
  tokenDetailsCards,
} from "../data/tokenDetailsData";
import {
  exchangeListingsData,
  exchangeListingsConfig,
} from "../data/exchangeListingsData";
import { whatIsPredictConfig } from "../data/whatIsPredictData";
import { featuresData, featuresConfig } from "../data/featuresData";
import { marketsData, marketsConfig } from "../data/marketsData";
import { revenueSharingConfig } from "../data/revenueSharingData";
import { predictionPlatformConfig } from "../data/predictionPlatformData";
import { howItWorksConfig } from "../data/howItWorksData";
import {
  exclusivePresaleBenefits,
  exclusivePresaleBenefitsConfig,
} from "../data/exclusivePresaleBenefitsData";
import {
  membershipCards,
  getExtraRewardsConfig,
} from "../data/getExtraRewardsData";
import { predictMarketsHeroConfig } from "../data/predictMarketsHeroData";

export function Home() {
  return (
    <div className="min-h-screen bg-[#020b10]">
      <PredictMarketsHero
        title={predictMarketsHeroConfig.title}
        description={predictMarketsHeroConfig.description}
        buttonText={predictMarketsHeroConfig.buttonText}
        buttonLink={predictMarketsHeroConfig.buttonLink}
        featuredInLeftText={predictMarketsHeroConfig.featuredInLeftText}
        featuredInRightText={predictMarketsHeroConfig.featuredInRightText}
        centerImage={predictMarketsHeroConfig.centerImage}
      />
      <ExchangeListings
        title={exchangeListingsConfig.title}
        exchanges={exchangeListingsData}
      />
      <WhatIsPredict
        title={whatIsPredictConfig.title}
        description={whatIsPredictConfig.description}
        benefits={whatIsPredictConfig.benefits}
        buyButtonText={whatIsPredictConfig.buyButtonText}
        buyButtonLink={whatIsPredictConfig.buyButtonLink}
        secondaryButtonText={whatIsPredictConfig.secondaryButtonText}
        secondaryButtonLink={whatIsPredictConfig.secondaryButtonLink}
      />
      <PredictsTheFeatures
        title={featuresConfig.title}
        subtitle={featuresConfig.subtitle}
        features={featuresData}
      />
      <Markets title={marketsConfig.title} markets={marketsData} />
      <HowItWorks
        title={howItWorksConfig.title}
        subtitle={howItWorksConfig.subtitle}
      />

      <RevenueSharing
        title={revenueSharingConfig.title}
        description={revenueSharingConfig.description}
        buyButtonText={revenueSharingConfig.buyButtonText}
        buyButtonLink={revenueSharingConfig.buyButtonLink}
        revenuePercentage={revenueSharingConfig.revenuePercentage}
      />
      <ExclusivePresaleBenefits
        title={exclusivePresaleBenefitsConfig.title}
        benefits={exclusivePresaleBenefits}
      />
      <GetExtraRewards
        title={getExtraRewardsConfig.title}
        subtitle={getExtraRewardsConfig.subtitle}
        sliderLabel={getExtraRewardsConfig.sliderLabel}
        sliderMin={getExtraRewardsConfig.sliderMin}
        sliderMax={getExtraRewardsConfig.sliderMax}
        membershipCards={membershipCards}
        buyButtonText={getExtraRewardsConfig.buyButtonText}
        buyButtonLink={getExtraRewardsConfig.buyButtonLink}
        disclaimer={getExtraRewardsConfig.disclaimer}
        autoPlayInterval={getExtraRewardsConfig.autoPlayInterval}
      />
      <HowToBuy
        steps={howToBuySteps}
        title={howToBuyConfig.title}
        subtitle={howToBuyConfig.subtitle}
        buyButtonText={howToBuyConfig.buyButtonText}
        buyButtonLink={howToBuyConfig.buyButtonLink}
      />
      <MarketOpportunity
        title={marketOpportunityConfig.title}
        description={marketOpportunityConfig.description}
        chartImage={marketOpportunityConfig.chartImage}
        backgroundImage={marketOpportunityConfig.backgroundImage}
        market2026={marketOpportunityConfig.market2026}
        market2030={marketOpportunityConfig.market2030}
        buyButtonText={marketOpportunityConfig.buyButtonText}
        buyButtonLink={marketOpportunityConfig.buyButtonLink}
      />
      {/* <WhatSetsUsApart
        title={whatSetsUsApartConfig.title}
        description={whatSetsUsApartConfig.description}
        tableData={comparisonTableData}
        platforms={whatSetsUsApartConfig.platforms}
        icons={whatSetsUsApartConfig.icons}
      /> */}
      <TokenDetails
        title={tokenDetailsConfig.title}
        subtitle={tokenDetailsConfig.subtitle}
        // chartImage={tokenDetailsConfig.chartImage}
        details={tokenDetailsCards}
      />
      <Roadmap
        roadmapItems={roadmapData}
        title={roadmapConfig.title}
        subtitle={roadmapConfig.subtitle}
      />
      {/* <PressReleases 
        pressReleases={pressReleasesData}
        title={pressReleasesConfig.title}
      /> */}
      <PredictionPlatform
        title={predictionPlatformConfig.title}
        subtitle={predictionPlatformConfig.subtitle}
        buyButtonText={predictionPlatformConfig.buyButtonText}
        supportButtonText={predictionPlatformConfig.supportButtonText}
        buyButtonLink={predictionPlatformConfig.buyButtonLink}
        supportButtonLink={predictionPlatformConfig.supportButtonLink}
      />
      <FrequentlyAskedQuestions
        faqs={faqData}
        title={faqConfig.title}
        subtitle={faqConfig.subtitle}
        supportTitle={faqConfig.supportTitle}
        supportDescription={faqConfig.supportDescription}
        supportEmail={faqConfig.supportEmail}
      />
      <SocialsAwareness />
    </div>
  );
}
