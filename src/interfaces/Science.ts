import type { BlueprintId } from '../data/blueprints/BlueprintId'
import type { EffectId } from '../data/effects/EffectId'
import type { ScienceId } from '../data/science/ScienceId'
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
  }
}
