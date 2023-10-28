import { describe, expect, it } from 'vitest'
import { Items } from '../data/items/Items'
import { initMarketValues } from './MarketValue'

describe('marketValue', () => {
  describe('initMarketValues', () => {
    it('should have one entry per item', () => {
      const marketValues = initMarketValues()

      expect(Object.keys(marketValues).length).toBe(Object.keys(Items).length)
    })

    it('should have the average value of wood as the current price', () => {
      const marketValues = initMarketValues()

      expect(marketValues.wood.current).toBe(Items.wood.marketValue.average)
    })

    it('should have the average value of wood as the last price', () => {
      const marketValues = initMarketValues()

      expect(marketValues.wood.last).toBe(Items.wood.marketValue.average)
    })
  })
})
