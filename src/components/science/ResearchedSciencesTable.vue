<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { Science } from '@/interfaces/Science'
import { useScienceStore } from '@/store/science-store'
import { Sciences } from '@/data/science/Sciences'

const scienceStore = useScienceStore()

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
    title: 'Date',
    key: 'date',
  },
]

const data = computed(() => Object.values(scienceStore.researched).map(science => ({
  ...Sciences[science.id],
})))
</script>

<template>
  <NDataTable :columns="columns" :data="data" />
</template>

<style>

</style>
