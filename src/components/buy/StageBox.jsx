import { useMemo } from "react"
import { useApiState } from "../../presale-gg/stores/api.store"
import { formatDollar, formatNumber, minMax, parseNum } from "../../presale-gg/util"

const StageBox = () => {
  const { stage, info } = useApiState()

  const stageFrac = useMemo(() => {
    if (!stage) return 1
    if (stage.in_overflow_phase) {
      return 1 + parseNum(stage.overflow_tokens_sold) / parseNum(stage.next_stage_target_tokens)
    }
    return parseNum(stage?.cumulative_usd_raised) / parseNum(stage?.next_stage_target_usd ?? 1)
  }, [stage])

  const limitedStageFrac = useMemo(() => {
    return minMax(stageFrac, 0, 1)
  }, [stageFrac])

  return (
    <div
      className="flex flex-col gap-2 rounded-[8px] px-[16px] py-[8px] bg-[#F5F5F5]"
      style={{ border: '1px solid rgba(0, 0, 0, 0.10)' }}
    >
      <h2 className="heading-two !text-center !font-[500] !leading-[100%] md:!text-[32px] !font-[Helvetica Neue Medium Extended]">
        {formatDollar(parseNum(stage?.cumulative_usd_raised))}
      </h2>
      <div className="relative h-[10px] w-full rounded-full bg-gray-200 mb-1">
        <div
          className="relative h-3 rounded-full bg-[#0080ED] transition-all duration-300"
          style={{ width: `${limitedStageFrac * 100}%` }}
        />
      </div>
      <div className="h-[1px] bg-[#D4D4D4]" />
      <div className="mb-1 flex items-center justify-between text-[10px] font-[Inter] !font-[700] text-[#7B7B7B]">
        <div className="flex-1">
          {Math.floor(limitedStageFrac * 100 * 100) / 100}% of softcap raised
        </div>
        <h5 className="flex-1 text-center">{formatNumber(parseNum(info?.holders))} Holders</h5>
        <h5 className=" flex-1 text-right">{formatDollar(parseNum(stage?.next_stage_target_usd))}</h5>
      </div>
    </div>
  )
}

export default StageBox