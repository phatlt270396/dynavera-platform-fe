import { defineNuxtConfig } from "nuxt/config";

// Load environment configuration
const env = process.env.NODE_ENV || 'development';
const config = require(`./config/${env}.js`);

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
  app: {
    head: {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js',
          defer: true
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.rings.min.js',
          defer: true
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.dots.min.js',
          defer: true
        }
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
