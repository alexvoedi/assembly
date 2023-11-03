<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { Items } from '@/data/items/Items'
import { useMarketplaceStore } from '@/store/marketplace-store'
import roundToNFractionDigits from '@/utils/roundToNFractionDigits'
import type { InventoryItem } from '@/interfaces/InventoryItem'

const marketplaceStore = useMarketplaceStore()

const columns: DataTableColumns<InventoryItem> = [
  {
    title: 'Name',
    key: 'name',
  },
  {
    title: 'Description',
    key: 'description',
  },
  {
    title: 'Min',
    key: 'minMarketValue',
    className: 'font-mono',
    align: 'right',
  },
  {
    title: 'Average',
    key: 'averageMarketValue',
    className: 'font-mono',
    align: 'right',
  },
  {
    title: 'Max',
    key: 'maxMarketValue',
    className: 'font-mono',
    align: 'right',
  },
  {
    title: 'Market Value',
    key: 'marketValue',
    className: 'font-mono',
    align: 'right',
  },
  {
    title: 'Relative Value',
    key: 'relative-value',
    align: 'right',
    render(item) {
      const relativeValue = marketplaceStore.prices[item.id].current / Items[item.id].marketValue.average

      return h(
        'span',
        {
          class: [
            'font-mono',
            {
              'text-green-600': relativeValue > 1,
              'text-red-600': relativeValue < 1,
            },
          ],
        },
        `${(100 * relativeValue).toFixed(2)}%`,
      )
    },
  },
]

const data = computed(() => marketplaceStore.getPricesArray().map(price => ({
  id: price.id,
  name: Items[price.id].name,
  description: Items[price.id].description,
  marketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(marketplaceStore.prices[price.id].current),
  ),
  minMarketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(Items[price.id].marketValue.min),
  ),
  maxMarketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(Items[price.id].marketValue.max),
  ),
  averageMarketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(Items[price.id].marketValue.average),
  ),
})))
</script>

<template>
  <NDataTable :columns="columns" :data="data" />
</template>

<style>

</style>
