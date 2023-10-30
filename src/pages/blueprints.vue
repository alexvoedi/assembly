<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { useBlueprintStore } from '../store/blueprint-store'
import type { Blueprint } from '../interfaces/Blueprint'
import { Blueprints } from '../data/blueprints/Blueprints'
import { Items } from '../data/items/Items'
import { UnitMeasurement } from '../data/items/UnitMeasurement'

const blueprintStroe = useBlueprintStore()

function unitToIcon(unit: UnitMeasurement) {
  switch (unit) {
    case UnitMeasurement.Kilogram:
      return 'ico-mdi-weight-kilogram text-yellow'
    case UnitMeasurement.Liter:
      return 'ico-mdi-water text-blue'
    case UnitMeasurement.Piece:
      return 'ico-mdi-cube-outline text-green'
    default:
      throw new Error(`Unknown unit: ${unit}`)
  }
}

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
    title: 'Input',
    key: 'input',
    render(blueprint) {
      const blueprintData = Blueprints[blueprint.id]

      if (!blueprintData.cost)
        return null

      if (!blueprintData.cost.items)
        return null

      return h(
        'div',
        {
          class: 'font-mono',
        },
        Object.values(blueprintData.cost.items).map((item) => {
          const unit = unitToIcon(Items[item.id].unit.measurement)

          return h(
            'div',
            {
              class: [
                'flex items-center gap-1',
              ],
            },
            [
              `${Items[item.id].name} ${item.quantity}`,
              h('span', {
                class: [
                  unit,
                ],
              }),
            ],
          )
        }),
      )
    },
  },
  {
    title: 'Output',
    key: 'output',
    render(blueprint) {
      return h(
        'div',
        {
          class: 'font-mono',
        },
        Object.values(Blueprints[blueprint.id].items).map((item) => {
          const quantity = Array.isArray(item.quantity)
            ? `${item.quantity[0]}-${item.quantity[1]}`
            : item.quantity

          const unit = unitToIcon(Items[item.id].unit.measurement)

          return h(
            'div',
            {
              class: [
                'flex items-center gap-1',
              ],
            },
            [
              `${Items[item.id].name} ${quantity}`,
              h('span', {
                class: [
                  unit,
                ],
              }),
            ],
          )
        }),
      )
    },
  },
]

const data = computed(() => blueprintStroe.blueprints.map(blueprintId => ({
  id: blueprintId,
  name: Blueprints[blueprintId].name,
  description: Blueprints[blueprintId].description,
})))
</script>

<template>
  <NH1>Blueprints</NH1>

  <NDataTable :columns="columns" :data="data" />
</template>

<style>
</style>
