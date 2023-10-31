<script setup lang="ts">
import { useInventoryStore } from '../store/inventory-store'
import { useMarketplaceStore } from '../store/marketplace-store'
import type { ItemId } from '../data/items/ItemId'
import { useGameStore } from '@/store/game-store'

useHead({
  title: 'Assembly',
  meta: [
    {
      name: 'description',
      content: 'A Factorio-like idle game',
    },
  ],
})

const gameStore = useGameStore()
const inventoryStore = useInventoryStore()
const marketplaceStore = useMarketplaceStore()

gameStore.initGame()

inventoryStore.$onAction(({ name, args }) => {
  if (name === 'addItem') {
    const [itemId] = args as [ItemId, number]

    marketplaceStore.executeStrategyByItemId(itemId)
  }
})

setInterval(() => {
  marketplaceStore.updateMarketValues()
}, 60 * 1000)
</script>

<template>
  <NLayout class="h-full" content-style="display: flex; flex-direction: column;">
    <NLayoutHeader>
      <AppHeader />
    </NLayoutHeader>

    <NLayout has-sider>
      <NLayoutSider>
        <AppNav />
      </NLayoutSider>

      <NLayout>
        <NScrollbar trigger="none" content-style="display: flex; flex-direction: column; min-height: 100%;">
          <NLayoutContent class="h-full">
            <main class="p-8 container mx-auto">
              <RouterView />
            </main>
          </NLayoutContent>

          <NLayoutFooter>
            <AppFooter />
          </NLayoutFooter>
        </NScrollbar>
      </NLayout>
    </NLayout>
  </NLayout>
</template>

<style>

</style>
