import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { ItemId } from '../data/items/ItemId'
import { useInventoryStore } from './inventory-store'

describe('inventory-store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('getItem', () => {
    it('should throw an error if the item does not exist', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.getItem('fake-item' as any)).toThrow()
      expect(() => inventoryStore.getItem(ItemId.Wood)).toThrow()
    })
  })

  describe('addItem', () => {
    it('should add an item to the inventory', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Wood, 123)

      expect(inventoryStore.items).toEqual({
        [ItemId.Wood]: {
          quantity: 123,
          totalQuantity: 123,
        },
      })
    })

    it('should throw if the item is not a valid quantity', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.addItem(ItemId.Wood, -1)).toThrow()
      expect(() => inventoryStore.addItem(ItemId.Wood, 0)).not.toThrow()
      expect(() => inventoryStore.addItem(ItemId.Wood, 1.1)).toThrow()
      expect(() => inventoryStore.addItem(ItemId.Wood, 1)).not.toThrow()
    })

    it('should throw if the item quantity is larger than the max item quantity', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.addItem(ItemId.Wood, 10_001)).toThrow()
      expect(() => inventoryStore.addItem(ItemId.Wood, 10_000)).not.toThrow()
    })
  })

  describe('hasItem', () => {
    it('should check if the item exists', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)

      expect(inventoryStore.hasItem(ItemId.Wood)).toBe(false)
      expect(inventoryStore.hasItem(ItemId.Water)).toBe(true)
    })
  })

  describe('hasItems', () => {
    it('should return true if the items exist', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)
      inventoryStore.addItem(ItemId.Wheat, 1)

      expect(inventoryStore.hasItems([ItemId.Water])).toBe(true)
      expect(inventoryStore.hasItems([ItemId.Water, ItemId.Wheat])).toBe(true)
    })

    it('should return false if at least one item does not exist', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)
      inventoryStore.addItem(ItemId.Wheat, 1)

      expect(inventoryStore.hasItems([ItemId.Wood])).toBe(false)
      expect(inventoryStore.hasItems([ItemId.Water, ItemId.Wood])).toBe(false)
    })
  })

  describe('hasQuantityOfItem', () => {
    it('should return true if the item exists and has the quantity', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)

      expect(inventoryStore.hasQuantityOfItem(ItemId.Water, 123)).toBe(true)
    })

    it('should return false if the item exists and does not have the quantity', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)

      expect(inventoryStore.hasQuantityOfItem(ItemId.Water, 124)).toBe(false)
    })

    it('should throw if the item does not exist', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.hasQuantityOfItem(ItemId.Water, 123)).toThrow()
    })
  })

  describe('hasQuantityOfItems', () => {
    it('should return true if the items exist and have the quantity', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)
      inventoryStore.addItem(ItemId.Wheat, 1)

      expect(inventoryStore.hasQuantityOfItems([{ id: ItemId.Water, quantity: 123 }, {
        id: ItemId.Wheat,
        quantity: 1,
      }])).toBe(true)
      expect(
        inventoryStore.hasQuantityOfItems([
          { id: ItemId.Water, quantity: 123 },
          { id: ItemId.Wheat, quantity: 1 },
        ]),
      ).toBe(true)
    })

    it('should return false if at least one item does not have the required quantity', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)
      inventoryStore.addItem(ItemId.Wheat, 1)

      expect(inventoryStore.hasQuantityOfItems([{ id: ItemId.Water, quantity: 124 }, { id: ItemId.Wheat, quantity: 2 }])).toBe(false)

      expect(
        inventoryStore.hasQuantityOfItems([
          { id: ItemId.Water, quantity: 123 },
          { id: ItemId.Wheat, quantity: 2 },
        ]),
      ).toBe(false)
    })

    it('should throw if at least one item does not exist', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)

      expect(() => inventoryStore.hasQuantityOfItems([{ id: ItemId.Water, quantity: 123 }, {
        id: ItemId.Wheat,
        quantity: 1,
      }])).toThrow()
    })
  })

  describe('removeItem', () => {
    it('should remove an item from the inventory', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)

      inventoryStore.removeItem(ItemId.Water, 123)

      expect(inventoryStore.items).toEqual({
        [ItemId.Water]: {
          quantity: 0,
          totalQuantity: 123,
        },
      })
    })

    it('should throw if the item is not a valid quantity or does not exist', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.removeItem(ItemId.Water, -1)).toThrow()
      expect(() => inventoryStore.removeItem(ItemId.Water, 0)).toThrow()
      expect(() => inventoryStore.removeItem(ItemId.Water, 1.1)).toThrow()
    })

    it('should throw if the item does not exist', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.removeItem(ItemId.Water, 123)).toThrow()
    })

    it('should throw if the item does not have the quantity', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)

      expect(() => inventoryStore.removeItem(ItemId.Water, 124)).toThrow()
    })
  })

  describe('removeItems', () => {
    it('should remove items from the inventory', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)
      inventoryStore.addItem(ItemId.Wheat, 1)

      inventoryStore.removeItems([{ id: ItemId.Water, quantity: 123 }, { id: ItemId.Wheat, quantity: 1 }])

      expect(inventoryStore.items).toEqual({
        [ItemId.Water]: {
          quantity: 0,
          totalQuantity: 123,
        },
        [ItemId.Wheat]: {
          quantity: 0,
          totalQuantity: 1,
        },
      })
    })

    it('should throw if the item is not a valid quantity or does not exist', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.removeItems([{ id: ItemId.Water, quantity: -1 }])).toThrow()
      expect(() => inventoryStore.removeItems([{ id: ItemId.Water, quantity: 0 }])).toThrow()
      expect(() => inventoryStore.removeItems([{ id: ItemId.Water, quantity: 1.1 }])).toThrow()
    })

    it('should throw if the item does not exist', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.removeItems([{ id: ItemId.Water, quantity: 123 }])).toThrow()
    })

    it('should throw if the item does not have the quantity', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)

      expect(() => inventoryStore.removeItems([{ id: ItemId.Water, quantity: 124 }])).toThrow()
    })
  })

  describe('hasEnoughMoney', () => {
    it('should return true if the player has enough money', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.money = 123

      expect(inventoryStore.hasEnoughMoney(123)).toBe(true)
    })

    it('should return false if the player does not have enough money', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.money = 123

      expect(inventoryStore.hasEnoughMoney(124)).toBe(false)
    })
  })

  describe('addMoney', () => {
    it('should add money to the player', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addMoney(123)

      expect(inventoryStore.money).toBe(123)
    })

    it('should throw if the amount is not positive', () => {
      const inventoryStore = useInventoryStore()

      expect(() => inventoryStore.addMoney(-1)).toThrow()
    })
  })

  describe('removeMoney', () => {
    it('should remove money from the player', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.money = 123

      inventoryStore.removeMoney(123)

      expect(inventoryStore.money).toBe(0)
    })

    it('should throw if the player does not have enough money', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.money = 123

      expect(() => inventoryStore.removeMoney(124)).toThrow()
    })
  })

  describe('resetStore', () => {
    it('should reset the store', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.money = 123
      inventoryStore.addItem(ItemId.Water, 123)

      inventoryStore.resetStore()

      expect(inventoryStore.money).toBe(0)
      expect(inventoryStore.items).toEqual({})
    })
  })

  describe('getTotalItems', () => {
    it('should return the total items', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)
      inventoryStore.addItem(ItemId.Wheat, 1)

      expect(inventoryStore.getTotalItems()).toBe(124)
    })
  })

  describe('isFull', () => {
    it('should return true if the inventory is full', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 10_000)

      expect(inventoryStore.isFull()).toBe(true)
    })

    it('should return false if the inventory is not full', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 9999)

      expect(inventoryStore.isFull()).toBe(false)
    })
  })

  describe('getFilledPercentage', () => {
    it('should return the filled percentage', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)

      expect(inventoryStore.getFilledPercentage()).toBe(0.0123)
    })
  })

  describe('getItemArray', () => {
    it('should return the items as an array', () => {
      const inventoryStore = useInventoryStore()

      inventoryStore.addItem(ItemId.Water, 123)
      inventoryStore.addItem(ItemId.Wheat, 1)

      expect(inventoryStore.getItemArray()).toEqual([
        {
          id: ItemId.Water,
          quantity: 123,
          totalQuantity: 123,
        },
        {
          id: ItemId.Wheat,
          quantity: 1,
          totalQuantity: 1,
        },
      ])
    })
  })
})
