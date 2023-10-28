<script setup lang="ts">
defineProps<{
  iconClass: string | string[]
  onClick: () => void
}>()
</script>

<template>
  <NButton circle quaternary @click="onClick()">
    <template #icon>
      <NIcon :class="iconClass" />
    </template>
  </NButton>
</template>

<style>

</style>
