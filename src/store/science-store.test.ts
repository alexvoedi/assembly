import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import { ScienceId } from '../data/science/ScienceId'
import { useScienceStore } from './science-store'
import { useInventoryStore } from './inventory-store'

describe('science-store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('isResearched', () => {
    it('should return true if the science is researched', () => {
      const scienceScore = useScienceStore()

      scienceScore.researched[ScienceId.InventoryUpgrade1] = {
        id: ScienceId.InventoryUpgrade1,
        date: Date.now(),
      }

      expect(scienceScore.isResearched(ScienceId.InventoryUpgrade1)).toBe(true)
    })

    it('should return false if the science is not researched', () => {
      const scienceScore = useScienceStore()

      expect(scienceScore.isResearched(ScienceId.InventoryUpgrade1)).toBe(false)
    })
  })

  describe('areResearched', () => {
    it('should return false if atleast one science is not researched', () => {
      const scienceScore = useScienceStore()

      scienceScore.researched[ScienceId.InventoryUpgrade1] = {
        id: ScienceId.InventoryUpgrade1,
        date: Date.now(),
      }

      expect(scienceScore.areResearched([
        ScienceId.InventoryUpgrade1,
        ScienceId.MultiTasking1,
      ])).toBe(false)
    })

    it('should return true if all sciences are researched', () => {
      const scienceScore = useScienceStore()

      scienceScore.researched[ScienceId.InventoryUpgrade1] = {
        id: ScienceId.InventoryUpgrade1,
        date: Date.now(),
      }
      scienceScore.researched[ScienceId.MultiTasking1] = {
        id: ScienceId.MultiTasking1,
        date: Date.now(),
      }

      expect(scienceScore.areResearched([
        ScienceId.InventoryUpgrade1,
        ScienceId.MultiTasking1,
      ])).toBe(true)
    })
  })

  describe('isResearchable', () => {
    it('should return true if the science is researchable', () => {
      const scienceScore = useScienceStore()

      scienceScore.researchable.push(ScienceId.InventoryUpgrade1)

      expect(scienceScore.isResearchable(ScienceId.InventoryUpgrade1)).toBe(true)
    })

    it('should return false if the science is not researchable', () => {
      const scienceScore = useScienceStore()

      expect(scienceScore.isResearchable(ScienceId.InventoryUpgrade1)).toBe(false)
    })
  })

  describe('areResearchable', () => {
    it('should return false if atleast one science is not researchable', () => {
      const scienceScore = useScienceStore()

      scienceScore.researchable.push(ScienceId.InventoryUpgrade1)

      expect(scienceScore.areResearchable([
        ScienceId.InventoryUpgrade1,
        ScienceId.MultiTasking1,
      ])).toBe(false)
    })

    it('should return true if all sciences are researchable', () => {
      const scienceScore = useScienceStore()

      scienceScore.researchable.push(ScienceId.InventoryUpgrade1)
      scienceScore.researchable.push(ScienceId.MultiTasking1)

      expect(scienceScore.areResearchable([
        ScienceId.InventoryUpgrade1,
        ScienceId.MultiTasking1,
      ])).toBe(true)
    })
  })

  describe('isResearching', () => {
    it('should return true if the science is researching', () => {
      const scienceScore = useScienceStore()

      scienceScore.researching[ScienceId.InventoryUpgrade1] = {
        scienceId: ScienceId.InventoryUpgrade1,
        start: Date.now(),
        timerId: 0,
      }

      expect(scienceScore.isResearching(ScienceId.InventoryUpgrade1)).toBe(true)
    })

    it('should return false if the science is not researching', () => {
      const scienceScore = useScienceStore()

      expect(scienceScore.isResearching(ScienceId.InventoryUpgrade1)).toBe(false)
    })
  })

  describe('addResearchable', () => {
    it('should add the science to the researchable list', () => {
      const scienceScore = useScienceStore()

      scienceScore.addResearchable(ScienceId.InventoryUpgrade1)

      expect(scienceScore.researchable).toContain(ScienceId.InventoryUpgrade1)
    })

    it('should throw if the science is already researched', () => {
      const scienceScore = useScienceStore()

      scienceScore.researched[ScienceId.InventoryUpgrade1] = {
        id: ScienceId.InventoryUpgrade1,
        date: Date.now(),
      }

      expect(() => scienceScore.addResearchable(ScienceId.InventoryUpgrade1)).toThrow()
    })

    it('should throw if the science is already researchable', () => {
      const scienceScore = useScienceStore()

      scienceScore.researchable.push(ScienceId.InventoryUpgrade1)

      expect(() => scienceScore.addResearchable(ScienceId.InventoryUpgrade1)).toThrow()
    })
  })

  describe('removeResearchable', () => {
    it('should remove the science from the researchable list', () => {
      const scienceScore = useScienceStore()

      scienceScore.researchable.push(ScienceId.InventoryUpgrade1)

      scienceScore.removeResearchable(ScienceId.InventoryUpgrade1)

      expect(scienceScore.researchable).not.toContain(ScienceId.InventoryUpgrade1)
    })
  })

  describe('startResearch', () => {
    it('should throw if the science is already researching', () => {
      const scienceScore = useScienceStore()

      scienceScore.researching[ScienceId.InventoryUpgrade1] = {
        scienceId: ScienceId.InventoryUpgrade1,
        start: Date.now(),
        timerId: 0,
      }

      expect(() => scienceScore.startResearch(ScienceId.InventoryUpgrade1)).toThrow()
    })

    it('should throw if the science is already researched', () => {
      const scienceScore = useScienceStore()

      scienceScore.researched[ScienceId.InventoryUpgrade1] = {
        id: ScienceId.InventoryUpgrade1,
        date: Date.now(),
      }

      expect(() => scienceScore.startResearch(ScienceId.InventoryUpgrade1)).toThrow()
    })

    it('should throw if the science is not researchable', () => {
      const scienceScore = useScienceStore()

      expect(() => scienceScore.startResearch(ScienceId.InventoryUpgrade1)).toThrow()
    })

    it('should throw if there is not enough energy', () => {
      const scienceScore = useScienceStore()

      scienceScore.researchable.push(ScienceId.InventoryUpgrade1)

      expect(() => scienceScore.startResearch(ScienceId.InventoryUpgrade1)).toThrow()
    })

    it('should add the science to the researching list', () => {
      const scienceScore = useScienceStore()
      const inventoryStore = useInventoryStore()

      scienceScore.researchable.push(ScienceId.InventoryUpgrade1)

      inventoryStore.addMoney(1_000_000)

      scienceScore.startResearch(ScienceId.InventoryUpgrade1)

      expect(scienceScore.researching[ScienceId.InventoryUpgrade1]).toBeDefined()
    })
  })

  describe('finishResearch', () => {
    it('should add the science to the researched list', () => {
      const scienceScore = useScienceStore()

      scienceScore.researching[ScienceId.InventoryUpgrade1] = {
        scienceId: ScienceId.InventoryUpgrade1,
        start: Date.now(),
        timerId: 0,
      }

      scienceScore.finishResearch(ScienceId.InventoryUpgrade1)

      expect(scienceScore.researched).toEqual({
        [ScienceId.InventoryUpgrade1]: {
          id: ScienceId.InventoryUpgrade1,
          date: expect.any(Number),
        },
      })
    })

    it('should throw if the science is not researching', () => {
      const scienceScore = useScienceStore()

      expect(() => scienceScore.finishResearch(ScienceId.InventoryUpgrade1)).toThrow()
    })
  })

  describe('research', () => {
    it('should set the timerId', () => {
      const scienceScore = useScienceStore()

      scienceScore.researching[ScienceId.InventoryUpgrade1] = {
        scienceId: ScienceId.InventoryUpgrade1,
        start: Date.now(),
        timerId: 0,
      }

      scienceScore.research(scienceScore.researching[ScienceId.InventoryUpgrade1])

      expect(scienceScore.researching[ScienceId.InventoryUpgrade1].timerId).not.toBe(0)
    })
  })

  describe('stopResearch', () => {
    it('should throw if the science is not researching', () => {
      const scienceScore = useScienceStore()

      expect(() => scienceScore.stopResearch(ScienceId.InventoryUpgrade1)).toThrow()
    })

    it('should remove the science from the researching list', () => {
      const scienceScore = useScienceStore()

      scienceScore.researching[ScienceId.InventoryUpgrade1] = {
        scienceId: ScienceId.InventoryUpgrade1,
        start: Date.now(),
        timerId: 0,
      }

      scienceScore.stopResearch(ScienceId.InventoryUpgrade1)

      expect(scienceScore.researching[ScienceId.InventoryUpgrade1]).toBeUndefined()
    })
  })

  describe('getResearchProgress', () => {
    it('should throw if the science is not researching', () => {
      const scienceScore = useScienceStore()

      expect(() => scienceScore.getResearchProgress(ScienceId.InventoryUpgrade1, Date.now())).toThrow()
    })

    it('should return 1 if the science is researched', () => {
      const scienceScore = useScienceStore()

      scienceScore.researching[ScienceId.InventoryUpgrade1] = {
        scienceId: ScienceId.InventoryUpgrade1,
        start: Date.now() - 60 * 60 * 1000,
        timerId: 0,
      }

      expect(scienceScore.getResearchProgress(ScienceId.InventoryUpgrade1, Date.now())).toBeCloseTo(1)
    })

    it('should return the progress if the science is still researching', () => {
      const scienceScore = useScienceStore()

      scienceScore.researching[ScienceId.InventoryUpgrade1] = {
        scienceId: ScienceId.InventoryUpgrade1,
        start: Date.now() - 0.5 * 60 * 60 * 1000,
        timerId: 0,
      }

      expect(scienceScore.getResearchProgress(ScienceId.InventoryUpgrade1, Date.now())).toBe(0.5)
    })
  })
})
