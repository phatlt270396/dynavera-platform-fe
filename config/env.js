// Centralized Environment Configuration
const environments = {
  development: {
    NODE_ENV: 'development',
    API_BASE_URL: 'http://localhost:8080/api',
    GOOGLE_REDIRECT_URI: 'http://localhost:3000/auth/callback',
    NUXT_PUBLIC_SITE_URL: 'http://localhost:3000',
    GOOGLE_CLIENT_ID: '730223971203-6cf0f60suid3njso9l1ukpkqgldb7eb1.apps.googleusercontent.com'
  },
  production: {
    NODE_ENV: 'production',
    API_BASE_URL: 'https://dynavera.net/api',
    GOOGLE_REDIRECT_URI: 'https://koovity.dynavera.net/auth/callback',
    NUXT_PUBLIC_SITE_URL: 'https://koovity.dynavera.net',
    GOOGLE_CLIENT_ID: '730223971203-6cf0f60suid3njso9l1ukpkqgldb7eb1.apps.googleusercontent.com'
  }
};

// Get current environment
const getCurrentEnv = () => {
  return process.env.NODE_ENV || 'development';
};

// Get environment config
const getEnvConfig = () => {
  const env = getCurrentEnv();
  return environments[env] || environments.development;
};

// Set environment variables
const setEnvVars = () => {
  const config = getEnvConfig();
  Object.keys(config).forEach(key => {
    if (!process.env[key]) {
      process.env[key] = config[key];
    }
  });
};

// Export functions and configs
module.exports = {
  environments,
  getCurrentEnv,
  getEnvConfig,
  setEnvVars
};

// Auto-set environment variables when imported
setEnvVars();
