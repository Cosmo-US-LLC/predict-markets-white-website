import { useEffect, useMemo, useState } from "react"
import { useApiState } from "../../presale-gg/stores/api.store"
import { groupTokens } from "../../presale-gg/util"
import Loader from "./Loader"
import TokenSelect from "./TokenSelect"

/**
 * @param {object} props
 * @param {(token: PaymentToken) => void} props.onChange
 * @param {PaymentToken} props.value
 */
const TokenSelectGrid = ({ onChange, value }) => {
  const apiData = useApiState()
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)

  const tokenLists = useMemo(() => {
    return groupTokens(apiData.paymentTokens ?? [])
  }, [apiData.paymentTokens])

  useEffect(() => {
    if (tokenLists[selectedGroupIndex].currencies.includes(value)) return
    let groupIndex = tokenLists.findIndex((list) => list.currencies.includes(value))
    if (groupIndex === -1) return
    setSelectedGroupIndex(groupIndex)
  }, [value, selectedGroupIndex, tokenLists])


	return (
    <Loader loading={apiData.stageLoading || apiData.paymentTokensLoading}>
      <div className="grid grid-cols-3 gap-2">
        {tokenLists.map((list, i) => {
          const selected =
            list.currencies.find((token) => token.id === value?.id) !== undefined && selectedGroupIndex === i;

          return (
            <TokenSelect
              key={i}
              style={{"grid-column": i === 0 ? "1 / -1" : undefined}}
              tokens={list.currencies}
              onChange={(token) => {
                onChange(token)
                setSelectedGroupIndex(i)
              }}
              value={selected ? value : null}
              defaultLabel={list.defaultLabel}
              placeholder={list.placeholder}
              defaultToken={list.defaultToken}
              selected={selected}
            />
          )
        })}
      </div>
    </Loader>
	)
}

export default TokenSelectGrid