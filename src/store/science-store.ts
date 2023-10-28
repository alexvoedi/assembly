import { defineStore } from 'pinia'
import type { RemovableRef } from '@vueuse/core'
import type { ScienceId } from '../data/science/ScienceId'
import type { ResearchPlan } from '../interfaces/ResearchPlan'
import { Sciences } from '../data/science/Sciences'
import { InitialSciences } from '../data/science/InitialSciences'
import { useCost } from '../composables/useCost'
import { useBlueprintStore } from './blueprint-store'

type ScienceStore = RemovableRef<{
  researchable: ScienceId[]
  researching: Partial<Record<ScienceId, ResearchPlan>>
  researched: ScienceId[]
  maxResearching: number
}>

export const useScienceStore = defineStore('science-store', {
  state: (): ScienceStore => useLocalStorage('science-store', {
    researchable: [],
    researching: {},
    researched: [],
    maxResearching: 1,
  }),

  actions: {
    isResearched(scienceId: ScienceId) {
      return this.researched.includes(scienceId)
    },

    areResearched(scienceIds: ScienceId[]) {
      return scienceIds.every(id => this.isResearched(id))
    },

    isResearchable(scienceID: ScienceId) {
      return this.researchable.includes(scienceID)
    },

    areResearchable(scienceIds: ScienceId[]) {
      return scienceIds.every(id => this.isResearchable(id))
    },

    isResearching(scienceId: ScienceId) {
      return !!this.researching[scienceId]
    },

    addResearchable(scienceId: ScienceId) {
      if (this.isResearched(scienceId))
        throw new Error(`Already researched ${scienceId}`)

      if (this.isResearchable(scienceId))
        throw new Error(`Already researchable ${scienceId}`)

      this.researchable.push(scienceId)
    },

    removeResearchable(scienceId: ScienceId) {
      if (!this.isResearchable(scienceId))
        throw new Error(`Not researchable ${scienceId}`)

      this.researchable = this.researchable.filter(id => id !== scienceId)
    },

    startResearch(scienceId: ScienceId) {
      if (this.isResearching(scienceId))
        throw new Error(`Already researching ${this.researching}`)

      if (this.isResearched(scienceId))
        throw new Error(`Already researched ${scienceId}`)

      if (!this.isResearchable(scienceId))
        throw new Error(`Cannot research ${scienceId}`)

      const science = Sciences[scienceId]

      const { canAfford, payCost } = useCost()

      canAfford(science.cost)
      payCost(science.cost)

      const research: ResearchPlan = {
        scienceId,
        timerId: 0,
        start: Date.now(),
      }

      this.researching[scienceId] = research

      this.research(research)
    },

    finishResearch(scienceId: ScienceId) {
      const science = Sciences[scienceId]

      this.researched.push(scienceId)

      this.removeResearchable(scienceId)

      const blueprintStore = useBlueprintStore()

      if (science.results.blueprints) {
        science.results.blueprints.forEach((blueprintId) => {
          blueprintStore.addBlueprint(blueprintId)
        })
      }

      if (science.results.sciences) {
        science.results.sciences.forEach((scienceId) => {
          this.addResearchable(scienceId)
        })
      }

      this.stopResearch(scienceId)
    },

    research(researchPlan: ResearchPlan) {
      const science = Sciences[researchPlan.scienceId]

      const timeout = science.researchTime

      const timerId = setTimeout(() => {
        this.finishResearch(researchPlan.scienceId)
      }, timeout)

      researchPlan.timerId = timerId
    },

    stopResearch(scienceId: ScienceId) {
      const research = this.researching[scienceId]

      if (!research)
        throw new Error(`Not researching ${scienceId}`)

      clearTimeout(research.timerId)

      delete this.researching[scienceId]
    },

    getResearchProgress(scienceId: ScienceId, now: number) {
      const researchPlan = this.researching[scienceId]

      if (!researchPlan)
        throw new Error(`Not researching ${scienceId}`)

      const { researchTime } = Sciences[scienceId]

      return Math.abs(now - researchPlan.start) / researchTime
    },

    loadInitialSciences() {
      InitialSciences.forEach((scienceId) => {
        if (!this.isResearched(scienceId) && !this.isResearchable(scienceId))
          this.researchable.push(scienceId)
      })
    },

    resetStore() {
      Object.values(this.researching).forEach((researchPlan) => {
        clearTimeout(researchPlan.timerId)
      })

      this.researchable = []
      this.researching = {}
      this.researched = []
      this.maxResearching = 1
    },
  },
})
