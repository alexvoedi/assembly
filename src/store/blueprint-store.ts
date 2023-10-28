import { defineStore } from 'pinia'
import type { RemovableRef } from '@vueuse/core'
import type { BlueprintId } from '../data/blueprints/BlueprintId'
import { InitialBlueprints } from '../data/blueprints/InitialBlueprints'

type BlueprintStore = RemovableRef<{
  blueprints: BlueprintId[]
}>

export const useBlueprintStore = defineStore('blueprint-store', {
  state: (): BlueprintStore => useLocalStorage('blueprint-store', {
    blueprints: [],
  }),

  actions: {
    hasBlueprint(blueprintId: BlueprintId) {
      return this.blueprints.includes(blueprintId)
    },

    addBlueprint(blueprintId: BlueprintId) {
      this.blueprints.push(blueprintId)
    },

    removeBlueprint(blueprintId: BlueprintId) {
      const index = this.blueprints.indexOf(blueprintId)

      if (index !== -1)
        this.blueprints.splice(index, 1)
    },

    loadInitialBlueprints() {
      InitialBlueprints.forEach((blueprintId) => {
        const hasBlueprint = this.hasBlueprint(blueprintId)
        if (!hasBlueprint)
          this.addBlueprint(blueprintId)
      })
    },

    resetStore() {
      this.blueprints = []
    },
  },

  getters: {
    blueprintArray: (state) => {
      return Object.values(state.blueprints)
    },
  },
})
