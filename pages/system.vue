<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <!-- Header -->
      <div class="text-center">
        <div class="mx-auto h-16 w-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white mb-2">System Management</h2>
        <p class="text-gray-400">Administrator Access Required</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
        <div class="space-y-4">
          <!-- Username Field -->
          <div>
            <label for="username" class="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              id="username"
              v-model="form.username"
              type="text"
              required
              class="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Enter admin username"
            />
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              class="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
              placeholder="Enter admin password"
            />
          </div>
        </div>

        <!-- Error Message -->
        <div v-if="error" class="bg-red-900 border border-red-700 text-red-200 px-4 py-3 rounded-lg">
          {{ error }}
        </div>

        <!-- Submit Button -->
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span v-if="loading" class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            <span v-if="loading">Signing in...</span>
            <span v-else>Sign in to System Management</span>
          </button>
        </div>

        <!-- Back to Main Site -->
        <div class="text-center">
          <NuxtLink to="/" class="text-gray-400 hover:text-white text-sm transition-colors">
            ← Back to main site
          </NuxtLink>
        </div>
      </form>

      <!-- Security Notice -->
      <div class="mt-8 p-4 bg-gray-800 border border-gray-700 rounded-lg">
        <div class="flex items-start">
          <svg class="w-5 h-5 text-yellow-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
          </svg>
          <div class="text-sm text-gray-300">
            <p class="font-medium text-yellow-400 mb-1">Security Notice</p>
            <p>This area is restricted to authorized administrators only. All access attempts are logged and monitored.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Form data
const form = ref({
  username: '',
  password: ''
})

// UI state
const loading = ref(false)
const error = ref('')

// Handle login
const handleLogin = async () => {
  try {
    loading.value = true
    error.value = ''
    
    // Here you would typically make an API call to authenticate
    // For now, we'll simulate a login process
    console.log('Attempting system login with:', form.value.username)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo purposes, accept any non-empty credentials
    if (form.value.username && form.value.password) {
      // Redirect to system dashboard or show success
      console.log('Login successful')
      // You can redirect to a system dashboard here
      // await navigateTo('/system/dashboard')
    } else {
      error.value = 'Invalid credentials. Please try again.'
    }
  } catch (err) {
    console.error('Login error:', err)
    error.value = 'An error occurred during login. Please try again.'
  } finally {
    loading.value = false
  }
}

// Set page title
useHead({
  title: 'System Management - Login'
})
</script>

<style scoped>
/* Custom focus styles */
input:focus {
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}
</style>
