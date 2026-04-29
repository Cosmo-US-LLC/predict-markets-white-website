import { useMemo, useRef, useState } from "react"
import { useApiState, userLevelUp, useUserState } from "../../../presale-gg/stores"
import { copyText, formatDollar, formatLargeNumber, parseNum, truncateString } from "../../../presale-gg/util"
import { LISTING_PRICE } from "../../../presale-gg/constants"
import { getConfig, useAccount } from "../../../presale-gg/web3"
import { membershipCards } from "../../../data/getExtraRewardsData"
import clsx from "clsx"
import Spinner from "../Spinner"
import toast from "react-hot-toast"
import { api } from "../../../presale-gg/api"
import { disconnect } from "@wagmi/core"
import confetti from "canvas-confetti"
import Input from "../Input"

const DashboardTab = () => {
  const userData = useUserState()
  const { stage, presaleEnded } = useApiState()
  const accountData = useAccount()

  const stats = useMemo(() => {
    return [
      {
        label: "Owned Tokens",
        value: `${formatLargeNumber(
          parseNum(userData.user?.total_tokens)
        )} $PREDICT`,
      },
      !presaleEnded ? {
        label: "USD Value",
        value: `$${formatLargeNumber(
          parseNum(userData.user?.total_tokens) *
          parseNum(stage?.token_price)
        )}`,
      } : null,
      {
        value: `$${formatLargeNumber(
          parseNum(userData.user?.total_tokens) *
          LISTING_PRICE
        )}`,
        label: <>USD Value on Listing<br /><span className="text-[0.85em]">(based on listing value of {formatDollar(LISTING_PRICE)})</span></>
      }
    ].filter((stat) => stat !== null)
  }, [userData, stage, presaleEnded])

  const inputs = useMemo(() => {
    return [
      {
        label: "Referral Code",
        value: userData.user?.referral_code ?? "None",
      },
      {
        label: "Referral Link",
        value: `${window.location.origin}?referral_code=${userData.user?.referral_code ?? "None"}`,
      }
    ]
  }, [userData])

  const currentMembership = useMemo(() => {
    const membership = membershipCards.find((card) => card.tier.toLowerCase() === userData.rankData?.current_rank?.rank?.toLowerCase()) ?? null
    if (membership) return {
      ...membership,
      stakingApy: userData.rankData.current_rank?.staking_apy
    }
    return null
  }, [userData.rankData?.current_rank])

  const nextMembership = useMemo(() => {
    const index = membershipCards.findIndex((card) => card.tier.toLowerCase() === userData.rankData?.current_rank?.rank.toLowerCase())
    const nextIndex = index + 1
    if (index === membershipCards.length - 1) return null
    return {
      ...membershipCards[nextIndex],
      stakingApy: userData.rankData?.ranks?.[nextIndex + 1].staking_apy
    }
  }, [userData.rankData?.current_rank])

  console.log("MEMBERSHIP", currentMembership, userData.rankData?.current_rank)

  const rankUpButtonRef = useRef(null)
  const [rankUpLoading, setRankUpLoading] = useState(false)
  const rankUp = async () => {
    if (!accountData.address || !nextMembership) return
    setRankUpLoading(true)
    try {
      await userLevelUp()
      const bounds = rankUpButtonRef.current.getBoundingClientRect()
      confetti({
        origin: bounds ? {
          x: (bounds.x + bounds.width / 2) / window.innerWidth,
          y: (bounds.y + bounds.height / 2) / window.innerHeight
        } : null
      })
      toast.success("Successfully ranked up")
    } catch (err) {
      toast.error(api.getApiErrorMessage(err, "Error ranking up"))
    }
    setRankUpLoading(false)
  }
  console.log(currentMembership, nextMembership)

  return (
    <>
      <div className={clsx("grid grid-cols-2 gap-4", {
        "flex! flex-col": presaleEnded
      })}>
        {stats.map((stat) => (
          <div className="flex flex-col text-center p-2 h-16 justify-center gap-1.5 leading-none bg-[#F5F5F5] rounded-lg border border-black/10 last:odd:col-span-full">
            <p className="font-bold text-[0.875rem]">{stat.value}</p>
            <p className="text-[0.75rem] text-black/50 leading-[1.1]">{stat.label}</p>
          </div>
        ))}
      </div>
      <button
        onClick={async () => {
          const { config } = await getConfig()
          await disconnect(config)
          setTimeout(() => disconnect(config))
        }}
        className={"btn_primary w-full text-[0.875rem]! font-medium text-white transition-colors hover:bg-[#0066cc] h-[3rem] disabled:opacity-60 py-0! px-4! leading-[1.2] cursor-pointer"}
      >
        Disconnect Wallet
        <br />
        ({truncateString(accountData?.address ?? '', 15)})
      </button>
      {inputs.map((input) => (
        <Input key={input.label} label={input.label} readOnly value={input.value} buttonText="Copy" onButtonClick={() => copyText(input.value, "Copied " + input.label.toLowerCase())} />
      ))}
      <div className="flex flex-col gap-1">
        <div className="relative w-full flex p-4 gap-2 bg-[#F5F5F5] rounded-lg border border-black/10 text-black">
          <div className="flex flex-col gap-1.5 whitespace-nowrap">
            <p className="text-[0.875rem] font-bold" style={{ color: currentMembership?.shadowColor }}>
              {currentMembership ? `${currentMembership.tier} Tier` : 'No membership'}
            </p>
            {[
              { label: currentMembership ? `Staking Enabled (${(currentMembership.stakingApy)}% APY)` : "Staking Disabled", checked: currentMembership?.stakingEnabled ?? false },
              { label: nextMembership ? `${nextMembership?.stakingApy}% Staking APY` : "Highest staking APY", checked: !nextMembership },
              { label: `${currentMembership?.bonusPredictPercent ?? membershipCards[0].bonusPredictPercent}% $PREDICT Bonus`, checked: (currentMembership?.bonusPredictPercent ?? 0) > 0 },
              { label: `${currentMembership?.predictMarketsCredits ? formatDollar(parseNum(currentMembership?.predictMarketsCredits), true, 0, 0) : ""} PredictMarkets Credits`, checked: (currentMembership?.predictMarketsCredits ?? 0) > 0 },
              { label: "USDT Staking Rewards", checked: currentMembership?.usdtStakingRewards ?? false },
              { label: "Founder VIP Access", checked: currentMembership?.founderVipAccess ?? false },
            ].sort((a, b) => (a.checked ? 0 : 1) - (b.checked ? 0 : 1)).map((item) => (
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-sm w-5 h-5 flex items-center justify-center">
                  {item.checked ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6.63362 12.7521C6.63183 12.7521 6.62974 12.7521 6.62795 12.7521C6.55389 12.7506 6.48402 12.7189 6.43385 12.6646L1.31386 7.09726C1.22607 7.00171 1.21801 6.85778 1.29475 6.75296C1.3715 6.64845 1.51125 6.61262 1.6289 6.66756L6.315 8.86176C6.35442 8.88027 6.401 8.87131 6.43116 8.83996L13.5793 1.36901C13.6761 1.26778 13.8343 1.25673 13.9442 1.34392C14.0541 1.43112 14.0795 1.58759 14.0027 1.70494L6.89222 12.5977C6.88207 12.6135 6.87012 12.6278 6.85698 12.6413L6.82563 12.6726C6.77457 12.7234 6.70529 12.7521 6.63362 12.7521Z" fill="#0080ED"></path></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6.10156 13.1169L13.1736 6.04688M6.10156 6.04688L13.1736 13.1169" stroke="black" stroke-width="1.5" stroke-linecap="round"></path></svg>
                  )}
                </div>
                <p className="text-[0.75rem] font-[500]">{item.label}</p>
              </div>
            ))}
          </div>
          {currentMembership && (
            <img src={currentMembership.cardImage} alt="" className="max-w-30 self-start ml-auto grow-1 w-0" />
          )}
        </div>
      </div>
      <button
        ref={(el) => {
          rankUpButtonRef.current = el
        }}
        onClick={rankUp}
        disabled={userData.rankData?.usd_to_next_rank !== 0}
        className={clsx("btn_primary w-full text-[0.875rem]! font-medium text-white transition-colors hover:bg-[#0066cc] h-[3rem] disabled:opacity-60 py-0! px-4! leading-[1.2]", {
          "cursor-not-allowed!": userData.rankData?.usd_to_next_rank !== 0,
          "cursor-pointer!": userData.rankData?.usd_to_next_rank === 0,
        })}
      >
        {nextMembership
          ? rankUpLoading
            ? <Spinner size={6} className="m-auto" />
            : userData.rankData?.usd_to_next_rank === 0
              ? `Unlock ${nextMembership.tier} tier`
              : `Spend ${formatDollar(Math.ceil(parseNum(userData.rankData?.usd_to_next_rank)), true, 0, 0)} to unlock ${nextMembership.tier.toLowerCase()} tier`
          : "You are the highest tier"}
      </button>
    </>
  )
}

export default DashboardTab