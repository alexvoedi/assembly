import type { Item } from '../../interfaces/Item'
import { ItemId } from './ItemId'
import { UnitMeasurement } from './UnitMeasurement'
import { UnitType } from './UnitType'

export const Items: Record<ItemId, Item> = {
  [ItemId.Water]: {
    id: ItemId.Water,
    name: 'Water',
    description: 'A clear, tasteless liquid that is essential for life.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Liter,
    },
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
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 0.8,
      min: 0.1,
      max: 1.5,
    },
  },
  [ItemId.Ore]: {
    id: ItemId.Ore,
    name: 'Ore',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
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
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 0.1,
      min: 0.05,
      max: 0.2,
    },
  },
  [ItemId.Wheat]: {
    id: ItemId.Wheat,
    name: 'Wheat',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 0.3,
      min: 0.15,
      max: 0.5,
    },
  },
  [ItemId.Coal]: {
    id: ItemId.Coal,
    name: 'Coal',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 0.15,
      min: 0.05,
      max: 0.5,
    },
  },
  [ItemId.Stone]: {
    id: ItemId.Stone,
    name: 'Stone',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 0.1,
      min: 0.05,
      max: 0.5,
    },
  },
  [ItemId.Sand]: {
    id: ItemId.Sand,
    name: 'Sand',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 0.1,
      min: 0.05,
      max: 0.5,
    },
  },
  [ItemId.Screw]: {
    id: ItemId.Screw,
    name: 'Screw',
    description: 'They are used to hold things together.',
    unit: {
      type: UnitType.Discrete,
      measurement: UnitMeasurement.Piece,
    },
    marketValue: {
      average: 0.1,
      min: 0.05,
      max: 0.5,
    },
  },
  [ItemId.Wool]: {
    id: ItemId.Wool,
    name: 'Wool',
    description: 'Is used to make clothes.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 4.50,
      min: 2.40,
      max: 8.25,
    },
  },
  [ItemId.Gold]: {
    id: ItemId.Gold,
    name: 'Gold',
    description: 'Is used to make jewelry.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 1_400,
      min: 1_000,
      max: 2_000,
    },
  },
  [ItemId.Iron]: {
    id: ItemId.Iron,
    name: 'Iron',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 0.2,
      min: 0.1,
      max: 0.5,
    },
  },
  [ItemId.Copper]: {
    id: ItemId.Copper,
    name: 'Copper',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 7,
      min: 4,
      max: 10,
    },
  },
  [ItemId.CrudeOil]: {
    id: ItemId.CrudeOil,
    name: 'Petroleum',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Liter,
    },
    marketValue: {
      average: 0.38,
      min: 0.12,
      max: 0.9,
    },
  },
  [ItemId.NaturalGas]: {
    id: ItemId.NaturalGas,
    name: 'Natural Gas',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Continuous,
      measurement: UnitMeasurement.Liter,
    },
    marketValue: {
      average: 0.0002,
      min: 0.0001,
      max: 0.001,
    },
  },
  [ItemId.Plastic]: {
    id: ItemId.Plastic,
    name: 'Plastic',
    description: 'A material that can be used to build things.',
    unit: {
      type: UnitType.Discrete,
      measurement: UnitMeasurement.Kilogram,
    },
    marketValue: {
      average: 0.5,
      min: 0.1,
      max: 1,
    },
  },
  [ItemId.Lubricant]: {
    id: ItemId.Lubricant,
    name: 'Lubricant',
    description: 'A material that can be used to build things',
    unit: {
      type: UnitType.Discrete,
      measurement: UnitMeasurement.Liter,
    },
    marketValue: {
      average: 0.5,
      min: 0.1,
      max: 1,
    },
  },
  [ItemId.Gasoline]: {
    id: ItemId.Gasoline,
    name: 'Gasoline',
    description: 'A material that can be used to build things',
    unit: {
      type: UnitType.Discrete,
      measurement: UnitMeasurement.Liter,
    },
    marketValue: {
      average: 1.6,
      min: 0.5,
      max: 5,
    },
  },
}
