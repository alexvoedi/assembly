import type { Item } from '../../interfaces/Item'
import { ItemId } from './ItemId'

export const Items: Record<ItemId, Item> = {
  [ItemId.Water]: {
    id: ItemId.Water,
    name: 'Water',
    description: 'A clear, tasteless liquid that is essential for life.',
    marketValue: {
      average: 0.0002,
      min: 0.0001,
      max: 0.001,
    },
  },
  [ItemId.Wood]: {
    id: ItemId.Wood,
    name: 'Wood',
    description: 'A material that can be used to build things.',
    marketValue: {
      average: 0.0002,
      min: 0.0001,
      max: 0.001,
    },
  },
  [ItemId.Ore]: {
    id: ItemId.Ore,
    name: 'Ore',
    description: 'A material that can be used to build things.',
    marketValue: {
      average: 5,
      min: 0.1,
      max: 10,
    },
  },
  [ItemId.IronOre]: {
    id: ItemId.IronOre,
    name: 'Iron Ore',
    description: 'A material that can be used to build things.',
    marketValue: {
      average: 0.0002,
      min: 0.0001,
      max: 0.001,
    },
  },
  [ItemId.Wheat]: {
    id: ItemId.Wheat,
    name: 'Wheat',
    description: 'A material that can be used to build things.',
    marketValue: {
      average: 0.0002,
      min: 0.0001,
      max: 0.001,
    },
  },
}
