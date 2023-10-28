import { describe, expect, it } from 'vitest'
import { isQuantityOrThrow } from './Quantity'

describe('quantity', () => {
  it('isQuantityOrThrow', () => {
    expect(() => isQuantityOrThrow(-1)).toThrow()
    expect(() => isQuantityOrThrow(0)).not.toThrow()
    expect(() => isQuantityOrThrow(1.1)).toThrow()
    expect(() => isQuantityOrThrow(1)).not.toThrow()
  })

  it('isPositiveNumberOrThrow', () => {
    expect(() => isQuantityOrThrow(-1)).toThrow()
    expect(() => isQuantityOrThrow(0)).not.toThrow()
    expect(() => isQuantityOrThrow(1.1)).toThrow()
    expect(() => isQuantityOrThrow(1)).not.toThrow()
  })

  it('isIntegerOrThrow', () => {
    expect(() => isQuantityOrThrow(-1)).toThrow()
    expect(() => isQuantityOrThrow(0)).not.toThrow()
    expect(() => isQuantityOrThrow(1.1)).toThrow()
    expect(() => isQuantityOrThrow(1)).not.toThrow()
  })
})
