// Global state to ensure single instance
let globalAuthInstance = null

export const useAuth = () => {
  // Return existing instance if available
  if (globalAuthInstance) {
    return globalAuthInstance
  }
  
  const config = useRuntimeConfig()
  const router = useRouter()
  
  console.log('useAuth initialized with config:', {
    googleClientId: config.public.googleClientId,
    apiBaseUrl: config.public.apiBaseUrl,
    googleRedirectUri: config.public.googleRedirectUri
  })
  
  // Reactive state
  const isAuthenticated = ref(false)
  const user = ref(null)
  const isLoading = ref(false)
  const error = ref(null)
  
  // Add flag to prevent multiple simultaneous API calls
  const isCheckingAuth = ref(false)
  const hasCheckedAuth = ref(false)
  let authCheckTimeout = null
  
  // Add flag to prevent multiple OAuth callback processing
  const isProcessingOAuth = ref(false)
  const processedOAuthCodes = new Set()
  const hasProcessedOAuth = ref(false)
  
  // Fetch user profile from backend
  const fetchUserProfile = async (token) => {
    try {
      const profile = await $fetch(`${config.public.apiBaseUrl}/v1/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      user.value = profile
      isAuthenticated.value = true
      return profile
    } catch (err) {
      console.error('Error fetching profile:', err)
      // Token is invalid, remove it
      localStorage.removeItem('accessToken')
      isAuthenticated.value = false
      user.value = null
      throw err
    }
  }
  
  // Google sign in - Redirect to Google OAuth
  const signInWithGoogle = () => {
    // Reset OAuth processing state when starting new OAuth flow
    hasProcessedOAuth.value = false
    processedOAuthCodes.clear()
    
    const clientId = config.public.googleClientId
    const redirectUri = config.public.googleRedirectUri
    const scope = 'openid email profile'
    const responseType = 'code'
    
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${encodeURIComponent(clientId)}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scope)}` +
      `&response_type=${responseType}` +
      `&access_type=offline` +
      `&prompt=consent`
    
    console.log('Redirecting to Google OAuth:', googleAuthUrl)
    window.location.href = googleAuthUrl
  }
  
  // Google sign up (same as sign in for OAuth)
  const signUpWithGoogle = () => {
    signInWithGoogle()
  }
  
  // Logout
  const logout = () => {
    localStorage.removeItem('accessToken')
    user.value = null
    isAuthenticated.value = false
    hasCheckedAuth.value = false
    
    // Clear any pending auth check
    if (authCheckTimeout) {
      clearTimeout(authCheckTimeout)
      authCheckTimeout = null
    }
    
    // Clear OAuth processing state
    isProcessingOAuth.value = false
    processedOAuthCodes.clear()
    hasProcessedOAuth.value = false
    
    // Sign out from Google
    if (typeof window !== 'undefined' && window.google) {
      window.google.accounts.id.disableAutoSelect()
    }
    
    router.push('/')
  }
  
  // Check authentication status on app start
  const checkAuthStatus = async () => {
    // Prevent multiple simultaneous calls
    if (isCheckingAuth.value) {
      console.log('Auth check already in progress, skipping...')
      return
    }
    
    // If we've already checked auth and user is authenticated, don't check again
    if (hasCheckedAuth.value && isAuthenticated.value) {
      console.log('Auth already checked and user is authenticated, skipping...')
      return
    }
    
    // Clear any pending timeout
    if (authCheckTimeout) {
      clearTimeout(authCheckTimeout)
    }
    
    // Debounce the auth check
    return new Promise((resolve) => {
      authCheckTimeout = setTimeout(async () => {
        const token = localStorage.getItem('accessToken')
        if (!token) {
          isAuthenticated.value = false
          user.value = null
          hasCheckedAuth.value = true
          resolve()
          return
        }
        
        try {
          isCheckingAuth.value = true
          await fetchUserProfile(token)
          hasCheckedAuth.value = true
        } catch (err) {
          // Token is invalid, remove it
          localStorage.removeItem('accessToken')
          isAuthenticated.value = false
          user.value = null
          hasCheckedAuth.value = true
        } finally {
          isCheckingAuth.value = false
          resolve()
        }
      }, 100) // 100ms debounce
    })
  }
  
  // Handle OAuth callback with authorization code
  const handleOAuthCallback = async (code) => {
    console.log('=== handleOAuthCallback Debug ===')
    console.log('Received code:', code.substring(0, 20) + '...')
    console.log('Code length:', code.length)
    
    // Prevent multiple processing of the same code
    if (processedOAuthCodes.has(code)) {
      console.log('OAuth code already processed, skipping...', code.substring(0, 10) + '...')
      return
    }
    
    // Prevent multiple simultaneous OAuth processing
    if (isProcessingOAuth.value) {
      console.log('OAuth processing already in progress, skipping...')
      return
    }
    
    // If OAuth has already been processed successfully, skip
    if (hasProcessedOAuth.value) {
      console.log('OAuth already processed successfully, skipping...')
      return
    }
    
    try {
      console.log('Starting OAuth processing...')
      isProcessingOAuth.value = true
      processedOAuthCodes.add(code)
      error.value = null
      
      console.log('Handling OAuth callback with code:', code)
      console.log('Redirect URI:', config.public.googleRedirectUri)
      console.log('API Base URL:', config.public.apiBaseUrl)
      
      const requestBody = { 
        code,
        redirectUri: config.public.googleRedirectUri
      }
      console.log('Request body:', requestBody)
      
      const apiUrl = `${config.public.apiBaseUrl}/v1/auth/google`
      console.log('Making API call to:', apiUrl)
      
      // Send authorization code to backend to exchange for access token
      const result = await $fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: requestBody
      })
      
      console.log('Backend response received:', result)
      
      if (result.accessToken) {
        console.log('Access token received, storing...')
        // Store the token
        localStorage.setItem('accessToken', result.accessToken)
        
        console.log('Fetching user profile...')
        // Fetch user profile and set authentication state
        await fetchUserProfile(result.accessToken)
        hasCheckedAuth.value = true
        hasProcessedOAuth.value = true
        
        console.log('OAuth callback completed successfully, redirecting to dashboard...')
        
        // Redirect to dashboard
        router.push('/dashboard')
      } else {
        console.error('No access token in response')
        throw new Error('No access token received from backend')
      }
    } catch (err) {
      console.error('OAuth callback error:', err)
      console.error('Error details:', {
        message: err.message,
        status: err.status,
        statusText: err.statusText,
        data: err.data
      })
      error.value = 'Xác thực thất bại. Vui lòng thử lại.'
      // Remove the code from processed set so it can be retried
      processedOAuthCodes.delete(code)
      throw err // Re-throw to let the calling component handle it
    } finally {
      console.log('OAuth processing finished, setting isProcessingOAuth to false')
      isProcessingOAuth.value = false
    }
  }
  
  // Create the instance
  const instance = {
    // State
    isAuthenticated: readonly(isAuthenticated),
    user: readonly(user),
    isLoading: readonly(isLoading),
    error: readonly(error),
    isProcessingOAuth: readonly(isProcessingOAuth),
    
    // Methods
    signInWithGoogle,
    signUpWithGoogle,
    logout,
    checkAuthStatus,
    handleOAuthCallback
  }
  
  // Store global instance
  globalAuthInstance = instance
  
  return instance
}
