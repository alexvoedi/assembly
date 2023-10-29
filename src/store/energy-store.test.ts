import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { useEnergyStore } from './energy-store'

describe('energy-store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('hasEnoughEnergy', () => {
    it('returns true if energy is greater than amount', () => {
      const energyStore = useEnergyStore()

      energyStore.energy = 10

      expect(energyStore.hasEnoughEnergy(-5)).toBe(true)
      expect(energyStore.hasEnoughEnergy(5)).toBe(true)
      expect(energyStore.hasEnoughEnergy(10)).toBe(true)
    })

    it('returns false if energy is less than amount', () => {
      const energyStore = useEnergyStore()

      energyStore.energy = 10

      expect(energyStore.hasEnoughEnergy(15)).toBe(false)
      expect(energyStore.hasEnoughEnergy(20)).toBe(false)
    })
  })

  describe('useEnergy', () => {
    it('throws if amount is not a positive number', () => {
      const energyStore = useEnergyStore()

      expect(() => energyStore.useEnergy(-1)).toThrow()
    })

    it('throws if amount is greater than energy', () => {
      const energyStore = useEnergyStore()

      energyStore.energy = 10

      expect(() => energyStore.useEnergy(15)).toThrow()
      expect(() => energyStore.useEnergy(20)).toThrow()
    })

    it('subtracts amount from energy', () => {
      const energyStore = useEnergyStore()

      energyStore.energy = 10

      energyStore.useEnergy(5)
      expect(energyStore.energy).toBe(5)

      energyStore.useEnergy(1.23)
      expect(energyStore.energy).toBe(3.77)
    })
  })

  describe('addEnergy', () => {
    it('throws if amount is not a positive number', () => {
      const energyStore = useEnergyStore()

      expect(() => energyStore.addEnergy(-1)).toThrow()
    })

    it('adds amount to energy', () => {
      const energyStore = useEnergyStore()

      energyStore.energy = 10

      energyStore.addEnergy(5)
      expect(energyStore.energy).toBe(15)

      energyStore.addEnergy(1.23)
      expect(energyStore.energy).toBe(16.23)
    })
  })

  describe('resetStore', () => {
    it('resets energy to 0', () => {
      const energyStore = useEnergyStore()

      energyStore.energy = 10

      energyStore.resetStore()
      expect(energyStore.energy).toBe(0)
    })
  })
})
