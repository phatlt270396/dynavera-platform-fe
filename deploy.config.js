import envConfig from './config/env.js';

// Production Deployment Configuration
export default {
  // Production API Configuration
  production: {
    apiBaseUrl: envConfig.environments.production.API_BASE_URL,
    googleRedirectUri: envConfig.environments.production.GOOGLE_REDIRECT_URI,
    siteUrl: envConfig.environments.production.NUXT_PUBLIC_SITE_URL,
    googleClientId: envConfig.environments.production.GOOGLE_CLIENT_ID
  },
  
  // Development API Configuration
  development: {
    apiBaseUrl: envConfig.environments.development.API_BASE_URL,
    googleRedirectUri: envConfig.environments.development.GOOGLE_REDIRECT_URI,
    siteUrl: envConfig.environments.development.NUXT_PUBLIC_SITE_URL,
    googleClientId: envConfig.environments.development.GOOGLE_CLIENT_ID
  },
  
  // Build commands for different environments
  buildCommands: {
    development: 'npm run dev',
    production: 'npm run build:prod',
    preview: 'npm run preview'
  },
  
  // Environment variables mapping
  envVars: {
    production: envConfig.environments.production,
    development: envConfig.environments.development
  },
  
  // Server information
  server: {
    ip: '45.77.174.8',
    webRoot: '/var/www/html',
    webServer: 'nginx',
    domains: {
      api: 'https://dynavera.net',
      frontend: 'https://koovity.dynavera.net',
      ip: 'https://45.77.174.8'
    }
  }
}
