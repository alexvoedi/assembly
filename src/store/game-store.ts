import type { RemovableRef } from '@vueuse/core'
import { defineStore } from 'pinia'
import { areGameVersionsEqual } from '../utils/areGameVersionsEqual'
import { useBlueprintStore } from './blueprint-store'
import { useEffectStore } from './effect-store'
import { useEnergyStore } from './energy-store'
import { useInventoryStore } from './inventory-store'
import { useProductionStore } from './production-store'
import { useScienceStore } from './science-store'
import { useMarketplaceStore } from './marketplace-store'

type GameStore = RemovableRef<{
  start: number
  lastAppVersion: string
}>

export const useGameStore = defineStore('game-store', {
  state: (): GameStore => useLocalStorage('game-store', {
    start: Date.now(),
    lastAppVersion: APP_VERSION,
  }),

  actions: {
    resetGame() {
      const blueprintStore = useBlueprintStore()
      const effectStore = useEffectStore()
      const energyStore = useEnergyStore()
      const inventoryStore = useInventoryStore()
      const marketplaceStore = useMarketplaceStore()
      const productionStore = useProductionStore()
      const scienceStore = useScienceStore()

      blueprintStore.resetStore()
      effectStore.resetStore()
      energyStore.resetStore()
      inventoryStore.resetStore()
      marketplaceStore.resetStore()
      productionStore.resetStore()
      scienceStore.resetStore()

      this.resetStore()
    },

    resetStore() {
      this.start = Date.now()
    },

    initGame() {
      this.migrateGame()

      const blueprintStore = useBlueprintStore()
      const scienceStore = useScienceStore()

      blueprintStore.loadInitialBlueprints()
      scienceStore.loadInitialSciences()
    },

    downloadSave() {
      const blueprintStore = useBlueprintStore()
      const effectStore = useEffectStore()
      const energyStore = useEnergyStore()
      const inventoryStore = useInventoryStore()
      const productionStore = useProductionStore()
      const scienceStore = useScienceStore()

      const save = {
        blueprints: blueprintStore.$state,
        effects: effectStore.$state,
        energy: energyStore.$state,
        inventory: inventoryStore.$state,
        productions: productionStore.$state,
        sciences: scienceStore.$state,
      }

      const blob = new Blob([JSON.stringify(save)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.download = `assembly-savegame-${Date.now()}.json`
      link.href = url
      link.click()
    },

    uploadSave(file: File) {
      const reader = new FileReader()

      reader.onload = () => {
        const save = JSON.parse(reader.result as string)

        const blueprintStore = useBlueprintStore()
        const effectStore = useEffectStore()
        const energyStore = useEnergyStore()
        const inventoryStore = useInventoryStore()
        const productionStore = useProductionStore()
        const scienceStore = useScienceStore()

        blueprintStore.$state = save.blueprints
        effectStore.$state = save.effects
        energyStore.$state = save.energy
        inventoryStore.$state = save.inventory
        productionStore.$state = save.productions
        scienceStore.$state = save.sciences
      }

      reader.readAsText(file)
    },

    migrateGame() {
      const gameVersionsEqual = areGameVersionsEqual(this.lastAppVersion, APP_VERSION)

      if (gameVersionsEqual)
        return

      this.resetGame()

      this.lastAppVersion = APP_VERSION
    },
  },
})
