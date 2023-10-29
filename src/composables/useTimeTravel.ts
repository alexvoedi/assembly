import { Blueprints } from '../data/blueprints/Blueprints'
import { useProductionStore } from '../store/production-store'

enum TimeTravelQueueItemType {
  Research = 'research',
  Production = 'production',
}

interface BaseTimeTravelQueueItem {
  type: TimeTravelQueueItemType
  finishTime: number
}

interface TimeTravelProductionItem extends BaseTimeTravelQueueItem {
  type: TimeTravelQueueItemType.Production
  blueprintId: string
}

type TimeTravelQueueItem = TimeTravelProductionItem

export function useTimeTravel() {
  const productionStore = useProductionStore()

  // function fastForwardResearch() {
  //   const researchPlans = Object.values(scienceStore.researching)

  //   researchPlans.forEach((researchPlan) => {
  //     const science = Sciences[researchPlan.scienceId]

  //     const timeSinceStart = Date.now() - researchPlan.start

  //     if (timeSinceStart > science.researchTime) {
  //       scienceStore.finishResearch(researchPlan.scienceId)
  //     }
  //     else {
  //       scienceStore.research({
  //         ...researchPlan,
  //         start: Date.now() - timeSinceStart,
  //       })
  //     }
  //   })
  // }

  // function fastForwardProduction() {
  //   const productionPlans = Object.values(productionStore.producing)

  //   productionPlans.forEach((productionPlan) => {
  //     const blueprint = Blueprints[productionPlan.blueprintId]

  //     const timeSinceStart = Date.now() - productionPlan.start

  //     const producedItems = Math.floor(timeSinceStart / blueprint.productionTime)

  //     for (let i = 0; i < producedItems; i++)
  //       addBlueprintItemsToInventory(blueprint)

  //     productionStore.produce({
  //       ...productionPlan,
  //       start: Date.now() - (timeSinceStart % blueprint.productionTime),
  //     })
  //   })
  // }

  const buildProductionQueue = (now: number) => {
    const queue: TimeTravelQueueItem[] = []

    const productionPlans = Object.values(productionStore.producing)

    productionPlans.forEach((productionPlan, index) => {
      const blueprint = Blueprints[productionPlan.blueprintId]

      let productionPlanFinishTime = productionPlan.start + (index + 1) * blueprint.productionTime

      while (productionPlanFinishTime <= now) {
        queue.push({
          type: TimeTravelQueueItemType.Production,
          blueprintId: productionPlan.blueprintId,
          finishTime: productionPlanFinishTime,
        })

        productionPlanFinishTime += Blueprints[productionPlan.blueprintId].productionTime
      }
    })

    return queue
  }

  const buildTimeTravelQueue = (now: number) => {
    const productionQueue = buildProductionQueue(now)

    return productionQueue
  }

  const timeTravel = (now: number) => {
    buildTimeTravelQueue(now)
    // fastForwardResearch()
    // fastForwardProduction()
  }

  return {
    buildProductionQueue,
    timeTravel,
  }
}
