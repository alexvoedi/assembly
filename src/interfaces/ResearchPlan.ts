import type { ScienceId } from '../data/science/ScienceId'

export interface ResearchPlan {
  scienceId: ScienceId
  start: number
  pause?: number
  timerId: any
}
