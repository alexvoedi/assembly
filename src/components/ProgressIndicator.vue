<script setup lang="ts">
defineProps<{
  progress: number
}>()

const radius = ref(10)

const diameter = computed(() => 2 * radius.value)

const percent = computed(() => 2 * Math.PI * (radius.value - 2))
</script>

<template>
  <div class="flex items-center gap-2">
    <svg
      :width="diameter"
      :height="diameter"
      :viewBox="`0 0 ${diameter} ${diameter}`"
      class="transform rotate-270"
    >
      <circle
        class="stroke-indigo-600"
        :cx="radius"
        :cy="radius"
        :r="radius - 2"
        fill="none"
        stroke-width="3"
        :stroke-dasharray="percent"
        :stroke-dashoffset="(1 - percent) * progress"
      />

      <circle
        class="stroke-emerald-500"
        :cx="radius"
        :cy="radius"
        :r="radius - 2"
        fill="none"
        stroke-width="3"
        :stroke-dasharray="percent"
        :stroke-dashoffset="percent * (1 - progress)"
      />
    </svg>

    <span class="text-gray-200 font-mono text-right">{{ Math.round(progress * 100) }}%</span>
  </div>
</template>

<style>

</style>
