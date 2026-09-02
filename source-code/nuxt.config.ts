export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: '/',
  },

  nitro: {
    preset: 'github-pages'
  },

  compatibilityDate: '2024-04-03'
})