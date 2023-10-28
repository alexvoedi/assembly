<script setup lang="ts">
import { type DataTableColumns, NIcon } from 'naive-ui'
import { useMarketplaceStore } from '../../store/marketplace-store'
import type { TradeStrategyData } from '../../interfaces/TradeStrategy'
import { Items } from '../../data/items/Items'
import { TradeStrategies } from '../../data/marketplace/TradeStrategies'
import BaseTableButton from '@/components/BaseTableButton.vue'

const marketplaceStore = useMarketplaceStore()

const columns: DataTableColumns<TradeStrategyData> = [
  {
    title: 'Item',
    key: 'item',
  },
  {
    title: 'Strategy',
    key: 'name',
  },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Status',
    key: 'status',
    align: 'center',
    render(tradeStrategyData) {
      const active = marketplaceStore.isStrategyActive(tradeStrategyData.itemId)

      return h('div', {
        class: 'flex items-center justify-center gap-1',
      }, [
        h('span', {}, active ? 'Active' : 'Inactive'),
        h(NIcon, {
          class: [
            active ? 'ico-mdi-play' : 'ico-mdi-pause',
            active ? 'text-green' : 'text-red',
          ],
        }),
      ])
    },
  },
  {
    title: 'Quantity',
    key: 'quantity',
  },
  {
    title: 'Actions',
    key: 'actions',
    render(tradeStrategyData) {
      const active = marketplaceStore.isStrategyActive(tradeStrategyData.itemId)

      return h(
        'div',
        {
          class: 'flex gap-4',
        },
        [
          h(BaseTableButton, {
            iconClass: [
              active ? 'ico-mdi-pause' : 'ico-mdi-play',
              active ? 'text-red' : 'text-green',
            ],
            onClick: () => marketplaceStore.toggleStrategyActive(tradeStrategyData.itemId),
          }),
          h(BaseTableButton, {
            iconClass: ['ico-mdi-delete', 'text-red'],
            onClick: () => marketplaceStore.removeTradeStrategy(tradeStrategyData.itemId),
          }),
        ],
      )
    },
  },
]

const data = computed(() => marketplaceStore.getStrategiesArray().map(({ data }) => ({
  itemId: data.itemId,
  strategyId: data.strategyId,
  item: Items[data.itemId].name,
  name: TradeStrategies[data.strategyId].name,
  description: TradeStrategies[data.strategyId].description,
})))
</script>

<template>
  <NCard title="Automatization" content-style="padding: 0;">
    <template #header-extra>
      <MarketplaceAddAutomationModal />
    </template>

    <NDataTable :columns="columns" :data="data" :bordered="false" />
  </NCard>
</template>

<style>

</style>
