<script setup lang="ts">
import { UnitMeasurement } from '../../data/items/UnitMeasurement'

defineProps<{
  unit: UnitMeasurement
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
</script>

<template>
  <span :class="unitToIcon(unit)" />
</template>

<style>

</style>
