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
    expect(getBlueprintItemIds(BlueprintId.OreMining)).toEqual([ItemId.Ore])
  })

  describe('addBlueprintItemsToInventory', () => {
    it('should add 1 wood to the inventory', () => {
      const inventoryStore = useInventoryStore()

      const { addBlueprintItemsToInventory } = useBlueprint()

      const blueprint = Blueprints[BlueprintId.Logging]

      addBlueprintItemsToInventory(blueprint)

      expect(inventoryStore.items).toHaveProperty(ItemId.Wood)
      expect(inventoryStore.items.wood?.quantity).toBeGreaterThanOrEqual(50)
      expect(inventoryStore.items.wood?.quantity).toBeLessThanOrEqual(300)
    })

    it('should add 1 ore to the inventory', () => {
      const inventoryStore = useInventoryStore()

      const { addBlueprintItemsToInventory } = useBlueprint()

      addBlueprintItemsToInventory(Blueprints[BlueprintId.OreMining])

      expect(inventoryStore.items).toHaveProperty(ItemId.Ore)
      expect(inventoryStore.items.ore?.quantity).toBeGreaterThanOrEqual(1)
      expect(inventoryStore.items.ore?.quantity).toBeLessThanOrEqual(10)
    })
  })
})
