// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ["~/assets/styles/app.scss"],

  modules: ['nuxt-swiper', '@nuxt/ui'],

  swiper: {
    modules: ['navigation']
  },

  target: 'static',
  ssr: true,
})
