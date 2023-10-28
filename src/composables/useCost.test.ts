import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { ItemId } from '../data/items/ItemId'
import { useInventoryStore } from '../store/inventory-store'
import { useEnergyStore } from '../store/energy-store'
import { useCost } from './useCost'

describe('useCost', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    const inventoryStore = useInventoryStore()
    const energyStore = useEnergyStore()

    inventoryStore.addItem(ItemId.Wood, 1)
    inventoryStore.addMoney(100)
    energyStore.addEnergy(42)
  })

  describe('canAfford', () => {
    it('can afford nothing', () => {
      const { canAfford } = useCost()

      expect(canAfford()).toBe(true)
    })

    it('can afford items, energy and mones', () => {
      const { canAfford } = useCost()

      expect(canAfford({
        energy: 16,
        money: 100,
        items: {
          [ItemId.Wood]: {
            id: ItemId.Wood,
            quantity: 1,
          },
        },
      })).toBe(true)
    })

    it('cannot afford energy', () => {
      const { canAfford } = useCost()

      expect(() => {
        canAfford({
          energy: 100,
        })
      }).toThrow('Cannot afford: not enough energy')
    })

    it('cannot afford money', () => {
      const { canAfford } = useCost()

      expect(() => {
        canAfford({
          money: 1000,
        })
      }).toThrow('Cannot afford: not enough money')
    })

    it('cannot afford items', () => {
      const { canAfford } = useCost()

      expect(() => {
        canAfford({
          items: {
            [ItemId.Wood]: {
              id: ItemId.Wood,
              quantity: 100,
            },
          },
        })
      }).toThrow('Cannot afford: not enough items')
    })
  })

  describe('payCost', () => {
    it('pay nothing', () => {
      const { payCost } = useCost()

      payCost()

      const inventoryStore = useInventoryStore()
      const energyStore = useEnergyStore()

      expect(inventoryStore.items.wood?.quantity).toBe(1)
      expect(inventoryStore.money).toBe(100)
      expect(energyStore.energy).toBe(42)
    })

    it('pay items, energy and money', () => {
      const { payCost } = useCost()

      payCost({
        energy: 16,
        money: 100,
        items: {
          [ItemId.Wood]: {
            id: ItemId.Wood,
            quantity: 1,
          },
        },
      })

      const inventoryStore = useInventoryStore()
      const energyStore = useEnergyStore()

      expect(inventoryStore.items.wood?.quantity).toBe(0)
      expect(inventoryStore.money).toBe(0)
      expect(energyStore.energy).toBe(26)
    })
  })
})
