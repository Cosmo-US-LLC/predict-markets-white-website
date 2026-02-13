import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function PresaleDashboard({
  presaleAmount = "$11,756,398.80",
  softcapPercentage = 80,
  softcapTarget = "$12,000,000",
  holdersCount = "12,394",
  presalePrice = "$0.1",
  listingPrice = "$0.03",
  youPayAmount = "21,276",
  youReceiveAmount = "100,000",
  bonusCode = "PRE20",
}) {
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedPayment, setSelectedPayment] = useState("USDT ERC-20");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const dropdownRefs = useRef({});

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
    { id: "stake", label: "Stake", icon: StakeIcon },
    { id: "history", label: "History", icon: HistoryIcon },
  ];

  const paymentOptions = [
    {
      id: "eth",
      name: "ETH",
      network: "ERC-20",
      iconBg: "bg-blue-500",
      iconText: "Ξ",
      selected: false,
      networks: ["ERC-20", "BEP-20"]
    },
    {
      id: "bnb",
      name: "BNB",
      network: "BEP-20",
      iconBg: "bg-yellow-500",
      iconText: "BNB",
      selected: false,
      networks: ["BEP-20", "ERC-20"]
    },
    {
      id: "usdt",
      name: "USDT",
      network: "ERC-20",
      iconBg: "bg-teal-500",
      iconText: "T",
      selected: true,
      networks: ["ERC-20", "BEP-20", "TRC-20"]
    },
    {
      id: "usdc",
      name: "USDC",
      network: "ERC-20",
      iconBg: "bg-blue-600",
      iconText: "C",
      selected: false,
      networks: ["ERC-20", "BEP-20"]
    },
    {
      id: "sol",
      name: "SOL",
      network: "SOLANA",
      iconBg: "bg-black",
      iconText: "S",
      selected: false,
      networks: ["SOLANA", "SPL", "Wrapped SOL"]
    },
    {
      id: "more",
      name: "More",
      network: "",
      iconBg: "",
      iconText: "",
      selected: false,
      networks: []
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.keys(dropdownRefs.current).forEach((key) => {
        const ref = dropdownRefs.current[key];
        if (ref && !ref.contains(event.target)) {
          setOpenDropdownId(null);
        }
      });
    };

    if (openDropdownId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdownId]);

  return (
    <div className="relative w-full max-w-[100%] mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
      {/* Step 1: Presale Live Banner - Positioned at top of card with relative positioning */}
      <div className="relative flex items-center justify-center mb-4 -mt-10">
        <div className="bg-[#0080ED] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase flex items-center gap-2">
          {/* Bullet point: white circle with blue dot inside */}
          <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <div className="w-1 h-1 bg-[#0080ED] rounded-full"></div>
          </div>
          <span>PRESALE IS LIVE</span>
        </div>
      </div>

      {/* Step 2: Navigation Tabs - Parent container with border */}
      <div className="flex items-center justify-center gap-1 mb-6 p-1 border  border-gray-800 
      rounded-[100px] ">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-1.5 px-2 py-2.5 !text-black 
                !text-[12px] font-[Inter] rounded-[100px] transition-all duration-200 min-w-[70px] flex-1 ${activeTab === tab.id
                  ? "bg-gray-50 text-black shadow-sm "
                  : "bg-transparent text-black hover:text-black "
                }`}
            >
              {/* Icon */}
              <span className={`leading-none ${activeTab === tab.id ? "text-black" : "text-gray-700"}`}>
                <IconComponent />
              </span>
              {/* Label */}
              <span className={`text-[10px] font-medium leading-tight text-center ${activeTab === tab.id ? "text-black" : "text-gray-700"
                }`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Presale Progress */}
      <div className="mb-4 px-[16px] pt-[20px] pb-[10px] bg-[#F5F5F5] rounded-[8px]">
        <div className="heading-two !text-center !font-[600] mb-2">{presaleAmount}</div>
        <div className="text-[14px] text-[#7B7B7B] mb-2">
          {softcapPercentage}% of softcap raised
        </div>
        <div className="relative w-full bg-gray-200 rounded-full h-3 mb-3">
          <div
            className="bg-[#0080ED] h-3 rounded-full transition-all duration-300 relative"
            style={{ width: `${softcapPercentage}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-4 bg-gray-700"></div>
          </div>
        </div>
        <div className="flex justify-between items-center text-[14px]  mb-1">
          <span></span>
          <span className="font-medium text-gray-500"> {softcapTarget}</span>
        </div>
        <div className="text-[14px] text-black text-center">{holdersCount} Holders</div>
      </div>

      {/* Payment Options */}
      <div className="mb-3 ">
        <div className="flex bg-[#F5F5F5] justify-center py-[6px] roundedd-[8px] items-center gap-2 mb-3">
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
          <div className=" font-[500]">
            <span>CARD</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              ref={(el) => (dropdownRefs.current[option.id] = el)}
              className="relative"
            >
              <button
                onClick={() => {
                  if (option.id === "more") {
                    // Handle more options
                  } else {
                    // Always update the selected payment when clicking a button
                    setSelectedPayment(`${option.name} ${option.network}`);
                    // Toggle dropdown
                    setOpenDropdownId(openDropdownId === option.id ? null : option.id);
                  }
                }}
                className={`w-full flex items-center gap-2 px-2 py-1 
                  rounded-lg border transition-colors text-left min-h-[48px] ${selectedPayment.includes(option.name)
                    ? "border-gray-200 bg-gray-50"
                    : "border-gray-200 hover:bg-gray-50 bg-white"
                  }`}
              >
                {/* Coin Icon - Circular with colored background */}
                {option.id !== "more" && option.iconBg && (
                  <div className={`${option.iconBg} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold">{option.iconText}</span>
                  </div>
                )}

                {/* Text Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center">
                  <div className="font-bold text-[12px] text-gray-800 leading-tight">
                    {option.name}
                  </div>
                  <div className="text-[10px] text-gray-500 leading-tight mt-0.5">
                    {selectedPayment.includes(option.name)
                      ? selectedPayment.split(" ").slice(1).join(" ") || option.network
                      : option.network
                    }
                  </div>
                </div>

                {/* Dropdown Arrow */}
                {option.id !== "more" && (
                  <ChevronDown
                    className={`w-3 h-3 text-gray-400 flex-shrink-0 transition-transform ${openDropdownId === option.id ? "rotate-180" : ""
                      }`}
                  />
                )}
              </button>

              {/* Dropdown Menu */}
              {openDropdownId === option.id && option.id !== "more" && option.networks && option.networks.length > 1 && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                  {option.networks.map((network) => (
                    <button
                      key={network}
                      onClick={() => {
                        setSelectedPayment(`${option.name} ${network}`);
                        setOpenDropdownId(null);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-1 text-left text-sm hover:bg-gray-50 transition-colors ${selectedPayment === `${option.name} ${network}`
                          ? "bg-blue-50 text-[#0080ED] font-semibold"
                          : "text-gray-700"
                        }`}
                    >
                      {/* Coin Icon in Dropdown */}
                      {option.iconBg && (
                        <div className={`${option.iconBg} w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0`}>
                          <span className="text-white text-[10px] font-bold">{option.iconText}</span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0 text-left">
                        <div className="font-medium text-[12px] text-left">{option.name}</div>
                        <div className={`text-[10px] mt-0.5 text-left ${selectedPayment === `${option.name} ${network}`
                            ? "text-[#0080ED]"
                            : "text-gray-500"
                          }`}>
                          {network}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Price Information */}
      <div className="bg-gray-50 rounded-lg px-4 py-2 mb-2">
        <div className="flex justify-center space-x-2 items-center text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 !font-[600]">Presale Price = </span>
            <span className="font-semibold text-[#0080ED]">{presalePrice}</span>
          </div>
          <div className="w-px h-4 bg-gray-800 !font-[600]"></div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 !font-[600]">Listing Price = </span>
            <span className="font-semibold text-[#0080ED]">{listingPrice}</span>
          </div>
        </div>
      </div>

      {/* Purchase Input Fields */}
      <div className="mb-6 space-y-4">
        {/* You Pay Input */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            You Pay {selectedPaymentOption.name}
          </label>
          <div className="flex items-center gap-0 border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
            <input
              type="text"
              value={youPayAmount}
              readOnly
              className="flex-1 text-[16px] font-semibold max-w-[70%] !w-full  text-black bg-transparent border-none outline-none px-4 py-3"
            />
            <div className="flex items-center gap-2 px-3 py-2 w-[30%] border-l border-gray-200 bg-white">
              {/* Dynamic Payment Icon */}
              {selectedPaymentOption.iconBg && (
                <div className={`${selectedPaymentOption.iconBg} w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-bold">{selectedPaymentOption.iconText}</span>
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800 leading-tight">{selectedPaymentOption.name}</span>
                <span className="text-xs text-gray-600 leading-tight">{selectedPaymentOption.network}</span>
              </div>
            </div>
          </div>
        </div>

        {/* You Receive Input */}
        <div>
          <label className="block text-sm font-bold text-gray-800 mb-2">
            You Receive PREDICT +{" "}
            <Link to="/nft" className="text-[#0080ED] hover:underline">
              Bronze NFT
            </Link>
          </label>
          <div className="flex items-center gap-0 border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
            <input
              type="text"
              value={youReceiveAmount}
              readOnly
              className="flex-1 text-[16px] font-semibold max-w-[70%] text-black bg-transparent border-none outline-none px-4 py-3"
            />
            <div className="flex items-center gap-2 px-3 py-2 w-[30%] border-l border-gray-200 bg-white">
              {/* PREDICT Icon - Square blue with 3x3 grid of white squares */}
              <div className="bg-[#0080ED] w-8 h-8 rounded flex items-center justify-center flex-shrink-0 p-1.5">
                <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-white rounded-[1px]"></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800 leading-tight">PREDICT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <button className="w-full  btn_primary text-white !py-[21px] !text-[18px]
       rounded-full font-medium  uppercase mb-4 hover:bg-[#0066cc] transition-colors">
        CONNECT WALLET
      </button>

      {/* Additional Links */}
      <div className="flex items-center justify-center gap-4 text-xs text-gray-600 mb-2">
        <Link to="/bonus-code" className="flex items-center gap-1 hover:text-[#0080ED] transition-colors">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
  <path d="M11.7337 3.38023C11.1251 3.04883 10.307 2.81039 9.40625 2.69828V2.29688C9.40625 1.63406 8.88234 1.03359 7.92969 0.605391C7.06344 0.214922 5.91719 0 4.70312 0C3.48906 0 2.34281 0.214922 1.47656 0.605391C0.523906 1.03359 0 1.63406 0 2.29688V4.48438C0 5.14719 0.523906 5.74766 1.47656 6.17586C2.05023 6.43398 2.74586 6.61336 3.5 6.70797V7.10938C3.5 7.77219 4.02391 8.37266 4.97656 8.80086C5.84281 9.19133 6.98906 9.40625 8.20312 9.40625C9.41719 9.40625 10.5634 9.19133 11.4297 8.80086C12.3807 8.37266 12.9062 7.77219 12.9062 7.10938V4.92188C12.9062 4.33945 12.4901 3.79203 11.7337 3.38023ZM11.4198 3.95664C11.9552 4.24813 12.25 4.59375 12.25 4.92188C12.25 5.69789 10.588 6.5625 8.20312 6.5625C7.81532 6.56272 7.4279 6.53825 7.0432 6.48922C7.34635 6.40784 7.64274 6.30307 7.92969 6.17586C8.8807 5.74766 9.40625 5.14719 9.40625 4.48438V3.35945C10.1938 3.465 10.8992 3.67281 11.4198 3.95664ZM5.36812 6.10203C5.15375 6.1168 4.93062 6.125 4.70312 6.125C4.41328 6.125 4.13438 6.11188 3.8675 6.08836C3.86077 6.08773 3.854 6.08773 3.84727 6.08836C3.65148 6.07031 3.46445 6.04625 3.28125 6.01727V4.49094C3.75206 4.55991 4.22729 4.59428 4.70312 4.59375C5.17896 4.59428 5.65419 4.55991 6.125 4.49094V6.01562C5.88766 6.05336 5.63773 6.08234 5.37633 6.10094L5.36812 6.10203ZM8.75 3.49398V4.48438C8.75 5.00609 7.99805 5.56719 6.78125 5.87945V4.3668C7.17533 4.27783 7.55992 4.1511 7.92969 3.98836C8.22381 3.86062 8.49966 3.69438 8.75 3.49398ZM4.70312 0.65625C7.08805 0.65625 8.75 1.52086 8.75 2.29688C8.75 3.07289 7.08805 3.9375 4.70312 3.9375C2.3182 3.9375 0.65625 3.07289 0.65625 2.29688C0.65625 1.52086 2.3182 0.65625 4.70312 0.65625ZM0.65625 4.48438V3.49398C0.906712 3.69361 1.18256 3.85912 1.47656 3.98617C1.84633 4.14891 2.23092 4.27564 2.625 4.36461V5.87727C1.4082 5.56719 0.65625 5.00609 0.65625 4.48438ZM4.15625 7.10938V6.76594C4.33672 6.77578 4.51883 6.78125 4.70312 6.78125C4.91859 6.78125 5.13115 6.77451 5.34078 6.76102C5.59728 6.85359 5.85917 6.93047 6.125 6.99125V8.50445C4.9082 8.19219 4.15625 7.63109 4.15625 7.10938ZM6.78125 8.64062V7.11484C7.25203 7.18419 7.72726 7.21891 8.20312 7.21875C8.67896 7.21928 9.15419 7.18491 9.625 7.11594V8.64062C8.68269 8.78646 7.72356 8.78646 6.78125 8.64062ZM10.2812 8.50445V6.9918C10.6753 6.90283 11.0599 6.7761 11.4297 6.61336C11.7237 6.4863 11.9995 6.3208 12.25 6.12117V7.10938C12.25 7.63109 11.498 8.19219 10.2812 8.50445Z" fill="black"/>
</svg></span>
          <span className="text-[12px] underline font-[Inter]">Bonus Code</span>
        </Link>
        <Link to="/#how-to-buy" className="flex items-center gap-1 hover:text-[#0080ED] transition-colors">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none">
  <path d="M12.5962 6.40172C12.4334 6.27646 12.2439 6.19043 12.0424 6.15031C11.841 6.11019 11.633 6.11706 11.4346 6.17039L9.14648 6.69649C9.19972 6.47161 9.20136 6.23759 9.15129 6.01199C9.10122 5.78638 9.00074 5.57504 8.85738 5.39379C8.71401 5.21254 8.53148 5.0661 8.32346 4.96543C8.11545 4.86476 7.88734 4.81248 7.65625 4.8125H4.91859C4.68869 4.81192 4.46094 4.85691 4.24853 4.94486C4.03611 5.03282 3.84322 5.16199 3.68102 5.32492L2.44398 6.5625H0.875C0.642936 6.5625 0.420376 6.65469 0.256282 6.81878C0.0921872 6.98288 0 7.20544 0 7.4375L0 9.625C0 9.85707 0.0921872 10.0796 0.256282 10.2437C0.420376 10.4078 0.642936 10.5 0.875 10.5H6.5625C6.59827 10.5 6.6339 10.4956 6.66859 10.4869L10.1686 9.61188C10.1909 9.60655 10.2127 9.59923 10.2337 9.59L12.3594 8.68547L12.3834 8.67453C12.5877 8.57245 12.7627 8.42003 12.8918 8.23165C13.0209 8.04327 13.0999 7.82512 13.1214 7.59775C13.1429 7.37038 13.1062 7.14128 13.0147 6.93204C12.9232 6.72279 12.7799 6.54029 12.5984 6.40172H12.5962ZM0.875 7.4375H2.1875V9.625H0.875V7.4375ZM12.0001 7.88649L9.92195 8.77133L6.50781 9.625H3.0625V7.18102L4.30008 5.94399C4.38103 5.86238 4.47741 5.79768 4.58359 5.75365C4.68977 5.70962 4.80365 5.68713 4.91859 5.6875H7.65625C7.8303 5.6875 7.99722 5.75664 8.12029 5.87971C8.24336 6.00278 8.3125 6.1697 8.3125 6.34375C8.3125 6.5178 8.24336 6.68472 8.12029 6.80779C7.99722 6.93086 7.8303 7 7.65625 7H6.125C6.00897 7 5.89769 7.04609 5.81564 7.12814C5.73359 7.21019 5.6875 7.32147 5.6875 7.4375C5.6875 7.55353 5.73359 7.66481 5.81564 7.74686C5.89769 7.82891 6.00897 7.875 6.125 7.875H7.875C7.90793 7.87492 7.94075 7.87125 7.97289 7.86406L11.637 7.02133L11.6539 7.01695C11.7658 6.9859 11.8851 6.99731 11.9891 7.04899C12.093 7.10067 12.1742 7.18896 12.217 7.29688C12.2597 7.4048 12.2611 7.52472 12.2207 7.63357C12.1804 7.74242 12.1012 7.8325 11.9984 7.88649H12.0001ZM8.96875 3.9375C9.07684 3.93762 9.18476 3.92884 9.29141 3.91125C9.41136 4.26756 9.63084 4.58208 9.92388 4.81761C10.2169 5.05314 10.5713 5.19984 10.9451 5.24036C11.3188 5.28089 11.6964 5.21354 12.0331 5.04628C12.3698 4.87902 12.6516 4.61885 12.8451 4.29653C13.0387 3.9742 13.1359 3.6032 13.1252 3.22738C13.1146 2.85157 12.9966 2.48666 12.7851 2.1758C12.5736 1.86493 12.2776 1.62111 11.932 1.47317C11.5863 1.32522 11.2056 1.27934 10.8347 1.34094C10.7192 0.997635 10.5112 0.692852 10.2336 0.460129C9.95609 0.227406 9.61971 0.0757657 9.26152 0.0218958C8.90334 -0.031974 8.53723 0.0140149 8.2035 0.154802C7.86977 0.295588 7.58134 0.525715 7.36997 0.819856C7.15859 1.114 7.03246 1.46075 7.00545 1.82196C6.97845 2.18316 7.05161 2.54482 7.21689 2.86712C7.38217 3.18942 7.63317 3.45988 7.94226 3.64873C8.25134 3.83759 8.60654 3.93751 8.96875 3.9375ZM12.25 3.28125C12.25 3.49757 12.1859 3.70904 12.0657 3.88891C11.9455 4.06877 11.7747 4.20896 11.5748 4.29174C11.375 4.37453 11.155 4.39619 10.9429 4.35398C10.7307 4.31178 10.5358 4.20761 10.3829 4.05465C10.2299 3.90169 10.1257 3.7068 10.0835 3.49463C10.0413 3.28246 10.063 3.06255 10.1458 2.86269C10.2285 2.66283 10.3687 2.49201 10.5486 2.37183C10.7285 2.25165 10.9399 2.1875 11.1562 2.1875C11.4463 2.1875 11.7245 2.30273 11.9296 2.50785C12.1348 2.71297 12.25 2.99117 12.25 3.28125ZM8.96875 0.875001C9.20735 0.87512 9.43937 0.953262 9.62944 1.09751C9.8195 1.24176 9.95718 1.44421 10.0215 1.67399C9.79741 1.83165 9.60872 2.03434 9.46746 2.2691C9.32621 2.50386 9.23551 2.76552 9.20117 3.03734C9.12479 3.05385 9.04689 3.06228 8.96875 3.0625C8.67867 3.0625 8.40047 2.94727 8.19535 2.74215C7.99023 2.53703 7.875 2.25883 7.875 1.96875C7.875 1.67867 7.99023 1.40047 8.19535 1.19535C8.40047 0.990235 8.67867 0.875001 8.96875 0.875001Z" fill="black"/>
</svg></span>
          <span className="text-[12px] underline font-[Inter]">How to Buy</span>
        </Link>
        <Link to="/referral" className="flex items-center gap-1 hover:text-[#0080ED] transition-colors">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7.57812 3.50065L8.74479 2.33398C9.32812 1.75065 10.4948 1.75065 11.0781 2.33398L11.6615 2.91732C12.2448 3.50065 12.2448 4.66732 11.6615 5.25065L8.74479 8.16732C8.16146 8.75065 6.99479 8.75065 6.41146 8.16732M6.41146 10.5007L5.24479 11.6673C4.66146 12.2507 3.49479 12.2507 2.91146 11.6673L2.32812 11.084C1.74479 10.5007 1.74479 9.33398 2.32812 8.75065L5.24479 5.83398C5.82812 5.25065 6.99479 5.25065 7.57812 5.83398" stroke="black" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span className="text-[12px] underline font-[Inter]">10% Referral Link</span>
        </Link>
      </div>

      {/* Special Bonus */}
      <div className="text-center text-[12px] text-gray-600 bg-[#F2F2F2] p-2 rounded-[8px] border border-gray-100">
        <span className="font-semibold text-[#0080ED]">Special Bonus:</span> Get 20% more PREDICT tokens <br /> with the code{" "}
        <span className="font-semibold text-[#000]">{bonusCode}</span>{" "}
        (valid for a limited time only).
      </div>
    </div>
  );
}

