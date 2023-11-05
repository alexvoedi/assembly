<script setup lang="ts">
import { type DataTableColumns, useMessage } from 'naive-ui'
import { useNow } from '@vueuse/core'
import { Blueprints } from '../data/blueprints/Blueprints'
import { useBlueprintStore } from '../store/blueprint-store'
import { useProductionStore } from '../store/production-store'
import type { Blueprint } from '../interfaces/Blueprint'
import { millisecondsToTime } from '../utils/millisecondsToTime'
import { useCost } from '../composables/useCost'
import BaseTableButton from '@/components/BaseTableButton.vue'
import ProgressIndicator from '@/components/ProgressIndicator.vue'
import ItemList from '@/components/common/ItemList.vue'

const blueprintStore = useBlueprintStore()
const productionStore = useProductionStore()
const { canAfford } = useCost()

const now = useNow()
const message = useMessage()

const columns: DataTableColumns<Blueprint> = [
  {
    title: 'Name',
    key: 'name',
    width: 200,
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Description',
    key: 'description',
    width: 280,
  },
  {
    title: 'Input',
    key: 'input',
    width: 240,
    render(blueprint) {
      const blueprintData = Blueprints[blueprint.id]

      if (!blueprintData.cost)
        return null

      return h(
        ItemList,
        {
          affordable: true,
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
  {
    title: 'Production Time',
    key: 'productionTime',
    className: 'font-mono',
    width: 90,
  },
  {
    title: 'Progress',
    key: 'progress',
    width: 70,
    render(blueprint) {
      const productionPlan = productionStore.producing[blueprint.id]

      if (!productionPlan)
        return h('div')

      const milliseconds = now.value.getTime()

      const progress = productionStore.getProgress(blueprint.id, milliseconds)

      return h(ProgressIndicator, {
        progress,
      })
    },
  },
  {
    title: 'Actions',
    key: 'actions',
    width: 60,
    render(blueprint) {
      const active = productionStore.getProducing(blueprint.id)

      return h(
        BaseTableButton,
        {
          iconClass: [
            active ? 'ico-mdi-pause' : 'ico-mdi-play',
            active ? 'text-red' : 'text-green',
          ],
          onClick: active
            ? () => productionStore.stopProduction(blueprint.id)
            : () => {
                try {
                  productionStore.startProduction({
                    blueprintId: blueprint.id,
                    repeat: true,
                  })
                }
                catch (error) {
                  if (error instanceof Error)
                    message.error(error.message)
                }
              },
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
  let blueprints = blueprintStore.blueprints.map((blueprintId) => {
    const { name, description, productionTime } = Blueprints[blueprintId]

    return {
      id: blueprintId,
      name,
      description,
      productionTime: millisecondsToTime(productionTime),
    }
  })

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
  <NH1>Production</NH1>

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
