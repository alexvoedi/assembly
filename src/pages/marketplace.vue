<script setup lang="ts">
import { useMarketplaceStore } from '../store/marketplace-store'
import roundToNFractionDigits from '../utils/roundToNFractionDigits'

const lastTab = useLocalStorage('marketplace-page/default-tab', 'buy')

const marketplaceStore = useMarketplaceStore()

const totalMarketValue = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 8,
}).format(
  roundToNFractionDigits(marketplaceStore.getTotalMarketValue(), 2),
)
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
        default-value="buy"
        size="large"
        type="segment"
        animated
        :tabs-padding="20"
        pane-style="padding: 20px;"
        justify-content="space-evenly"
      >
        <NTabPane name="buy">
          <template #tab>
            <div class="flex items-center justify-center gap-2 text-xl">
              <span class="ico-ic-baseline-add-shopping-cart" />
              <span>Buy</span>
            </div>
          </template>
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
