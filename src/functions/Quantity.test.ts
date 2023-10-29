import { describe, expect, it } from 'vitest'
import { isInteger, isPositive, isQuantity } from './Quantity'

describe('quantity', () => {
  it('isQuantity', () => {
    expect(isQuantity(-1)).toBe(false)
    expect(isQuantity(1.1)).toBe(false)
    expect(isQuantity(0)).toBe(true)
    expect(isQuantity(1)).toBe(true)
  })

  it('isPositive', () => {
    expect(isPositive(-1)).toBe(false)
    expect(isPositive(1.1)).toBe(true)
    expect(isPositive(0)).toBe(true)
    expect(isPositive(1)).toBe(true)
  })

  it('isInteger', () => {
    expect(isInteger(1.1)).toBe(false)
    expect(isInteger(-1)).toBe(true)
    expect(isInteger(0)).toBe(true)
    expect(isInteger(1)).toBe(true)
  })
})
