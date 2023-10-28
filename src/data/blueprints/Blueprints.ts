import type { Blueprint } from '../../interfaces/Blueprint'
import { ItemId } from '../items/ItemId'
import { BlueprintId } from './BlueprintId'

export const Blueprints: Record<BlueprintId, Blueprint> = {
  [BlueprintId.WaterPumping]: {
    id: BlueprintId.WaterPumping,
    name: 'Water Pumping',
    description: 'Allows you to pump water from the ground.',
    items: {
      [ItemId.Water]: {
        id: ItemId.Water,
        probability: 1,
        quantity: 1,
      },
    },
    productionTime: 1 * 1000,
  },
  [BlueprintId.Logging]: {
    id: BlueprintId.Logging,
    name: 'Logging',
    description: 'Allows you to obtain wood from trees.',
    cost: {
      energy: 200,
      money: 123,
      items: {
        [ItemId.Water]: {
          id: ItemId.Water,
          quantity: 1,
        },
      },
    },
    items: {
      [ItemId.Wood]: {
        id: ItemId.Wood,
        probability: 1,
        quantity: 1,
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.OreMining]: {
    id: BlueprintId.OreMining,
    name: 'Ore Mining',
    description: 'Extracts ore rich rocks from the ground.',
    items: {
      [ItemId.Ore]: {
        id: ItemId.Ore,
        probability: 1,
        quantity: 1,
      },
      [ItemId.Wood]: {
        id: ItemId.Wood,
        probability: 1,
        quantity: 1,
      },
    },
    productionTime: 60 * 1000,
  },
  [BlueprintId.IronOreExtraction]: {
    id: BlueprintId.IronOreExtraction,
    name: 'Iron Ore Extraction',
    description: 'Extracts iron ore from ore.',
    items: {
      [ItemId.IronOre]: {
        id: ItemId.IronOre,
        probability: 1,
        quantity: 1,
      },
    },
    productionTime: 50 * 1000,
  },
  [BlueprintId.WheatCultivation]: {
    id: BlueprintId.WheatCultivation,
    name: 'Wheat Cultivation',
    description: 'Allows you to grow wheat.',
    cost: {
      items: {
        [ItemId.Water]: {
          id: ItemId.Water,
          quantity: 20,
        },
      },
    },
    items: {
      [ItemId.Wheat]: {
        id: ItemId.Wheat,
        probability: 1,
        quantity: 100,
      },
    },
    productionTime: 5 * 60 * 1000,
  },
}
