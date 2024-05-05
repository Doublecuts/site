// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/styles/app.scss"],

  modules: ['nuxt-swiper', '@nuxt/ui', '@nuxtjs/color-mode'],

  swiper: {
    modules: ['navigation']
  },

  ssr: true,

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },

  colorMode: {
    preference: 'light'
  }
})
