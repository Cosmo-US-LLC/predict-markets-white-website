import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";
import { cn } from "../../../lib/utils";
import socialsAwarenessCard1 from "../../../assets/images/home/socials_awareness/socials_awareness_card1.webp";
import socialsAwarenessCard2 from "../../../assets/images/home/socials_awareness/socials_awareness_card2.webp";

const heroCards = [
  {
    id: "whitepaper",
    title: "Whitepaper",
    buttonText: "Read Here",
    image: socialsAwarenessCard1,
    link: "/whitepaper",
  },
  {
    id: "how-to-buy",
    title: "How to Buy",
    buttonText: "Learn More",
    image: socialsAwarenessCard2,
    link: "/how-to-buy",
  },
];

const socialCards = [
  {
    id: "telegram-chat",
    title: "Telegram (Chat)",
    description: "Join the conversation",
    link: "https://t.me/predictmarkets",
    icon: Send,
  },
  {
    id: "telegram-ann",
    title: "Telegram (Announcements)",
    description: "Subscribe for regular updates",
    link: "https://t.me/predictmarkets_ann",
    icon: Send,
  },
];

export default function SocialsAwareness() {
  return (
    <section className="relative bg-white pb-16 md:pb-20">
      {/* Background radial gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-[20%] bg-[radial-gradient(circle_at_center,_rgba(0,128,237,0.36)_0,_transparent_35%)] opacity-50" />
      {/* Section borders */}
      {/* <div className="absolute inset-x-0 top-0 border-b border-[#191919]" /> */}
      <div className="absolute inset-x-0 bottom-0 border-b border-[#191919]" />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="relative z-10 flex flex-col items-start gap-4 md:flex-row md:gap-4">
          {/* Left Side - Image Cards */}
          <div className="relative z-20 flex md:flex-row flex-col gap-4 flex-1 w-full">
            {heroCards.map((card) => (
              <Link
                key={card.id}
                to={card.link}
                className="group relative h-[300px] w-full rounded-[12px] md:h-[348px] md:w-[396px]"
              >
                {/* Background Image with dark overlay */}
                <div className="relative h-full w-full overflow-hidden rounded-[12px] border border-[#262626] bg-black">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover opacity-90"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                </div>

                {/* Content */}
                <div className="absolute left-[20px] flex flex-col gap-3 bottom-[30px] md:bottom-[20px]">
                  <h3 className="capitalize text-white text-[20px] leading-[28px] md:text-[24px] md:font-[600]">
                    {card.title}
                  </h3>
                  <button className="btn_primary !px-0 py-[20px] w-[170px] md:w-[200px]">
                    {card.buttonText}
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Right Side - Social Cards */}
          <div className="relative z-20 flex w-full flex-col gap-4 w-[400px] md:w-[436px]">
            {socialCards.map((social) => {
              const Icon = social.icon;
              return (
                <div
                  key={social.id}
                  className="flex flex-col md:gap-[54px] gap-[28px] rounded-[12px] border border-[#262626] bg-white p-4"
                >
                  {/* Header */}
                  <div className="flex items-center gap-2">
                    <Icon className="h-6 w-6 text-[#0080ED]" />
                    <h4 className="capitalize text-[16px] md:text-[20px] font-medium leading-[28px] text-[#000]">
                      {social.title}
                    </h4>
                  </div>

                  {/* Link Button */}
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-lg bg-[#0080ED] px-4 py-[9px] transition-colors hover:bg-[#0390ff]"
                  >
                    <span className="text-[14px] md:text-lg leading-[26px] tracking-[0.36px] text-white">
                      {social.description}
                    </span>
                    <ArrowRight className="md:h-5 md:w-5 h-4 w-4 shrink-0 text-white transition-colors" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
