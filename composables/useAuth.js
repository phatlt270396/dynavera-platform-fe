export const useAuth = () => {
  const config = useRuntimeConfig()
  const router = useRouter()
  
  console.log('useAuth initialized with config:', {
    googleClientId: config.public.googleClientId,
    apiBaseUrl: config.public.apiBaseUrl,
    googleRedirectUri: config.public.googleRedirectUri
  })
  
  // Log the OAuth URL for debugging
  const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
    `client_id=${encodeURIComponent(config.public.googleClientId)}` +
    `&redirect_uri=${encodeURIComponent(config.public.googleRedirectUri)}` +
    `&scope=${encodeURIComponent('openid email profile')}` +
    `&response_type=code` +
    `&access_type=offline` +
    `&prompt=consent`
  
  console.log('OAuth URL:', oauthUrl)
  
  // Reactive state
  const isAuthenticated = ref(false)
  const user = ref(null)
  const isLoading = ref(false)
  const error = ref(null)
  
  // Fetch user profile from backend
  const fetchUserProfile = async (token) => {
    try {
      const profile = await $fetch(`${config.public.apiBaseUrl}/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      user.value = profile
      isAuthenticated.value = true
    } catch (err) {
      console.error('Error fetching profile:', err)
    }
  }
  
  // Google sign in - Redirect to Google OAuth
  const signInWithGoogle = () => {
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
    
    // Sign out from Google
    if (typeof window !== 'undefined' && window.google) {
      window.google.accounts.id.disableAutoSelect()
    }
    
    router.push('/')
  }
  
  // Check authentication status on app start
  const checkAuthStatus = async () => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      try {
        await fetchUserProfile(token)
      } catch (err) {
        // Token is invalid, remove it
        localStorage.removeItem('accessToken')
      }
    }
  }
  
  // Handle OAuth callback with authorization code
  const handleOAuthCallback = async (code) => {
    try {
      isLoading.value = true
      error.value = null
      
      console.log('Handling OAuth callback with code:', code)
      
      const requestBody = { 
        code,
      }
      console.log('Request body:', requestBody)
      
      // Send authorization code to backend to exchange for access token
      const result = await $fetch(`${config.public.apiBaseUrl}/v1/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: requestBody
      })
      
      console.log('Backend response:', result)
      
      if (result.accessToken) {
        // Store the token
        localStorage.setItem('accessToken', result.accessToken)
        
        // Fetch user profile
        await fetchUserProfile(result.accessToken)
        
        // Redirect to dashboard
        router.push('/dashboard')
      } else {
        throw new Error('No access token received from backend')
      }
    } catch (err) {
      console.error('OAuth callback error:', err)
      error.value = 'Xác thực thất bại. Vui lòng thử lại.'
      router.push('/login')
    } finally {
      isLoading.value = false
    }
  }
  
  return {
    // State
    isAuthenticated: readonly(isAuthenticated),
    user: readonly(user),
    isLoading: readonly(isLoading),
    error: readonly(error),
    
    // Methods
    signInWithGoogle,
    signUpWithGoogle,
    logout,
    checkAuthStatus,
    handleOAuthCallback
  }
}
