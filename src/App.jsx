import { Routes, Route } from 'react-router-dom';
import './index.css';
import { Layout } from './components/layouts/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { TermsOfService } from './pages/TermsOfService.jsx';
import { CookiesPolicy } from './pages/CookiesPolicy.jsx';
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="terms-of-service" element={<TermsOfService />} />
        <Route path="cookie-management" element={<CookiesPolicy />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
