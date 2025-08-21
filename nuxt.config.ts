// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  nitro: {
    preset: "static"
  },
  router: {
    options: {
      strict: false
    }
  },
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: ''
  }
})
