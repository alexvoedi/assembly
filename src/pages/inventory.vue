<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { InventoryItem } from '../interfaces/InventoryItem'
import { useInventoryStore } from '../store/inventory-store'
import { Items } from '../data/items/Items'
import { useMarketplaceStore } from '../store/marketplace-store'
import roundToNFractionDigits from '../utils/roundToNFractionDigits'

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
    title: 'Market Value',
    key: 'marketValue',
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
})))

const fillState = computed(() => {
  const percent = 100 * inventoryStore.getTotalItems() / inventoryStore.maxItems

  return Math.round(percent * 100) / 100
})
</script>

<template>
  <NH1>Inventory</NH1>

  <div class="space-y-4">
    <NProgress type="dashboard" gap-position="bottom" :percentage="fillState">
      <span class="text-xl font-mono">{{ fillState }}%</span>
    </NProgress>

    <NDataTable :columns="columns" :data="data" />
  </div>
</template>

<style>

</style>
