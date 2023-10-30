<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import { useInventoryStore } from '@/store/inventory-store'
import { Items } from '@/data/items/Items'
import { useMarketplaceStore } from '@/store/marketplace-store'
import roundToNFractionDigits from '@/utils/roundToNFractionDigits'
import type { InventoryItem } from '@/interfaces/InventoryItem'

const inventoryStore = useInventoryStore()
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
  },
  {
    title: 'Average',
    key: 'averageMarketValue',
  },
  {
    title: 'Max',
    key: 'maxMarketValue',
  },
  {
    title: 'Market Value',
    key: 'marketValue',
  },
  {
    title: 'Relative Value',
    key: 'relative-value',
    render(item) {
      const relativeValue = marketplaceStore.prices[item.id].current / Items[item.id].marketValue.average

      return `${(100 * relativeValue).toFixed(2)}%`
    },
  },
  {
    title: 'Quantity',
    key: 'quantity',
  },
  {
    title: 'Total Value',
    key: 'totalMarketValue',
  },
]

const data = computed(() => inventoryStore.getItemArray().map(item => ({
  id: item.id,
  quantity: item.quantity,
  name: Items[item.id].name,
  description: Items[item.id].description,
  marketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(marketplaceStore.prices[item.id].current),
  ),
  totalMarketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(item.quantity * marketplaceStore.prices[item.id].current),
  ),
  minMarketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(Items[item.id].marketValue.min),
  ),
  maxMarketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(Items[item.id].marketValue.max),
  ),
  averageMarketValue: new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(Items[item.id].marketValue.average),
  ),
})))
</script>

<template>
  <NDataTable :columns="columns" :data="data" />
</template>

<style>

</style>
