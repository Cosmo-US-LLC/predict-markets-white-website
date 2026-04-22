import { LISTING_PRICE } from "../../presale-gg/constants"
import { useApiState } from "../../presale-gg/stores/api.store"
import { formatDollar, formatNumber } from "../../presale-gg/util"

const TokenPriceBox = () => {
  const { stage } = useApiState()
  return (
    <div className="mb-[15px] rounded-[4px] border border-[#D4D4D4] bg-[#F7F7F7] px-4 py-[5px]">
      <div className="flex items-center justify-center space-x-2 text-sm">
        <span className="text-[12px] !font-[600] text-black md:text-[12px]">Presale Price = </span>
        <span className="text-[12px] font-bold text-[#0080ED] md:text-[12px]">
          {stage?.token_price ? formatDollar(stage?.token_price) : '—'}
        </span>
        <div className="h-4 w-px bg-gray-800" />
        <span className="text-[12px] !font-[600] text-black md:text-[12px]">Listing Price = </span>
        <span className="text-[12px] font-bold text-[#0080ED] md:text-[12px]">{formatNumber(LISTING_PRICE)}</span>
      </div>
    </div>
  )
}

export default TokenPriceBox