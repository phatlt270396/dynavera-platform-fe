<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
    <TopBar />
    <div class="flex min-h-screen">
      <!-- Left side - Hero section -->
      <div class="hidden lg:flex lg:w-2/3 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800"></div>
        
        <!-- Animated background elements -->
        <div class="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div class="absolute top-32 right-20 w-16 h-16 bg-white bg-opacity-15 rounded-full animate-bounce"></div>
        <div class="absolute bottom-20 left-32 w-12 h-12 bg-white bg-opacity-20 rounded-full animate-ping"></div>
        <div class="absolute bottom-32 right-10 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        
        <!-- Floating elements -->
        <div class="absolute top-1/4 left-1/4 w-8 h-8 bg-white bg-opacity-20 rounded-full animate-float"></div>
        <div class="absolute top-3/4 right-1/3 w-6 h-6 bg-white bg-opacity-25 rounded-full animate-float-delayed"></div>
        
        <!-- Content -->
        <div class="relative z-10 flex items-center justify-center w-full">
          <div class="text-center text-white max-w-md px-8">
            <div class="mb-8">
              <div class="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
            </div>
            <h1 class="text-4xl font-bold mb-6 animate-slide-in-left">Super Admin Panel</h1>
            <p class="text-xl text-green-100 mb-8 leading-relaxed animate-slide-in-up">Exclusive access to DYNAVERA product configuration and system management.</p>
            <div class="space-y-3 text-left animate-slide-in-right">
              <div class="flex items-center text-green-100">
                <svg class="w-5 h-5 mr-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Product configuration management
              </div>
              <div class="flex items-center text-green-100">
                <svg class="w-5 h-5 mr-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                System-wide settings control
              </div>
              <div class="flex items-center text-green-100">
                <svg class="w-5 h-5 mr-3 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Advanced analytics & monitoring
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right side - Login form -->
      <div class="w-full lg:w-1/3 flex items-center justify-center p-8 bg-white">
        <div class="w-full max-w-sm">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-2">Super Admin Access</h2>
            <p class="text-gray-600">Restricted access for system configuration</p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Username Field -->
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700 mb-2">
                Admin Username
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <input
                  id="username"
                  v-model="formData.username"
                  type="text"
                  required
                  class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter admin username"
                  :disabled="isLoading"
                >
              </div>
            </div>

            <!-- Password Field -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Admin Password
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <input
                  id="password"
                  v-model="formData.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter admin password"
                  :disabled="isLoading"
                >
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-3 flex items-center"
                  :disabled="isLoading"
                >
                  <svg v-if="showPassword" class="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                  </svg>
                  <svg v-else class="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember-me"
                  v-model="formData.rememberMe"
                  type="checkbox"
                  class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  :disabled="isLoading"
                >
                <label for="remember-me" class="ml-2 block text-sm text-gray-700">
                  Remember session
                </label>
              </div>
              <div class="text-sm">
                <a href="#" class="font-medium text-green-600 hover:text-green-500 transition-colors">
                  Reset password
                </a>
              </div>
            </div>

            <!-- Terms and Conditions -->
            <div>
              <label class="flex items-start">
                <input 
                  type="checkbox" 
                  v-model="acceptedTerms" 
                  class="w-4 h-4 text-green-600 bg-white border-gray-300 rounded focus:ring-green-500 focus:ring-2 mt-1"
                  :disabled="isLoading"
                >
                <span class="ml-2 text-sm text-gray-600">
                  I acknowledge that I am accessing a restricted super admin area and will use this access responsibly
                </span>
              </label>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              :disabled="isLoading || !acceptedTerms || !formData.username || !formData.password"
              class="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg v-if="isLoading" class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              {{ isLoading ? 'Authenticating...' : 'Access Admin Panel' }}
            </button>
          </form>

          <!-- Error Message -->
          <div v-if="error" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600 text-sm">{{ error }}</p>
          </div>

          <!-- Success Message -->
          <div v-if="successMessage" class="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p class="text-green-600 text-sm">{{ successMessage }}</p>
          </div>

          <!-- Security Notice -->
          <div class="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              <div>
                <p class="text-yellow-800 text-sm font-medium">Restricted Access</p>
                <p class="text-yellow-700 text-xs mt-1">This area is restricted to authorized super administrators only.</p>
              </div>
            </div>
          </div>

          <!-- Back to main site -->
          <div class="text-center mt-6">
            <p class="text-gray-600">
              <NuxtLink to="/" class="text-green-600 hover:text-green-700 font-medium transition-colors">
                ← Back to main site
              </NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import Tailwind CSS and animations
import '~/assets/css/tailwind.css';
import '~/assets/css/animations.css';

// Import components
import TopBar from '~/components/topBar.vue';

// Reactive state
const isLoading = ref(false)
const error = ref(null)
const successMessage = ref(null)
const acceptedTerms = ref(false)
const showPassword = ref(false)

// Form data
const formData = ref({
  username: '',
  password: '',
  rememberMe: false
})

// Handle login
const handleLogin = async () => {
  if (!acceptedTerms.value) {
    error.value = 'You must acknowledge the restricted access terms'
    return
  }

  if (!formData.value.username || !formData.value.password) {
    error.value = 'Please fill in all required fields'
    return
  }

  isLoading.value = true
  error.value = null
  successMessage.value = null

  try {
    // Simulate API call - replace with actual super admin authentication
    console.log('Super admin login attempt:', {
      username: formData.value.username,
      password: formData.value.password,
      rememberMe: formData.value.rememberMe
    })

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))

    // For demo purposes - replace with actual super admin authentication logic
    if (formData.value.username === 'superadmin' && formData.value.password === 'superadmin123') {
      successMessage.value = 'Authentication successful! Redirecting to admin panel...'
      
      // Store super admin login state
      localStorage.setItem('superAdminLoggedIn', 'true')
      localStorage.setItem('superAdminUser', formData.value.username)
      localStorage.setItem('superAdminSession', Date.now().toString())
      
      // Redirect to super admin dashboard after 2 seconds
      setTimeout(() => {
        // Navigate to super admin dashboard
        navigateTo('/admin/dashboard')
      }, 2000)
    } else {
      error.value = 'Invalid super admin credentials. Access denied.'
    }

  } catch (err) {
    console.error('Super admin login error:', err)
    error.value = 'Authentication failed. Please try again.'
  } finally {
    isLoading.value = false
  }
}

// Page meta
definePageMeta({
  title: 'Super Admin Panel - DYNAVERA',
  description: 'Restricted access for DYNAVERA super administrators'
})
</script>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 4s ease-in-out infinite;
}

.animate-slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.animate-slide-in-up {
  animation: slideInUp 0.8s ease-out 0.2s both;
}

.animate-slide-in-right {
  animation: slideInRight 0.8s ease-out 0.4s both;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
