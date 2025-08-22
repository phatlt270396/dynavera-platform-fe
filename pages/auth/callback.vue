<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <div v-if="isProcessing" class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <div v-else-if="error" class="text-red-500 text-4xl mb-4">❌</div>
      <div v-else class="text-green-500 text-4xl mb-4">✅</div>
      
      <h2 class="text-xl font-semibold text-gray-900 mb-2">
        {{ statusMessage }}
      </h2>
      <p class="text-gray-600">{{ description }}</p>
      
      <div v-if="error" class="mt-4">
        <button 
          @click="retryAuth" 
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Thử lại
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import useAuth composable
const { useAuth } = await import('~/composables/useAuth')
const { handleOAuthCallback, isProcessingOAuth } = useAuth()
const route = useRoute()

// Local state
const isProcessing = ref(true)
const error = ref(null)
const statusMessage = ref('Processing authentication...')
const description = ref('Please wait while we complete your sign-in.')

// Handle OAuth callback
const processOAuthCallback = async () => {
  console.log('=== OAuth Callback Debug ===')
  console.log('Route path:', route.path)
  console.log('Route query:', route.query)
  console.log('Route fullPath:', route.fullPath)
  
  const { code, error: oauthError } = route.query
  
  if (oauthError) {
    console.error('OAuth error:', oauthError)
    error.value = 'Authentication failed'
    statusMessage.value = 'Authentication Error'
    description.value = 'There was an error during the authentication process.'
    isProcessing.value = false
    return
  }
  
  if (!code) {
    console.error('No OAuth code found in URL')
    console.log('Available query params:', Object.keys(route.query))
    error.value = 'No authorization code'
    statusMessage.value = 'Missing Authorization'
    description.value = 'No authorization code was provided.'
    isProcessing.value = false
    return
  }
  
  console.log('OAuth code found:', code.substring(0, 20) + '...')
  console.log('Code length:', code.length)
  
  if (isProcessingOAuth.value) {
    console.log('OAuth processing already in progress, waiting...')
    statusMessage.value = 'Processing in progress...'
    description.value = 'Authentication is already being processed.'
    return
  }
  
  try {
    console.log('Auth callback page - processing OAuth callback...')
    statusMessage.value = 'Authenticating...'
    description.value = 'Exchanging authorization code for access token...'
    
    console.log('Calling handleOAuthCallback with code...')
    await handleOAuthCallback(code)
    
    // Success - user will be redirected to dashboard
    statusMessage.value = 'Authentication Successful!'
    description.value = 'Redirecting to dashboard...'
    isProcessing.value = false
    
  } catch (err) {
    console.error('OAuth callback error:', err)
    error.value = err.message || 'Authentication failed'
    statusMessage.value = 'Authentication Failed'
    description.value = 'There was an error during the authentication process. Please try again.'
    isProcessing.value = false
  }
}

// Retry authentication
const retryAuth = () => {
  error.value = null
  isProcessing.value = true
  statusMessage.value = 'Processing authentication...'
  description.value = 'Please wait while we complete your sign-in.'
  processOAuthCallback()
}

// Watch for OAuth processing state changes
watch(isProcessingOAuth, (newValue) => {
  if (!newValue && isProcessing.value) {
    // OAuth processing finished, check if we need to show error
    setTimeout(() => {
      if (isProcessing.value) {
        isProcessing.value = false
      }
    }, 1000)
  }
})

onMounted(async () => {
  console.log('Auth callback page mounted')
  await processOAuthCallback()
})
</script>
