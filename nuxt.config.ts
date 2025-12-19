// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-12-11',

  hub: {
    db: 'sqlite',
    kv: true,
    blob: true,
    cache: true,
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  nitro: {
    preset: process.env.NITRO_PRESET || (process.env.NETLIFY ? 'netlify' : 'node-server'),
  },
})
