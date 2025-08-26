<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto bg-white min-h-screen p-6 space-y-6">
      <!-- Welcome Section -->
      <div class="welcome-section rounded-lg shadow-sm border border-green-200 p-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center user-avatar-large">
              <span class="text-xl font-bold text-green-700">{{ userInitials }}</span>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Welcome back, {{ userDisplayName }}!</h1>
              <p class="text-gray-600">Manage your proxy services and monitor your usage</p>
            </div>
          </div>
                      <div class="text-right">
              <div class="text-sm text-gray-500">Account Balance</div>
              <div class="text-2xl font-bold text-green-600">¥0.00</div>
              <NuxtLink to="/dashboard/recharge" class="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                Top Up
              </NuxtLink>
            </div>
          </div>
          
          <!-- User Stats -->
          <div class="dashboard-stats mt-6">
            <div class="stat-card">
              <div class="stat-number">0</div>
              <div class="stat-label">Active Proxies</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">0 GB</div>
              <div class="stat-label">Data Used</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">0</div>
              <div class="stat-label">Total Orders</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">100%</div>
              <div class="stat-label">Uptime</div>
            </div>
          </div>
        </div>
        <!-- Dynamic Residential Agent Section -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-4 right-4 w-20 h-20 bg-green-400 rounded-full"></div>
            <div class="absolute bottom-4 left-4 w-16 h-16 bg-green-300 rounded-full"></div>
          </div>
          
          <div class="relative z-10 flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Dynamic Residential Agent</h3>
              <p class="text-gray-600 text-base mb-6 leading-relaxed max-w-2xl">
                Business-level quality filtering and directional cleaning, up to 24 hours IP switching, flexible choice of multiple data plans
              </p>
              
              <!-- Features -->
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">47 million global IP pool</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">Http/Https/socks5 protocol</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">Exclusive IP pool mode</span>
                </div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex flex-col space-y-3 ml-8">
              <NuxtLink to="/dashboard/extract-dynamic-ip" class="border border-green-600 text-green-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors whitespace-nowrap inline-block text-center">
                Extract dynamic IP
              </NuxtLink>
                                        <NuxtLink to="/dashboard/purchase-data-package" class="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap inline-block text-center">
                            Buy a Flow Pack
                          </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Static Residential (ISP) Agents Section -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-4 right-4 w-24 h-24 bg-blue-400 rounded-lg transform rotate-45"></div>
            <div class="absolute bottom-4 left-4 w-20 h-20 bg-blue-300 rounded-lg"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-200 rounded-full"></div>
          </div>
          
          <div class="relative z-10 flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Static Residential (ISP) Agents</h3>
              <p class="text-gray-600 text-base mb-6 leading-relaxed max-w-2xl">
                Get home IP from global carriers with more realistic IP attributes and more precise business needs
              </p>
              
              <!-- Features -->
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">100% exclusive</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">ISP proxy</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">Cleaning has been carried out for different businesses</span>
                </div>
              </div>
            </div>
            
            <!-- Action Button -->
            <div class="ml-8">
              <NuxtLink to="/dashboard/buy-static-residential-ip" class="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap inline-block text-center">
                Buy a new agent
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Static Data Center Agents Section -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-4 right-4 w-6 h-6 bg-purple-400 rounded-full"></div>
            <div class="absolute top-8 right-8 w-4 h-4 bg-purple-300 rounded-full"></div>
            <div class="absolute top-12 right-12 w-8 h-8 bg-purple-200 rounded-full"></div>
            <div class="absolute bottom-4 left-4 w-6 h-6 bg-purple-400 rounded-full"></div>
            <div class="absolute bottom-8 left-8 w-4 h-4 bg-purple-300 rounded-full"></div>
            <div class="absolute bottom-12 left-12 w-8 h-8 bg-purple-200 rounded-full"></div>
            <!-- Connecting lines -->
            <div class="absolute top-6 right-6 w-8 h-0.5 bg-purple-300"></div>
            <div class="absolute bottom-6 left-6 w-8 h-0.5 bg-purple-300"></div>
          </div>
          
          <div class="relative z-10 flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Static Data Center Agents</h3>
              <p class="text-gray-600 text-base mb-6 leading-relaxed max-w-2xl">
                Provide high-speed and stable network connectivity on the premise of exclusive resources to meet multi-scenario business needs
              </p>
              
              <!-- Features -->
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">99.9% strong stability</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">Fast response with millisecond latency</span>
                </div>
                <div class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span class="text-sm text-gray-700">Business level line customization</span>
                </div>
              </div>
            </div>
            
            <!-- Action Button -->
            <div class="ml-8">
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap">
                Buy a new agent
              </button>
            </div>
          </div>
        </div>

        <!-- Footer Section -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden">
          <div class="flex justify-between items-center">
            <div class="flex-1">
              <h4 class="text-lg font-semibold text-gray-900 mb-2">Custom solutions for big business</h4>
              <p class="text-gray-600 text-base">If you have any custom ideas, please consult our customer service</p>
            </div>
            
            <!-- Action Button -->
            <div class="ml-8">
              <button class="border border-green-600 text-green-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors whitespace-nowrap">
                Contact Customer Service
              </button>
            </div>
          </div>
          
          <!-- Pagination -->
          <div class="flex justify-end items-center mt-6 space-x-2">
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <span class="text-sm text-gray-600">13/38</span>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <div class="w-5 h-5 text-gray-400 ml-2">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
          </div>
        </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
const { $auth } = useNuxtApp()

// Set page meta
definePageMeta({
  middleware: 'auth'
})

// Get user information
const userEmail = computed(() => {
  return $auth?.user?.email || null
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
</script>
