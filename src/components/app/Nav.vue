<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'

function renderIcon(icon: string) {
  return () => h(NIcon, {
    class: icon,
  })
}

function renderLink(to: string, label: string) {
  return () => h(
    RouterLink,
    {
      to,
    },
    { default: () => label },
  )
}

const menuOptions: MenuOption[] = [
  {
    key: 'dashboard',
    label: renderLink('dashboard', 'Dashboard'),
    icon: renderIcon('ico-mdi-home'),
  },
  {
    key: 'inventory',
    label: renderLink('inventory', 'Inventory'),
    icon: renderIcon('ico-mdi-package-variant-closed'),
  },
  {
    key: 'blueprints',
    label: renderLink('blueprints', 'Blueprints'),
    icon: renderIcon('ico-ic-baseline-architecture'),
  },
  {
    key: 'science',
    label: renderLink('science', 'Science'),
    icon: renderIcon('ico-ic-round-science'),
  },
  {
    key: 'production',
    label: renderLink('production', 'Production'),
    icon: renderIcon('ico-mdi-factory'),
  },
  {
    key: 'money',
    label: renderLink('money', 'Money'),
    icon: renderIcon('ico-ic-baseline-attach-money'),
  },
  {
    key: 'marketplace',
    label: renderLink('marketplace', 'Marketplace'),
    icon: renderIcon('ico-mdi-store'),
  },
  {
    key: 'energy',
    label: renderLink('energy', 'Energy'),
    icon: renderIcon('ico-mdi-flash'),
  },
  {
    key: 'game',
    label: renderLink('game', 'Game'),
    icon: renderIcon('ico-mdi-controller'),
  },
]

const route = useRoute()

const activeRoute = computed(() => {
  return route.name?.toString()
})
</script>

<template>
  <nav class="h-full">
    <NMenu :options="menuOptions" :value="activeRoute" />
  </nav>
</template>

<style scoped>
.router-link-active {
  color: var(--primary-color);
}
</style>
