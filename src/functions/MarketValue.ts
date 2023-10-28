import type { ItemId } from '../data/items/ItemId'
import { Items } from '../data/items/Items'

export function initMarketValues() {
  return Object.fromEntries(
    Object.entries(Items)
      .map(([itemId, item]) => [itemId, {
        last: item.marketValue.average,
        current: item.marketValue.average,
      }]),
  ) as Record<ItemId, {
    last: number
    current: number
  }>
}
