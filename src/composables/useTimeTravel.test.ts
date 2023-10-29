import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useProductionStore } from '../store/production-store'
import { BlueprintId } from '../data/blueprints/BlueprintId'
import { Blueprints } from '../data/blueprints/Blueprints'
import { useTimeTravel } from './useTimeTravel'

describe('useTimeTravel', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('buildProductionQueue', () => {
    it('should return an empty queue if there is no production', () => {
      const { buildProductionQueue } = useTimeTravel()

      const now = Date.now()

      const queue = buildProductionQueue(now)

      expect(queue).toEqual([])
    })

    it('should return a queue with one item if there is one production', () => {
      const duration = 100_000

      const start = Date.now()
      const end = start + duration

      const productionStore = useProductionStore()

      productionStore.producing = {
        [BlueprintId.WaterPumping]: {
          blueprintId: BlueprintId.WaterPumping,
          start,
          repeat: true,
          timerId: 0,
        },
      }

      const result = Array.from({ length: Math.floor(duration / Blueprints['water-pumping'].productionTime) }, (_, i) => ({
        type: 'production',
        blueprintId: BlueprintId.WaterPumping,
        finishTime: start + (i + 1) * Blueprints['water-pumping'].productionTime,
      }))

      const { buildProductionQueue } = useTimeTravel()

      const queue = buildProductionQueue(end)

      expect(queue).toEqual(result)
    })

    // it('should return a queue with two items if there are two productions', () => {
    //   const duration = 30_000

    //   const start = Date.now()
    //   const end = start + duration

    //   const productionStore = useProductionStore()

    //   productionStore.producing = {
    //     [BlueprintId.WaterPumping]: {
    //       blueprintId: BlueprintId.WaterPumping,
    //       start,
    //       repeat: true,
    //       timerId: 0,
    //     },
    //     [BlueprintId.Logging]: {
    //       blueprintId: BlueprintId.Logging,
    //       start,
    //       repeat: true,
    //       timerId: 0,
    //     },
    //   }

    //   const waterPumpingProductionsCount = Math.floor(duration / Blueprints['water-pumping'].productionTime)

    //   const loggingProductionsCount = Math.floor(duration / Blueprints.logging.productionTime)

    //   const waterPumpingTimes = Array.from(
    //     { length: waterPumpingProductionsCount },
    //     (_, i) => ({
    //       type: 'production',
    //       blueprintId: BlueprintId.WaterPumping,
    //       finishTime: start + (i + 1) * Blueprints['water-pumping'].productionTime,
    //     }),
    //   )

    //   const loggingTimes = Array.from(
    //     { length: loggingProductionsCount },
    //     (_, i) => ({
    //       type: 'production',
    //       blueprintId: BlueprintId.Logging,
    //       finishTime: start + (i + 1) * Blueprints.logging.productionTime,
    //     }),
    //   )

    //   const result = [...waterPumpingTimes, ...loggingTimes].sort((a, b) => a.finishTime - b.finishTime)

    //   const { buildProductionQueue } = useTimeTravel()

    //   const queue = buildProductionQueue(end)

    //   expect(queue).toEqual(result)
    // })
  })
})
