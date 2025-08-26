export default defineNuxtRouteMiddleware(async (to, from) => {
  // Import useAuth composable
  const { useAuth } = await import('~/composables/useAuth')
  const { isAuthenticated, checkAuthStatus } = useAuth()
  
  // Check authentication status (this will now prevent duplicate calls)
  await checkAuthStatus()
  
  // If not authenticated and trying to access protected route
  if (!isAuthenticated.value && to.path !== '/login' && to.path !== '/register') {
    return navigateTo('/login')
  }
  
  // If authenticated and trying to access login/register
  if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
    return navigateTo('/dashboard')
  }
})
