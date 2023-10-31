<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { useBlueprintStore } from '../store/blueprint-store'
import type { Blueprint } from '../interfaces/Blueprint'
import { Blueprints } from '../data/blueprints/Blueprints'
import { useCost } from '../composables/useCost'
import { useProductionStore } from '../store/production-store'
import ItemList from '@/components/common/ItemList.vue'

const blueprintStroe = useBlueprintStore()
const productionStore = useProductionStore()
const { canAfford } = useCost()

const columns: DataTableColumns<Blueprint> = [
  {
    title: 'Name',
    key: 'name',
    width: 240,
  },
  {
    title: 'Description',
    key: 'description',
    width: 360,
  },
  {
    title: 'Input',
    key: 'input',
    width: 280,
    render(blueprint) {
      const blueprintData = Blueprints[blueprint.id]

      if (!blueprintData.cost)
        return null

      return h(
        ItemList,
        {
          energy: blueprintData.cost.energy,
          money: blueprintData.cost.money,
          items: blueprintData.cost.items ? Object.values(blueprintData.cost.items) : [],
        },
      )
    },
  },
  {
    title: 'Output',
    key: 'output',
    width: 280,
    render(blueprint) {
      const blueprintData = Blueprints[blueprint.id]

      return h(
        ItemList,
        {
          items: Object.values(blueprintData.items),
        },
      )
    },
  },
]

const filters = reactive({
  affordable: false,
  producing: false,
})

const data = computed(() => {
  let blueprints = blueprintStroe.blueprints.map(blueprintId => ({
    id: blueprintId,
    name: Blueprints[blueprintId].name,
    description: Blueprints[blueprintId].description,
  }))

  if (filters.affordable)
    blueprints = blueprints.filter(blueprint => canAfford(Blueprints[blueprint.id].cost))

  if (filters.producing)
    blueprints = blueprints.filter(blueprint => productionStore.isProducing(blueprint.id))

  return blueprints
})

function resetFilters() {
  filters.affordable = false
  filters.producing = false
}
</script>

<template>
  <NH1>Blueprints</NH1>

  <div class="space-y-6">
    <div>
      <NCheckbox v-model:checked="filters.affordable">
        Affordable
      </NCheckbox>

      <NCheckbox v-model:checked="filters.producing">
        Producing
      </NCheckbox>

      <NButton @click="resetFilters()">
        Reset Filters
      </NButton>
    </div>

    <NDataTable :columns="columns" :data="data" :single-line="false" />
  </div>
</template>

<style>
</style>
