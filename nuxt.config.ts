import { defineNuxtConfig } from "nuxt/config";

// Load environment configuration
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/${env}.js`);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/animations.css', '~/assets/css/submenu.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-dynavera.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/favicon-dynavera.png' },
        { rel: 'apple-touch-icon', href: '/favicon-dynavera.png' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      googleClientId: config.GOOGLE_CLIENT_ID,
      apiBaseUrl: config.API_BASE_URL,
      googleRedirectUri: config.GOOGLE_REDIRECT_URI,
      siteUrl: config.NUXT_PUBLIC_SITE_URL
    }
  }
})
