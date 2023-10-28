import type { BlueprintId } from '../data/blueprints/BlueprintId'

export interface ProductionPlan {
  blueprintId: BlueprintId
  start: number
  repeat: boolean
  timerId: number
}
