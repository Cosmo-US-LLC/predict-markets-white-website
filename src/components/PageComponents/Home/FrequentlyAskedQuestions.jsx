import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { cn } from "../../../lib/utils";

const faqData = [
  {
    id: "what-is-predict-markets?",
    question: "What Is PredictMarkets?",
    answer:
      "PredictMarkets is a decentralized platform for predicting real-world events across crypto, politics, sports, technology, economics, culture, and more. Pick the outcome you believe in and take a position. If you’re right, you earn a payout. Exit at any time or hold until the event settles.",
  },
  {
    id: "what-is-predict-token",
    question: "What Is $PREDICT Token?",
    answer:
      "The $PREDICT token is the native utility token of the PredictMarkets platform. It powers the prediction market ecosystem, enabling users to participate in markets, earn rewards, and govern the platform through decentralized decision-making.",
  },
  {
    id: "presale-difference",
    question: "What makes the $PREDICT Crypto presale different?",
    answer:
      "The $PREDICT presale offers early access to the platform's native token with exclusive benefits, competitive pricing, and a transparent allocation structure. Unlike traditional presales, we prioritize community participation and long-term value creation.",
  },
  {
    id: "presale-growth",
    question: "How does the presale support long-term growth?",
    answer:
      "The presale is designed to fund platform development, marketing, and community building initiatives. Funds raised are allocated strategically to ensure sustainable growth, platform security, and ecosystem expansion, creating long-term value for all participants.",
  },
  {
    id: "token-safety",
    question: "Are my $PREDICT tokens safe?",
    answer:
      "Yes, $PREDICT tokens are secured through smart contracts audited by leading security firms. We implement industry-standard security measures, including multi-signature wallets, regular security audits, and transparent token allocation. Always store your tokens in a secure wallet and never share your private keys.",
  },
  {
    id: "vesting-schedule",
    question: "Will there be a vesting period?",
    answer:
      "There will be a short vesting period, with all tokens fully claimable within 31 days. Tokens are released in stages (10% / 20% / 30% / 50%) to support market stability. Strategic buybacks will be used to support both short-term growth and long-term sustainability.",
  },
  {
    id: "listing-price",
    question: "What Is the $PREDICT listing price?",
    answer:
      "The listing price represents the initial market value of the $PREDICT token when it becomes publicly available. At launch, $PREDICT will be listed at $0.05.",
  },
  {
    id: "launch-date",
    question: "When will $PREDICT launch?",
    answer:
      "The $PREDICT launch is approaching and will take place once the presale is fully sold out. Final timing details will be shared as the presale reaches completion.",
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <section className="bg-white py-12 max-md:!pb-0 md:py-20" id="faq">
      <div className="max-w-[1280px] mx-auto md:px-8 px-4">
        {/* Header Section */}
        <div className="flex flex-col md:gap-4 gap-3 items-center text-center mb-1 md:mb-16">
          <h2 className="heading-two capitalize text-[#000]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#000] md:!text-[18px] paragraph-regular  max-w-[812px]">
            You may have questions, <br className="md:hidden" /> we have the
            answers.
          </p>
          <div className="w-full my-5 md:my-0 h-[0.5px] bg-black/20 z-10 md:hidden"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-12">
          <Accordion type="single" collapsible className="w-full space-y-0">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className={cn(
                  "border-b border-[#191919] overflow-hidden bg-transparent",
                  index === 0 && "rounded-t-[16px]",
                  index === faqData.length - 1 && "rounded-b-[16px] border-b-0",
                )}
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline text-left bg-transparent group">
                  <h4 className="heading-four !text-[14px] md:!text-[20px] capitalize flex-1 text-left text-black">
                    {faq.question}
                  </h4>
                  <span className="ml-4 shrink-0 text-black font-normal !text-[26px] !text-[#0080ED] leading-none">
                    <span className="group-data-[state=open]:hidden">+</span>
                    <span className="hidden group-data-[state=open]:inline">
                      −
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="paragraph-regular !text-start text-[#000]">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Support Section */}
        {/* <div className="rounded-[16px] border border-[#e5e5e5] bg-white p-6 md:p-8">
          <h3 className="mb-4 text-xl font-medium leading-7 capitalize text-black">
            Need help or have questions?
          </h3>
          <div className="space-y-2 text-base leading-6 tracking-[0.32px] text-[#4b4b4b]">
            <p>
              You can reach the PredictMarkets team through our official community channels, where verified team members are available to help. For direct support or specific inquiries, you can also contact us by email.
            </p>
            <p className="pt-2">
              General support:{' '}
              <a
                href="mailto:support@predictmarkets.io"
                className="text-[#0080ED] hover:underline"
              >
                support@predictmarkets.io
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
