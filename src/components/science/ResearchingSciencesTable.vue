<script setup lang="ts">
import { type DataTableColumns, useMessage } from 'naive-ui'
import { useScienceStore } from '@/store/science-store'
import type { Science } from '@/interfaces/Science'
import { Sciences } from '@/data/science/Sciences'
import ProgressIndicator from '@/components/ProgressIndicator.vue'
import BaseTableButton from '@/components/BaseTableButton.vue'
import ItemList from '@/components/common/ItemList.vue'

const scienceStore = useScienceStore()

const now = useNow()
const message = useMessage()

const columns: DataTableColumns<Science> = [
  {
    title: 'Name',
    key: 'name',
    defaultSortOrder: 'ascend',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Cost',
    key: 'cost',
    render(science) {
      const scienceData = Sciences[science.id]

      if (!scienceData.cost)
        return null

      return h(
        ItemList,
        {
          affordable: true,
          energy: scienceData.cost.energy,
          money: scienceData.cost.money,
          items: scienceData.cost.items ? Object.values(scienceData.cost.items) : [],
        },
      )
    },
  },
  {
    title: 'Progress',
    key: 'progress',
    width: 90,
    render(science) {
      const researchPlan = scienceStore.researching[science.id]

      if (!researchPlan)
        return h('div')

      const milliseconds = now.value.getTime()

      const progress = scienceStore.getResearchProgress(science.id, milliseconds)

      return h(ProgressIndicator, {
        progress,
      })
    },
  },
  {
    title: 'Actions',
    key: 'actions',
    render(science) {
      const active = scienceStore.isResearching(science.id)

      return h(
        BaseTableButton,
        {
          iconClass: [
            active ? 'ico-mdi-pause' : 'ico-mdi-play',
            active ? 'text-red' : 'text-green',
          ],
          onClick: active
            ? () => scienceStore.pauseResearch(science.id)
            : () => {
                try {
                  scienceStore.continueResearch(science.id)
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

const data = computed(() => [
  ...Object.values(scienceStore.researching),
  ...Object.values(scienceStore.paused),
].map(science => ({
  ...Sciences[science.scienceId],
})))
</script>

<template>
  <NDataTable :columns="columns" :data="data" />
</template>

<style>

</style>
