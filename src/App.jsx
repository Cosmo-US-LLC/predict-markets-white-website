import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './components/layouts/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { Buy } from './pages/Buy.jsx';
import { TermsOfService } from './pages/TermsOfService.jsx';
import { CookiesPolicy } from './pages/CookiesPolicy.jsx';
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx';
import { HowToBuyPage } from "./pages/HowToBuyPage.jsx";
import { ReferralProgramPage } from "./pages/ReferralProgramPage.jsx";
import { GiveawayPage } from "./pages/GiveawayPage.jsx";
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="buy" element={<Buy />} />
          <Route path="how-to-buy" element={<HowToBuyPage />} />
          <Route path="referral" element={<ReferralProgramPage />} />
          <Route path="giveaway" element={<GiveawayPage />} />
          <Route path="terms-of-service" element={<TermsOfService />} />
          <Route path="cookie-management" element={<CookiesPolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </>
    
  );
}

export default App;
