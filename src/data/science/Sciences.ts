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
    requirements: {
      sciences: [],
    },
    results: {
      blueprints: [BlueprintId.IronOreExtraction],
      sciences: [],
      effects: [],
    },
  },
  [ScienceId.InventoryUpgrade1]: {
    id: ScienceId.InventoryUpgrade1,
    name: 'Inventory Upgrade 1',
    description: 'Increases the inventory size by 25.0000.',
    researchTime: 60 * 60 * 1000,
    cost: {
      money: 10_000,
    },
    requirements: {
      sciences: [],
    },
    results: {
    },
  },
}
