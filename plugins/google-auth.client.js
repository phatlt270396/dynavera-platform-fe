export default defineNuxtPlugin(async (nuxtApp) => {
  // Check authentication status when app is mounted
  nuxtApp.hook('app:mounted', async () => {
    // Import useAuth composable
    const { useAuth } = await import('~/composables/useAuth')
    const { checkAuthStatus } = useAuth()
    
    // Check authentication status
    await checkAuthStatus()
  })
})
