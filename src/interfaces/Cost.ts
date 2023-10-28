import type { ItemId } from '../data/items/ItemId'

export interface Cost {
  money?: number
  energy?: number
  items?: Partial<Record<ItemId, {
    id: ItemId
    quantity: number
  }>>
}
