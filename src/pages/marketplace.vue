<script setup lang="ts">
import { useInventoryStore } from '../store/inventory-store'
import { useMarketplaceStore } from '../store/marketplace-store'
import roundToNFractionDigits from '../utils/roundToNFractionDigits'

const marketplaceStore = useMarketplaceStore()
const inventoryStore = useInventoryStore()

const totalMarketValue = computed(() => {
  let total = inventoryStore.money

  inventoryStore.getItemArray().forEach((inventoryItem) => {
    const marketValue = marketplaceStore.prices[inventoryItem.id].current

    total += inventoryItem.quantity * marketValue
  })

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 8,
  }).format(
    roundToNFractionDigits(total, 2),
  )
})
</script>

<template>
  <NH1>Marketplace</NH1>

  <div class="space-y-6">
    <div class="flex">
      <NCard class="w-auto!">
        <NStatistic label="Total Market Value">
          <div class="text-center">
            {{ totalMarketValue }}
          </div>
        </NStatistic>
      </NCard>
    </div>

    <NCard title="Sell Items" content-style="padding: 0;">
      <MarketplaceSellingDataTable />
    </NCard>

    <MarketplaceAutomationCard />
  </div>
</template>

<style>

</style>
