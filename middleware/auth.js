export default defineNuxtRouteMiddleware(async (to, from) => {
  // Only bypass auth in development mode for specific testing
  if (process.env.NODE_ENV === 'development' && process.env.BYPASS_AUTH === 'true') {
    console.log('🔓 Development mode: Bypassing authentication for testing')
    return // Allow access for testing
  }

  // Check authentication for all protected routes
  if (process.client) {
    const { useAuth } = await import('~/composables/useAuth')
    const { isAuthenticated, checkAuthStatus } = useAuth()
    
    // Check authentication status
    await checkAuthStatus()
    
    // Define protected routes that require authentication
    const protectedRoutes = [
      '/dashboard',
      '/system'
    ]
    
    // Check if current route is protected
    const isProtectedRoute = protectedRoutes.some(route => 
      to.path === route || to.path.startsWith(route + '/')
    )
    
    // If not authenticated and trying to access protected route
    if (!isAuthenticated.value && isProtectedRoute) {
      console.log('🚫 Access denied: User not authenticated, redirecting to login')
      return navigateTo('/login')
    }
    
    // If authenticated and trying to access login/register
    if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
      console.log('✅ User authenticated, redirecting to dashboard')
      return navigateTo('/dashboard/')
    }
  }
})
