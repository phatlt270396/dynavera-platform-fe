<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">Processing authentication...</h2>
      <p class="text-gray-600">Please wait while we complete your sign-in.</p>
    </div>
  </div>
</template>

<script setup>
// Import useAuth composable
const { useAuth } = await import('~/composables/useAuth')
const { handleOAuthCallback } = useAuth()
const route = useRoute()

// Handle OAuth callback
onMounted(async () => {
  const { code, error } = route.query
  
  if (error) {
    console.error('OAuth error:', error)
    await navigateTo('/login?error=auth_failed')
    return
  }
  
  if (code) {
    try {
      await handleOAuthCallback(code)
    } catch (err) {
      console.error('OAuth callback error:', err)
      await navigateTo('/login?error=auth_failed')
    }
  } else {
    await navigateTo('/login')
  }
})
</script>
