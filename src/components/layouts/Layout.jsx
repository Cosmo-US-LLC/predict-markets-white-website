import { Outlet } from 'react-router-dom';
import { Header } from './Header.jsx';
import { Footer } from './Footer.jsx';

export function Layout() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
