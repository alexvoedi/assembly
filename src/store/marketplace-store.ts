import type { RemovableRef } from '@vueuse/core'
import { defineStore } from 'pinia'
import type { ItemId } from '../data/items/ItemId'
import { TradeStrategyId } from '../data/marketplace/TradeStrategyId'
import { initMarketValues } from '../functions/MarketValue'
import { Items } from '../data/items/Items'
import { useInventoryStore } from './inventory-store'
import type { TradeStrategyData } from '@/interfaces/TradeStrategy'

type MarketplaceStore = RemovableRef<{
  prices: Record<ItemId, {
    last: number
    current: number
  }>
  strategies: Partial<Record<ItemId, {
    active: boolean
    data: TradeStrategyData
  }>>
}>

export const useMarketplaceStore = defineStore('marketplace-store', {
  state: (): MarketplaceStore => useLocalStorage('marketplace-store', {
    prices: initMarketValues(),
    strategies: {},
  }),

  actions: {
    addTradeStrategy(tradeStrategyData: TradeStrategyData) {
      this.strategies[tradeStrategyData.itemId] = {
        active: true,
        data: tradeStrategyData,
      }
    },

    isStrategyActive(itemId: ItemId) {
      const tradeStrategy = this.strategies[itemId]

      if (!tradeStrategy)
        return false

      return tradeStrategy.active
    },

    toggleStrategyActive(itemId: ItemId) {
      const tradeStrategy = this.strategies[itemId]

      if (!tradeStrategy)
        throw new Error(`Tried to toggle strategy ${itemId} but it doesn't exist.`)

      tradeStrategy.active = !tradeStrategy.active
    },

    removeTradeStrategy(itemId: ItemId) {
      delete this.strategies[itemId]
    },

    sellItem(itemId: ItemId, amount: number, mustHaveEnough: boolean = false) {
      const inventoryStore = useInventoryStore()

      const inventoryItem = inventoryStore.getItem(itemId)

      if (!inventoryItem)
        throw new Error(`Tried to sell ${amount} of ${itemId} but it doesn't exist.`)

      const difference = inventoryItem.quantity - amount

      if (mustHaveEnough && difference < 0)
        throw new Error(`Tried to sell ${amount} of ${itemId} but only ${inventoryItem.quantity} available.`)

      const actualQuantity = difference >= 0 ? amount : inventoryItem.quantity

      inventoryStore.removeItem(itemId, actualQuantity)

      const price = this.prices[itemId].current

      inventoryStore.addMoney(price * actualQuantity)
    },

    executeStrategyByItemId(itemId: ItemId) {
      const inventoryStore = useInventoryStore()

      const tradeStrategy = this.strategies[itemId]

      if (!tradeStrategy)
        return

      if (!tradeStrategy.active)
        return

      const strategyData = tradeStrategy.data

      switch (strategyData.strategyId) {
        case TradeStrategyId.SellUntil: {
          const inventoryItem = inventoryStore.getItem(strategyData.itemId)

          if (!inventoryItem)
            break

          const difference = inventoryItem.quantity - strategyData.quantity

          if (difference >= 0)
            this.sellItem(strategyData.itemId, difference + 1)

          break
        }

        case TradeStrategyId.SellAll: {
          const inventoryItem = inventoryStore.getItem(strategyData.itemId)

          if (!inventoryItem)
            break

          this.sellItem(strategyData.itemId, inventoryItem.quantity)

          break
        }
      }
    },

    executeStrategies() {
      const tradeStrategies = Object.values(this.strategies)

      tradeStrategies.forEach((tradeStragegy) => {
        this.executeStrategyByItemId(tradeStragegy.data.itemId)
      })
    },

    resetStore() {
      this.prices = initMarketValues()

      this.strategies = {}
    },

    getStrategiesArray() {
      return Object.values(this.strategies)
    },

    updateMarketValues() {
      Object.values(Items).forEach((item) => {
        // the market value should be between min and max
        // the market value should be normally distributed around the average
        // the market value should change by a small amount delta

        const marketValue = this.prices[item.id]

        const { min, max } = item.marketValue

        const delta = (max - min) / 6

        const newMarketValue = marketValue.current + (Math.random() * delta - delta / 2)

        marketValue.last = marketValue.current

        marketValue.current = Math.min(Math.max(newMarketValue, min), max)
      })
    },
  },
})
