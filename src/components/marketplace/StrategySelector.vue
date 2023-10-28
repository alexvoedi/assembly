<script setup lang="ts">
import { NTooltip, type SelectOption } from 'naive-ui'
import { TradeStrategies } from '../../data/marketplace/TradeStrategies'
import type { TradeStrategyId } from '../../data/marketplace/TradeStrategyId'

const props = defineProps<{
  modelValue: TradeStrategyId | null
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: TradeStrategyId | null): void
}>()

const selectedStrategy = useVModel(props, 'modelValue', emit)

const options = computed(() => {
  return Object.values(TradeStrategies).map((item) => {
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
    v-model:value="selectedStrategy" filterable placeholder="Select a trade strategy..." :options="options" :render-option="renderOption"
  />
</template>

<style>

</style>
