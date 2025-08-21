<template>
  <div class="min-h-screen bg-gray-50 network-bg">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b backdrop-blur-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center animate-slide-in-left">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded mr-3 animate-glow"></div>
            <span class="text-xl font-bold gradient-text">DYNAVERA</span>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <div class="relative group">
              <button class="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                Product Purchase
                <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <a href="/about" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">About Us</a>
          </nav>

          <!-- Right side -->
          <div class="flex items-center space-x-4 animate-slide-in-right">
            <div class="relative group">
              <button class="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Account
                <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content - Layout 2 cột -->
    <div class="flex min-h-screen">
      <!-- Left Side - Background Image -->
      <div class="hidden lg:flex lg:w-2/3 relative overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
        
        <!-- Animated Network Pattern -->
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400 rounded-full animate-pulse"></div>
          <div class="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
          <div class="absolute bottom-32 left-32 w-40 h-40 border-2 border-indigo-400 rounded-full animate-pulse" style="animation-delay: 2s;"></div>
          <div class="absolute bottom-20 right-20 w-28 h-28 border-2 border-blue-300 rounded-full animate-pulse" style="animation-delay: 0.5s;"></div>
        </div>
        
        <!-- Content -->
        <div class="relative z-10 flex items-center justify-center w-full">
          <div class="text-center text-white max-w-md px-8">
            <h1 class="text-4xl font-bold mb-6 animate-slide-in-left">
              Join DYNAVERA
            </h1>
            <p class="text-xl text-gray-200 mb-8 leading-relaxed animate-slide-in-up">
              Start your journey with professional IP proxy solutions. Get access to millions of IPs worldwide.
            </p>
            <div class="flex justify-center animate-slide-in-right">
              <div class="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-glow">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Register Form -->
      <div class="w-full lg:w-1/3 flex items-center justify-center p-8 bg-white">
        <div class="w-full max-w-sm">
          <!-- Register Form -->
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
            <p class="text-gray-600">Join DYNAVERA and get started with our proxy services</p>
          </div>

          <!-- Google Sign-up Button -->
          <button 
            @click="handleGoogleSignUp" 
            :disabled="isLoading" 
            class="w-full bg-white border-2 border-gray-300 text-gray-700 py-4 px-6 rounded-lg font-medium hover:bg-gray-50 hover:border-blue-500 transition-all duration-300 flex items-center justify-center mb-6 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md"
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
            {{ isLoading ? 'Creating account...' : 'Register using Google Account' }}
          </button>

          <!-- Error Message -->
          <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600 text-sm">{{ error }}</p>
          </div>

          <!-- Divider -->
          <div class="w-full h-px bg-gray-300 mb-6"></div>

          <!-- Terms and Conditions -->
          <div class="mb-6">
            <label class="flex items-start">
              <input type="checkbox" class="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-1">
              <span class="ml-2 text-sm text-gray-600">
                I have read and agree to the 
                <a href="#" class="text-blue-600 hover:text-blue-500">Privacy Policy</a> 
                and 
                <a href="#" class="text-blue-600 hover:text-blue-500">Legal Terms</a>
              </span>
            </label>
          </div>

          <!-- Login Link -->
          <div class="text-center">
            <p class="text-gray-600">
              Already have an account? 
              <NuxtLink to="/login" class="text-blue-600 hover:text-blue-500 font-medium underline">Log in now</NuxtLink>
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
const { signUpWithGoogle, isLoading, error } = useAuth()

// Handle Google Sign-up
const handleGoogleSignUp = () => {
  signUpWithGoogle()
}
</script>

<style scoped>
/* Additional styles for register page */
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
