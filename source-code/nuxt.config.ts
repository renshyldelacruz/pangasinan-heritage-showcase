import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: process.env.NODE_ENV === 'production'
      ? '/pangasinan-heritage-showcase/'
      : '/'
  },

  nitro: {
    preset: 'github-pages'
  },

  compatibilityDate: '2024-04-03'
})