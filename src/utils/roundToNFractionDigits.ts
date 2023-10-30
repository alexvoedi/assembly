export default function roundToNFractionDigits(value: number, n: number = 2): number {
  const log10 = value ? Math.floor(Math.log10(value)) : 0

  const divisor = log10 < 0 ? 10 ** ((n - 1) - log10) : 10 ** n

  const result = Math.round(value * divisor) / divisor

  return result
}
