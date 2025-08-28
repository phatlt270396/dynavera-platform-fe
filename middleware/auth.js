export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('[auth] to:', to.path)
  // Only bypass auth in development mode for specific testing
  if (process.env.NODE_ENV === 'development' && process.env.BYPASS_AUTH === 'true') {
    console.log('🔓 Development mode: Bypassing authentication for testing')
    return // Allow access for testing
  }

  // Check authentication for all protected routes
  if (process.client) {
    // System section auth
    if (to.path === '/system/login') {
      return
    }
    if (to.path === '/system' || to.path.startsWith('/system/')) {
      const systemAuthed = localStorage.getItem('systemAuthed') === 'true'
      if (!systemAuthed) {
        console.log('🚫 System access denied: redirecting to /system/login')
        return navigateTo('/system/login')
      }
      return
    }

    // App auth
    const { useAuth } = await import('~/composables/useAuth')
    const { isAuthenticated, checkAuthStatus } = useAuth()
    await checkAuthStatus()

    const protectedRoutes = ['/dashboard']
    const isProtectedRoute = protectedRoutes.some(route => 
      to.path === route || to.path.startsWith(route + '/')
    )
    if (!isAuthenticated.value && isProtectedRoute) {
      console.log('🚫 Access denied: User not authenticated, redirecting to login')
      return navigateTo('/login')
    }
    if (isAuthenticated.value && (to.path === '/login' || to.path === '/register')) {
      console.log('✅ User authenticated, redirecting to dashboard')
      return navigateTo('/dashboard/')
    }
  }
})
