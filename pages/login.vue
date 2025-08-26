<template>
  <div class="min-h-screen bg-black">
    <!-- Header -->
    <TopBar />

    <!-- Main Content - Layout 2 cột -->
    <div class="flex min-h-screen">
      <!-- Left Side - Background Design -->
      <div class="hidden lg:flex lg:w-2/3 relative overflow-hidden">
        <!-- Vanta.js Dots Background -->
        <div id="vanta-dots" class="absolute inset-0"></div>
        
        <!-- Content -->
        <div class="relative z-10 flex items-center justify-center w-full">
          <div class="text-center text-white max-w-md px-8">
            <div class="mb-8">
              <div class="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
            </div>
            
            <h1 class="text-4xl font-bold mb-6 animate-slide-in-left">
              Welcome to DYNAVERA
            </h1>
            <p class="text-xl text-green-100 mb-8 leading-relaxed animate-slide-in-up">
              Professional IP proxy solutions for your business needs. Secure, reliable, and scalable.
            </p>
            
            <!-- Feature highlights -->
            <div class="space-y-3 text-left animate-slide-in-right">
              <div class="flex items-center text-green-100">
                <svg class="w-5 h-5 mr-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Secure & Reliable Proxy Services</span>
              </div>
              <div class="flex items-center text-green-100">
                <svg class="w-5 h-5 mr-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>Global IP Network Coverage</span>
              </div>
              <div class="flex items-center text-green-100">
                <svg class="w-5 h-5 mr-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>24/7 Technical Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Login Form -->
      <div class="w-full lg:w-1/3 flex items-center justify-center p-8 bg-white">
        <div class="w-full max-w-sm">
          <!-- Login Form -->
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p class="text-gray-600">Sign in to your DYNAVERA account</p>
          </div>

          <!-- Google Sign-in Button -->
          <button 
            @click="handleGoogleSignIn" 
            :disabled="isLoading || !acceptedTerms" 
            class="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-medium hover:bg-gray-50 hover:border-green-500 transition-all duration-300 flex items-center justify-center mb-6 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
          >
            <svg v-if="!isLoading" class="w-6 h-6 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <svg v-else class="animate-spin w-6 h-6 mr-3" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? 'Signing in...' : 'Continue with Google' }}
          </button>

          <!-- Terms and Conditions -->
          <div class="mb-6">
            <label class="flex items-start">
              <input 
                type="checkbox" 
                v-model="acceptedTerms"
                class="w-4 h-4 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
              >
              <span class="ml-2 text-sm text-gray-600">
                I have read and agree to the 
                <a href="/privacy-policy" target="_blank" class="text-green-600 hover:text-green-500 underline">Privacy Policy</a> 
                and 
                <a href="/terms-of-service" target="_blank" class="text-green-600 hover:text-green-500 underline">Terms of Service</a>
              </span>
            </label>
          </div>

          <!-- Error Message -->
          <div v-if="error" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600 text-sm">{{ error }}</p>
          </div>

          <!-- Sign up link -->
          <div class="text-center">
            <p class="text-gray-600">
              Don't have an account? 
              <NuxtLink to="/register" class="text-green-600 hover:text-green-700 font-medium transition-colors">
                Sign up here
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import useAuth composable
const { useAuth } = await import('~/composables/useAuth')
const { signInWithGoogle, isLoading, error } = useAuth()
import TopBar from '~/components/topBar.vue';

// Reactive state for terms acceptance
const acceptedTerms = ref(false)

// Handle Google sign in
const handleGoogleSignIn = () => {
  if (!acceptedTerms.value) {
    return
  }
  signInWithGoogle()
}

// Vanta.js Dots effect
let vantaEffect = null

// Process on mount
onMounted(() => {
  console.log('Login page mounted...')
  
  // Initialize Vanta.js Dots effect
  if (process.client && typeof window !== 'undefined') {
    // Wait for scripts to load
    const initVanta = () => {
      if (window.VANTA && window.VANTA.DOTS) {
        vantaEffect = window.VANTA.DOTS({
          el: "#vanta-dots",
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x22c55e,
          backgroundColor: 0x000000,
          size: 3.00,
          showLines: true,
          spacing: 35.00
        })
      } else {
        // Retry after a short delay
        setTimeout(initVanta, 100)
      }
    }
    
    // Start initialization
    initVanta()
  }
})

// Cleanup on unmount
onUnmounted(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
  }
})
</script>

<style scoped>
/* Additional styles for login page */
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
}
</style>
