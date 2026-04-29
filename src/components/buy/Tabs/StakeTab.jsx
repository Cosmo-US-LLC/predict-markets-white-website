import { useMemo, useState } from "react"
import { userStakeTokens, userUnstakeTokens, useUserState } from "../../../presale-gg/stores"
import { formatLargeNumber, formatNumber, parseNum, partialNumRegexp } from "../../../presale-gg/util"
import Spinner from "../Spinner"
import { api } from "../../../presale-gg/api"
import toast from "react-hot-toast"
import Input from "../Input"

const StakeTab = () => {
  const { userStakeData, rankData } = useUserState()
  const stats = useMemo(() => {
    return [
      {
        label: "Currently Staked",
        value: `${formatLargeNumber(
          parseNum(userStakeData?.total_staked)
        )} $PREDICT`,
      },
      {
        label: 'Current Daily Interest',
        value: `${formatLargeNumber(
          parseNum(userStakeData?.daily_interest)
        )} $PREDICT`,
      },
      {
        label: 'Total Earnings',
        value: `${formatLargeNumber(
          parseNum(userStakeData?.daily_interest)
        )} $PREDICT`,
      },
      {
        label: 'APY',
        value: `${formatNumber(rankData?.current_rank?.staking_apy ?? 0, 0, 0)}%`,
      },
    ]
  }, [userStakeData, rankData])

  const [tokensStr, setTokensStr] = useState("0");
  const [stakeLoading, setStakeLoading] = useState(false);
  const [unstakeLoading, setUnstakeLoading] = useState(false);

  const stake = async () => {
    if (stakeLoading || unstakeLoading) return;
    if (!tokensStr || tokensStr === "0")
      return toast.error("Invalid amount specified");
    setStakeLoading(true);
    try {
      await userStakeTokens(tokensStr);
      toast.success("Successfully staked tokens");
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error staking tokens"));
    }
    setStakeLoading(false);
  };

  const unstake = async () => {
    if (stakeLoading || unstakeLoading) return;
    if (!tokensStr || tokensStr === "0")
      return toast.error("Invalid amount specified");
    setUnstakeLoading(true);
    try {
      await userUnstakeTokens(tokensStr);
      toast.success("Successfully unstaked tokens");
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error unstaking tokens"));
    }
    setUnstakeLoading(false);
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {stats.map((stat) => (
          <div className="flex flex-col text-center p-2 h-16 justify-center gap-1.5 leading-none bg-[#F5F5F5] rounded-lg border border-black/10 last:odd:col-span-full">
            <p className="font-bold text-[0.875rem]">{stat.value}</p>
            <p className="text-[0.75rem] text-black/50 leading-[1.1]">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between text-[0.75rem] font-bold">
          <p>Available to Stake</p>
          <p>{formatLargeNumber(parseNum(userStakeData?.total_can_stake))} $PREDICT</p>
        </div>
        <Input
          value={tokensStr}
          onFocus={(e) => {
            if (e.currentTarget.value === "0") {
              e.currentTarget.value = ""
              setTokensStr("")
            }
          }}
          onBlur={(e) => {
            if (e.currentTarget.value === "") {
              e.currentTarget.value = "0"
              setTokensStr("0")
            }
          }}
          onChange={(e) => {
            let val = e.target.value
            if (!partialNumRegexp.test(val)) {
              val = tokensStr
            }
            e.target.value = val
            setTokensStr(val)
          }}
        />
        <div className="flex flex-row justify-between text-[0.625rem] font-[600]">
          <button
            className="px-2 py-1.5 flex border rounded-sm leading-[1] cursor-pointer bg-[#F9FAFB] border-black/10 hover:brightness-90"
            onClick={() => setTokensStr(userStakeData?.total_can_stake ?? 0)}
          >
            Max Stake ({formatLargeNumber(parseNum(userStakeData?.total_can_stake))})
          </button>
          <button
            className="px-2 py-1.5 flex border rounded-sm leading-[1] cursor-pointer bg-[#F9FAFB] border-black/10 hover:brightness-90"
            onClick={() => setTokensStr(userStakeData?.total_staked ?? 0)}
          >
            Max Unstake ({formatLargeNumber(parseNum(userStakeData?.total_staked))})
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        {rankData.current_rank.staking_enabled ? <>
          <button
            onClick={stake}
            disabled={stakeLoading || unstakeLoading}
            className="btn_primary w-full text-[0.875rem]! font-medium text-white transition-colors hover:bg-[#0066cc] h-[3rem] disabled:opacity-60 py-0! px-4! leading-[1.2]"
          >
            {stakeLoading ? <Spinner size={6} className="m-auto" /> : "Stake"}
          </button>
          <button
            onClick={unstake}
            disabled={stakeLoading || unstakeLoading}
            className="btn_primary w-full text-[0.875rem]! font-medium text-white transition-colors hover:bg-[#0066cc] h-[3rem] disabled:opacity-60 py-0! px-4! leading-[1.2]"
          >
            {unstakeLoading ? <Spinner size={6} className="m-auto" /> : "Unstake"}
          </button>
        </> : (

          <button
            disabled
            className="btn_primary w-full text-[0.875rem]! font-medium text-white transition-colors hover:bg-[#0066cc] h-[3rem] disabled:opacity-60 py-0! px-4! leading-[1.2]"
          >
            Must be at least bronze tier to stake
          </button>
        )}
      </div>
    </>
  )
}

export default StakeTab