export default defineNuxtPlugin(async (nuxtApp) => {
  // Check authentication status when app is mounted (only once)
  nuxtApp.hook('app:mounted', async () => {
    // Import useAuth composable
    const { useAuth } = await import('~/composables/useAuth')
    const { checkAuthStatus } = useAuth()
    
    // Check authentication status (this will now prevent duplicate calls)
    console.log('App mounted - checking initial auth status...')
    await checkAuthStatus()
  })
})
