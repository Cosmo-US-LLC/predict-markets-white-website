import clsx from 'clsx'
import { zeroPad } from '../../presale-gg/util'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Loadable } from './Loader'

/**
 * @param {object} props
 * @param {Date} props.endDate
 * @param {() => void} [props.onEnd]
 */
const Countdown = ({ endDate, onEnd, ...others }) => {
  const [msDiff, setMsDiff] = useState(Math.max(endDate.getTime() - Date.now(), 0))

  useEffect(() => {
    const func = () => {
      setMsDiff(Math.max(endDate.getTime() - Date.now(), 0))
    }
    func()
    const interval = setInterval(func, 1000)
    return () => clearInterval(interval)
  }, [endDate])

  const countdownData = useMemo(() => {
    const data = [
      ['Days', 1000 * 60 * 60 * 24],
      ['Hours', 1000 * 60 * 60],
      ['Mins', 1000 * 60],
      ['Secs', 1000]
    ]

    const returnData = []

    data.forEach(([label, num], i) => {
      let currDiff = msDiff
      if (i > 0)
        returnData.slice(0, i).forEach(([_, currNum], i2) => {
          currDiff -= currNum * data[i2][1]
        })

      returnData.push([label, Math.floor(currDiff / num)])
    })

    return returnData.map(([key, val]) => [key, zeroPad(val, 2)])
  }, [msDiff])

  let calledBackRef = useRef(msDiff <= 0)
  useEffect(() => {
    if (msDiff <= 0 && !calledBackRef.current) {
      calledBackRef.current = true
      onEnd?.()
    } else if (calledBackRef.current && msDiff() > 0) {
      calledBackRef.current = false
    }
  }, [onEnd, msDiff])

  return (
    <div {...others} className={clsx("flex justify-between items-center", others.className)}>
      {countdownData.map((data, i) => (
        <React.Fragment key={i}>
          <div className="flex leading-[1] items-end gap-0.5 justify-center w-[5.5rem]">
            <Loadable component="p" length={1.5} className="text-[0.75rem] font-bold leading-[0.8] !text-[inherit]">{data[1]} {data[0]}</Loadable>
            {/* <Loadable component="p" length={3} className="text-[0.625rem] text-black/60 font-[600]"></Loadable> */}
          </div>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Countdown
