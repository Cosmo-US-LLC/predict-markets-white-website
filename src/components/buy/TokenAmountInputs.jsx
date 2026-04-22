import { tokenImageMap } from "../../presale-gg/assets/img/tokens"
import { useApiState } from "../../presale-gg/stores"
import { formatPrecision, parseNum, partialNumRegexp } from "../../presale-gg/util"
import predictLogo from '../../assets/images/wallet-coins/Icon.svg'
import clsx from "clsx"
import { membershipCards } from "../../data/getExtraRewardsData"
import { useMemo } from "react"

const sortedMemberships = [...membershipCards].sort((a, b) => b.minAmount - a.minAmount)

/**
 * @typedef {import("@/presale-gg/api/api.types").API.PaymentToken} PaymentToken
 * 
 * @param {object} props 
 * @param {PaymentToken | null} props.selectedToken
 * @param {string} props.paymentAmountStr
 * @param {string} props.receiveAmountStr
 * @param {(newVal: string) => void} props.onPaymentAmountChange
 * @param {(newVal: string) => void} props.onReceiveAmountChange
 */
const TokenAmountInputs = ({
  selectedToken,
  paymentAmountStr,
  receiveAmountStr,
  onPaymentAmountChange,
  onReceiveAmountChange
}) => {
  const apiData = useApiState()

  const paymentNumUsd = useMemo(() => {
    const payNum = parseNum(paymentAmountStr)
    return payNum * parseNum(selectedToken?.price)
  }, [paymentAmountStr, selectedToken])

  const selectedMembership = useMemo(() => {
    return sortedMemberships.find((membership) => paymentNumUsd >= membership.minAmount)
  }, [paymentNumUsd])

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-gray-800">You Pay {selectedToken?.symbol.toUpperCase() === "CARD" ? "USD" : `${selectedToken?.symbol.toUpperCase() ?? ''} (${selectedToken?.chain ?? ''})`}</p>
        <Input
          token={selectedToken}
          value={paymentAmountStr}
          onFocus={(e) => {
            if (e.currentTarget.value === "0") {
              e.currentTarget.value = ""
              onPaymentAmountChange("")
            }
          }}
          onBlur={(e) => {
            if (e.currentTarget.value === "") {
              e.currentTarget.value = "0"
              onPaymentAmountChange("0")
            }
          }}
          onChange={(e) => {
            let val = e.target.value
            if (!partialNumRegexp.test(val)) {
              val = paymentAmountStr
            }
            e.target.value = val
            onPaymentAmountChange(val)
            const receiveNum = parseNum(val) * parseNum(selectedToken?.price) / parseNum(apiData.stage?.token_price ?? 1)
            onReceiveAmountChange(formatPrecision(receiveNum, 0, 3))
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold text-gray-800">
          You Receive PREDICT{selectedMembership && <>{" + "}
            <span className="text-[#0080ED] underline">{selectedMembership.tier} Membership</span>
          </>}
        </p>
        <Input
          value={receiveAmountStr}
          onFocus={(e) => {
            if (e.currentTarget.value === "0") {
              e.currentTarget.value = ""
              onReceiveAmountChange("")
            }
          }}
          onBlur={(e) => {
            if (e.currentTarget.value === "") {
              e.currentTarget.value = "0"
              onReceiveAmountChange("0")
            }
          }}
          onChange={(e) => {
            let val = e.target.value
            if (!partialNumRegexp.test(val)) {
              val = receiveAmountStr
            }
            e.target.value = val
            onReceiveAmountChange(val)
            const paymentNum = parseNum(val) * parseNum(apiData.stage?.token_price) / parseNum(selectedToken?.price ?? 1)
            console.log("VAL", val, paymentNum)
            onPaymentAmountChange(formatPrecision(paymentNum, 0, 5))
          }}
        />
      </div>
    </div>
  )
}

export default TokenAmountInputs

/** @param {import("react").HTMLAttributes<HTMLInputElement> & {token?: import("../../presale-gg/api/api.types").API.PaymentToken, value: number}} props */
const Input = ({ token, ...others }) => {
  return (
    <div className={clsx("flex items-center gap-0 overflow-hidden rounded-lg border border-gray-200 bg-gray-50 md:h-[46px]", others.className)}>
      <input
        {...others}
        className="max-w-[70%] flex-1 border-none bg-transparent px-4 py-2.5 font-[Inter] !text-[16px] font-[500] text-black outline-none"
      />
      <div className="flex w-[30%] items-center gap-2 border-l border-gray-200 bg-transparent px-3 py-2">
        <img
          className="w-[25.813px] h-[25.813px] object-cover"
          src={token ? tokenImageMap[token.symbol.toLowerCase()] : predictLogo}
          alt="Predict"
        />
        <div className="flex flex-col">
          <span className="text-[12px] font-bold leading-tight text-gray-800 md:text-sm">{token?.symbol.toUpperCase() ?? 'Predict'}</span>
          {token && (
            <span className="text-[10px] leading-tight text-gray-600 md:text-xs">{token.chain.toUpperCase()}</span>
          )}
        </div>
      </div>
    </div>
  )
}