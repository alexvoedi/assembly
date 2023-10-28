import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      prefix: 'ico-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],

  theme: {
    fontFamily: {
      title: ['Quicksand', 'sans-serif'],
      content: ['Quicksand', 'sans-serif'],
    },
  },

  transformers: [transformerDirectives(), transformerVariantGroup()],
})
