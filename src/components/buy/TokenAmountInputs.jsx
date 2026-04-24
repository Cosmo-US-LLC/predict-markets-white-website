import { tokenImageMap } from "../../presale-gg/assets/img/tokens"
import { useApiState } from "../../presale-gg/stores"
import { formatPrecision, parseNum, partialNumRegexp } from "../../presale-gg/util"
import predictLogo from '../../assets/images/wallet-coins/Icon.svg'
import { membershipCards } from "../../data/getExtraRewardsData"
import { useMemo } from "react"
import Input from "./Input"
import FormLabel from "./FormLabel"

const sortedMemberships = [...membershipCards].sort((a, b) => b.minAmount - a.minAmount)

/**
 * @typedef {import("../../presale-gg/api/api.types").API.PaymentToken} PaymentToken
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
      <FormLabel label={<>
        You Pay {selectedToken?.symbol.toUpperCase() === "CARD" ? "USD" : `${selectedToken?.symbol.toUpperCase() ?? ''} (${selectedToken?.chain ?? ''})`}
      </>}>
        <AmountInput
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
      </FormLabel>
      <FormLabel label={<>
        You Receive $PREDICT{selectedMembership && <>{" + "}
          <span className="text-[#0080ED] underline">{selectedMembership.tier} Membership</span>
        </>}
      </>}>
        <AmountInput
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
      </FormLabel>
    </div>
  )
}

export default TokenAmountInputs

/** @param {import("react").HTMLAttributes<HTMLInputElement> & {token?: import("../../presale-gg/api/api.types").API.PaymentToken, value: number}} props */
const AmountInput = ({ token, ...others }) => {
  return (
    <Input {...others}>
      <div className="flex w-23 md:w-28 items-center gap-2 border-l border-gray-200 bg-transparent px-3 py-2">
        <img
          className="md:w-5 md:h-5 h-4 w-4"
          src={token ? tokenImageMap[token.symbol.toLowerCase()] : predictLogo}
          alt="Predict"
        />
        <div className="flex flex-col">
          <span className="text-[0.75rem] font-bold leading-tight text-black md:text-[0.875rem] uppercase">{token?.symbol.toUpperCase() ?? 'Predict'}</span>
          {token && (
            <span className="md:text-[0.625rem] text-[0.5rem] leading-tight text-[#00000080]">{token.chain.toUpperCase()}</span>
          )}
        </div>
      </div>
    </Input>
  )
}