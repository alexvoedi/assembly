import type { ItemId } from '../data/items/ItemId'
import type { UnitMeasurement } from '../data/items/UnitMeasurement'
import type { UnitType } from '../data/items/UnitType'
import type { MarketValue } from './MarketValue'

export interface Item {
  id: ItemId
  name: string
  description: string
  unit: {
    type: UnitType
    measurement: UnitMeasurement
  }
  marketValue: MarketValue
}

export interface ItemWithQuantity {
  id: ItemId
  quantity: number
}
