import { useEffect, useMemo, useState } from "react"
import { useAccount } from "../../presale-gg/web3"
import { BuyIcon, DashboardIcon, HistoryIcon, StakingIcon } from "./Icons"
import BuyTab from "./Tabs/BuyTab"
import clsx from "clsx"
import DashboardTab from "./Tabs/DashboardTab"
import StakeTab from "./Tabs/StakeTab"
import HistoryTab from "./Tabs/HistoryTab"
import { useApiState } from "../../presale-gg/stores"

const tabs = {
  buy: {
    label: 'Buy',
    icon: BuyIcon,
    component: BuyTab
  },
  dashboard: {
    label: 'Dashboard',
    icon: DashboardIcon,
    disableWithoutWallet: true,
    component: DashboardTab
  },
  staking: {
    label: 'Stake',
    icon: StakingIcon,
    disableWithoutWallet: true,
    component: StakeTab
  },
  history: {
    label: 'History',
    icon: HistoryIcon,
    disableWithoutWallet: true,
    component: HistoryTab
  }
}

export function PresaleBuyWidget() {
  const [activeTab, setActiveTab] = useState('buy')
  const accountData = useAccount()
  const { stage, presaleEnded } = useApiState()
  const TabComp = useMemo(() => {
    return tabs[activeTab].component ?? (() => <></>)
  }, [activeTab])

  useEffect(() => {
    if (tabs[activeTab].disableWithoutWallet && !accountData.isConnected) setActiveTab('buy')
  }, [activeTab, accountData.isConnected])

  return (
    <div
      className={`flex flex-col gap-3 relative mx-auto w-full max-w-[30rem] rounded-[13.675px] border border-[#D8D8D8] bg-white px-[10px] py-[15px] shadow-xl md:px-[44px] md:py-[24px] min-h-[47rem] md:min-h-[49rem] justify-between`}
    >
      <div className="absolute left-1/2 top-[-15px] flex -translate-x-1/2 items-center justify-center">
        <div className="flex items-center gap-2 rounded-[4px] bg-[#0080ED] px-4 py-1.5 font-[Inter] !text-[12px] font-[600] uppercase text-white">
          {!presaleEnded && <div
            className="h-2 w-2 flex-shrink-0 rounded-full bg-white"
            style={{ animation: 'blink 1.5s ease-in-out infinite' }}
          />}
          <span className="uppercase">{presaleEnded ? "PRESALE ENDED" : "PRESALE IS LIVE"}</span>
        </div>
      </div>

      <div className="flex justify-between gap-1 rounded-[100px] border border-gray-800 p-1 h-[2.375rem]">
        {Object.entries(tabs).map(([id, tab], index) => {
          const IconComponent = tab.icon
          const disabled = !accountData.isConnected && tab.disableWithoutWallet
          return (
            <button
              key={id}
              type="button"
              disabled={disabled}
              onClick={() => setActiveTab(id)}
              title={disabled ? "Connect your wallet" : undefined}
              className={clsx("rounded-full flex items-center justify-center gap-1 flex-1 text-black", {
                "bg-[#F5F5F5]": activeTab === id,
                "cursor-pointer": !disabled,
                "cursor-not-allowed opacity-70": disabled
              })}
            >
              <IconComponent />
              <span className="text-[0.6875rem]">
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
      <TabComp />
    </div>
  )
}
