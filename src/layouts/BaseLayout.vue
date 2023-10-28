<script setup lang="ts">
import { useMessage } from 'naive-ui'
import { useTimeTravel } from '../composables/useTimeTravel'
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
const message = useMessage()

gameStore.initGame()

const { timeTravel } = useTimeTravel()

try {
  timeTravel()
}
catch (e) {
  if (e instanceof Error)
    message.error(e.message)
}

inventoryStore.$onAction(({ name, args }) => {
  if (name === 'addItem') {
    const [itemId] = args as [ItemId, number]

    marketplaceStore.executeStrategyByItemId(itemId)
  }
})

setInterval(() => {
  marketplaceStore.updateMarketValues()
}, 5 * 1000)
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

      <NLayout content-style="">
        <NScrollbar trigger="none" content-style="display: flex; flex-direction: column; min-height: 100%;">
          <NLayoutContent class="h-full">
            <main class="px-6 py-4 container mx-auto">
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
