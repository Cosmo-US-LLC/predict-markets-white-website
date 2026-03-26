export const parseNum = (num) => {
  if (typeof num === 'number') return num
  return Number.parseFloat(num || '0')
}

export const roundToDP = (num, decimalPlaces) => {
  return Math.floor(num * 10 ** decimalPlaces) / 10 ** decimalPlaces
}

export const formatDollar = (num, addSymbol = true, minDp = 2, maxDp = 2) => {
  if (typeof num === 'string') num = Number.parseFloat(num)
  const original = num
  num = Math.abs(num)
  const str = num.toLocaleString('en-GB', {
    minimumFractionDigits: minDp,
    maximumFractionDigits: maxDp,
  })
  return addSymbol ? `${original < 0 ? '-' : ''}$${str}` : str
}

export const formatLargeNumber = (num, precisionCutoff = 1000, minDP = 2, maxDP = 2) => {
  if (num < precisionCutoff) {
    return num.toLocaleString('en-GB', {
      minimumFractionDigits: minDP,
      maximumFractionDigits: maxDP,
    })
  }
  const letterMap = { K: 1000, M: 1000000, B: 1000000000 }
  let suffix = ''
  let val = num
  for (const [letter, div] of Object.entries(letterMap)) {
    if (num / div >= 1 && num / div < 1000) {
      suffix = letter
      val = num / div
      break
    }
  }
  return `${roundToDP(val, maxDP)}${suffix}`
}
