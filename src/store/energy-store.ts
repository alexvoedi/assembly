import type { RemovableRef } from '@vueuse/core'
import { defineStore } from 'pinia'
import { isPositiveNumberOrThrow } from '../functions/Quantity'

type EnergyStore = RemovableRef<{
  energy: number
}>

export const useEnergyStore = defineStore('energy-store', {
  state: (): EnergyStore => useLocalStorage('energy-store', {
    energy: 0,
    producers: [],
    producing: [],
  }),

  actions: {
    hasEnoughEnergy(amount: number) {
      return this.energy >= amount
    },

    useEnergy(amount: number) {
      isPositiveNumberOrThrow(amount)

      if (amount > this.energy)
        throw new Error(`Tried to use ${amount} energy but only ${this.energy} available.`)

      this.energy -= amount
    },

    addEnergy(amount: number) {
      isPositiveNumberOrThrow(amount)

      this.energy += amount
    },

    resetStore() {
      this.energy = 0
    },
  },
})
