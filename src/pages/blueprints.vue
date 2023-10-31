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
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Description',
    key: 'description',
    width: 320,
  },
  {
    title: 'Input',
    key: 'input',
    width: 160,
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
    width: 240,
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
  search: '',
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

  if (filters.search)
    blueprints = blueprints.filter(blueprint => blueprint.name.toLowerCase().includes(filters.search.toLowerCase()))

  return blueprints
})

function resetFilters() {
  filters.affordable = false
  filters.producing = false
  filters.search = ''
}
</script>

<template>
  <NH1>Blueprints</NH1>

  <div class="space-y-6">
    <NCard title="Filter">
      <div class="grid items-center gap-12 grid-cols-[360px_120px_120px]">
        <NInput v-model:value="filters.search" placeholder="Search">
          <template #prefix>
            <NIcon class="ico-mdi-magnify" />
          </template>
        </NInput>

        <NTooltip trigger="hover">
          <template #trigger>
            <NCheckbox v-model:checked="filters.affordable">
              Affordable
            </NCheckbox>
          </template>

          <div>Only show items which you can afford to produce.</div>
        </NTooltip>

        <NTooltip trigger="hover">
          <template #trigger>
            <NCheckbox v-model:checked="filters.producing">
              Producing
            </NCheckbox>
          </template>

          <div>Only show items which you are currently producing.</div>
        </ntooltip>
      </div>

      <template #action>
        <NButton secondary @click="resetFilters()">
          Reset Filters
        </NButton>
      </template>
    </NCard>

    <NDataTable :columns="columns" :data="data" :single-line="false" table-layout="fixed" />
  </div>
</template>

<style>
</style>
