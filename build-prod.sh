#!/bin/bash

echo "🚀 Building Nuxt project for PRODUCTION..."

# Set production environment variables
export NODE_ENV=production
export API_BASE_URL=https://dynavera.net/api
export GOOGLE_REDIRECT_URI=https://koovity.dynavera.net/auth/callback
export NUXT_PUBLIC_SITE_URL=https://koovity.dynavera.net

echo "📋 Environment variables set:"
echo "   NODE_ENV: $NODE_ENV"
echo "   API_BASE_URL: $API_BASE_URL"
echo "   GOOGLE_REDIRECT_URI: $GOOGLE_REDIRECT_URI"
echo "   NUXT_PUBLIC_SITE_URL: $NUXT_PUBLIC_SITE_URL"

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .output

# Build for production
echo "🔨 Building project..."
npx nuxt generate

# Check if build was successful
if [ -d ".output/public" ]; then
    echo "✅ Build successful!"
    echo "📁 Build output: .output/public/"
    
    # Verify production config
    echo "🔍 Verifying production configuration..."
    if grep -q 'googleRedirectUri:"https://koovity.dynavera.net/auth/callback"' .output/public/index.html; then
        echo "✅ Google OAuth redirect URI: CORRECT"
    else
        echo "❌ Google OAuth redirect URI: INCORRECT"
    fi
    
    if grep -q 'apiBaseUrl:"https://dynavera.net/api"' .output/public/index.html; then
        echo "✅ API Base URL: CORRECT"
    else
        echo "❌ API Base URL: INCORRECT"
    fi
    
    echo "🎉 Production build completed successfully!"
    echo "📂 Files ready for deployment: .output/public/"
else
    echo "❌ Build failed!"
    exit 1
fi
