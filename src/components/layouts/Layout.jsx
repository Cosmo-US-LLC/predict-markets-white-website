import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';
import { ConnectWalletModal } from '../wallet/ConnectWalletModal.jsx';

export function Layout() {
  return (
    <div className="">
      <Toaster position="bottom-center" />
      <ConnectWalletModal />
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
