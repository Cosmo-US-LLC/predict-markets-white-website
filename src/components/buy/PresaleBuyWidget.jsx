import { useEffect, useState } from "react"
import { useApiState } from "../../presale-gg/stores/api.store"
import { useAccount } from "../../presale-gg/web3"
import { BuyIcon, DashboardIcon, HistoryIcon } from "./Icons"
import TokenSelectGrid from "./TokenSelectGrid"
import StageBox from "./StageBox"
import TokenPriceBox from "./TokenPriceBox"
import TokenAmountInputs from "./TokenAmountInputs"

const tabs = [
  {
    label: 'Buy',
    id: 'buy',
    icon: BuyIcon
  },
  {
    label: 'Dashboard',
    id: 'dashboard',
    icon: DashboardIcon
  },
  {
    label: 'History',
    id: 'history',
    icon: HistoryIcon
  }
]

export function PresaleBuyWidget() {
  const { stage, paymentTokens } = useApiState()
  const accountData = useAccount()

  const [activeTab, setActiveTab] = useState('buy')

  const [receiveAmountStr, setReceiveAmountStr] = useState("0")
  const [paymentAmountStr, setPaymentAmountStr] = useState("0")

  /** @type {[import("../../presale-gg/api/api.types").API.PaymentToken | null, (newToken: import("../../presale-gg/api/api.types").API.PaymentToken | null => void]} */
  const [selectedToken, setSelectedToken] = useState(null)

  useEffect(() => {
    if (!paymentTokens?.length || selectedToken !== null) return
    setSelectedToken(paymentTokens.find((token) => token.symbol.toUpperCase() === "ETH") ?? paymentTokens[0] ?? null)
  }, [paymentTokens, selectedToken])

  useEffect(() => {
    if (!selectedToken || !stage) return
    const receiveNum = parseNum(selectedToken.price) * parseNum(paymentAmountStr) / parseNum(stage?.token_price ?? 1)
    setReceiveAmountStr(formatPrecision(receiveNum, 0, 3))
  }, [selectedToken, stage?.token_price])

  return (
    <div
      className={`flex flex-col gap-4 relative mx-auto w-full max-w-[100%] rounded-[13.675px] border border-[#D8D8D8] bg-white px-[10px] py-[15px] shadow-xl md:px-[44px] md:py-[24px]`}
    >
      <div className="absolute left-1/2 top-[-15px] flex -translate-x-1/2 items-center justify-center">
        <div className="flex items-center gap-2 rounded-[4px] bg-[#0080ED] px-4 py-1.5 font-[Inter] !text-[12px] font-[600] uppercase text-white">
          <div
            className="h-2 w-2 flex-shrink-0 rounded-full bg-white"
            style={{ animation: 'blink 1.5s ease-in-out infinite' }}
          />
          <span>PRESALE IS LIVE</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 rounded-[100px] border border-gray-800 p-1">
        {tabs.map((tab, index) => {
          const IconComponent = tab.icon
          return (
            <button
              key={tab.id}
              type="button"
              disabled={tab.id !== "buy"}
              onClick={() => {
                setActiveTab(tab.id)
                if (tab.id === 'dashboard') connectWalletForDashboard()
                if (tab.id === 'history') connectWalletForHistory()
              }}
              className={`flex cursor-pointer !items-center justify-center !text-black md:!text-[12px] !text-[11px] font-[Inter] rounded-[100px] px-[2px] py-2 transition-all duration-200 md:px-[10px] flex-1 max-md:gap-[5px] gap-[2px] ${
                activeTab === tab.id ? 'bg-[#B0B0B01F] text-black' : 'bg-transparent text-gray-700 hover:text-black'
              }`}
            >
              <span className={`leading-none ${activeTab === tab.id ? 'text-black' : 'text-gray-700'}`}>
                <IconComponent />
              </span>
              <span
                className={`text-center font-[Inter] !text-[10px] leading-tight md:!text-[12px] !font-[400] ${
                  activeTab === tab.id ? 'text-black' : 'text-gray-700'
                }`}
              >
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

      <StageBox />
      <TokenSelectGrid value={selectedToken} onChange={setSelectedToken} />
      <TokenPriceBox />
      <TokenAmountInputs
        selectedToken={selectedToken}
        paymentAmountStr={paymentAmountStr}
        receiveAmountStr={receiveAmountStr}
        onPaymentAmountChange={setPaymentAmountStr}
        onReceiveAmountChange={setReceiveAmountStr}
      />

      <button
        type="button"
        className="btn_primary mb-4 w-full !rounded-[8px] !py-[12px] !text-[18px] font-medium uppercase text-white transition-colors hover:bg-[#0066cc] disabled:opacity-60"
      >
        BUY $PREDICT
      </button>
    </div>
  )
}
