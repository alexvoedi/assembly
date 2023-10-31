<script setup lang="ts">
import type { ItemId } from '../../data/items/ItemId'
import { Items } from '../../data/items/Items'
import { UnitMeasurement } from '../../data/items/UnitMeasurement'

const props = defineProps<{
  energy?: number
  money?: number
  items: Array<{
    id: ItemId
    quantity: number | [number, number]
    probability?: number
  }>
}>()

function unitToIcon(unit: UnitMeasurement) {
  switch (unit) {
    case UnitMeasurement.Kilogram:
      return 'ico-mdi-weight-kilogram text-yellow-800'
    case UnitMeasurement.Liter:
      return 'ico-mdi-water text-blue'
    case UnitMeasurement.Piece:
      return 'ico-mdi-cube-outline text-green'
    case UnitMeasurement.Energy:
      return 'ico-mdi-flash text-yellow-300'
    case UnitMeasurement.Money:
      return 'ico-ic-baseline-attach-money text-green-700'
  }
}

const hasProbabilities = computed(() => props.items.some(item => item.probability))
</script>

<template>
  <div
    class="font-mono grid gap-x-4 gap-y-1" :class="[
      hasProbabilities ? 'grid-cols-[auto_120px_48px]' : 'grid-cols-[auto_120px]',
    ]"
  >
    <template v-for="item of items" :key="item.id">
      <div class="justify-self-start">
        {{ Items[item.id].name }}
      </div>

      <div class="flex items-center gap-1 justify-self-end">
        <span v-if="Array.isArray(item.quantity)">
          {{ item.quantity[0] }}-{{ item.quantity[1] }}
        </span>
        <span v-else>
          {{ item.quantity }}
        </span>
        <span :class="unitToIcon(Items[item.id].unit.measurement)" />
      </div>

      <div v-if="item.probability" class="justify-self-start">
        {{ 100 * item.probability }}%
      </div>
    </template>

    <template v-if="energy">
      <div />
      <div class="flex items-center gap-1 justify-self-end">
        <span>{{ energy }}</span>
        <span :class="unitToIcon(UnitMeasurement.Energy)" />
      </div>
      <div />
    </template>

    <template v-if="money">
      <div />
      <div class="flex items-center gap-1 justify-self-end">
        <span>{{ money }}</span>
        <span :class="unitToIcon(UnitMeasurement.Money)" />
      </div>
      <div />
    </template>
  </div>
</template>

<style>

</style>
