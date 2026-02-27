import { Link } from "react-router-dom";
import { Instagram, Send, Twitter } from "lucide-react";
import logoImage from "../../assets/images/logo/P_logo.svg";
import xLogo from "../../assets/images/footer/X.svg";
import telegramLogo from "../../assets/images/footer/Telegram.svg";
import instagramLogo from "../../assets/images/footer/instagram.svg";

const quickLinks = [
  {
    label: "How to Buy",
    path: "/#how-to-buy",
    isHash: true,
    scrollId: "how-to-buy",
  },
  {
    label: "Roadmap",
    path: "/#roadmap",
    isHash: true,
    scrollId: "roadmap",
  },
  { 
    label: "Token Allocation", 
    path: "/#tokenomics", 
    isHash: true, 
    scrollId: "tokenomics" 
  },
  {
    label: "What is PredictMarkets",
    path: "/#what-is-predictmarkets",
    isHash: true,
    scrollId: "what-is-predictmarkets",
  },
];

const docsLinks = [
  { label: "Terms of Service", path: "/terms-of-service" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Token Sale Agreement", path: "/token-sale-agreement" },
  { label: "Live 24/7 Support", path: "/support" },
];

const socialLinks = [
  { icon: xLogo, href: "https://x.com/predictmarkets", label: "X (Twitter)" },
  {
    icon: telegramLogo,
    href: "https://t.me/predictmarkets",
    label: "Telegram",
  },
  {
    icon: instagramLogo,
    href: "https://www.instagram.com/predictmarkets",
    label: "Instagram",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black">
      <div className="max-w-[1280px] mx-auto px-4 md:px-2 py-[50px]">
        {/* Main Content Section */}
        <div className="flex flex-col gap-[24px] md:gap-[42px] mb-[30px] md:mb-[42px]">
          {/* Top Section - Four Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-14 gap-6">
            {/* Logo and Description */}
            <div className="flex flex-col gap-[16px] md:gap-3 max-w-[257px]">
              <div className="flex items-center gap-[11.03px]">
                <img
                  src={logoImage}
                  alt="PredictMarkets"
                  className="h-[38px] w-auto object-contain"
                />
              </div>
              <p className="text-[#000] md:text-[16px] text-[14px] md:leading-[24px] leading-[22px] md:tracking-[0.32px] tracking-[0.28px]">
                Join the platform redefining how global events are predicted and
                valued in real-time.
              </p>
            </div>

            {/* Menu (Quick Links) */}
            <div className="flex flex-col gap-4 max-w-[200px]">
              <h3 className="text-[#000] flex flex-row items-center gap-2 md:text-[20px] text-[18px] font-semibold md:!leading-[28px] !font-[Inter] !leading-[26px] md:tracking-[0.4px] !tracking-[0.36px]">
                <div className="h-[8px] w-[8px] rounded-full bg-[#000]"></div>
                <span>Menu</span>
              </h3>
              <nav className="flex flex-col gap-1.5 pl-4">
                {quickLinks.map((link) =>
                  link.isHash ? (
                    <a
                      key={link.path}
                      href={link.path}
                      className="text-[#000] text-[16px] font-normal leading-[24px] tracking-[0.32px] hover:text-black transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(link.scrollId);
                        if (element) {
                          const offset = 80;
                          const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
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
                      className="text-[#000] text-[16px] font-normal leading-[24px] tracking-[0.32px] hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </nav>
            </div>

            {/* Legal (Docs) */}
            <div className="flex flex-col md:gap-4 gap-2 max-w-[197px]">
              <h3 className="text-[#000] flex flex-row items-center gap-2 md:text-[20px] !font-[Inter] text-[18px] font-semibold md:!leading-[28px] !leading-[26px] md:tracking-[0.4px] !tracking-[0.36px]">
                <div className="h-[8px] w-[8px] rounded-full bg-[#000]"></div>
                <span>Legal</span>
              </h3>
              <nav className="flex flex-col md:gap-1.5 gap-1.5 pl-4">
                {docsLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-[#000] text-[16px] font-normal leading-[24px] tracking-[0.32px] hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Join Our Socials */}
            <div className="flex flex-col gap-[16px] max-w-[216px] pt-[5px]">
              <div className="flex flex-col gap-4">
                <h3 className="text-black !font-[Inter] !text-[18px] md:!text-[20px] font-semibold !leading-[26px] md:!leading-[28px] tracking-[0.36px] md:tracking-[0.4px]">
                  Join Our Socials
                </h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    const isImageIcon = typeof Icon === "string";

                    return (
                      <div key={social.label} className="">
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#000] hover:opacity-80 transition-opacity"
                          aria-label={social.label}
                        >
                          {isImageIcon ? (
                            <img
                              src={Icon}
                              alt={social.label}
                              className="w-[42px] h-[42px] object-contain"
                            />
                          ) : (
                            <Icon className="w-[22px] h-[22px]" />
                          )}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-[#000] text-[16px] leading-[24px] tracking-[0.32px]">
                  Contact E-Mail:
                </p>
                <a
                  href="mailto:Support@predictmarkets.io"
                  className="text-[#000] text-[16px] leading-[24px] tracking-[0.32px] hover:text-black transition-colors"
                >
                  Support@predictmarkets.io
                </a>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer Section */}
          <div className="border-t border-b border-black/10 md:py-[43px] py-[20px]">
            <p className="text-[#000] !text-[12px] md:!text-[14px] leading-[18px] md:leading-[22px] tracking-[0.28px] md:tracking-[0.28px] md:text-left text-center mx-auto">
              Cryptocurrency may be unregulated in your jurisdiction, and its
              value can fluctuate, leading to potential gains or losses. Any
              profits might be subject to capital gains or other taxes,
              depending on your local laws. The content on this platform does
              not constitute an offer, recommendation, or financial advice to
              buy, sell, or engage in any cryptocurrency transactions. You are
              solely responsible for assessing whether a transaction aligns with
              your personal goals, financial circumstances, and risk tolerance.
              We strongly recommend consulting trusted and licensed legal, tax,
              or financial professionals before making any decisions. Trading
              cryptocurrencies carries significant risks, including the
              potential for partial or total loss of your funds. Thorough
              research is crucial. BlockchainFX does not guarantee any
              performance, outcome, or return of capital for any cryptocurrency
              mentioned on this platform. By using this platform, you agree to
              our Terms of Service, Privacy Policy, Cookie Policy, and any
              applicable token sale agreements. The platform's content is not
              intended for use in jurisdictions where its distribution or use
              would violate local laws or regulations.
            </p>
          </div>
        </div>

        {/* Bottom Section - Copyright and Cookie Management */}
        <div className="flex flex-col md:flex-row items-center justify-between md:gap-4 gap-2 text-[14px] md:text-base text-center md:text-center leading-[22px] md:leading-6 tracking-[0.28px] md:tracking-[0.32px] text-black">
          <p>
            Copyright {currentYear}. PredictMarkets,{" "}
            <br className="md:hidden" /> All Rights Reserved.
          </p>
          <Link
            to="/cookie-management"
            className="hover:opacity-80 transition-opacity max-md:hidden"
          >
            Cookie Management
          </Link>
        </div>
      </div>
    </footer>
  );
}
