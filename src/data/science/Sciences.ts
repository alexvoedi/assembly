import type { Science } from '../../interfaces/Science'
import { BlueprintId } from '../blueprints/BlueprintId'
import { ItemId } from '../items/ItemId'
import { ScienceId } from './ScienceId'

export const Sciences: Record<ScienceId, Science> = {
  [ScienceId.IronOreExtraction]: {
    id: ScienceId.IronOreExtraction,
    name: 'Iron Ore Extraction',
    description: 'Allows you to extract iron ore from ore.',
    researchTime: 10 * 1000,
    cost: {
      items: {
        [ItemId.Ore]: {
          id: ItemId.Ore,
          quantity: 50,
        },
      },
    },
    results: {
      blueprints: [BlueprintId.IronOreExtraction],
    },
  },
  [ScienceId.InventoryUpgrade1]: {
    id: ScienceId.InventoryUpgrade1,
    name: 'Inventory Upgrade 1',
    description: 'Increases the inventory size by 25.000.',
    researchTime: 60 * 60 * 1000,
    cost: {
      money: 10_000,
    },
    results: {
      stores: {
        inventoryStore: (inventoryStore) => {
          inventoryStore.value.maxItems += 25_000
        },
      },
    },
  },
  [ScienceId.MultiTasking1]: {
    id: ScienceId.MultiTasking1,
    name: 'Multi-Tasking 1',
    description: 'Increases the number of tasks you can do at the same time by 1.',
    researchTime: 30 * 60 * 1000,
    cost: {
      money: 1_000,
    },
    results: {
      stores: {
        productionStore: (productionStore) => {
          productionStore.value.maxProducing += 1
        },
      },
    },
  },
}
