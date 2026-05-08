import { useMemo } from "react"
import { useApiState } from "../../presale-gg/stores/api.store"
import { formatDollar, formatNumber, minMax, parseNum } from "../../presale-gg/util"
import Countdown from "./Countdown"
import { Loadable } from "./Loader"
import clsx from "clsx"
import { BanIcon, ClockIcon, InfoIcon, LockKeyholeIcon, TrendingUpIcon } from "lucide-react"

const StageBox = () => {
  const { stage, info, presaleEnded } = useApiState()

  const stageFrac = useMemo(() => {
    if (presaleEnded) return 1
    if (!stage) return 0
    return parseNum(stage?.cumulative_usd_raised) / parseNum(stage?.next_stage_target_usd ?? 1)
  }, [stage, presaleEnded])

  const limitedStageFrac = useMemo(() => {
    return minMax(stageFrac, 0, 1)
  }, [stageFrac])

  return (
    <div
      className={clsx("flex flex-col gap-2 rounded-[8px] px-[16px] py-[8px] bg-[#F5F5F5] min-h-[7rem] justify-center")}
      style={{ border: '1px solid rgba(0, 0, 0, 0.10)' }}
    >
      <Loadable
        component="h2"
        className="heading-two !text-center !font-[500] !leading-[100%] md:!text-[32px] mx-auto"
        style={{ "-webkit-text-stroke": "2px #0000004D", paintOrder: "stroke fill" }}
      >
        {presaleEnded ? "Presale Ended" : formatDollar(parseNum(stage?.cumulative_usd_raised), true)}
      </Loadable>
      {!presaleEnded && <>
        {!stage?.in_overflow_phase && <>
          <div
            className="relative h-[10px] w-full rounded-full overflow-hidden isolate shrink-0"
          >
            <div className="rounded-full absolute inset-0 bg-red border border-transparent z-[-1]"
              style={{
                background: "linear-gradient(to bottom, #000 0%, #000 100%) content-box, linear-gradient(#646464 0%, black 100%) border-box",
              }}>
              <div className="absolute top-[-1px] left-[-1px] w-[calc(100%+2px)] h-[calc(100%+2px)] z-[10]" style={{
                boxShadow: "0px 2.74px 12.99px 0px #FFFFFF40 inset, 0px 2.74px 41.03px 0px #FFFFFF14 inset, 0px -2.74px 6.84px 0px #FFFFFF94 inset",
              }} />
            </div>
            <div
              className="h-full relative transition-all duration-300 rounded-l-full border border-transparent border-r-0"
              style={{
                width: `${limitedStageFrac * 100}%`,
                background: "linear-gradient(#0080ED 0%, #0080ED 100%) content-box, linear-gradient(to bottom, #62AFF4 0%, #0080ED 100%) border-box",
              }}
            >
              <div className="absolute top-[-1px] left-[-1px] w-[calc(100%+1px)] h-[calc(100%+2px)] z-[10]" style={{
                boxShadow: "0px 2.74px 12.99px 0px #FFFFFF40 inset, 0px 2.74px 41.03px 0px #FFFFFF14 inset, 0px -2.74px 6.84px 0px #FFFFFF94 inset",
              }} />
            </div>
          </div>
          <div className="h-[1px] shrink-0 bg-[#D4D4D4]" />
          <div className="mb-1 flex items-center justify-between text-[10px] font-[Inter] !font-[700] text-[#7B7B7B] whitespace-nowrap gap-1">
            <p className="flex-1 justify-center">
              <Loadable component="span">
                {Math.floor(stageFrac * 100 * 100) / 100}% of softcap raised
              </Loadable>
            </p>
            <div className="w-[1px] self-stretch bg-[#D3D3D3]" />
            <p className="flex-[0.75] text-center flex justify-center items-center gap-1 md:flex-1">
              <Loadable component="span">{formatNumber(parseNum(info?.holders))} Holders</Loadable>
            </p>
            <div className="w-[1px] self-stretch bg-[#D3D3D3]" />
            <p className=" flex-1 justify-center flex items-center gap-1">
              <Loadable component="span">
                Goal: {formatDollar(parseNum(stage?.next_stage_target_usd), true, 0, 0)}
              </Loadable>
            </p>
          </div>
        </>}
        {stage?.in_overflow_phase && <div className="flex flex-col gap-1">
          <div className="text-[#DA313C] font-bold flex items-center justify-center gap-1">
            <LockKeyholeIcon size={18} />
            FINAL 7-DAY PRICE LOCK
            <LockKeyholeIcon size={18} />
          </div>
          <p className="text-[0.75rem] text-center mx-2">
            {stage?.stage_name} sold out. You still have 7 days to buy at the last stage price before the next stage price goes live.
          </p>
          <p className="flex gap-2 items-center justify-center font-bold uppercase text-[#007FEC] text-center text-[0.8125rem] before:content-[''] before:flex-1 before:h-px before:bg-[#D3D3D3] after:content-[''] after:flex-1 after:h-px after:bg-[#D3D3D3]">
            <ClockIcon size={16} />
            Price Increase In
          </p>
          <Countdown endDate={new Date(stage?.overflow_end ?? 0)} />
          <div className="flex items-center gap-2 border border-[#D3D3D3] rounded-sm px-2 py-1.5">
            <div className="flex gap-2 items-center justify-center text-[0.75rem] leading-[1.2] flex-1">
              <BanIcon size={20} color="#DA313C" />
              {stage?.stage_name} sold&nbsp;out
            </div>
            <div className="self-stretch w-px bg-[#D3D3D3]" />
            <div className="flex gap-2 items-center justify-center text-[0.75rem] leading-[1.2] flex-1">
              <LockKeyholeIcon size={20} color="#007FEC" />
              Locked&nbsp;Price: {formatDollar(parseNum(stage?.token_price), true, 0, 4)}
            </div>
            <div className="self-stretch w-px bg-[#D3D3D3]" />
            <div className="flex gap-2 items-center justify-center text-[0.75rem] leading-[1.2] flex-1">
              <TrendingUpIcon size={20} color="#269252" />
              Next&nbsp;price: {formatDollar(parseNum(stage?.next_stage_price), true, 0, 4)}
            </div>
          </div>
          <p className="text-black/50 text-[0.625rem] text-center max-w-64 mx-auto mt-1"><InfoIcon size="1.2em" className="inline-block -translate-y-0.5" /> When this timer ends, the token price automatically moves to the next stage price.</p>
        </div>}
      </>}
    </div>
  )
}

export default StageBox