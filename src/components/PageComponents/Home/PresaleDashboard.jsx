import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Copy, X, LogOut, ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../../ui/carousel";
import { membershipCards } from "../../../data/getExtraRewardsData";
import bnbIcon from "../../../assets/images/logo/wallet-coins/coins (1).svg";
import ethIcon from "../../../assets/images/logo/wallet-coins/coins (2).svg";
import solIcon from "../../../assets/images/logo/wallet-coins/coins (3).svg";
import usdtIcon from "../../../assets/images/logo/wallet-coins/coins (4).svg";
import usdcIcon from "../../../assets/images/logo/wallet-coins/coins (5).svg";
import prdicon from "../../../assets/images/logo/wallet-coins/Icon.svg";

export default function PresaleDashboard({
  presaleAmount = "$456,398.80",
  softcapPercentage = 87,
  softcapTarget = "$500,000",
  holdersCount = "2748",
  presalePrice = "$0.1",
  listingPrice = "$0.03",
  youPayAmount = "21,276",
  youReceiveAmount = "100,000",
  bonusCode = "PRE20",
}) {
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedPayment, setSelectedPayment] = useState("USDT ERC-20");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isDashboardModalOpen, setIsDashboardModalOpen] = useState(false);
  const [nftCarouselApi, setNftCarouselApi] = useState();
  const [sliderValueState, setSliderValueState] = useState(1000);
  const dropdownRefs = useRef({});

  // Slider configuration
  const sliderMin = 1000;
  const sliderMax = 100000;

  // Calculate slider percentage
  const sliderPercentage = ((sliderValueState - sliderMin) / (sliderMax - sliderMin)) * 100;

  // Find matching membership card based on slider value
  const getMatchingCard = () => {
    const sortedCards = [...membershipCards].sort((a, b) => a.minAmount - b.minAmount);
    for (let i = sortedCards.length - 1; i >= 0; i--) {
      if (sliderValueState >= sortedCards[i].minAmount) {
        return sortedCards[i];
      }
    }
    return sortedCards[0] || null;
  };

  const matchingCard = getMatchingCard();

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Handle slider change
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValueState(value);

    // Find and scroll to matching card
    const sortedCards = [...membershipCards].sort((a, b) => a.minAmount - b.minAmount);
    const cardIndex = sortedCards.findIndex((card, index) => {
      const nextCard = sortedCards[index + 1];
      return value >= card.minAmount && (!nextCard || value < nextCard.minAmount);
    });

    if (cardIndex !== -1 && nftCarouselApi) {
      nftCarouselApi.scrollTo(cardIndex);
    }
  };

  // Icon Components
  const BuyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8.00521 1.16797C6.65371 1.16797 5.33255 1.56874 4.20881 2.31959C3.08508 3.07045 2.20923 4.13767 1.69203 5.3863C1.17484 6.63493 1.03951 8.00888 1.30318 9.33442C1.56684 10.66 2.21766 11.8775 3.17331 12.8332C4.12897 13.7889 5.34656 14.4397 6.67209 14.7033C7.99763 14.967 9.37159 14.8317 10.6202 14.3145C11.8688 13.7973 12.9361 12.9214 13.6869 11.7977C14.4378 10.674 14.8385 9.35281 14.8385 8.0013C14.8368 6.18953 14.1163 4.45247 12.8352 3.17136C11.554 1.89024 9.81698 1.16973 8.00521 1.16797ZM8.50521 11.8346V12.3613C8.50521 12.4939 8.45253 12.6211 8.35876 12.7149C8.265 12.8086 8.13782 12.8613 8.00521 12.8613C7.8726 12.8613 7.74543 12.8086 7.65166 12.7149C7.55789 12.6211 7.50521 12.4939 7.50521 12.3613V11.8346C7.07076 11.7697 6.66379 11.5824 6.33188 11.2946C6.09496 11.096 5.89987 10.8523 5.75796 10.5776C5.61604 10.3029 5.53013 10.0028 5.50521 9.69463C5.49677 9.59613 5.51773 9.49734 5.56542 9.41075C5.61311 9.32415 5.68541 9.25364 5.77317 9.20812C5.86092 9.1626 5.96021 9.14411 6.05847 9.15501C6.15672 9.1659 6.24955 9.20567 6.32521 9.2693C6.42727 9.35424 6.49191 9.47585 6.50521 9.60797C6.51796 9.78627 6.56643 9.96019 6.64775 10.1194C6.72906 10.2786 6.84156 10.4198 6.97854 10.5346C7.25403 10.7701 7.6101 10.8896 7.97188 10.868C9.01188 10.868 9.50521 10.468 9.50521 9.65463C9.50521 9.11463 9.03188 8.53464 8.00521 8.53464C5.83188 8.53464 5.50521 7.2013 5.50521 6.43463C5.52298 5.95654 5.68728 5.49545 5.97587 5.11386C6.26445 4.73226 6.66336 4.4486 7.11854 4.3013C7.24521 4.26219 7.3741 4.2333 7.50521 4.21464V3.69464C7.50521 3.56203 7.55789 3.43485 7.65166 3.34108C7.74543 3.24731 7.8726 3.19464 8.00521 3.19464C8.13782 3.19464 8.265 3.24731 8.35876 3.34108C8.45253 3.43485 8.50521 3.56203 8.50521 3.69464V4.23464C9.02859 4.32192 9.50845 4.57973 9.87015 4.96796C10.2319 5.35618 10.4551 5.85306 10.5052 6.3813C10.5107 6.50883 10.4672 6.63362 10.3836 6.73011C10.3001 6.8266 10.1828 6.88747 10.0558 6.90026C9.92875 6.91304 9.80167 6.87677 9.70055 6.79888C9.59943 6.72098 9.53193 6.60736 9.51188 6.4813C9.47482 6.1195 9.30098 5.78551 9.02589 5.5476C8.75081 5.30968 8.39524 5.18581 8.03188 5.2013H7.91188C7.74948 5.20002 7.58778 5.22248 7.43188 5.26797C7.2613 5.32361 7.1037 5.4131 6.96853 5.53109C6.83336 5.64908 6.72339 5.79314 6.64521 5.95464C6.56504 6.11442 6.5196 6.28937 6.51188 6.46797C6.51188 7.01464 6.69188 7.54797 8.01188 7.54797C9.65188 7.54797 10.5119 8.61463 10.5119 9.66797C10.5208 9.94247 10.475 10.216 10.3773 10.4727C10.2796 10.7293 10.1319 10.964 9.94268 11.1631C9.7535 11.3622 9.52666 11.5218 9.27531 11.6325C9.02397 11.7432 8.75314 11.8028 8.47854 11.808L8.50521 11.8346Z" fill="currentColor" />
    </svg>
  );

  const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13.4948 12.25H2.49479C2.1266 12.25 1.82812 12.5485 1.82812 12.9167V13.5833C1.82812 13.9515 2.1266 14.25 2.49479 14.25H13.4948C13.863 14.25 14.1615 13.9515 14.1615 13.5833V12.9167C14.1615 12.5485 13.863 12.25 13.4948 12.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.49479 6.58186V12.2552M12.4948 6.58186V12.2552M9.66146 6.58186V12.2552M6.32813 6.58186V12.2552M7.35479 2.09919L2.17479 4.93252C2.06988 4.98993 1.98234 5.07449 1.92135 5.17736C1.86036 5.28022 1.82816 5.3976 1.82812 5.51719V6.18186C1.82813 6.28794 1.87027 6.38968 1.94528 6.4647C2.0203 6.53971 2.12204 6.58186 2.22812 6.58186H13.7615C13.8675 6.58186 13.9693 6.53971 14.0443 6.4647C14.1193 6.38968 14.1615 6.28794 14.1615 6.18186V5.51719C14.1614 5.3976 14.1292 5.28022 14.0682 5.17736C14.0072 5.07449 13.9197 4.98993 13.8148 4.93252L8.63479 2.09919C8.43856 1.99182 8.21847 1.93555 7.99479 1.93555C7.77111 1.93555 7.55102 1.99182 7.35479 2.09919Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const StakeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8.00521 1.33203C6.16721 1.33203 4.67188 2.82736 4.67188 4.66536V6.66536H4.00521C3.65159 6.66536 3.31245 6.80584 3.0624 7.05589C2.81235 7.30594 2.67188 7.64508 2.67188 7.9987V13.332C2.67188 13.6857 2.81235 14.0248 3.0624 14.2748C3.31245 14.5249 3.65159 14.6654 4.00521 14.6654H12.0052C12.3588 14.6654 12.698 14.5249 12.948 14.2748C13.1981 14.0248 13.3385 13.6857 13.3385 13.332V7.9987C13.3385 7.64508 13.1981 7.30594 12.948 7.05589C12.698 6.80584 12.3588 6.66536 12.0052 6.66536H11.3385V4.66536C11.3385 2.82736 9.84321 1.33203 8.00521 1.33203ZM6.00521 4.66536C6.00521 3.5627 6.90254 2.66536 8.00521 2.66536C9.10788 2.66536 10.0052 3.5627 10.0052 4.66536V6.66536H6.00521V4.66536ZM8.67188 11.814V13.332H7.33854V11.814C7.10547 11.6806 6.91831 11.4796 6.80176 11.2376C6.68521 10.9956 6.64473 10.724 6.68566 10.4585C6.7266 10.1931 6.84702 9.94628 7.03105 9.75065C7.21508 9.55502 7.45409 9.41976 7.71654 9.3627C7.9115 9.31946 8.11368 9.32057 8.30815 9.36594C8.50262 9.41132 8.68442 9.49979 8.84011 9.62484C8.99581 9.74988 9.12143 9.9083 9.2077 10.0884C9.29397 10.2685 9.33869 10.4657 9.33854 10.6654C9.33816 10.8985 9.27633 11.1275 9.15929 11.3291C9.04226 11.5308 8.87414 11.698 8.67188 11.814Z" fill="currentColor" />
    </svg>
  );

  const HistoryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M6 12C4.6 12 3.36111 11.5751 2.28333 10.7253C1.20556 9.87556 0.505556 8.78933 0.183333 7.46667C0.138889 7.3 0.172222 7.14733 0.283333 7.00867C0.394444 6.87 0.544444 6.78933 0.733333 6.76667C0.911111 6.74444 1.07222 6.77778 1.21667 6.86667C1.36111 6.95556 1.46111 7.08889 1.51667 7.26667C1.78333 8.26667 2.33333 9.08333 3.16667 9.71667C4 10.35 4.94444 10.6667 6 10.6667C7.3 10.6667 8.40289 10.214 9.30867 9.30867C10.2144 8.40333 10.6671 7.30044 10.6667 6C10.6662 4.69956 10.2136 3.59689 9.30867 2.692C8.40378 1.78711 7.30089 1.33422 6 1.33333C5.23333 1.33333 4.51667 1.51111 3.85 1.86667C3.18333 2.22222 2.62222 2.71111 2.16667 3.33333H3.33333C3.52222 3.33333 3.68067 3.39733 3.80867 3.52533C3.93667 3.65333 4.00044 3.81156 4 4C3.99956 4.18844 3.93556 4.34689 3.808 4.47533C3.68044 4.60378 3.52222 4.66756 3.33333 4.66667H0.666667C0.477778 4.66667 0.319556 4.60267 0.192 4.47467C0.0644445 4.34667 0.000444444 4.18844 0 4V1.33333C0 1.14444 0.0640001 0.986222 0.192 0.858667C0.32 0.731111 0.478222 0.667111 0.666667 0.666667C0.855111 0.666222 1.01356 0.730222 1.142 0.858667C1.27044 0.987111 1.33422 1.14533 1.33333 1.33333V2.23333C1.9 1.52222 2.59178 0.972222 3.40867 0.583333C4.22556 0.194444 5.08933 0 6 0C6.83333 0 7.614 0.158444 8.342 0.475333C9.07 0.792222 9.70333 1.21978 10.242 1.758C10.7807 2.29622 11.2084 2.92956 11.5253 3.658C11.8422 4.38645 12.0004 5.16711 12 6C11.9996 6.83289 11.8413 7.61356 11.5253 8.342C11.2093 9.07044 10.7816 9.70378 10.242 10.242C9.70244 10.7802 9.06911 11.208 8.342 11.5253C7.61489 11.8427 6.83422 12.0009 6 12ZM6.66667 5.73333L8.33333 7.4C8.45555 7.52222 8.51667 7.67778 8.51667 7.86667C8.51667 8.05556 8.45555 8.21111 8.33333 8.33333C8.21111 8.45556 8.05556 8.51667 7.86667 8.51667C7.67778 8.51667 7.52222 8.45556 7.4 8.33333L5.53333 6.46667C5.46667 6.4 5.41667 6.32511 5.38333 6.242C5.35 6.15889 5.33333 6.07267 5.33333 5.98333V3.33333C5.33333 3.14444 5.39733 2.98622 5.52533 2.85867C5.65333 2.73111 5.81156 2.66711 6 2.66667C6.18844 2.66622 6.34689 2.73022 6.47533 2.85867C6.60378 2.98711 6.66756 3.14533 6.66667 3.33333V5.73333Z" fill="currentColor" />
    </svg>
  );

  const tabs = [
    { id: "buy", label: "Buy $PREDICT", icon: BuyIcon },
    { id: "dashboard", label: "Dashboard", icon: DashboardIcon },
    // { id: "stake", label: "Stake", icon: StakeIcon },
    { id: "history", label: "History", icon: HistoryIcon },
  ];

  const paymentOptions = [
    {
      id: "eth",
      name: "ETH",
      network: "ERC-20",
      iconSrc: ethIcon,
      selected: false,
      networks: ["ERC-20", "BEP-20"]
    },
    {
      id: "bnb",
      name: "BNB",
      network: "BEP-20",
      iconSrc: bnbIcon,
      selected: false,
      networks: ["BEP-20", "ERC-20"]
    },
    {
      id: "usdt",
      name: "USDT",
      network: "ERC-20",
      iconSrc: usdtIcon,
      selected: true,
      networks: ["ERC-20", "BEP-20"]
    },
  ];

  // Get selected payment option details
  const getSelectedPaymentOption = () => {
    // Split by space, but handle cases where network might have multiple words
    const parts = selectedPayment.split(" ");
    const name = parts[0];
    const network = parts.slice(1).join(" ") || "";

    const option = paymentOptions.find(opt => opt.name === name);
    if (option) {
      return {
        ...option,
        network: network || option.network
      };
    }
    // Default to USDT if not found
    return paymentOptions.find(opt => opt.id === "usdt") || paymentOptions[2];
  };

  const selectedPaymentOption = getSelectedPaymentOption();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isDashboardModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isDashboardModalOpen]);

  return (
    <div className="relative w-full max-w-[100%] mx-auto bg-white rounded-[13.675px] border border-[#D8D8D8] shadow-xl py-[15px] 
    px-[10px] md:px-[44px] py-[25px] md:py-[24px]">
      {/* Step 1: Presale Live Banner - Positioned at top of card with relative positioning */}
      <div className="flex items-center justify-center mb-4 absolute top-[-15px] left-1/2 transform -translate-x-1/2">
        <div className="bg-[#0080ED] text-white px-4 py-1.5 rounded-[4px] !text-[12px] font-[Inter] font-[600] uppercase flex items-center gap-2">
          {/* Bullet point: white circle with blue dot inside */}
          <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center flex-shrink-0" style={{ animation: 'blink 1.5s ease-in-out infinite' }}>
            {/* <div className="w-1 h-1 bg-[#0080ED] rounded-full"></div> */}
          </div>
          <span>PRESALE IS LIVE</span>
        </div>
      </div>

      {/* Step 2: Navigation Tabs - Parent container with border */}
      <div className="flex items-center justify-between mb-[15px] p-1 gap-2 border  border-gray-800 
      rounded-[100px] ">
        {tabs.map((tab, index) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === "dashboard") {
                  setIsDashboardModalOpen(true);
                }
              }}
              className={`flex !items-center justify-center  !text-black 
                md:!text-[12px] !text-[11px] font-[Inter] rounded-[100px]
                 px-[2px] md:px-[10px] py-2 gap-[2px]  transition-all 
                 duration-200 w-auto max-md:gap-[5px] flex-1 
                 ${index === 0 ? 'md:!min-w-[125px] md:!max-w-[125px]' : ''} ${activeTab === tab.id
                  ? "bg-[#B0B0B01F] text-black "
                  : "bg-transparent text-black hover:text-black "
                }`}
            >
              {/* Icon */}
              <span className={`leading-none ${activeTab === tab.id ? "text-black" : "text-gray-700"}`}>
                <IconComponent />
              </span>
              {/* Label */}
              <span className={`md:!text-[12px] !text-[10px]  
              !font-[400] font-[Inter] leading-tight 
              text-center ${activeTab === tab.id ? "text-black" : "text-gray-700"
                }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Presale Progress */}
      <div className="mb-[8px] px-[16px] py-[8px] bg-[#F5F5F5] rounded-[8px]"
      style={{
        border:"1px solid rgba(0, 0, 0, 0.10)"
      }}
      >
        <h2 className="heading-two md:!text-[32px] !leading-[100%] !text-center mb-2 !font-[500] 
        !font-[Helvetica Neue Medium Extended]">{presaleAmount}</h2>
       
        <div className="relative w-full bg-gray-200 rounded-full h-[10px] mb-3">
          <div
            className="bg-[#0080ED] h-3 rounded-full transition-all duration-300 relative"
            style={{ width: `${softcapPercentage}%` }}
          >
            {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gray-700"></div> */}
          </div>
        </div>
        <div className="flex justify-between p-[5px] !pb-0 items-center text-[14px] !border-l-[0px] !border-r-[0px]  !border-b-[0px] mb-1 border-[1px] border-[#D4D4D4]"
        >
           <div className="text-[10px] !font-[700] font-[Inter] text-[#7B7B7B]">
          {softcapPercentage}% of softcap raised
        </div>
        <div className="border-l-[1px] h-[10px] border-[#D4D4D4]"></div>
             <h5 className="text-[10px] !font-[700] !font-[Inter] text-[#7B7B7B] text-center">{holdersCount} Holders</h5>
        <div className="border-l-[1px] h-[10px] border-[#D4D4D4]"></div>

          <h5 className="text-[10px] !font-[700] !font-[Inter] text-[#7B7B7B]"> {softcapTarget}</h5>
        </div>
     
      </div>

      {/* Payment Options */}
      <div className="mb-[10px] ">
        {/* <div className="flex bg-[#F5F5F5] justify-center py-[6px] roundedd-[8px] items-center gap-2 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="18" viewBox="0 0 34 18" fill="none">
            <rect width="33.1579" height="18" rx="2.52907" fill="white" />
            <path d="M14.2318 5.37109L12.9877 12.6373H14.9775L16.2226 5.37109H14.2318ZM11.3193 5.37924L9.37045 10.3346L9.16267 9.58638C8.77833 8.68485 7.68722 7.39011 6.40625 6.57415L8.18825 12.6337L10.2937 12.6302L13.4273 5.37772L11.3193 5.37924Z" fill="black" />
            <path d="M8.39939 5.89906C8.28373 5.45645 7.94852 5.32453 7.53244 5.30874H4.44746L4.42188 5.45339C6.82261 6.03302 8.41116 7.42963 9.07033 9.10891L8.39939 5.89906ZM20.2475 6.76392C20.7579 6.75261 21.2651 6.84733 21.7368 7.04202L21.9164 7.12606L22.1856 5.55119C21.7915 5.40399 21.1738 5.24609 20.4031 5.24609C18.4368 5.24609 17.0509 6.23166 17.0402 7.64406C17.0274 8.68769 18.0274 9.27037 18.7828 9.61825C19.5581 9.97479 19.8181 10.2014 19.8145 10.5198C19.8084 11.0062 19.1963 11.2293 18.6247 11.2293C17.8278 11.2293 17.4046 11.1198 16.751 10.8488L16.4946 10.7327L16.2147 12.359C16.6804 12.5622 17.5397 12.7369 18.4317 12.7461C20.5233 12.7461 21.8826 11.7722 21.8969 10.2631C21.9056 9.43744 21.3749 8.80738 20.225 8.29041C19.529 7.95322 19.1032 7.72912 19.1073 7.38888C19.1073 7.08684 19.4686 6.76392 20.2475 6.76392ZM27.2921 5.37903H25.7547C25.2772 5.37903 24.922 5.5084 24.7122 5.98209L21.7577 12.6412H23.8473C23.8473 12.6412 24.1882 11.7458 24.2654 11.5497L26.8136 11.5527C26.8729 11.8064 27.0561 12.6412 27.0561 12.6412H28.9021L27.2921 5.37903ZM24.8381 10.0624C25.0019 9.64525 25.6309 8.03166 25.6309 8.03166C25.6201 8.05153 25.7931 7.61146 25.896 7.33794L26.03 7.96443L26.4911 10.0624H24.8381Z" fill="black" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 35 18" fill="none">
            <rect width="34.1053" height="18" rx="2.52907" fill="white" />
            <path d="M13.9757 15.166C10.6333 15.166 7.91406 12.5348 7.91406 9.30079C7.91406 6.06669 10.6333 3.43555 13.9757 3.43555C17.3182 3.43555 20.0374 6.06669 20.0374 9.30079C20.0374 12.5348 17.3182 15.166 13.9757 15.166Z" fill="#EE2C3C" />
            <path d="M21.2569 3.43555C19.2845 3.43555 17.5461 4.36578 16.4392 5.78165H18.8021C19.0869 6.14529 19.3403 6.53239 19.5318 6.95469H15.7105C15.537 7.33102 15.4058 7.72429 15.319 8.12774H19.9235C20.0022 8.50663 20.0447 8.8996 20.0447 9.30079H15.1953C15.1953 9.70196 15.2377 10.0949 15.3178 10.4738H19.9222C19.8355 10.8773 19.7041 11.2705 19.5306 11.6469H15.7093C15.9009 12.0692 16.1542 12.4562 16.4392 12.8199H18.8021C18.4641 13.2515 18.0664 13.636 17.62 13.9624C18.6631 14.7388 19.941 15.1617 21.2569 15.166C24.5994 15.166 27.3187 12.5348 27.3187 9.30079C27.3187 6.06669 24.5994 3.43555 21.2569 3.43555Z" fill="#F99D3C" />
          </svg>
          <div className=" ">
            <span className="!text-[14px] !font-[700] !font-[Inter]">CARD</span>
          </div>
        </div> */}
        <div className="grid grid-cols-3 gap-2">
          {paymentOptions.map((option, index) => {
            const isLastItem = index === paymentOptions.length - 1;
            const hasDropdown = isLastItem && option.networks && option.networks.length > 1;
            
            return (
              <div
                key={option.id}
                ref={(el) => (dropdownRefs.current[option.id] = el)}
                className="relative"
              >
                <button
                  onClick={() => {
                    if (option.id === "more") {
                      // Handle more options
                    } else if (hasDropdown) {
                      // Only update selected payment if this option is not already selected
                      if (!selectedPayment.includes(option.name)) {
                        setSelectedPayment(`${option.name} ${option.network}`);
                      }
                      // Toggle dropdown only for last item
                      setOpenDropdownId(openDropdownId === option.id ? null : option.id);
                    } else {
                      // For first and second items, just select the payment directly
                      setSelectedPayment(`${option.name} ${option.network}`);
                      setOpenDropdownId(null);
                    }
                  }}
                  className={`w-full flex items-center gap-2 px-2 py-1 
                    rounded-lg border transition-colors text-left min-h-[40px] ${
                      openDropdownId === option.id
                        ? "border-gray-300 bg-blue-50"
                        : selectedPayment.includes(option.name)
                        ? "border-gray-200 bg-white"
                        : "border-gray-200 bg-gray-50 hover:bg-gray-50"
                    }`}
                >
                  {/* Coin Icon */}
                  {option.id !== "more" && option.iconSrc && (
                    <img 
                      src={option.iconSrc} 
                      alt={option.name} 
                      className="md:w-6 md:h-6 w-4 h-4 flex-shrink-0"
                    />
                  )}

                  {/* Text Content */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="font-bold text-[12px] leading-[13px] md:text-[12px] text-gray-800 ">
                      {option.name}
                    </div>
                    <div className="md:text-[12px] text-[10px]  text-gray-500  leading-[13px]">
                      {selectedPayment.includes(option.name)
                        ? selectedPayment.split(" ").slice(1).join(" ") || option.network
                        : option.network
                      }
                    </div>
                  </div>

                  {/* Dropdown Arrow - Only show for last item */}
                  {hasDropdown && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="15" 
                      height="8" 
                      viewBox="0 0 15 8" 
                      fill="none"
                      className={`transition-transform duration-200 max-md:w-[10px] max-md:h-[8px] ${
                        openDropdownId === option.id ? "rotate-180" : ""
                      }`}
                    >
                      <path 
                        d="M14.3696 0.636719L8.71715 6.28921C8.0496 6.95676 6.95725 6.95676 6.2897 6.28921L0.637207 0.636719" 
                        stroke="black" 
                        strokeWidth="1.27411" 
                        strokeMiterlimit="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu - Only show for last item */}
                {hasDropdown && openDropdownId === option.id && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {option.networks.map((network) => {
                      // Check if this network matches the currently selected payment
                      const isCurrentlySelected = selectedPayment === `${option.name} ${network}`;
                      return (
                      <button
                        key={network}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedPayment(`${option.name} ${network}`);
                          setOpenDropdownId(null);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-1/2 text-left text-sm hover:bg-gray-50 transition-colors ${isCurrentlySelected
                            ? "bg-blue-50 text-[#0080ED] font-semibold"
                            : "text-gray-700"
                          }`}
                      >
                        {/* Coin Icon in Dropdown */}
                        {option.iconSrc && (
                          <img 
                            src={option.iconSrc} 
                            alt={option.name} 
                            className="w-6 h-6 flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0 text-left">
                          <div className="font-medium text-[12px] text-left">{option.name}</div>
                          <div className={`text-[10px] mt-0.5 text-left ${isCurrentlySelected
                              ? "text-[#0080ED]"
                              : "text-gray-500"
                            }`}>
                            {network}
                          </div>
                        </div>
                      </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Price Information */}
      <div className="bg-[#F7F7F7] rounded-[4px] border-[1px] border-[#D4D4D4] px-4 py-[5px] mb-[15px]">
        <div className="flex justify-center space-x-2 items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-black text-[12px] md:text-[12px] !font-[600]">Presale Price = </span>
            <span className="font-semibold text-[12px] md:text-[12px] font-bold text-[#0080ED]">{presalePrice}</span>
          </div>
          <div className="w-px h-4 bg-gray-800 !font-[600]"></div>
          <div className="flex items-center gap-2">
            <span className="text-black text-[12px] md:text-[12px] !font-[600]">Listing Price = </span>
            <span className="font-semibold text-[12px] md:text-[12px] font-bold text-[#0080ED]">{listingPrice}</span>
          </div>
        </div>
      </div>

      {/* Purchase Input Fields */}
      <div className="mb-[20px] space-y-[12px]">
        {/* You Pay Input */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-1">
            You Pay {selectedPaymentOption.name}
          </label>
          <div className="flex  md:h-[46px] items-center gap-0 border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
            <input
              type="text"
              value={youPayAmount}
              readOnly
              className="flex-1 text-[16px] font-[Inter] font-[500] max-w-[70%] !w-full  text-black bg-transparent border-none outline-none px-4 py-2.5"
            />
            <div className="flex items-center gap-2 px-3 py-2 w-[30%] border-l border-gray-200 bg-transparent">
              {/* Dynamic Payment Icon */}
              {selectedPaymentOption.iconSrc && (
                <img 
                  src={selectedPaymentOption.iconSrc} 
                  alt={selectedPaymentOption.name} 
                  className="md:w-8 md:h-8 w-5 h-5 flex-shrink-0"
                />
              )}
              <div className="flex flex-col">
                <span className="md:text-sm text-[12px] font-bold text-gray-800 leading-tight">{selectedPaymentOption.name}</span>
                <span className="md:text-xs text-[10px] text-gray-600 leading-tight">{selectedPaymentOption.network}</span>
              </div>
            </div>
          </div>
        </div>

        {/* You Receive Input */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-1">
            You Receive PREDICT +{" "}
            <Link to="" className="text-[#0080ED] underline">
              Bronze NFT
            </Link>
          </label>
          <div className="flex items-center gap-0 border border-gray-200 rounded-lg bg-gray-50 md:h-[46px] overflow-hidden">
            <input
              type="text"
              value={youReceiveAmount}
              readOnly
              className="flex-1 text-[16px] font-semibold max-w-[70%] text-black bg-transparent border-none outline-none px-4 py-2.5 "
            />
            <div className="flex items-center gap-2 px-2 py-3 w-[30%] border-l border-gray-200 bg-transparent">
              {/* PREDICT Icon - Square blue with 3x3 grid of white squares */}
              <div className="">
                <img src={prdicon} alt="" />
              </div>
              <div className="flex flex-col">
                <span className="md:text-sm text-[12px] font-bold text-gray-800 leading-tight">PREDICT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <button className="w-full  btn_primary text-white !py-[12px] !text-[18px]
       !rounded-[8px] font-medium  uppercase mb-4 hover:bg-[#0066cc] transition-colors">
        CONNECT WALLET
      </button>

      {/* Special Bonus */}
      <div className="text-center text-[12px] text-gray-600 bg-[#F2F2F2] p-[6px] rounded-[8px] border border-gray-100">
        <span className="font-semibold text-[#0080ED]">Special Bonus:</span> Get 20% more PREDICT tokens <br /> with the code{" "}
        <span className="font-semibold text-[#000]">{bonusCode}</span>{" "}
        (valid for a limited time only).
      </div>
        <div className="flex items-center justify-center gap-4 text-xs text-gray-600 mt-[15px]">
        <Link to="/bonus-code" className="flex items-center gap-1 hover:text-[#0080ED] transition-colors">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
  <path d="M11.7337 3.38023C11.1251 3.04883 10.307 2.81039 9.40625 2.69828V2.29688C9.40625 1.63406 8.88234 1.03359 7.92969 0.605391C7.06344 0.214922 5.91719 0 4.70312 0C3.48906 0 2.34281 0.214922 1.47656 0.605391C0.523906 1.03359 0 1.63406 0 2.29688V4.48438C0 5.14719 0.523906 5.74766 1.47656 6.17586C2.05023 6.43398 2.74586 6.61336 3.5 6.70797V7.10938C3.5 7.77219 4.02391 8.37266 4.97656 8.80086C5.84281 9.19133 6.98906 9.40625 8.20312 9.40625C9.41719 9.40625 10.5634 9.19133 11.4297 8.80086C12.3807 8.37266 12.9062 7.77219 12.9062 7.10938V4.92188C12.9062 4.33945 12.4901 3.79203 11.7337 3.38023ZM11.4198 3.95664C11.9552 4.24813 12.25 4.59375 12.25 4.92188C12.25 5.69789 10.588 6.5625 8.20312 6.5625C7.81532 6.56272 7.4279 6.53825 7.0432 6.48922C7.34635 6.40784 7.64274 6.30307 7.92969 6.17586C8.8807 5.74766 9.40625 5.14719 9.40625 4.48438V3.35945C10.1938 3.465 10.8992 3.67281 11.4198 3.95664ZM5.36812 6.10203C5.15375 6.1168 4.93062 6.125 4.70312 6.125C4.41328 6.125 4.13438 6.11188 3.8675 6.08836C3.86077 6.08773 3.854 6.08773 3.84727 6.08836C3.65148 6.07031 3.46445 6.04625 3.28125 6.01727V4.49094C3.75206 4.55991 4.22729 4.59428 4.70312 4.59375C5.17896 4.59428 5.65419 4.55991 6.125 4.49094V6.01562C5.88766 6.05336 5.63773 6.08234 5.37633 6.10094L5.36812 6.10203ZM8.75 3.49398V4.48438C8.75 5.00609 7.99805 5.56719 6.78125 5.87945V4.3668C7.17533 4.27783 7.55992 4.1511 7.92969 3.98836C8.22381 3.86062 8.49966 3.69438 8.75 3.49398ZM4.70312 0.65625C7.08805 0.65625 8.75 1.52086 8.75 2.29688C8.75 3.07289 7.08805 3.9375 4.70312 3.9375C2.3182 3.9375 0.65625 3.07289 0.65625 2.29688C0.65625 1.52086 2.3182 0.65625 4.70312 0.65625ZM0.65625 4.48438V3.49398C0.906712 3.69361 1.18256 3.85912 1.47656 3.98617C1.84633 4.14891 2.23092 4.27564 2.625 4.36461V5.87727C1.4082 5.56719 0.65625 5.00609 0.65625 4.48438ZM4.15625 7.10938V6.76594C4.33672 6.77578 4.51883 6.78125 4.70312 6.78125C4.91859 6.78125 5.13115 6.77451 5.34078 6.76102C5.59728 6.85359 5.85917 6.93047 6.125 6.99125V8.50445C4.9082 8.19219 4.15625 7.63109 4.15625 7.10938ZM6.78125 8.64062V7.11484C7.25203 7.18419 7.72726 7.21891 8.20312 7.21875C8.67896 7.21928 9.15419 7.18491 9.625 7.11594V8.64062C8.68269 8.78646 7.72356 8.78646 6.78125 8.64062ZM10.2812 8.50445V6.9918C10.6753 6.90283 11.0599 6.7761 11.4297 6.61336C11.7237 6.4863 11.9995 6.3208 12.25 6.12117V7.10938C12.25 7.63109 11.498 8.19219 10.2812 8.50445Z" fill="black"/>
</svg></span>
          <span className="text-[12px] text-[#000] underline font-[Inter]">Bonus Code</span>
        </Link>
        <Link to="/#how-to-buy" className="flex items-center gap-1 hover:text-[#0080ED] transition-colors">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
  <path d="M12.5962 6.40172C12.4334 6.27646 12.2439 6.19043 12.0424 6.15031C11.841 6.11019 11.633 6.11706 11.4346 6.17039L9.14648 6.69649C9.19972 6.47161 9.20136 6.23759 9.15129 6.01199C9.10122 5.78638 9.00074 5.57504 8.85738 5.39379C8.71401 5.21254 8.53148 5.0661 8.32346 4.96543C8.11545 4.86476 7.88734 4.81248 7.65625 4.8125H4.91859C4.68869 4.81192 4.46094 4.85691 4.24853 4.94486C4.03611 5.03282 3.84322 5.16199 3.68102 5.32492L2.44398 6.5625H0.875C0.642936 6.5625 0.420376 6.65469 0.256282 6.81878C0.0921872 6.98288 0 7.20544 0 7.4375L0 9.625C0 9.85707 0.0921872 10.0796 0.256282 10.2437C0.420376 10.4078 0.642936 10.5 0.875 10.5H6.5625C6.59827 10.5 6.6339 10.4956 6.66859 10.4869L10.1686 9.61188C10.1909 9.60655 10.2127 9.59923 10.2337 9.59L12.3594 8.68547L12.3834 8.67453C12.5877 8.57245 12.7627 8.42003 12.8918 8.23165C13.0209 8.04327 13.0999 7.82512 13.1214 7.59775C13.1429 7.37038 13.1062 7.14128 13.0147 6.93204C12.9232 6.72279 12.7799 6.54029 12.5984 6.40172H12.5962ZM0.875 7.4375H2.1875V9.625H0.875V7.4375ZM12.0001 7.88649L9.92195 8.77133L6.50781 9.625H3.0625V7.18102L4.30008 5.94399C4.38103 5.86238 4.47741 5.79768 4.58359 5.75365C4.68977 5.70962 4.80365 5.68713 4.91859 5.6875H7.65625C7.8303 5.6875 7.99722 5.75664 8.12029 5.87971C8.24336 6.00278 8.3125 6.1697 8.3125 6.34375C8.3125 6.5178 8.24336 6.68472 8.12029 6.80779C7.99722 6.93086 7.8303 7 7.65625 7H6.125C6.00897 7 5.89769 7.04609 5.81564 7.12814C5.73359 7.21019 5.6875 7.32147 5.6875 7.4375C5.6875 7.55353 5.73359 7.66481 5.81564 7.74686C5.89769 7.82891 6.00897 7.875 6.125 7.875H7.875C7.90793 7.87492 7.94075 7.87125 7.97289 7.86406L11.637 7.02133L11.6539 7.01695C11.7658 6.9859 11.8851 6.99731 11.9891 7.04899C12.093 7.10067 12.1742 7.18896 12.217 7.29688C12.2597 7.4048 12.2611 7.52472 12.2207 7.63357C12.1804 7.74242 12.1012 7.8325 11.9984 7.88649H12.0001ZM8.96875 3.9375C9.07684 3.93762 9.18476 3.92884 9.29141 3.91125C9.41136 4.26756 9.63084 4.58208 9.92388 4.81761C10.2169 5.05314 10.5713 5.19984 10.9451 5.24036C11.3188 5.28089 11.6964 5.21354 12.0331 5.04628C12.3698 4.87902 12.6516 4.61885 12.8451 4.29653C13.0387 3.9742 13.1359 3.6032 13.1252 3.22738C13.1146 2.85157 12.9966 2.48666 12.7851 2.1758C12.5736 1.86493 12.2776 1.62111 11.932 1.47317C11.5863 1.32522 11.2056 1.27934 10.8347 1.34094C10.7192 0.997635 10.5112 0.692852 10.2336 0.460129C9.95609 0.227406 9.61971 0.0757657 9.26152 0.0218958C8.90334 -0.031974 8.53723 0.0140149 8.2035 0.154802C7.86977 0.295588 7.58134 0.525715 7.36997 0.819856C7.15859 1.114 7.03246 1.46075 7.00545 1.82196C6.97845 2.18316 7.05161 2.54482 7.21689 2.86712C7.38217 3.18942 7.63317 3.45988 7.94226 3.64873C8.25134 3.83759 8.60654 3.93751 8.96875 3.9375ZM12.25 3.28125C12.25 3.49757 12.1859 3.70904 12.0657 3.88891C11.9455 4.06877 11.7747 4.20896 11.5748 4.29174C11.375 4.37453 11.155 4.39619 10.9429 4.35398C10.7307 4.31178 10.5358 4.20761 10.3829 4.05465C10.2299 3.90169 10.1257 3.7068 10.0835 3.49463C10.0413 3.28246 10.063 3.06255 10.1458 2.86269C10.2285 2.66283 10.3687 2.49201 10.5486 2.37183C10.7285 2.25165 10.9399 2.1875 11.1562 2.1875C11.4463 2.1875 11.7245 2.30273 11.9296 2.50785C12.1348 2.71297 12.25 2.99117 12.25 3.28125ZM8.96875 0.875001C9.20735 0.87512 9.43937 0.953262 9.62944 1.09751C9.8195 1.24176 9.95718 1.44421 10.0215 1.67399C9.79741 1.83165 9.60872 2.03434 9.46746 2.2691C9.32621 2.50386 9.23551 2.76552 9.20117 3.03734C9.12479 3.05385 9.04689 3.06228 8.96875 3.0625C8.67867 3.0625 8.40047 2.94727 8.19535 2.74215C7.99023 2.53703 7.875 2.25883 7.875 1.96875C7.875 1.67867 7.99023 1.40047 8.19535 1.19535C8.40047 0.990235 8.67867 0.875001 8.96875 0.875001Z" fill="black"/>
</svg></span>
          <span className="text-[12px] text-[#000] underline font-[Inter]">How to Buy</span>
        </Link>
      
      </div>

      {/* Personal Dashboard Modal */}
      {isDashboardModalOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsDashboardModalOpen(false);
            }
          }}
        >
           
       <div className="relative mt-34">
       <div className="absolute top-[-40px] w-full rounded-t-[15px] 
              flex items-center justify-between z-10">
            <div className="w-[90%] mx-auto flex justify-center">
            <p className="text-[#fff] bg-[#0080ED] -mb-6 -mr-8 !text-[16px] py-[8px] px-[12px]
            md:text-[20px] font-bold font-[Inter] rounded-[8px]">
                Personal Dashboard
              </p>
            </div>
              <button
                onClick={() => setIsDashboardModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#B9E6FE] hover:bg-[#A8DFFE] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-[#0080ED]" />
              </button>
            </div>
       <div 
            className="relative w-full max-w-[700px]  max-h-[600px] h-[70vh]  bg-[#E5F5FF] rounded-[15px] border border-[#B9E6FE] shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
          
            {/* Content */}
            <div className="p-6 space-y-4 ">
              {/* Wallet Address */}
              <div className="flex items-center bg-[#fff] p-2 rounded-[8px] flex-col">
                <p className="text-[14px] md:text-[16px] text-[#000] font-[600] mb-1 font-[Inter]">Your Wallet Address:</p>
                <p className="text-[14px] md:text-[16px] text-[#000] font-[600]  font-[Inter]">
                  0xA1f3bC9827D4Ef...8C7F7eAf
                </p>
              </div>

              {/* Total Value on Launch */}
              <div className="flex items-center bg-[#fff] p-2 rounded-[8px] flex-col">
                <p className="text-[14px] md:text-[16px] text-[#000] font-[600] mb-1 font-[Inter]">Total Value on Launch</p>
                <h2 className="text-[32px] md:text-[40px] font-bold text-[#0080ED]
                 mb-1 font-[Inter]">$1,400</h2>
                <div className="flex items-center gap-4 ">
                  <span className="text-[12px] md:text-[14px] text-gray-600 font-[Inter]">Bought for $500</span>
                  <span className="text-[12px] md:text-[14px] text-green-600 font-semibold font-[Inter]">+$900</span>
                </div>
              </div>

              {/* PREDICT Listing Price */}
              <div className="flex justify-center rounded-[8px] bg-[#fff] p-2 pt-4">
                <p className="text-[14px] md:text-[16px] font-[600] text-[#000] font-[Inter]">
                  $PREDICT Listing Price = <span className="font-[600] text-[#000]">$0.03</span>
                </p>
              </div>

              {/* Two Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Token Holdings */}
                <div className="space-y-3">
                  <div className="py-[8px] px-[16px] bg-[#fff] rounded-[8px]">
                    {[
                      { 
                        label: "P PREDICT Token", 
                        value: "100,000", 
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
  <path d="M5.45703 0.428686C5.45703 0.191929 5.64896 0 5.88572 0H7.82228V1.75462C7.82228 1.99138 7.63036 2.18331 7.3936 2.18331H5.45703V0.428686Z" fill="white"/>
  <path d="M2.72656 0.428686C2.72656 0.191929 2.91849 0 3.15525 0H5.09182V1.75462C5.09182 1.99138 4.89989 2.18331 4.66313 2.18331H2.72656V0.428686Z" fill="white"/>
  <path d="M5.45703 2.97751C5.45703 2.74076 5.64896 2.54883 5.88572 2.54883H7.82228V4.30345C7.82228 4.54021 7.63036 4.73214 7.3936 4.73214H5.45703V2.97751Z" fill="white"/>
  <path d="M2.72656 5.52439C2.72656 5.28763 2.91849 5.0957 3.15525 5.0957H5.09182V6.85033C5.09182 7.08708 4.89989 7.27901 4.66313 7.27901H2.72656V5.52439Z" fill="white"/>
  <path d="M0 0.428686C0 0.191929 0.191929 0 0.428686 0H2.36525V1.75462C2.36525 1.99138 2.17332 2.18331 1.93657 2.18331H0V0.428686Z" fill="white"/>
  <path d="M0 2.97751C0 2.74076 0.191929 2.54883 0.428686 2.54883H2.36525V4.30345C2.36525 4.54021 2.17332 4.73214 1.93657 4.73214H0V2.97751Z" fill="white"/>
  <path d="M0 8.07126C0 7.83451 0.191929 7.64258 0.428686 7.64258H2.36525V9.3972C2.36525 9.63396 2.17332 9.82589 1.93657 9.82589H0V8.07126Z" fill="white"/>
  <path d="M0 5.52439C0 5.28763 0.191929 5.0957 0.428686 5.0957H2.36525V6.85033C2.36525 7.08708 2.17332 7.27901 1.93657 7.27901H0V5.52439Z" fill="white"/>
</svg>
                        )
                      },
                      { 
                        label: "Bonus PREDICT", 
                        value: "20,000", 
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_bonus_predict)">
                              <path d="M12.674 0.916016V3.58268M11.3407 2.24935H14.0073M14.166 12.416V15.0827M12.8327 13.7493H15.4993M7.16667 0.916016C7.15 5.10335 9.186 7.47868 13.8333 7.58268C9.52333 7.56602 7.38533 9.87668 7.16667 14.2493C7.12467 10.1247 5.28133 7.57668 0.5 7.58268C4.77733 7.52268 7.15 5.45802 7.16667 0.916016Z" stroke="#0080ED" strokeLinecap="round" strokeLinejoin="round"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_bonus_predict">
                                <rect width="16" height="16" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        )
                      },
                      { 
                        label: "Membership Bonus", 
                        value: "21,200", 
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.33333 9.66732C7.33333 10.5873 8.826 11.334 10.6667 11.334C12.5073 11.334 14 10.5873 14 9.66732M2 6.33398C2 7.25398 3.49267 8.00065 5.33333 8.00065C6.084 8.00065 6.77667 7.87665 7.33333 7.66732M2 8.66732C2 9.58732 3.49267 10.334 5.33333 10.334C6.084 10.334 6.776 10.21 7.33333 10.0007M10.6667 8.66732C8.826 8.66732 7.33333 7.92065 7.33333 7.00065C7.33333 6.08065 8.826 5.33398 10.6667 5.33398C12.5073 5.33398 14 6.08065 14 7.00065C14 7.92065 12.5073 8.66732 10.6667 8.66732Z" stroke="#0080ED" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 3.66602V10.9993C2 11.9193 3.49267 12.666 5.33333 12.666C6.084 12.666 6.776 12.542 7.33333 12.3327M7.33333 12.3327V6.99935M7.33333 12.3327C7.33333 13.2527 8.826 13.9993 10.6667 13.9993C12.5073 13.9993 14 13.2527 14 12.3327V6.99935M8.66667 5.66602V3.66602" stroke="#0080ED" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.33333 5.33333C3.49267 5.33333 2 4.58667 2 3.66667C2 2.74667 3.49267 2 5.33333 2C7.174 2 8.66667 2.74667 8.66667 3.66667C8.66667 4.58667 7.174 5.33333 5.33333 5.33333Z" stroke="#0080ED" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )
                      },
                      { 
                        label: "Staking Rewards", 
                        value: "200", 
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99891 14V8M7.99891 4.66667H5.29891C3.45224 4.66667 3.33891 2 5.29891 2C7.39891 2 7.99891 4.66667 7.99891 4.66667ZM7.99891 4.66667H10.6989C12.6296 4.66667 12.6296 2 10.6989 2C8.59891 2 7.99891 4.66667 7.99891 4.66667Z" stroke="#0080ED" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.3333 7.99935V12.666C13.3333 13.0196 13.1929 13.3588 12.9428 13.6088C12.6928 13.8589 12.3536 13.9993 12 13.9993H4C3.64638 13.9993 3.30724 13.8589 3.05719 13.6088C2.80714 13.3588 2.66667 13.0196 2.66667 12.666V7.99935M14 7.99935V5.99935C14 5.64573 13.8595 5.30659 13.6095 5.05654C13.3594 4.80649 13.0203 4.66602 12.6667 4.66602H3.33333C2.97971 4.66602 2.64057 4.80649 2.39052 5.05654C2.14048 5.30659 2 5.64573 2 5.99935V7.99935H14Z" stroke="#0080ED" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )
                      },
                      { 
                        label: "Platform Credits", 
                        value: "100", 
                        icon: (
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_platform_credits)">
                              <path d="M16 3V13H1V11H0V2H14V3H16ZM12 3C12 3.14062 12.026 3.27083 12.0781 3.39062C12.1302 3.51042 12.2005 3.61458 12.2891 3.70312C12.3776 3.79167 12.4844 3.86458 12.6094 3.92188C12.7344 3.97917 12.8646 4.00521 13 4V3H12ZM1 4C1.14062 4 1.27083 3.97396 1.39062 3.92188C1.51042 3.86979 1.61458 3.79948 1.70312 3.71094C1.79167 3.6224 1.86458 3.51562 1.92188 3.39062C1.97917 3.26562 2.00521 3.13542 2 3H1V4ZM1 8C1.27604 8 1.53385 8.05208 1.77344 8.15625C2.01302 8.26042 2.22656 8.40365 2.41406 8.58594C2.60156 8.76823 2.74479 8.97917 2.84375 9.21875C2.94271 9.45833 2.99479 9.71875 3 10H11C11 9.72396 11.0521 9.46615 11.1562 9.22656C11.2604 8.98698 11.4036 8.77344 11.5859 8.58594C11.7682 8.39844 11.9792 8.25521 12.2188 8.15625C12.4583 8.05729 12.7188 8.00521 13 8V5C12.724 5 12.4661 4.94792 12.2266 4.84375C11.987 4.73958 11.7734 4.59635 11.5859 4.41406C11.3984 4.23177 11.2552 4.02083 11.1562 3.78125C11.0573 3.54167 11.0052 3.28125 11 3H3C3 3.27604 2.94792 3.53385 2.84375 3.77344C2.73958 4.01302 2.59635 4.22656 2.41406 4.41406C2.23177 4.60156 2.02083 4.74479 1.78125 4.84375C1.54167 4.94271 1.28125 4.99479 1 5V8ZM13 9C12.8594 9 12.7292 9.02604 12.6094 9.07812C12.4896 9.13021 12.3854 9.20052 12.2969 9.28906C12.2083 9.3776 12.1354 9.48438 12.0781 9.60938C12.0208 9.73438 11.9948 9.86458 12 10H13V9ZM1 10H2C2 9.85938 1.97396 9.72917 1.92188 9.60938C1.86979 9.48958 1.79948 9.38542 1.71094 9.29688C1.6224 9.20833 1.51562 9.13542 1.39062 9.07812C1.26562 9.02083 1.13542 8.99479 1 9V10ZM15 4H14V11H2V12H15V4ZM3.5 7C3.36458 7 3.2474 6.95052 3.14844 6.85156C3.04948 6.7526 3 6.63542 3 6.5C3 6.36458 3.04948 6.2474 3.14844 6.14844C3.2474 6.04948 3.36458 6 3.5 6C3.63542 6 3.7526 6.04948 3.85156 6.14844C3.95052 6.2474 4 6.36458 4 6.5C4 6.63542 3.95052 6.7526 3.85156 6.85156C3.7526 6.95052 3.63542 7 3.5 7ZM10.5 7C10.3646 7 10.2474 6.95052 10.1484 6.85156C10.0495 6.7526 10 6.63542 10 6.5C10 6.36458 10.0495 6.2474 10.1484 6.14844C10.2474 6.04948 10.3646 6 10.5 6C10.6354 6 10.7526 6.04948 10.8516 6.14844C10.9505 6.2474 11 6.36458 11 6.5C11 6.63542 10.9505 6.7526 10.8516 6.85156C10.7526 6.95052 10.6354 7 10.5 7ZM7 9C6.72396 9 6.46615 8.94792 6.22656 8.84375C5.98698 8.73958 5.77344 8.59635 5.58594 8.41406C5.39844 8.23177 5.25521 8.02083 5.15625 7.78125C5.05729 7.54167 5.00521 7.28125 5 7V6C5 5.72396 5.05208 5.46615 5.15625 5.22656C5.26042 4.98698 5.40365 4.77344 5.58594 4.58594C5.76823 4.39844 5.97917 4.25521 6.21875 4.15625C6.45833 4.05729 6.71875 4.00521 7 4C7.27604 4 7.53385 4.05208 7.77344 4.15625C8.01302 4.26042 8.22656 4.40365 8.41406 4.58594C8.60156 4.76823 8.74479 4.97917 8.84375 5.21875C8.94271 5.45833 8.99479 5.71875 9 6V7C9 7.27604 8.94792 7.53385 8.84375 7.77344C8.73958 8.01302 8.59635 8.22656 8.41406 8.41406C8.23177 8.60156 8.02083 8.74479 7.78125 8.84375C7.54167 8.94271 7.28125 8.99479 7 9ZM6 7C6 7.14062 6.02604 7.27083 6.07812 7.39062C6.13021 7.51042 6.20052 7.61458 6.28906 7.70312C6.3776 7.79167 6.48438 7.86458 6.60938 7.92188C6.73438 7.97917 6.86458 8.00521 7 8C7.14062 8 7.27083 7.97396 7.39062 7.92188C7.51042 7.86979 7.61458 7.79948 7.70312 7.71094C7.79167 7.6224 7.86458 7.51562 7.92188 7.39062C7.97917 7.26562 8.00521 7.13542 8 7V6C8 5.85938 7.97396 5.72917 7.92188 5.60938C7.86979 5.48958 7.79948 5.38542 7.71094 5.29688C7.6224 5.20833 7.51562 5.13542 7.39062 5.07812C7.26562 5.02083 7.13542 4.99479 7 5C6.85938 5 6.72917 5.02604 6.60938 5.07812C6.48958 5.13021 6.38542 5.20052 6.29688 5.28906C6.20833 5.3776 6.13542 5.48438 6.07812 5.60938C6.02083 5.73438 5.99479 5.86458 6 6V7Z" fill="#0080ED"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_platform_credits">
                                <rect width="16" height="16" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                        )
                      },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-[13px] border-b border-gray-100 last:border-b-0">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 flex-shrink-0 flex items-center justify-center rounded ${index === 0 ? 'bg-[#0080ED] p-1' : ''}`}>
                            {item.icon}
                          </div>
                          <span className="text-[12px] text-[#000] font-[Inter]">{item.label}</span>
                        </div>
                        <span className="text-[12px] font-semibold text-[#000] font-[Inter]">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center">
                  <div  className="w-full flex items-center bg-[#fff] rounded-[8px] px-2 py-[20px] justify-between
                   py-2 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                          <span className="">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.6654 8.00065H1.33203M7.9987 1.33398V14.6673M8.66536 8.00065C8.66536 8.7079 8.94632 9.38617 9.44641 9.88627C9.94651 10.3864 10.6248 10.6673 11.332 10.6673M7.33203 8.00065C7.33203 8.7079 7.05108 9.38617 6.55098 9.88627C6.05089 10.3864 5.37261 10.6673 4.66536 10.6673" stroke="#0080ED" stroke-linecap="round"/>
  <path d="M7.99789 6.69162C7.99827 6.20891 8.15982 5.74016 8.45692 5.35972C8.75403 4.97928 9.16966 4.70895 9.63789 4.59162C10.7066 4.32495 11.6752 5.29295 11.4079 6.36228C11.2906 6.83051 11.0202 7.24615 10.6398 7.54325C10.2594 7.84035 9.79059 8.00191 9.30789 8.00228H7.99789M7.99789 6.69162V8.00228M7.99789 6.69162C7.99752 6.20891 7.83596 5.74016 7.53886 5.35972C7.24175 4.97928 6.82612 4.70895 6.35789 4.59162C5.28922 4.32495 4.32056 5.29295 4.58789 6.36228C4.70522 6.83051 4.97556 7.24615 5.35599 7.54325C5.73643 7.84035 6.20519 8.00191 6.68789 8.00228H7.99789" stroke="#0080ED"/>
  <path d="M1.33203 8.00065C1.33203 4.85798 1.33203 3.28665 2.30803 2.30998C3.28536 1.33398 4.85603 1.33398 7.9987 1.33398C11.1414 1.33398 12.7127 1.33398 13.6887 2.30998C14.6654 3.28732 14.6654 4.85798 14.6654 8.00065C14.6654 11.1433 14.6654 12.7147 13.6887 13.6907C12.7134 14.6673 11.1414 14.6673 7.9987 14.6673C4.85603 14.6673 3.2847 14.6673 2.30803 13.6907C1.33203 12.7153 1.33203 11.1433 1.33203 8.00065Z" stroke="#0080ED"/>
</svg>
                          </span>
                          <span className="text-[16px]  text-[#000] font-[Inter]">Referral Bonus</span>
                        </div>
                        <span className="text-[16px]  font-semibold text-[#000] font-[Inter]">
                          -</span>
                      </div>
                  </div>
                </div>

                {/* Right Column - Membership NFT */}
                <div className="space-y-3">
                  
                  {/* NFT Card Carousel */}
                  <div className="relative bg-white rounded-[8px] py-2 px-4">
                  <p className="text-[14px] md:text-[16px] font-bold text-center text-black
                   mb-3 font-[Inter]">Your Membership NFT</p>
                    <Carousel
                      setApi={setNftCarouselApi}
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-0">
                        {membershipCards.map((card, index) => {
                          const sortedCards = [...membershipCards].sort((a, b) => a.minAmount - b.minAmount);
                          const currentIndex = sortedCards.findIndex(c => c.id === card.id);
                          const nextCard = sortedCards[currentIndex + 1];
                          const progressTotal = nextCard ? nextCard.minAmount : card.minAmount;
                          // Calculate progress based on slider value
                          const progressPercentage = nextCard 
                            ? Math.max(0, Math.min(100, ((sliderValueState - card.minAmount) / (nextCard.minAmount - card.minAmount)) * 100))
                            : 100;
                          const remaining = nextCard ? Math.max(0, nextCard.minAmount - sliderValueState) : 0;

                          return (
                            <CarouselItem key={card.id} className="basis-full pl-0">
                              <div className="space-y-3">
                                {/* NFT Card */}
                                {card.cardImage ? (
                                  <div className="rounded-[12px] ">
                                    <img
                                      src={card.cardImage}
                                      alt={`${card.tier} membership`}
                                      className="w-full h-auto !rounded-[18px] max-h-[150px] object-contain"
                                      onError={(e) => {
                                        e.target.style.display = "none";
                                      }}
                                    />
                                  </div>
                                ) : (
                                  <div 
                                    className="rounded-[12px] p-4 border border-gray-700 relative overflow-hidden"
                                    style={{
                                      background: card.backgroundGradient || card.nftBackgroundGradient || "linear-gradient(to bottom right, #1a1a1a, #2d2d2d)",
                                    }}
                                  >
                                    <div className="flex items-start justify-between mb-3">
                                      <div>
                                        <p className="text-[10px] text-gray-300 font-[Inter] mb-1">P PredictMarkets</p>
                                        <p className="text-[18px] md:text-[20px] font-bold text-white font-[Inter]">{card.tier} Member</p>
                                      </div>
                                      <div 
                                        className="w-12 h-12 rounded-full flex items-center justify-center"
                                        style={{
                                          background: card.tier === "Bronze" 
                                            ? "linear-gradient(to bottom right, #d69e2e, #f6ad55)"
                                            : card.tier === "Silver"
                                            ? "linear-gradient(to bottom right, #a0aec0, #cbd5e0)"
                                            : card.tier === "Gold"
                                            ? "linear-gradient(to bottom right, #f6e05e, #fbd38d)"
                                            : card.tier === "Diamond"
                                            ? "linear-gradient(to bottom right, #63b3ed, #90cdf4)"
                                            : "linear-gradient(to bottom right, #9f7aea, #b794f4)"
                                        }}
                                      >
                                        <span className="text-white font-bold text-[20px]">P</span>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Tags */}
                                <div className="flex justify-centewr  items-center   gap-2 mt-3">
                                  <span className="px-3 py-1 bg-[#0080ED] w-[100%] text-white 
                                  text-[10px] md:text-[12px] text-center rounded-[8px] font-[Inter]">
                                    Early Access
                                  </span>
                                  <span className="w-[100%] px-3 py-1 bg-white border
                                   border-[#0080ED] text-[#0080ED] text-[10px] md:text-[12px]
                                    text-center rounded-[8px] font-[Inter]">
                                    {card.tier === "Bronze" ? "10%" : card.tier === "Silver" ? "15%" : card.tier === "Gold" ? "20%" : "25%"} Bonus Tokens
                                  </span>
                                </div>

                                {/* Progress to Next Level - Inside Carousel */}
                                {/* <div className="mt-4 p-3 bg-gray-50 rounded-[8px] border border-gray-200">
                                  <p className="text-[11px] md:text-[12px] text-gray-600 font-[Inter]">
                                    {remaining > 0
                                      ? `${formatCurrency(remaining)} left to reach the next NFT level`
                                      : nextCard
                                      ? "You've reached the next level!"
                                      : "You've reached the maximum level!"}
                                  </p>
                                  <div className="mt-2">
                                    <p className="text-[14px] md:text-[16px] font-bold text-[#0080ED] font-[Inter]">{formatCurrency(progressTotal)}</p>
                                    {remaining > 0 && (
                                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                          className="bg-[#0080ED] h-2 rounded-full transition-all duration-300"
                                          style={{ width: `${progressPercentage}%` }}
                                        ></div>
                                      </div>
                                    )}
                                  </div>
                                </div> */}
                              </div>
                            </CarouselItem>
                          );
                        })}
                      </CarouselContent>
                    </Carousel>

                    {/* Slider Below Carousel */}
                  </div>
                    <div className="mt-[12px] bg-[#fff] p-2 rounded-[8px] space-y-3">
                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#000] !font-[600] text-[12px] md:text-[14px] font-[Inter]">
                          How much do you want to spend?
                        </p>
                        <p className="text-[#0080ED] !font-[600] text-[12px] md:text-[14px] text-right font-[Inter]">
                          {formatCurrency(sliderValueState)}
                        </p>
                      </div>
                      <div className="relative w-full">
                        {/* Slider Track */}
                        <div className="relative w-full h-[12.347px] 
                        bg-gray-200 border border-gray-300 rounded-[76.444px] overflow-hidden">
                          {/* Filled Portion */}
                          <div
                            className="absolute left-0 h-[13px] top-0 h-full bg-[#0080ED]
                             rounded-bl-[76.444px] rounded-tl-[76.444px]"
                            style={{ width: `${sliderPercentage}%` }}
                          />
                        </div>
                        {/* Slider Thumb */}
                        <input
                          type="range"
                          min={sliderMin}
                          max={sliderMax}
                          value={sliderValueState}
                          onChange={handleSliderChange}
                          className="absolute top-1/2 -translate-y-1/2 w-full h-[10.578px] appearance-none bg-transparent cursor-pointer z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-[5.644px] [&::-webkit-slider-thumb]:h-[30.578px] [&::-webkit-slider-thumb]:bg-[#0080ED] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-[5.644px] [&::-moz-range-thumb]:h-[30.578px] [&::-moz-range-thumb]:bg-[#0080ED] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
                          style={{ left: 0 }}
                        />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 bg-[#0080ED] 
                          rounded-full w-[5.644px] h-[10.578px] pointer-events-none z-20"
                          style={{ left: `calc(${sliderPercentage}% - 2.822px)` }}
                        />
                      </div>
                    </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <button className="flex items-center justify-center gap-2 bg-[#0080ED] text-white px-6 py-3 rounded-[8px] font-semibold text-[14px] md:text-[16px] hover:bg-[#0066cc] transition-colors font-[Inter]">
                  <Copy className="w-4 h-4" />
                  Copy 10% Referral Link
                </button>
                <button className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-[8px] font-semibold text-[14px] md:text-[16px] hover:bg-gray-300 transition-colors font-[Inter]">
                  <LogOut className="w-4 h-4" />
                  Disconnect
                </button>
              </div>
            </div>
          </div>
       </div>
        </div>
      )}
    </div>
  );
}

