<template>
    <header class="bg-white h-36 shadow-sm border-b backdrop-blur-sm flex items-center relative z-[9998] header-fixed">
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
            <div class="relative group submenu-container">
              <button class="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                {{ t('navigation.productPurchase') }}
                <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <!-- Product Purchase Dropdown -->
              <div class="absolute top-full left-0 mt-2 w-80 enhanced-dropdown rounded-lg py-4 z-[9999] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top">
                <!-- Dynamic Residential Proxies -->
                <div class="px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-10 h-10 icon-gradient-blue rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="text-sm font-semibold text-gray-900 mb-1">Dynamic Residential Proxies</h3>
                      <p class="text-xs text-gray-600 mb-2">High-speed residential IP rotation with unlimited bandwidth</p>
                      <div class="flex space-x-2">
                        <NuxtLink to="/dashboard/purchase-data-package" class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-md hover:bg-green-200 transition-colors badge-hover">
                          Buy Package
                        </NuxtLink>
                        <NuxtLink to="/dashboard/extract-dynamic-ip" class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-md hover:bg-blue-200 transition-colors badge-hover">
                          Extract IP
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Static Residential Proxies -->
                <div class="px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-10 h-10 icon-gradient-purple rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="text-sm font-semibold text-gray-900 mb-1">Static Residential Proxies</h3>
                      <p class="text-xs text-gray-600 mb-2">Dedicated residential IPs with stable connections</p>
                      <div class="flex space-x-2">
                        <NuxtLink to="/dashboard/buy-static-residential-ip" class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md hover:bg-purple-200 transition-colors badge-hover">
                          Buy IP
                        </NuxtLink>
                        <NuxtLink to="/dashboard/purchased-line-details-residential" class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors badge-hover">
                          View Details
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Static Datacenter Proxies -->
                <div class="px-4 py-3 hover:bg-gray-50 transition-colors duration-200">
                  <div class="flex items-start space-x-3">
                    <div class="flex-shrink-0 w-10 h-10 icon-gradient-orange rounded-lg flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="text-sm font-semibold text-gray-900 mb-1">Static Datacenter Proxies</h3>
                      <p class="text-xs text-gray-600 mb-2">High-performance datacenter IPs for speed-critical tasks</p>
                      <div class="flex space-x-2">
                        <NuxtLink to="/dashboard/purchase-data-center-ip" class="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-md hover:bg-orange-200 transition-colors badge-hover">
                          Buy IP
                        </NuxtLink>
                        <NuxtLink to="/dashboard/purchased-line-details-datacenter" class="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-200 transition-colors badge-hover">
                          View Details
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Divider -->
                <div class="border-t border-gray-200 my-2"></div>
                
                <!-- View All Products -->
                <div class="px-4 py-2">
                  <NuxtLink to="/protocols" class="flex items-center justify-center w-full text-sm text-green-600 hover:text-green-700 font-medium py-2 hover:bg-green-50 rounded-md transition-colors duration-200 submenu-link">
                    <span>View All Products</span>
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <NuxtLink to="/about-us" class="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">About Us</NuxtLink>
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="text-gray-700 hover:text-green-600 p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <!-- Right side -->
          <div class="flex items-center space-x-4 animate-slide-in-right">
            <!-- Language Switcher -->
            <LanguageSwitcher />
            
            <!-- Show loading state -->
            <template v-if="isLoading">
              <div class="flex items-center space-x-2">
                <div class="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                <span class="text-sm text-gray-500">Loading...</span>
              </div>
            </template>

            <!-- Show login/register only if not logged in and not on auth pages -->
            <template v-else-if="!isLoggedIn && !isAuthPage">
              <NuxtLink to="/login" class="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">{{ t('navigation.login') }}</NuxtLink>
                              <NuxtLink to="/register" class="h-12 w-auto flex items-center px-4 bg-green-600 rounded-2xl text-white transition-all duration-300 hover:scale-105 hover:bg-green-700">
                  {{ t('navigation.register') }}
              </NuxtLink>
            </template>

            <!-- Show user menu if logged in -->
            <template v-else-if="isLoggedIn">
              <div class="relative group">
                <button class="flex items-center text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                  <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <span class="max-w-32 truncate">{{ userDisplayName }}</span>
                  <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                <!-- Dropdown menu -->
                <div class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-[9999] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <!-- User Info -->
                  <div class="px-4 py-3 border-b border-gray-100">
                    <div class="flex items-center">
                      <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
                        <p v-if="userEmail && userEmail !== userDisplayName" class="text-xs text-gray-500 truncate">{{ userEmail }}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Menu Items -->
                  <div class="py-1">
                    <NuxtLink to="/dashboard" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200">
                      <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                      </svg>
                      Dashboard
                    </NuxtLink>
                    <NuxtLink to="/dashboard/account-settings" class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-colors duration-200">
                      <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {{ t('navigation.accountSettings') }}
                    </NuxtLink>
                    <div class="border-t border-gray-100 my-1"></div>
                    <button @click="handleLogout" class="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-red-600 transition-colors duration-200">
                      <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                      </svg>
                      {{ t('navigation.logout') }}
                    </button>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="showMobileMenu" class="md:hidden bg-white border-t border-gray-200 py-4 px-4 relative z-[9999]">
        <div class="space-y-4">
          <!-- Product Purchase Mobile -->
          <div>
            <button @click="toggleProductMenu" class="flex items-center justify-between w-full text-left text-gray-700 hover:text-green-600 py-2 text-sm font-medium">
              <span>{{ t('navigation.productPurchase') }}</span>
              <svg class="w-4 h-4 icon-rotate" :class="showProductMenu ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- Product Submenu -->
            <div v-if="showProductMenu" class="ml-4 mt-2 space-y-3 border-l-2 border-gray-200 pl-4">
              <!-- Dynamic Residential -->
              <div class="space-y-2">
                <h4 class="text-sm font-semibold text-gray-900">Dynamic Residential Proxies</h4>
                <div class="space-y-1">
                  <NuxtLink to="/dashboard/purchase-data-package" class="block text-sm text-gray-600 hover:text-green-600 py-1">
                    Buy Package
                  </NuxtLink>
                  <NuxtLink to="/dashboard/extract-dynamic-ip" class="block text-sm text-gray-600 hover:text-green-600 py-1">
                    Extract IP
                  </NuxtLink>
                </div>
              </div>
              
              <!-- Static Residential -->
              <div class="space-y-2">
                <h4 class="text-sm font-semibold text-gray-900">Static Residential Proxies</h4>
                <div class="space-y-1">
                  <NuxtLink to="/dashboard/buy-static-residential-ip" class="block text-sm text-gray-600 hover:text-green-600 py-1">
                    Buy IP
                  </NuxtLink>
                  <NuxtLink to="/dashboard/purchased-line-details-residential" class="block text-sm text-gray-600 hover:text-green-600 py-1">
                    View Details
                  </NuxtLink>
                </div>
              </div>
              
              <!-- Static Datacenter -->
              <div class="space-y-2">
                <h4 class="text-sm font-semibold text-gray-900">Static Datacenter Proxies</h4>
                <div class="space-y-1">
                  <NuxtLink to="/dashboard/purchase-data-center-ip" class="block text-sm text-gray-600 hover:text-green-600 py-1">
                    Buy IP
                  </NuxtLink>
                  <NuxtLink to="/dashboard/purchased-line-details-datacenter" class="block text-sm text-gray-600 hover:text-green-600 py-1">
                    View Details
                  </NuxtLink>
                </div>
              </div>
              
              <!-- View All -->
              <div class="pt-2 border-t border-gray-200">
                <NuxtLink to="/protocols" class="block text-sm text-green-600 hover:text-green-700 font-medium py-1">
                  View All Products
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <!-- About Us Mobile -->
          <NuxtLink to="/about-us" class="block text-gray-700 hover:text-green-600 py-2 text-sm font-medium">
            {{ t('navigation.about') }}
          </NuxtLink>
          
          <!-- Language Mobile -->
          <div class="flex items-center justify-between py-2">
            <span class="text-gray-700 text-sm font-medium">Language</span>
            <span class="text-gray-600 text-sm">中文</span>
          </div>
          
          <!-- Loading State Mobile -->
          <template v-if="isLoading">
            <div class="pt-4 border-t border-gray-200">
              <div class="flex items-center justify-center py-4">
                <div class="w-5 h-5 border-2 border-green-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                <span class="text-sm text-gray-500">Loading...</span>
              </div>
            </div>
          </template>

          <!-- Auth Links Mobile -->
          <template v-else-if="!isLoggedIn && !isAuthPage">
            <div class="space-y-2 pt-4 border-t border-gray-200">
              <NuxtLink to="/login" class="block text-gray-700 hover:text-green-600 py-2 text-sm font-medium">
                Log in
              </NuxtLink>
              <NuxtLink to="/register" class="block bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-green-700">
                Register
              </NuxtLink>
            </div>
          </template>
          
          <!-- User Menu Mobile -->
          <template v-else-if="isLoggedIn">
            <div class="pt-4 border-t border-gray-200">
              <div class="flex items-center space-x-3 py-3">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
                  <p v-if="userEmail && userEmail !== userDisplayName" class="text-xs text-gray-500 truncate">{{ userEmail }}</p>
                </div>
              </div>
              <div class="space-y-1 ml-13">
                <NuxtLink to="/dashboard" class="flex items-center text-sm text-gray-600 hover:text-green-600 py-2">
                  <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
                  </svg>
                  Dashboard
                </NuxtLink>
                <NuxtLink to="/dashboard/account-settings" class="flex items-center text-sm text-gray-600 hover:text-green-600 py-2">
                  <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Account Settings
                </NuxtLink>
                <div class="border-t border-gray-200 my-2"></div>
                <button @click="handleLogout" class="flex items-center w-full text-left text-sm text-gray-600 hover:text-red-600 py-2">
                  <svg class="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const route = useRoute()
const { $auth } = useNuxtApp()

// Initialize i18n
const { useI18n } = await import('~/composables/useI18n')
const { t, initTranslations } = useI18n()

// Mobile menu state
const showMobileMenu = ref(false)
const showProductMenu = ref(false)

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
  return $auth?.user?.email || $auth?.user?.name || 'User'
})

// Get user display name
const userDisplayName = computed(() => {
  if ($auth?.user?.name) return $auth.user.name
  if ($auth?.user?.email) return $auth.user.email.split('@')[0]
  return 'User'
})

// Check if user data is loading
const isLoading = computed(() => {
  return $auth?.isLoading || false
})

// Toggle mobile menu
const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  if (!showMobileMenu.value) {
    showProductMenu.value = false
  }
}

// Toggle product submenu
const toggleProductMenu = () => {
  showProductMenu.value = !showProductMenu.value
}

// Handle logout
const handleLogout = async () => {
  try {
    // Close mobile menu first
    showMobileMenu.value = false
    
    // Show confirmation dialog (optional)
    if (process.client && confirm('Are you sure you want to logout?')) {
      await $auth?.logout()
      // Redirect to home page after logout
      await navigateTo('/')
    }
  } catch (error) {
    console.error('Logout error:', error)
    // Fallback logout
    if (process.client) {
      localStorage.removeItem('auth')
      sessionStorage.removeItem('auth')
      await navigateTo('/')
    }
  }
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  showMobileMenu.value = false
  showProductMenu.value = false
})
</script>