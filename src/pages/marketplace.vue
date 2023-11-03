<script setup lang="ts">
import { useInventoryStore } from '../store/inventory-store'
import { useMarketplaceStore } from '../store/marketplace-store'
import roundToNFractionDigits from '../utils/roundToNFractionDigits'

const marketplaceStore = useMarketplaceStore()
const inventoryStore = useInventoryStore()

const lastTab = useLocalStorage('marketplace-page/default-tab', 'market')

const totalMarketValue = computed(() => {
  let total = inventoryStore.money

  inventoryStore.getItemsArray().forEach((inventoryItem) => {
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

    <NCard content-style="padding: 0;">
      <NTabs
        v-model:value="lastTab"
        default-value="inventory"
        size="large"
        type="segment"
        animated
        :tabs-padding="20"
        pane-style="padding: 20px;"
        justify-content="space-evenly"
      >
        <NTabPane name="market" style="padding: 0;">
          <template #tab>
            <div class="flex items-center justify-center gap-2 text-xl">
              <span class="ico-mdi-package-variant-closed" />
              <span>Market</span>
            </div>
          </template>

          <MarketplaceMarketDataTable />
        </NTabPane>

        <NTabPane name="sell" style="padding: 0;">
          <template #tab>
            <div class="flex items-center justify-center gap-2 text-xl">
              <span class="ico-ic-baseline-monetization-on" />
              <span>Sell</span>
            </div>
          </template>

          <MarketplaceSellingDataTable />
        </NTabPane>
      </NTabs>
    </NCard>

    <MarketplaceAutomationCard />
  </div>
</template>

<style>

</style>
