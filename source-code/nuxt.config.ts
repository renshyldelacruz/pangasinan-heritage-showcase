export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',

    head: {
      title: 'Pangasinan Heritage | Digital Showcase',

      meta: [
        {
          name: 'description',
          content: 'A fast, accessible digital showcase of Pangasinan heritage destinations.'
        },
        {
          name: 'theme-color',
          content: '#0b4f6c'
        }
      ],

      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap'
        }
      ]
    }
  }
})