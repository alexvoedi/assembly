<script setup lang="ts">
import type { ItemId } from '../../data/items/ItemId'
import { Items } from '../../data/items/Items'
import { UnitMeasurement } from '../../data/items/UnitMeasurement'
import { useEnergyStore } from '../../store/energy-store'
import { useInventoryStore } from '../../store/inventory-store'

const props = defineProps<{
  affordable?: boolean
  energy?: number
  money?: number
  items: Array<{
    id: ItemId
    quantity: number | [number, number]
    probability?: number
  }>
}>()

const inventoryStore = useInventoryStore()
const energyStore = useEnergyStore()

const hasProbabilities = computed(() => props.items.some(item => item.probability))
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
        class="flex items-center gap-1 justify-self-end" :class="[
          inventoryStore.hasItem(item.id) ? 'text-green-500' : 'text-red-500',
        ]"
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
          :class="[
            energyStore.hasEnoughEnergy(energy) ? 'text-green-500' : 'text-red-500',
          ]"
        >{{ energy }}</span>
        <CommonUnitIcon :unit="UnitMeasurement.Energy" />
      </div>
      <div />
    </template>

    <template v-if="money">
      <div />
      <div class="flex items-center gap-1 justify-self-end">
        <span
          :class="[
            inventoryStore.hasEnoughMoney(money) ? 'text-green-500' : 'text-red-500',
          ]"
        >{{ money }}</span>
        <CommonUnitIcon :unit="UnitMeasurement.Money" />
      </div>
      <div />
    </template>
  </div>
</template>

<style>

</style>
