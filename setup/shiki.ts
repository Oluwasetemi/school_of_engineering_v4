import { defineShikiSetup, ShikiSetupReturn } from '@slidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
    langs: ['html', 'css', 'js', 'jsx', 'ts', 'tsx', 'sh', 'vue', 'markdown'],
    transformers: [],
  }
})
