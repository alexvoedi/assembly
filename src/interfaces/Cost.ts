import type { ItemId } from '../data/items/ItemId'
import type { ItemWithQuantity } from './Item'

export interface Cost {
  money?: number
  energy?: number
  items?: Partial<Record<ItemId, ItemWithQuantity>>
}
