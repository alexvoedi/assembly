import { describe, expect, it } from 'vitest'
import roundToNFractionDigits from './roundToNFractionDigits'

describe('roundToNFractionDigits', () => {
  it('should round to 2 fraction digits by default', () => {
    expect(roundToNFractionDigits(123)).toBe(123)
    expect(roundToNFractionDigits(12.999)).toBe(13)
    expect(roundToNFractionDigits(1)).toBe(1)
    expect(roundToNFractionDigits(1.2)).toBe(1.2)
    expect(roundToNFractionDigits(1.23)).toBe(1.23)
    expect(roundToNFractionDigits(1.234)).toBe(1.23)
    expect(roundToNFractionDigits(1.235)).toBe(1.24)
    expect(roundToNFractionDigits(0.236)).toBe(0.24)
    expect(roundToNFractionDigits(0.0235)).toBe(0.024)
    expect(roundToNFractionDigits(0.00235)).toBe(0.0024)
    expect(roundToNFractionDigits(0.000999)).toBe(0.001)
  })

  it('should round to 3 fraction digits', () => {
    expect(roundToNFractionDigits(123, 3)).toBe(123)
    expect(roundToNFractionDigits(12.999, 3)).toBe(12.999)
    expect(roundToNFractionDigits(12.9999, 3)).toBe(13)
    expect(roundToNFractionDigits(0.9999, 3)).toBe(1)
    expect(roundToNFractionDigits(0.000123456, 3)).toBe(0.000123)
  })
})
