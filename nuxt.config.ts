import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', '~/assets/css/animations.css'],
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
  runtimeConfig: {
    public: {
      googleClientId: process.env.GOOGLE_CLIENT_ID || '730223971203-6cf0f60suid3njso9l1ukpkqgldb7eb1.apps.googleusercontent.com',
      apiBaseUrl: process.env.API_BASE_URL || 'https://koovity.dynavera.net/api',
      googleRedirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000'
    }
  }
})
