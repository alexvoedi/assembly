<script setup lang="ts">
import type { ItemId } from '../../data/items/ItemId'
import { Items } from '../../data/items/Items'
import { UnitMeasurement } from '../../data/items/UnitMeasurement'
import { useEnergyStore } from '../../store/energy-store'
import { useInventoryStore } from '../../store/inventory-store'

interface Item {
  id: ItemId
  quantity: number | [number, number]
  probability?: number
}

const props = defineProps<{
  affordable?: boolean
  energy?: number
  money?: number
  items: Item[]
}>()

const inventoryStore = useInventoryStore()
const energyStore = useEnergyStore()

const hasProbabilities = computed(() => props.items.some(item => item.probability))

function getItemClass(item: Item) {
  const quantity = Array.isArray(item.quantity) ? item.quantity[0] : item.quantity

  if (props.affordable) {
    if (inventoryStore.hasQuantityOfItem(item.id, quantity))
      return 'text-green-500'
    else
      return 'text-red-500'
  }
}

function getEnergyClass(energy: number) {
  if (props.affordable) {
    if (energyStore.hasEnoughEnergy(energy))
      return 'text-green-500'
    else
      return 'text-red-500'
  }
}

function getMoneyClass(money: number) {
  if (props.affordable) {
    if (inventoryStore.hasEnoughMoney(money))
      return 'text-green-500'
    else
      return 'text-red-500'
  }
}
</script>

<template>
  <div
    class="font-mono grid gap-x-4 gap-y-1" :class="[
      hasProbabilities ? 'grid-cols-[auto_120px_48px]' : 'grid-cols-[auto_120px]',
    ]"
  >
    <template v-for="item of items" :key="item.id">
      <div
        class="justify-self-start"
      >
        {{ Items[item.id].name }}
      </div>

      <div
        class="flex items-center gap-1 justify-self-end" :class="getItemClass(item)"
      >
        <span v-if="Array.isArray(item.quantity)">
          {{ item.quantity[0] }}-{{ item.quantity[1] }}
        </span>
        <span v-else>
          {{ item.quantity }}
        </span>
        <CommonUnitIcon :unit="Items[item.id].unit.measurement" />
      </div>

      <div v-if="item.probability" class="justify-self-start">
        {{ 100 * item.probability }}%
      </div>
    </template>

    <template v-if="energy">
      <div />
      <div class="flex items-center gap-1 justify-self-end">
        <span
          :class="getEnergyClass(energy)"
        >{{ energy }}</span>
        <CommonUnitIcon :unit="UnitMeasurement.Energy" />
      </div>
      <div />
    </template>

    <template v-if="money">
      <div />
      <div class="flex items-center gap-1 justify-self-end">
        <span
          :class="getMoneyClass(money)"
        >{{ money }}</span>
        <CommonUnitIcon :unit="UnitMeasurement.Money" />
      </div>
      <div />
    </template>
  </div>
</template>

<style>

</style>
