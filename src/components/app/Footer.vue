<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer class="p-8 flex items-center justify-center">
    <span class="text-gray-400">Assembly &copy; {{ currentYear }} alexvoedi</span>
  </footer>
</template>

<style>

</style>
