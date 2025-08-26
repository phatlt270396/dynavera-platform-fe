<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="flex justify-between items-center px-6 py-4">
      <!-- Left side - placeholder for logo -->
      <div class="text-gray-400 text-sm"></div>
      
      <!-- Right side - user controls -->
      <div class="flex items-center space-x-4">
        <!-- Language Selector -->
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-700">中文</span>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        
        <!-- Separator -->
        <div class="w-px h-6 bg-gray-300"></div>
        
        <!-- Balance -->
        <div class="text-sm text-gray-700">
          Balance ¥0
        </div>
        
        <!-- Separator -->
        <div class="w-px h-6 bg-gray-300"></div>
        
                                        <!-- Top Up Button -->
                    <NuxtLink to="/dashboard/recharge" class="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors inline-block">
                      top up
                    </NuxtLink>
        
        <!-- Separator -->
        <div class="w-px h-6 bg-gray-300"></div>
        
        <!-- User Avatar with Dropdown -->
        <div class="relative">
          <button 
            @click="toggleUserMenu" 
            class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors user-avatar"
          >
            <span v-if="isLoggedIn" class="text-sm font-semibold text-green-700">{{ userInitials }}</span>
            <svg v-else class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </button>
          
          <!-- User Dropdown Menu -->
          <div 
            v-show="showUserMenu" 
            class="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
          >
            <!-- Account Info -->
            <div class="p-4 border-b border-gray-200">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span v-if="isLoggedIn" class="text-sm font-semibold text-green-700">{{ userInitials }}</span>
                  <svg v-else class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName }}</p>
                  <p v-if="userEmail && userEmail !== userDisplayName" class="text-xs text-gray-500 truncate">{{ userEmail }}</p>
                </div>
              </div>
            </div>
            
            <!-- Account Balance -->
            <div class="p-4 border-b border-gray-200">
              <div class="flex items-center justify-between">
                <div>
                  <div class="text-gray-900 text-sm">Account Balance</div>
                  <div class="text-lg font-bold text-gray-900">¥ 0</div>
                </div>
                <NuxtLink 
                  to="/dashboard/recharge" 
                  class="bg-orange-500 text-white px-4 py-2 rounded text-sm hover:bg-orange-600 transition-colors"
                  @click="showUserMenu = false"
                >
                  top up
                </NuxtLink>
              </div>
            </div>
            
            <!-- Account Actions -->
            <div class="p-4">
              <NuxtLink 
                to="/dashboard/account-settings" 
                class="block text-gray-900 text-sm mb-2 hover:text-gray-700 transition-colors"
                @click="showUserMenu = false"
              >
                Account Settings
              </NuxtLink>
              <button 
                @click="logout" 
                class="text-gray-700 hover:text-gray-900 transition-colors text-sm"
              >
                Quit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { $auth } = useNuxtApp()

// Reactive state for user menu
const showUserMenu = ref(false)

// Get user information
const userEmail = computed(() => {
  return $auth?.user?.email || null
})

const userName = computed(() => {
  return $auth?.user?.name || $auth?.user?.email?.split('@')[0] || 'User'
})

const userDisplayName = computed(() => {
  if ($auth?.user?.name) return $auth.user.name
  if ($auth?.user?.email) return $auth.user.email.split('@')[0]
  return 'User'
})

const userInitials = computed(() => {
  if ($auth?.user?.name) {
    return $auth.user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }
  if ($auth?.user?.email) {
    return $auth.user.email.split('@')[0].slice(0, 2).toUpperCase()
  }
  return 'U'
})

const isLoggedIn = computed(() => {
  return $auth?.isAuthenticated || false
})

// Function to toggle user menu
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

// Function to handle logout
const logout = async () => {
  try {
    await $auth?.logout()
    showUserMenu.value = false
    await navigateTo('/')
  } catch (error) {
    console.error('Logout error:', error)
  }
}

// Close menu when clicking outside
const closeMenuOnOutsideClick = (event) => {
  if (!event.target.closest('.relative')) {
    showUserMenu.value = false
  }
}

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', closeMenuOnOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenuOnOutsideClick)
})
</script>
