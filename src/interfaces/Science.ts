import type { BlueprintId } from '../data/blueprints/BlueprintId'
import type { EffectId } from '../data/effects/EffectId'
import type { ScienceId } from '../data/science/ScienceId'
import type { InventoryStore } from '../store/inventory-store'
import type { ProductionStore } from '../store/production-store'
import type { Cost } from './Cost'
import type { Requirements } from './Requirements'

export interface Science {
  id: ScienceId
  name: string
  description: string
  researchTime: number
  cost?: Cost
  requirements?: Requirements
  results: {
    blueprints?: BlueprintId[]
    sciences?: ScienceId[]
    effects?: EffectId[]
    stores?: {
      productionStore?: (productionStore: ProductionStore) => void
      inventoryStore?: (inventoryStore: InventoryStore) => void
    }
  }
}
