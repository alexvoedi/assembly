import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    alias: '/dashboard',
    name: 'dashboard',
    component: () => import('./pages/dashboard.vue'),
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: () => import('./pages/inventory.vue'),
  },
  {
    path: '/science',
    name: 'science',
    component: () => import('./pages/science.vue'),
  },
  {
    path: '/blueprints',
    name: 'blueprints',
    component: () => import('./pages/blueprints.vue'),
  },
  {
    path: '/production',
    name: 'production',
    component: () => import('./pages/production.vue'),
  },
  {
    path: '/energy',
    name: 'energy',
    component: () => import('./pages/energy.vue'),
  },
  {
    path: '/money',
    name: 'money',
    component: () => import('./pages/money.vue'),
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: () => import('./pages/marketplace.vue'),
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('./pages/game.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory('/assembly/'),
  routes,
})

export { router }
