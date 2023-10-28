import { defineStore } from 'pinia'
import type { RemovableRef } from '@vueuse/core'
import type { BlueprintId } from '../data/blueprints/BlueprintId'
import { Blueprints } from '../data/blueprints/Blueprints'
import type { ProductionPlan } from '../interfaces/ProductionPlan'
import { useCost } from '../composables/useCost'
import { useBlueprint } from '../composables/useBlueprint'
import { useInventoryStore } from './inventory-store'

type ProductionStore = RemovableRef<{
  producing: Partial<Record<BlueprintId, ProductionPlan>>
  maxProducing: number
}>

export const useProductionStore = defineStore('production-store', {
  state: (): ProductionStore => useLocalStorage('production-store', {
    producing: {},
    maxProducing: 1,
  }),

  actions: {
    getProduction(blueprintId: BlueprintId) {
      return this.producing[blueprintId]
    },

    hasProduction(blueprintId: BlueprintId) {
      return !!this.producing[blueprintId]
    },

    getProgress(blueprintId: BlueprintId, now: number) {
      const productionPlan = this.producing[blueprintId]

      if (!productionPlan)
        throw new Error(`Not producing ${blueprintId}`)

      const { productionTime } = Blueprints[blueprintId]

      return Math.abs(now - productionPlan.start) / productionTime
    },

    startProduction(data: { blueprintId: BlueprintId; repeat: boolean }) {
      if (Object.keys(this.producing).length >= this.maxProducing)
        throw new Error('Maximum number of parallel productions reached')

      if (this.producing[data.blueprintId])
        throw new Error(`Already producing ${data.blueprintId}`)

      const inventoryStore = useInventoryStore()

      if (inventoryStore.isFull())
        throw new Error('Inventory full')

      const blueprint = Blueprints[data.blueprintId]

      const { canAfford, payCost } = useCost()

      canAfford(blueprint.cost)
      payCost(blueprint.cost)

      const productionPlan: ProductionPlan = {
        ...data,
        timerId: 0,
        start: Date.now(),
      }

      this.producing[productionPlan.blueprintId] = productionPlan

      this.produce(productionPlan)
    },

    finishProduction(blueprintId: BlueprintId) {
      const blueprint = Blueprints[blueprintId]

      const { addBlueprintItemsToInventory } = useBlueprint()

      try {
        addBlueprintItemsToInventory(blueprint)
      }
      finally {
        this.stopProduction(blueprint.id)
      }
    },

    produce(productionPlan: ProductionPlan) {
      const blueprint = Blueprints[productionPlan.blueprintId]

      const timeSinceStart = Date.now() - productionPlan.start

      const timeout = blueprint.productionTime - timeSinceStart

      const timerId = setTimeout(() => {
        this.finishProduction(productionPlan.blueprintId)

        if (productionPlan.repeat)
          this.startProduction(productionPlan)
      }, timeout)

      productionPlan.timerId = timerId
    },

    stopProduction(blueprintId: BlueprintId) {
      const product = this.producing[blueprintId]

      if (!product)
        throw new Error(`Not producing ${blueprintId}`)

      clearTimeout(product.timerId)

      delete this.producing[blueprintId]
    },

    resetStore() {
      Object.values(this.producing).forEach((productionPlan) => {
        clearTimeout(productionPlan.timerId)
      })

      this.producing = {}
      this.maxProducing = 1
    },
  },

  getters: {},
})
