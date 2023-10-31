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
      energy: 1,
      items: {
        [ItemId.Water]: {
          id: ItemId.Water,
          quantity: 20,
        },
      },
    },
    items: {
      [ItemId.Wood]: {
        id: ItemId.Wood,
        probability: 1,
        quantity: [50, 300],
      },
    },
    productionTime: 60 * 1000,
  },
  [BlueprintId.OreMining]: {
    id: BlueprintId.OreMining,
    name: 'Ore Mining',
    description: 'Extracts ore rich rocks from the ground.',
    items: {
      [ItemId.Ore]: {
        id: ItemId.Ore,
        probability: 1,
        quantity: [1, 10],
      },
    },
    productionTime: 60 * 1000,
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
        quantity: [1000, 5000],
      },
    },
    productionTime: 24 * 60 * 60 * 1000,
  },
  [BlueprintId.IronOreExtraction]: {
    id: BlueprintId.IronOreExtraction,
    name: 'Iron Ore Extraction',
    description: 'Extracts iron ore from ore.',
    items: {
      [ItemId.IronOre]: {
        id: ItemId.IronOre,
        probability: 1,
        quantity: [3, 6],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.CoalMining]: {
    id: BlueprintId.CoalMining,
    name: 'Coal Mining',
    description: 'Extracts coal from the ground.',
    items: {
      [ItemId.Coal]: {
        id: ItemId.Coal,
        probability: 1,
        quantity: [1, 5],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.IronSmelting]: {
    id: BlueprintId.IronSmelting,
    name: 'Iron Smelting',
    description: 'Smelts iron ore into iron.',
    cost: {
      items: {
        [ItemId.Coal]: {
          id: ItemId.Coal,
          quantity: 1,
        },
      },
    },
    items: {
      [ItemId.Iron]: {
        id: ItemId.Iron,
        probability: 1,
        quantity: [1, 2],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.CopperSmelting]: {
    id: BlueprintId.CopperSmelting,
    name: 'Copper Smelting',
    description: 'Smelts copper ore into copper.',
    cost: {
      items: {
        [ItemId.Coal]: {
          id: ItemId.Coal,
          quantity: 1,
        },
      },
    },
    items: {
      [ItemId.Copper]: {
        id: ItemId.Copper,
        probability: 1,
        quantity: [1, 2],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.StoneMining]: {
    id: BlueprintId.StoneMining,
    name: 'Stone Mining',
    description: 'Extracts stone from the ground.',
    items: {
      [ItemId.Stone]: {
        id: ItemId.Stone,
        probability: 1,
        quantity: [1, 5],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.SandMining]: {
    id: BlueprintId.SandMining,
    name: 'Sand Mining',
    description: 'Extracts sand from the ground.',
    items: {
      [ItemId.Sand]: {
        id: ItemId.Sand,
        probability: 1,
        quantity: [1, 5],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.WoolProduction]: {
    id: BlueprintId.WoolProduction,
    name: 'Wool Production',
    description: 'Produces wool from sheep.',
    items: {
      [ItemId.Wool]: {
        id: ItemId.Wool,
        probability: 1,
        quantity: [1, 5],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.GoldMining]: {
    id: BlueprintId.GoldMining,
    name: 'Gold Mining',
    description: 'Extracts gold from the ground.',
    items: {
      [ItemId.Gold]: {
        id: ItemId.Gold,
        probability: 1,
        quantity: [1, 5],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.NaturalGasExtraction]: {
    id: BlueprintId.NaturalGasExtraction,
    name: 'Natural Gas Extraction',
    description: 'Extracts natural gas from the ground.',
    items: {
      [ItemId.NaturalGas]: {
        id: ItemId.NaturalGas,
        probability: 1,
        quantity: [1, 5],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.ScrewProduction]: {
    id: BlueprintId.ScrewProduction,
    name: 'Screw Production',
    description: 'Produces screws from iron.',
    cost: {
      items: {
        [ItemId.Iron]: {
          id: ItemId.Iron,
          quantity: 1,
        },
      },
    },
    items: {
      [ItemId.Screw]: {
        id: ItemId.Screw,
        probability: 1,
        quantity: [1, 2],
      },
    },
    productionTime: 30 * 1000,
  },
  [BlueprintId.CrudeOilRefinement]: {
    id: BlueprintId.CrudeOilRefinement,
    name: 'Crude Oil Refining',
    description: 'Refines crude oil into petroleum.',
    cost: {
      items: {
        [ItemId.CrudeOil]: {
          id: ItemId.Coal,
          quantity: 1,
        },
      },
    },
    items: {
      [ItemId.Gasoline]: {
        id: ItemId.Gasoline,
        probability: 1,
        quantity: [1, 2],
      },
    },
    productionTime: 30 * 1000,
  },
}
