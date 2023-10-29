<script setup lang="ts">
import { useMessage } from 'naive-ui'
import type { TradeStrategyData } from '../../interfaces/TradeStrategy'
import { useMarketplaceStore } from '@/store/marketplace-store'
import type { MakeNullable } from '@/utils/types/MakeNullable'

const marketplaceStore = useMarketplaceStore()
const message = useMessage()

const showModalRef = ref(false)

const strategyRef = ref<MakeNullable<TradeStrategyData, 'itemId' | 'strategyId'>>({
  strategyId: null,
  itemId: null,
  quantity: 1,
})

function createTradeStrategy() {
  const { itemId, strategyId, ...rest } = strategyRef.value

  if (!itemId)
    return message.error('Please select an item')

  if (!strategyId)
    return message.error('Please select a trade strategy')

  marketplaceStore.addTradeStrategy({
    itemId,
    strategyId,
    ...rest,
  })

  message.success('Trade strategy added')

  showModalRef.value = false
}
</script>

<template>
  <NButton type="primary" @click="showModalRef = true">
    Add Automation
  </NButton>

  <NModal v-model:show="showModalRef">
    <NCard title="Add Automation" :bordered="false" role="dialog" aria-modal="true" class="max-w-120" closable @close="showModalRef = false">
      <NFormItem label="Item">
        <ItemSelector v-model="strategyRef.itemId" />
      </NFormItem>

      <NFormItem label="Trade Strategy">
        <MarketplaceStrategySelector v-model="strategyRef.strategyId" />
      </NFormItem>

      <NFormItem label="Quantity">
        <NInputNumber v-model:value="strategyRef.quantity" :min="1" :max="999_999_999" class="w-full" />
      </NFormItem>

      <template #action>
        <div class="flex items-center justify-between">
          <div>
            <NButton secondary>
              Cancel
            </NButton>
          </div>
          <div>
            <NButton type="primary" @click="createTradeStrategy()">
              Create
            </NButton>
          </div>
        </div>
      </template>
    </NCard>
  </NModal>
</template>

<style>

</style>
