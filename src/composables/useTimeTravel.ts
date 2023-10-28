import { Blueprints } from '../data/blueprints/Blueprints'
import { Sciences } from '../data/science/Sciences'
import { useProductionStore } from '../store/production-store'
import { useScienceStore } from '../store/science-store'
import { useBlueprint } from './useBlueprint'

export function useTimeTravel() {
  const scienceStore = useScienceStore()
  const productionStore = useProductionStore()

  const { addBlueprintItemsToInventory } = useBlueprint()

  function fastForwardResearch() {
    const researchPlans = Object.values(scienceStore.researching)

    researchPlans.forEach((researchPlan) => {
      const science = Sciences[researchPlan.scienceId]

      const timeSinceStart = Date.now() - researchPlan.start

      if (timeSinceStart > science.researchTime) {
        scienceStore.finishResearch(researchPlan.scienceId)
      }
      else {
        scienceStore.research({
          ...researchPlan,
          start: Date.now() - timeSinceStart,
        })
      }
    })
  }

  function fastForwardProduction() {
    const productionPlans = Object.values(productionStore.producing)

    productionPlans.forEach((productionPlan) => {
      const blueprint = Blueprints[productionPlan.blueprintId]

      const timeSinceStart = Date.now() - productionPlan.start

      const producedItems = Math.floor(timeSinceStart / blueprint.productionTime)

      for (let i = 0; i < producedItems; i++)
        addBlueprintItemsToInventory(blueprint)

      productionStore.produce({
        ...productionPlan,
        start: Date.now() - (timeSinceStart % blueprint.productionTime),
      })
    })
  }

  const timeTravel = () => {
    fastForwardResearch()
    fastForwardProduction()
  }

  return {
    timeTravel,
  }
}
