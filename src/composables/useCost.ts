import type { Cost } from '../interfaces/Cost'
import { useEnergyStore } from '../store/energy-store'
import { useInventoryStore } from '../store/inventory-store'

export function useCost() {
  const energyStore = useEnergyStore()
  const inventoryStore = useInventoryStore()

  const canAfford = (cost?: Cost) => {
    if (!cost)
      return true

    if (cost.energy) {
      if (!energyStore.hasEnoughEnergy(cost.energy))
        return false
    }

    if (cost.money) {
      if (!inventoryStore.hasEnoughMoney(cost.money))
        return false
    }

    if (cost.items) {
      const items = Object.values(cost.items)

      if (!inventoryStore.hasQuantityOfItems(items))
        return false
    }

    return true
  }

  const payCost = (cost?: Cost) => {
    if (!cost)
      return

    if (cost.energy)
      energyStore.useEnergy(cost.energy)

    if (cost.money)
      inventoryStore.removeMoney(cost.money)

    if (cost.items) {
      const items = Object.values(cost.items)

      inventoryStore.removeItems(items)
    }
  }

  return {
    canAfford,
    payCost,
  }
}
