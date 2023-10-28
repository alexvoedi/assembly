import type { BlueprintId } from '../data/blueprints/BlueprintId'
import type { PowerPlantID } from '../data/energy/PowerPlantId'
import type { ScienceId } from '../data/science/ScienceId'
import type { Cost } from './Cost'

export interface EnergyProducer {
  id: PowerPlantID
  name: string
  description: string
  cost: Cost
  energyProduction: number
  requirements: {
    blueprints: BlueprintId[]
    sciences: ScienceId[]
  }
}
