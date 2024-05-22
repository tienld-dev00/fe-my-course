export const nFormatter = (num: number, digits: number) => {
  const lookup = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'G' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'k' },
    { value: 1, symbol: '' }
  ]

  const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/
  const item = lookup.find((item: { value: number; symbol: string }) => num >= item.value)
  return item ? (num / item.value).toFixed(digits).replace(regexp, '').concat(item.symbol) : '0'
}