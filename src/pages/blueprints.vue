<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { useBlueprintStore } from '../store/blueprint-store'
import type { Blueprint } from '../interfaces/Blueprint'
import { Blueprints } from '../data/blueprints/Blueprints'
import { Items } from '../data/items/Items'

const blueprintStroe = useBlueprintStore()

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
    title: 'Items',
    key: 'items',
    render(blueprint) {
      return h(
        'div',
        {
          class: 'font-mono',
        },
        Object.values(Blueprints[blueprint.id].items).map(item => h(
          'div',
          {
            class: [
              'flex items-center',
            ],
          },
        `${item.quantity} ${Items[item.id].name} (${item.probability * 100}%)`,
        )),
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
