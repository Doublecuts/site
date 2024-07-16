// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/styles/app.scss"],

  modules: ['nuxt-swiper', '@nuxt/ui', '@nuxtjs/color-mode', 'yandex-metrika-module-nuxt3'],

  yandexMetrika: {
    id: '97376726',
    options: {
      webvisor: true,
    }
  },

  swiper: {
    modules: ['navigation', 'autoplay', 'pagination']
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
  },

  optimization: {
    splitChunks: {
      maxSize: 300000
    }
  }
})
