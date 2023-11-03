<script setup lang="ts">
import { darkTheme } from 'naive-ui'

const isDev = import.meta.env.DEV
</script>

<template>
  <NConfigProvider :theme="darkTheme" abstract>
    <NMessageProvider>
      <BaseLayout />
      <DevConsole v-if="isDev" />
    </NMessageProvider>
  </NConfigProvider>
</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(16, 16, 20);
  color: rgb(240, 240, 250);
}
</style>
