<template>
    <header class="bg-white h-36 shadow-sm border-b backdrop-blur-sm flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center animate-slide-in-left">
            <NuxtLink to="/" class="cursor-pointer hover:opacity-80 transition-opacity duration-300">
              <img src="/assets/images/dynavera/dynavera-logo-transparent.png" alt="DYNAVERA Logo" class="h-24 w-auto mb-2" />
            </NuxtLink>
          </div>
          
          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <div class="relative group">
              <button class="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                Product Purchase
                <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <NuxtLink to="/about-us" class="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">About Us</NuxtLink>
          </nav>

          <!-- Right side -->
          <div class="flex items-center space-x-4 animate-slide-in-right">
            <div class="relative">
              <button class="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                中文
                <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            
            <!-- Show login/register only if not logged in and not on auth pages -->
            <template v-if="!isLoggedIn && !isAuthPage">
              <NuxtLink to="/login" class="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">Log in</NuxtLink>
              <NuxtLink to="/register" class="h-12 w-auto flex items-center px-4 bg-green-600 rounded-2xl text-white transition-all duration-300 hover:scale-105">
                Register
              </NuxtLink>
            </template>

            <!-- Show user menu if logged in -->
            <template v-if="isLoggedIn">
              <div class="relative group">
                <button class="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  {{ userEmail || 'User' }}
                  <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <!-- Dropdown menu -->
                <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <NuxtLink to="/dashboard" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors duration-200">
                    Dashboard
                  </NuxtLink>
                  <button @click="handleLogout" class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200">
                    Logout
                  </button>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </header>
</template>

<script setup>
const route = useRoute()
const { $auth } = useNuxtApp()

// Check if current page is an auth page
const isAuthPage = computed(() => {
  return route.path === '/login' || route.path === '/register' || route.path === '/auth/callback'
})

// Check if user is logged in
const isLoggedIn = computed(() => {
  return $auth?.isAuthenticated || false
})

// Get user email for display
const userEmail = computed(() => {
  return $auth?.user?.email || null
})

// Handle logout
const handleLogout = async () => {
  try {
    await $auth?.logout()
    // Redirect to home page after logout
    await navigateTo('/')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>