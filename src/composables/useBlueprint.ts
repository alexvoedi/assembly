import type { BlueprintId } from '../data/blueprints/BlueprintId'
import { Blueprints } from '../data/blueprints/Blueprints'
import type { ItemId } from '../data/items/ItemId'
import type { Blueprint } from '../interfaces/Blueprint'
import { useInventoryStore } from '../store/inventory-store'

export function useBlueprint() {
  const inventoryStore = useInventoryStore()

  const getBlueprintItemIds = (blueprintId: BlueprintId) => {
    const { items } = Blueprints[blueprintId]

    return Object.keys(items) as ItemId[]
  }

  const addBlueprintItemsToInventory = (blueprint: Blueprint) => {
    Object.values(blueprint.items).forEach((item) => {
      if (Math.random() <= item.probability) {
        if (Array.isArray(item.quantity)) {
          const [min, max] = item.quantity

          const quantity = Math.floor(Math.random() * (max - min + 1)) + min

          inventoryStore.addItem(item.id, quantity)
        }
        else {
          inventoryStore.addItem(item.id, item.quantity)
        }
      }
    })
  }

  return {
    getBlueprintItemIds,
    addBlueprintItemsToInventory,
  }
}
