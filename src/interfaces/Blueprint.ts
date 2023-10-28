import type { BlueprintId } from '../data/blueprints/BlueprintId'
import type { ItemId } from '../data/items/ItemId'
import type { Cost } from './Cost'

export interface Blueprint {
  id: BlueprintId
  name: string
  description: string
  cost?: Cost
  items: Partial<Record<ItemId, {
    id: ItemId
    probability: number
    quantity: number | [number, number]
  }>>
  productionTime: number
}
