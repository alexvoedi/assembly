import type { ItemId } from '../data/items/ItemId'
import type { MarketValue } from './MarketValue'

export interface Item {
  id: ItemId
  name: string
  description?: string
  marketValue: MarketValue
}

export interface ItemWithQuantity {
  id: ItemId
  quantity: number
}
