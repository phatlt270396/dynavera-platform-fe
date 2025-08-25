<template>
  <header class="fixed top-0 left-0 right-0 bg-black h-20 shadow-sm border-b border-gray-800 z-50" style="transform: none !important; height: 80px !important; min-height: 80px !important; max-height: 80px !important;">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex justify-between items-center h-20">
        <!-- Logo and Navigation -->
        <div class="flex items-center space-x-8">
          <!-- Logo -->
          <div class="flex items-center">
            <NuxtLink to="/" class="cursor-pointer">
              <img src="/assets/images/dynavera/dynavera-logo-transparent.png" alt="DYNAVERA Logo" class="h-20 w-auto" />
            </NuxtLink>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <div class="relative group">
              <button class="flex items-center text-white hover:text-green-500 px-3 py-2 text-sm font-medium">
                Product Purchase
                <svg class="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <!-- Dropdown menu -->
              <div class="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <!-- Static Residential Proxy -->
                <div class="p-4 border-b border-gray-100">
                  <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span class="text-blue-600 text-lg">🏠</span>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-900 text-sm mb-1">Static Residential Proxy</h4>
                      <p class="text-gray-600 text-xs leading-relaxed">
                        Directly obtain real residential IPs from operators in various countries
                      </p>
                    </div>
                  </div>
                </div>
                
                <!-- Static Data Center Proxy -->
                <div class="p-4 border-b border-gray-100">
                  <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span class="text-green-600 text-lg">☰</span>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-900 text-sm mb-1">Static Data Center Proxy</h4>
                      <p class="text-gray-600 text-xs leading-relaxed">
                        Server IPs obtained from underlying data center source manufacturers in various countries
                      </p>
                    </div>
                  </div>
                </div>
                
                <!-- Dynamic Residential Proxy -->
                <div class="p-4">
                  <div class="flex items-start space-x-3">
                    <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span class="text-blue-600 text-lg">⌖</span>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center space-x-2 mb-1">
                        <h4 class="font-semibold text-gray-900 text-sm">Dynamic Residential Proxy</h4>
                        <span class="bg-blue-500 text-white text-xs px-2 py-1 rounded">实名送2G</span>
                      </div>
                      <p class="text-gray-600 text-xs leading-relaxed">
                        47 million residential IPs globally, city-level positioning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <NuxtLink to="/about-us" class="text-white hover:text-green-500 px-3 py-2 text-sm font-medium">
              About Us
            </NuxtLink>
          </nav>
        </div>

        <!-- Right side -->
        <div class="flex items-center space-x-4">
          <!-- Language Selector -->
          <div class="relative group">
            <button class="flex items-center text-white hover:text-green-500 px-3 py-2 text-sm font-medium">
              EN
              <svg class="ml-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <!-- Language dropdown would go here -->
          </div>

          <!-- Divider -->
          <div class="w-px h-6 bg-gray-600"></div>

          <!-- Only show login/register links if not on auth pages -->
          <template v-if="!isAuthPage">
            <NuxtLink to="/login" class="text-white hover:text-green-500 px-3 py-2 text-sm font-medium">
              Log in
            </NuxtLink>

            <!-- Register Button with digital effect -->
            <NuxtLink to="/register" class="relative px-4 py-2 border border-green-500 rounded text-green-500 text-sm font-medium hover:bg-green-500 hover:text-white group">
              <!-- Digital effect characters -->
              <span class="absolute -top-1 -left-1 text-xs text-green-500/30 group-hover:text-green-300/50">0</span>
              <span class="absolute -top-1 -right-1 text-xs text-green-500/30 group-hover:text-green-300/50">1</span>
              <span class="absolute -bottom-1 -left-1 text-xs text-green-500/30 group-hover:text-green-300/50">1</span>
              <span class="absolute -bottom-1 -right-1 text-xs text-green-500/30 group-hover:text-green-300/50">0</span>

              <!-- Button text -->
              <span class="relative z-10">Register</span>
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()

// Check if current page is an auth page
const isAuthPage = computed(() => {
  return route.path === '/login' || route.path === '/register' || route.path === '/auth/callback'
})
</script>

<style scoped>
header {
  height: 80px !important;
  min-height: 80px !important;
  max-height: 80px !important;
  transform: none !important;
  animation: none !important;
  transition: none !important;
}
</style>