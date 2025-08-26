export default defineNuxtRouteMiddleware(async (to, from) => {
  // Development bypass - allow direct access to dashboard and related pages in local environment
  if (process.env.NODE_ENV === 'development' && (
    to.path === '/dashboard' || 
    to.path.startsWith('/dashboard/')
  )) {
    console.log('🔓 Development mode: Bypassing authentication for dashboard access')
    return // Allow access to dashboard pages
  }

  // For production or other routes, check authentication
  if (process.client) {
    const { useAuth } = await import('~/composables/useAuth')
    const { isAuthenticated, checkAuthStatus } = useAuth()
    
    // Check authentication status
    await checkAuthStatus()
    
    // If not authenticated and trying to access protected route
    if (!isAuthenticated.value && to.path !== '/login' && to.path !== '/register') {
      return navigateTo('/login')
    }
    
                    // If authenticated and trying to access login/register
                if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
                  return navigateTo('/dashboard/')
                }
  }
})
