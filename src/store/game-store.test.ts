import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { Blueprints } from '../data/blueprints/Blueprints'
import { BlueprintId } from '../data/blueprints/BlueprintId'
import { ItemId } from '../data/items/ItemId'
import { ScienceId } from '../data/science/ScienceId'
import { useGameStore } from './game-store'
import { useBlueprintStore } from './blueprint-store'
import { useEffectStore } from './effect-store'
import { useEnergyStore } from './energy-store'
import { useInventoryStore } from './inventory-store'
import { useMarketplaceStore } from './marketplace-store'
import { useProductionStore } from './production-store'
import { useScienceStore } from './science-store'

describe('game-store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('resetGame', () => {
    it('should reset all stores', () => {
      const gameStore = useGameStore()

      const blueprintStore = useBlueprintStore()

      blueprintStore.blueprints = [BlueprintId.Logging]

      const energyStore = useEnergyStore()

      energyStore.energy = 100

      const inventoryStore = useInventoryStore()

      inventoryStore.money = 100

      const productionStore = useProductionStore()

      productionStore.producing = {
        [BlueprintId.Logging]: {
          blueprintId: BlueprintId.Logging,
          repeat: true,
          timerId: 0,
          start: 0,
        },
      }

      const scienceStore = useScienceStore()

      scienceStore.researched = {
        [ScienceId.IronOreExtraction]: {
          id: ScienceId.IronOreExtraction,
          date: 0,
        },
      }

      gameStore.resetGame()

      expect(blueprintStore.blueprints).toEqual([])
      expect(energyStore.energy).toEqual(0)
      expect(inventoryStore.money).toEqual(0)
      expect(productionStore.producing).toEqual({})
      expect(scienceStore.researched).toEqual({})
    })
  })
})
