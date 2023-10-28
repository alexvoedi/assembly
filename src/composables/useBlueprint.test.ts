import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { ItemId } from '../data/items/ItemId'
import { Blueprints } from '../data/blueprints/Blueprints'
import { BlueprintId } from '../data/blueprints/BlueprintId'
import { useInventoryStore } from '../store/inventory-store'
import { useBlueprint } from './useBlueprint'

describe('useBlueprint', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('getBlueprintItemIds', () => {
    const { getBlueprintItemIds } = useBlueprint()

    expect(getBlueprintItemIds(BlueprintId.Logging)).toEqual([ItemId.Wood])
    expect(getBlueprintItemIds(BlueprintId.OreMining)).toEqual([ItemId.Ore, ItemId.Wood])
  })

  describe('addBlueprintItemsToInventory', () => {
    it('should add 1 wood to the inventory', () => {
      const inventoryStore = useInventoryStore()

      const { addBlueprintItemsToInventory } = useBlueprint()

      addBlueprintItemsToInventory(Blueprints[BlueprintId.Logging])

      expect(inventoryStore.items).toEqual({
        [ItemId.Wood]: {
          quantity: 1,
          totalQuantity: 1,
        },
      })
    })

    it('should add 1 ore and 1 wood to the inventory', () => {
      const inventoryStore = useInventoryStore()

      const { addBlueprintItemsToInventory } = useBlueprint()

      addBlueprintItemsToInventory(Blueprints[BlueprintId.OreMining])

      expect(inventoryStore.items).toEqual({
        [ItemId.Ore]: {
          quantity: 1,
          totalQuantity: 1,
        },
        [ItemId.Wood]: {
          quantity: 1,
          totalQuantity: 1,
        },
      })
    })
  })
})
