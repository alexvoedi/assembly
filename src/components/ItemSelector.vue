<script setup lang="ts">
import type { VNode } from 'vue'
import type { SelectOption } from 'naive-ui'
import { NTooltip } from 'naive-ui'
import type { ItemId } from '../data/items/ItemId'
import { Items } from '@/data/items/Items'

const props = defineProps<{
  modelValue: ItemId | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: ItemId | null): void
}>()

const selectedItem = useVModel(props, 'modelValue', emit)

const options = computed(() => {
  return Object.values(Items).map((item) => {
    return {
      label: item.name,
      value: item.id,
      description: item.description,
    }
  })
})

function renderOption({ node, option }: { node: VNode; option: SelectOption }) {
  return h(NTooltip, null, {
    trigger: () => node,
    default: () => option.description,
  })
}
</script>

<template>
  <NSelect
    v-model:value="selectedItem" filterable placeholder="Select an item..." :options="options" :render-option="renderOption"
  />
</template>

<style>

</style>
