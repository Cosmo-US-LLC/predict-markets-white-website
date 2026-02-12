import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '../ui/sheet';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import logoImage from '../../assets/images/logo/P_logo.svg';

const navLinks = [
  { label: 'What is PredictMarkets?', path: '/#what-is-predictmarkets', isHash: true, scrollId: 'what-is-predictmarkets' },
  { label: 'How to Buy', path: '/#how-to-buy', isHash: true, scrollId: 'how-to-buy' },
  { label: 'Whitepaper', path: '/whitepaper' },
  { label: 'Referral', path: '/referral' },
  { label: 'Win $250K', path: '/win-250k' },
];

export function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageRef = useRef(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-[#e5e5e5]">
      <div className="flex w-full max-w-[1280px] mx-auto px-4 md:px-8 py-3 items-center justify-between gap-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img 
            src={logoImage} 
            alt="PredictMarkets" 
            className="h-[38px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-black text-base font-normal leading-6">
          {navLinks.map((link) => (
            link.isHash ? (
              <a
                key={link.path}
                href={link.path}
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(link.scrollId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="hover:opacity-80 transition-opacity whitespace-nowrap"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>

        {/* Right Section - Language & Button */}
        <div className="flex items-center gap-[7px]">
          {/* Language Selector - Desktop */}
          <div ref={languageRef} className="hidden md:flex items-center relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-[12px] py-[2px] h-[37px] bg-white border border-[#e5e5e5] rounded-full hover:bg-[#f5f5f5] transition-colors"
            >
              <Globe className="w-[18px] h-[18px] text-black" />
              <span className="text-sm font-normal text-black">English</span>
              <ChevronDown className={cn("w-[12px] h-[12px] text-black transition-transform", isLanguageOpen && "rotate-180")} />
            </button>
            {isLanguageOpen && (
              <div className="absolute top-full mt-2 right-0 bg-white border border-[#e5e5e5] rounded-md shadow-lg py-2 min-w-[120px] z-50">
                <button 
                  onClick={() => setIsLanguageOpen(false)}
                  className="w-full text-left px-4 py-2 text-black text-xs hover:bg-gray-100"
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* Buy Button */}
          <Button
            asChild
            className="btn_primary"
          >
            <Link to="/buy">BUY $PREDICT</Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-black hover:bg-black/5 lg:hidden"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white border-l border-[#e5e5e5] p-6">
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4 text-black hover:bg-black/5"
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </SheetClose>
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Logo */}
                <Link to="/" className="flex items-center mb-4">
                  <img 
                    src={logoImage} 
                    alt="PredictMarkets" 
                    className="h-[38px] w-auto object-contain"
                  />
                </Link>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <SheetClose key={link.path} asChild>
                      {link.isHash ? (
                        <a
                          href={link.path}
                          className="text-black text-base font-normal hover:opacity-80 transition-opacity py-2"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(link.scrollId);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          }}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          className="text-black text-base font-normal hover:opacity-80 transition-opacity py-2"
                        >
                          {link.label}
                        </Link>
                      )}
                    </SheetClose>
                  ))}
                </nav>

                {/* Mobile Language Selector */}
                <div className="pt-4 border-t border-white/20">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="flex items-center gap-2 px-4 py-2 w-full bg-white border border-[#e5e5e5] rounded-full hover:bg-[#f5f5f5] transition-colors"
                  >
                    <Globe className="w-[18px] h-[18px] text-black" />
                    <span className="text-sm font-normal text-black">English</span>
                    <ChevronDown className="w-[12px] h-[12px] text-black ml-auto" />
                  </button>
                  {isLanguageOpen && (
                    <div className="mt-2 bg-white border border-[#e5e5e5] rounded-md py-2">
                      <button className="w-full text-left px-4 py-2 text-black text-sm hover:bg-[#f5f5f5]">
                        English
                      </button>
                    </div>
                  )}
                </div>

                {/* Mobile Buy Button */}
                <SheetClose asChild>
                  <Button
                    asChild
                    className="bg-[#2104ff] hover:bg-[#1a03cc] text-white text-sm font-medium uppercase px-6 py-3 rounded-full w-full"
                  >
                    <Link to="/buy">BUY $PREDICT</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}