import type { RemovableRef } from '@vueuse/core'
import { defineStore } from 'pinia'

type EffectStore = RemovableRef<object>

export const useEffectStore = defineStore('effect-store', {
  state: (): EffectStore => useLocalStorage('effect-store', {
  }),

  actions: {
    resetStore() {

    },
  },

  getters: {
  },
})
