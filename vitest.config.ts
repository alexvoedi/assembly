import { defineConfig } from 'vitest/config'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts', 'src/**/*.test.ts'],
  },
  plugins: [
    Components({
      dts: 'src/types/components.d.ts',
      deep: true,
      directoryAsNamespace: true,
      include: [/\.vue$/, /\.vue\?vue/],
      globalNamespaces: ['components', 'layouts'],
      dirs: ['src/components', 'src/layouts'],
      resolvers: [VueUseComponentsResolver(), NaiveUiResolver()],
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/types/auto-import.d.ts',
      vueTemplate: true,
      eslintrc: {
        enabled: true,
      },
    }),
  ],
})
