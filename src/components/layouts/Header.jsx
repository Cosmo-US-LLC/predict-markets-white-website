import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import logoImage from "../../assets/images/logo/P_logo.svg";
import { scrollToWallet } from "../../lib/utils";
import predictHeroBgMobile from "../../assets/images/home/predict_hero/predict_hero_bg_mobile.webp";
import xLogo from "../../assets/images/footer/X.svg";
import telegramLogo from "../../assets/images/footer/Telegram.svg";
import instagramLogo from "../../assets/images/footer/instagram.svg";

const navLinks = [
  {
    label: "What is PredictMarkets?",
    path: "/#what-is-predictmarkets",
    isHash: true,
    scrollId: "what-is-predictmarkets",
  },
  {
    label: "How to Buy",
    path: "/#how-to-buy",
    isHash: true,
    scrollId: "how-to-buy",
  },
  {
    label: "Tokenomics",
    path: "/#tokenomics",
    isHash: true,
    scrollId: "tokenomics",
  },
  { label: "Win $250K", path: "/win-250k" },
];

const mobileNavLinks = [
  {
    label: "What Is $PREDICT?",
    path: "/#what-is-predictmarkets",
    isHash: true,
    scrollId: "what-is-predictmarkets",
  },
  {
    label: "How Does It Work?",
    path: "/#how-it-works",
    isHash: true,
    scrollId: "how-it-works",
  },
  {
    label: "Presale Benefits",
    path: "/#presale-benefits",
    isHash: true,
    scrollId: "presale-benefits",
  },
  {
    label: "How To Buy",
    path: "/#how-to-buy",
    isHash: true,
    scrollId: "how-to-buy",
  },
  {
    label: "Tokenomics",
    path: "/#tokenomics",
    isHash: true,
    scrollId: "tokenomics",
  },
  {
    label: "Roadmap",
    path: "/#roadmap",
    isHash: true,
    scrollId: "roadmap",
  },
  {
    label: "FAQ",
    path: "/#faq",
    isHash: true,
    scrollId: "faq",
  },
];

const socialLinks = [
  { icon: instagramLogo, href: "https://www.instagram.com/predictmarkets", label: "Instagram" },
  { icon: telegramLogo, href: "https://t.me/predictmarkets", label: "Telegram" },
  { icon: xLogo, href: "https://x.com/predictmarkets", label: "X (Twitter)" },
];

export function Header() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const languageRef = useRef(null);
  const mobileLanguageRef = useRef(null);
  const headerRef = useRef(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (mobileLanguageRef.current && !mobileLanguageRef.current.contains(event.target)) {
        setIsMobileLanguageOpen(false);
      }
    };

    if (isLanguageOpen || isMobileLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen, isMobileLanguageOpen]);

  // Calculate header height
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavClick = (link) => {
    if (link.isHash) {
      const element = document.getElementById(link.scrollId);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top +
          window.scrollY -
          offset;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header ref={headerRef} className="sticky top-0 z-[101] w-full bg-white border-b border-[#e5e5e5]">
      <div
        className="h-[40px] bg-[#B9E6FE] flex items-center justify-center cursor-pointer hover:bg-[#A8DFFE] transition-colors relative z-[102]"
        onClick={scrollToWallet}
      >
        <p
          className="text-[#0B4A6F] text-center"
          style={{
            fontFamily: "Inter",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "18px",
            letterSpacing: "0.24px",
          }}
        >
          <span className="underline font-[600]">Click here</span> to enter the
          $PREDICT Presale
        </p>
      </div>
      <div className="flex w-full max-w-[1280px] mx-auto px-4 md:px-2 py-3 items-center justify-between gap-4 relative z-[102] bg-white">
        <button
          variant="ghost"
          size="icon"
          className="md:hidden cursor-pointer flex lg:hidden"
         onClick={(e) => {
    e.stopPropagation(); // Prevents the click from reaching parent elements
    setIsMobileMenuOpen((prev) => !prev);
  }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            className="transition-all duration-300"
            fill="none"
          >
            <path
              d={isMobileMenuOpen 
                ? "M3.3335 5H16.6668M3.3335 10H16.6668M10.8335 15H16.6668"
                : "M3.3335 5H16.6668M3.3335 10H16.6668M3.3335 15H9.16683"
              }
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={logoImage}
            alt="PredictMarkets"
            className="h-[38px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 text-black text-base font-normal leading-6">
          {navLinks.map((link) =>
            link.isHash ? (
              <a
                key={link.path}
                href={link.path}
                className="hover:opacity-80 transition-opacity whitespace-nowrap !text-[16px] !font-[Inter] !font-[600]"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(link.scrollId);
                  if (element) {
                    const offset = 80;
                    const elementPosition =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      offset;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className="hover:opacity-80 transition-opacity whitespace-nowrap !text-[16px] !font-[Inter] !font-[600]"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Right Section - Language & Button */}
        <div className="flex items-center gap-[7px]">
          {/* Language Selector - Desktop */}
          {/* <div
            ref={languageRef}
            className="hidden md:flex items-center relative"
          >
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-[12px] py-[2px] h-[37px] bg-white border border-[#e5e5e5] rounded-full hover:bg-[#f5f5f5] transition-colors"
            >
              <Globe className="w-[18px] h-[18px] text-black" />
              <span className="text-sm font-normal text-black">English</span>
              <ChevronDown
                className={cn(
                  "w-[12px] h-[12px] text-black transition-transform",
                  isLanguageOpen && "rotate-180",
                )}
              />
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
          </div> */}

          {/* Buy Button */}
          <Button
            asChild
            className="btn_primary  flex max-md:!hidden !rounded-[8px] !px-[24px] !text-[16px] !py-[12px]"
          >
            <Link to="">Connect Wallet</Link>
          </Button>
          <Button
            asChild
            className="btn_primary  flex md:!hidden !px-[24px] !text-[14px] !py-[12px]"
          >
            <Link to="">Buy Now</Link>
          </Button>
        </div>
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[100] overflow-y-auto" style={{ top: `${headerHeight}px` }}>
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full z-0"
              style={{
                backgroundImage: `url(${predictHeroBgMobile})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
              }}
            ></div>
            
            {/* Menu Card */}
            <div className="relative z-10 min-h-[70vh] flex flex-col justify-start pt-4 items-center px-4 ">
              {/* Menu Card Container */}
              <div 
                className="w-full max-w-[90%]  backdrop-blur-md rounded-[12px] p-6 !pt-4 flex flex-col
                 gap-2"
                style={{
                  border: '0.7px solid #DDD',
                  background: 'rgba(250, 249, 249, 0.34)',
                }}
              >
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-5 h-5 flex items-center justify-center rounded-full 
                   "
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-black" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-[11px]">
                  {mobileNavLinks.map((link) => (
                    <h3
                      key={link.path}
                      onClick={() => handleMobileNavClick(link)}
                      className="text-center !text-[16px] font-normal 
                      text-black hover:text-[#0080ED] transition-colors "
                    >
                      {link.label}
                    </h3>
                  ))}
                </nav>

                {/* Language Selector */}
              </div>
                {/* <div
                  ref={mobileLanguageRef}
                  className="flex items-center mt-4 justify-center relative"
                >
                  <button
                    onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e5e5e5] rounded-full hover:bg-[#f5f5f5] transition-colors"
                  >
                    <Globe className="w-[18px] h-[18px] text-black" />
                    <span className="text-sm font-normal text-black">English</span>
                    <ChevronDown
                      className={cn(
                        "w-[12px] h-[12px] text-black transition-transform",
                        isMobileLanguageOpen && "rotate-180",
                      )}
                    />
                  </button>
                  {isMobileLanguageOpen && (
                    <div className="absolute top-full  bg-white border border-[#e5e5e5] rounded-md shadow-lg py-2 min-w-[120px] z-50">
                      <button
                        onClick={() => setIsMobileLanguageOpen(false)}
                        className="w-full text-left px-4 py-2 text-black text-xs hover:bg-gray-100"
                      >
                        English
                      </button>
                    </div>
                  )}
                </div> */}

              {/* Join Our Socials Section */}
              <div className="w-full max-w-[90%] mt-3 flex flex-col items-center gap-4">
                <h3 className="text-[18px] font-semibold text-black text-center">
                  Join Our Socials
                </h3>
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:opacity-80 transition-opacity"
                      aria-label={social.label}
                    >
                      <img
                        src={social.icon}
                        alt={social.label}
                        className="w-[42px] h-[42px] object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Support Email */}
              <div className="w-full max-w-[90%] mt-4 text-center">
                <a
                  href="mailto:Support@predictmarkets.io"
                  className="text-[14px] text-black hover:text-[#0080ED] transition-colors"
                >
                  Support@predictmarkets.io
                </a>
              </div>

              {/* Copyright */}
              <div className="w-full max-w-[90%] mt-4 text-center">
                <p className="text-[12px] text-black/70">
                  Copyright 2026 © PredictMarkets All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
