#!/bin/bash

# Set environment
ENV=${1:-development}
echo "🚀 Building Nuxt project for $(echo $ENV | tr '[:lower:]' '[:upper:]')..."

# Load configuration
CONFIG_FILE="./config/${ENV}.js"
if [ ! -f "$CONFIG_FILE" ]; then
    echo "❌ Configuration file not found: $CONFIG_FILE"
    exit 1
fi

# Extract environment variables from config file
eval $(node -e "
const config = require('$CONFIG_FILE');
Object.keys(config).forEach(key => {
  console.log(\`export \${key}=\"\${config[key]}\"\`);
});
")

echo "📋 Environment variables:"
echo "   NODE_ENV: $NODE_ENV"
echo "   API_BASE_URL: $API_BASE_URL"
echo "   GOOGLE_REDIRECT_URI: $GOOGLE_REDIRECT_URI"
echo "   NUXT_PUBLIC_SITE_URL: $NUXT_PUBLIC_SITE_URL"

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf .output

# Build project
echo "🔨 Building project..."
npx nuxt generate

# Check if build was successful
if [ -d ".output/public" ]; then
    echo "✅ Build successful!"
    echo "📁 Build output: .output/public/"
    
    # Verify configuration
    echo "🔍 Verifying configuration..."
    if grep -q "googleRedirectUri:\"$GOOGLE_REDIRECT_URI\"" .output/public/index.html; then
        echo "✅ Google OAuth redirect URI: CORRECT"
    else
        echo "❌ Google OAuth redirect URI: INCORRECT"
    fi
    
    if grep -q "apiBaseUrl:\"$API_BASE_URL\"" .output/public/index.html; then
        echo "✅ API Base URL: CORRECT"
    else
        echo "❌ API Base URL: INCORRECT"
    fi
    
    echo "🎉 Build completed successfully!"
    echo "📂 Files ready for deployment: .output/public/"
else
    echo "❌ Build failed!"
    exit 1
fi
