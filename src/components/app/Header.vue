<script setup lang="ts">
import { useEnergyStore } from '../../store/energy-store'
import { useInventoryStore } from '../../store/inventory-store'

const inventoryStore = useInventoryStore()
const energyStore = useEnergyStore()

const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
})

const inventoryFilledPercentage = computed(() => inventoryStore.getFilledPercentage())

const appVersion = APP_VERSION
</script>

<template>
  <header class="h-16 flex items-center justify-between px-8 border-b border-b-dark">
    <div class="flex flex-col justify-center">
      <h1 class="text-2xl">
        Assembly
      </h1>
      <sub>v{{ appVersion }}</sub>
    </div>

    <div class="flex items-center gap-16 text-lg font-mono font-bold">
      <NTooltip trigger="hover">
        <template #trigger>
          <div class="flex items-center justify-center gap-2 cursor-help">
            <span class="ico-ic-baseline-attach-money" />
            <span>{{ formatter.format(inventoryStore.money) }}</span>
          </div>
        </template>

        <div>The amount of money you currently have.</div>
      </NTooltip>

      <NTooltip trigger="hover">
        <template #trigger>
          <div class="flex items-center justify-center gap-2 cursor-help">
            <span class="ico-mdi-flash" />
            <span>{{ energyStore.energy }}</span>
          </div>
        </template>

        <div>The amount of energy you have available.</div>
      </NTooltip>

      <NTooltip trigger="hover">
        <template #trigger>
          <div
            class="flex items-center justify-center gap-2 cursor-help" :class="{
              'text-green-700': inventoryFilledPercentage < 0.50,
              'text-yellow-700': 50 <= inventoryFilledPercentage && inventoryFilledPercentage < 0.90,
              'text-red-700': inventoryFilledPercentage >= 0.90,
            }"
          >
            <span class="ico-mdi-package-variant-closed" />
            <span>{{ inventoryStore.getTotalItems().toLocaleString() }} / {{ inventoryStore.maxItems.toLocaleString() }} </span>
          </div>
        </template>

        <div>The fill level of the inventory.</div>
      </NTooltip>
    </div>

    <div />
  </header>
</template>

<style>

</style>
