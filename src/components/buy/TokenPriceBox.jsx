import { LISTING_PRICE } from "../../presale-gg/constants"
import { useApiState } from "../../presale-gg/stores/api.store"
import { formatDollar, formatNumber } from "../../presale-gg/util"
import { Loadable } from "./Loader"

const TokenPriceBox = () => {
  const { stage } = useApiState()
  return (
    <div className="border border-[#D4D4D4] bg-[#F7F7F7] px-4 py-1.5 flex items-center justify-center text-[0.75rem] font-[600] gap-3">
      <p>
        <span className="text">Presale Price = </span>
        <Loadable component="span" length={2} className="font-bold text-[#0080ED]">
          {stage?.token_price ? formatDollar(stage?.token_price, true, 0, 4) : '—'}
        </Loadable>
      </p>
      <div className="h-4 w-px bg-gray-800" />
      <p>
        <span className="">Listing Price = </span>
        <Loadable component="span" length={2} className="font-bold text-[#0080ED]">{formatDollar(LISTING_PRICE, true, 0, 4)}</Loadable>
      </p>
    </div>
  )
}

export default TokenPriceBox