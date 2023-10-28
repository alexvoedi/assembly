import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { router } from './router'
import { i18n } from './plugins/i18n'

import App from './App.vue'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '@fontsource-variable/quicksand'
import { useInventoryStore } from './store/inventory-store'
import { useProductionStore } from './store/production-store'

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(createPinia())
app.use(createHead())

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

app.mount('#app')

useInventoryStore()
useProductionStore()
