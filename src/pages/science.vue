<script setup lang="ts">
import { type DataTableColumns, NIcon, useMessage } from 'naive-ui'
import { useScienceStore } from '../store/science-store'
import type { Science } from '../interfaces/Science'
import { Sciences } from '../data/science/Sciences'
import { Items } from '../data/items/Items'
import { useEnergyStore } from '../store/energy-store'
import { useInventoryStore } from '../store/inventory-store'
import ProgressIndicator from '@/components/ProgressIndicator.vue'
import BaseTableButton from '@/components/BaseTableButton.vue'

const scienceStore = useScienceStore()
const energyStore = useEnergyStore()
const inventoryStore = useInventoryStore()

const now = useNow()
const message = useMessage()

const columns: DataTableColumns<Science> = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Cost',
    key: 'cost',
    render(science) {
      if (!science.cost)
        return h('div')

      const elements = []

      if (science.cost.items) {
        elements.push(h(
          'div',
          {},
          Object.values(science.cost.items).map(item => h(
            'div',
            {
              class: [
                'flex items-center',
                inventoryStore.hasItem(item.id) ? 'text-green' : 'text-red',
              ],
            },
        `${item.quantity} ${Items[item.id].name}`,
          )),
        ))
      }

      if (science.cost.energy) {
        elements.push(h(
          'div',
          {
            class: [
              'flex items-center gap-1',
              energyStore.hasEnoughEnergy(science.cost.energy) ? 'text-green' : 'text-red',
            ],
          },
          [
            h('span', {}, `${science.cost.energy}`),
            h(NIcon, {
              class: 'ico-mdi-flash',
            }),
          ],
        ))
      }

      if (science.cost.money) {
        elements.push(h(
          'div',
          {
            class: [
              'flex items-center',
              inventoryStore.hasEnoughMoney(science.cost.money) ? 'text-green' : 'text-red',
            ],
          },
          `${science.cost.money} $`,
        ))
      }

      return h('div', {
        class: 'font-mono',
      }, elements)
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
            ? () => scienceStore.stopResearch(science.id)
            : () => {
                try {
                  scienceStore.startResearch(science.id)
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

const data = computed(() => scienceStore.researchable.map(science => ({
  ...Sciences[science],
})))
</script>

<template>
  <NH1>Science</NH1>

  <NDataTable :columns="columns" :data="data" />
</template>

<style>

</style>
