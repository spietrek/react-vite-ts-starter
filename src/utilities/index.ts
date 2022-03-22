export const timeout = (ms: number): Promise<unknown> => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

export const formatNumber = (value: number): string => {
  if (value > 1000000) {
    return `${(value / 1000000).toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}M`
  }

  if (value > 10000 && value < 1000000) {
    return `${(value / 1000).toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    })}K`
  }

  if (value > 0 && value < 10000) {
    return value % 1 !== 0 ? value.toFixed(2) : value.toString()
  }

  if (value < 10000) {
    return `${value.toLocaleString('en', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`
  }

  return value.toString()
}
