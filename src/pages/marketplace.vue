<script setup lang="ts">
const lastTab = useLocalStorage('marketplace-page/default-tab', 'buy')
</script>

<template>
  <NH1>Marketplace</NH1>

  <div class="space-y-6">
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
