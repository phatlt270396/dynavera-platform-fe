// Production Deployment Configuration
export default {
  // Production API Configuration
  production: {
    apiBaseUrl: 'https://dynavera.net/api',
    googleRedirectUri: 'https://koovity.dynavera.net/auth/callback',
    siteUrl: 'https://koovity.dynavera.net',
    googleClientId: '730223971203-6cf0f60suid3njso9l1ukpkqgldb7eb1.apps.googleusercontent.com'
  },
  
  // Development API Configuration
  development: {
    apiBaseUrl: 'http://localhost:8080/api',
    googleRedirectUri: 'http://localhost:3000/auth/callback',
    siteUrl: 'http://localhost:3000',
    googleClientId: '730223971203-6cf0f60suid3njso9l1ukpkqgldb7eb1.apps.googleusercontent.com'
  },
  
  // Build commands for different environments
  buildCommands: {
    development: 'npm run dev',
    production: 'npm run build:prod',
    preview: 'npm run preview'
  },
  
  // Environment variables mapping
  envVars: {
    production: {
      NODE_ENV: 'production',
      API_BASE_URL: 'https://dynavera.net/api',
      GOOGLE_REDIRECT_URI: 'https://koovity.dynavera.net/auth/callback',
      NUXT_PUBLIC_SITE_URL: 'https://koovity.dynavera.net'
    },
    development: {
      NODE_ENV: 'development',
      API_BASE_URL: 'http://localhost:8080/api',
      GOOGLE_REDIRECT_URI: 'http://localhost:3000/auth/callback',
      NUXT_PUBLIC_SITE_URL: 'http://localhost:3000'
    }
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
