<script setup lang="ts">
import { type DataTableColumns, NIcon, useMessage } from 'naive-ui'
import { useNow } from '@vueuse/core'
import { Blueprints } from '../data/blueprints/Blueprints'
import { useBlueprintStore } from '../store/blueprint-store'
import { useProductionStore } from '../store/production-store'
import type { Blueprint } from '../interfaces/Blueprint'
import { Items } from '../data/items/Items'
import { useInventoryStore } from '../store/inventory-store'
import { useEnergyStore } from '../store/energy-store'
import BaseTableButton from '@/components/BaseTableButton.vue'
import ProgressIndicator from '@/components/ProgressIndicator.vue'

const blueprintStore = useBlueprintStore()
const productionStore = useProductionStore()
const inventoryStore = useInventoryStore()
const energyStore = useEnergyStore()

const now = useNow()
const message = useMessage()

const columns: DataTableColumns<Blueprint> = [
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
    render(blueprint) {
      if (!blueprint.cost)
        return h('div')

      const elements = []

      if (blueprint.cost.items) {
        elements.push(h(
          'div',
          {},
          Object.values(blueprint.cost.items).map(item => h(
            'div',
            {
              class: [
                'flex items-center',
                inventoryStore.hasQuantityOfItem(item.id, item.quantity) ? 'text-green' : 'text-red',
              ],
            },
        `${item.quantity} ${Items[item.id].name}`,
          )),
        ))
      }

      if (blueprint.cost.energy) {
        elements.push(h(
          'div',
          {
            class: [
              'flex items-center gap-1',
              energyStore.hasEnoughEnergy(blueprint.cost.energy) ? 'text-green' : 'text-red',
            ],
          },
          [
            h('span', {}, `${blueprint.cost.energy}`),
            h(NIcon, {
              class: 'ico-mdi-flash',
            }),
          ],
        ))
      }

      if (blueprint.cost.money) {
        elements.push(h(
          'div',
          {
            class: [
              'flex items-center',
              inventoryStore.hasEnoughMoney(blueprint.cost.money) ? 'text-green' : 'text-red',
            ],
          },
          `${blueprint.cost.money} $`,
        ))
      }

      return h('div', {
        class: 'font-mono',
      }, elements)
    },
  },
  {
    title: 'Output',
    key: 'items',
    minWidth: 160,
    render(blueprint) {
      return h('div', {
        class: 'font-mono',
      }, Object.values(blueprint.items).map(item => h(
        'div',
        {
          class: 'flex items-center',
        },
        `${item.quantity} ${Items[item.id].name} (${100 * item.probability}%)`,
      )))
    },
  },
  {
    title: 'Time',
    key: 'productionTime',
    maxWidth: 120,
    render(blueprint) {
      return h('div', {
        class: 'font-mono',
      }, blueprint.productionTime / 1000)
    },
  },
  {
    title: 'Per minute',
    key: 'productionsPerMinute',
    render(blueprint) {
      return h('div', {
        class: 'font-mono',
      }, (60_000 / blueprint.productionTime).toFixed(2))
    },
  },
  {
    title: 'Progress',
    key: 'progress',
    width: 90,
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
    render(blueprint) {
      const active = productionStore.getProduction(blueprint.id)

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

const data = computed(() => blueprintStore.blueprints.map(blueprint => ({
  ...Blueprints[blueprint],
})))
</script>

<template>
  <NH1>Production</NH1>

  <NDataTable :columns="columns" :data="data" />
</template>

<style>
</style>
