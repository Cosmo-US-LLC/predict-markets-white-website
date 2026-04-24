import { useMemo } from "react"
import { useApiState } from "../../presale-gg/stores/api.store"
import { formatDollar, formatNumber, minMax, parseNum } from "../../presale-gg/util"
import Countdown from "./Countdown"
import { Loadable } from "./Loader"
import clsx from "clsx"

const StageBox = () => {
  const { stage, info, presaleEnded } = useApiState()

  const stageFrac = useMemo(() => {
    if (presaleEnded) return 1
    if (!stage) return 0
    if (stage.in_overflow_phase) {
      return parseNum(stage.overflow_tokens_sold) / parseNum(stage.next_stage_target_tokens)
    }
    return parseNum(stage?.cumulative_usd_raised) / parseNum(stage?.next_stage_target_usd ?? 1)
  }, [stage, presaleEnded])

  const limitedStageFrac = useMemo(() => {
    return minMax(stageFrac, 0, 1)
  }, [stageFrac])

  return (
    <div
      className={clsx("flex flex-col gap-2 rounded-[8px] px-[16px] py-[8px] bg-[#F5F5F5] h-[7rem] justify-center")}
      style={{ border: '1px solid rgba(0, 0, 0, 0.10)' }}
    >
      <Loadable
        component="h2"
        className="heading-two !text-center !font-[500] !leading-[100%] md:!text-[32px] mx-auto"
        style={{ "-webkit-text-stroke": "2px #0000004D", paintOrder: "stroke fill" }}
      >
        {presaleEnded ? "Presale Ended" : formatDollar(parseNum(stage?.cumulative_usd_raised))}
      </Loadable>
      {!presaleEnded && <>
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
        {stage?.in_overflow_phase && <Countdown endDate={new Date(stage?.overflow_end ?? 0)} />}
        <div className="h-[1px] shrink-0 bg-[#D4D4D4]" />
        <div className="mb-1 flex items-center justify-between text-[10px] font-[Inter] !font-[700] text-[#7B7B7B] whitespace-nowrap gap-1">
          <p className="flex-1 justify-center">
            <Loadable component="span">
              {Math.floor(limitedStageFrac * 100 * 100) / 100}% of {stage?.in_overflow_phase ? "overflow" : "softcap"} raised
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
    </div>
  )
}

export default StageBox