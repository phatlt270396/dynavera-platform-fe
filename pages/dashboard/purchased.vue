<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto bg-white min-h-screen p-6 space-y-6">
        <!-- Dynamic Residential Agent Section -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-4 right-4 w-20 h-20 bg-green-400 rounded-full"></div>
            <div class="absolute bottom-4 left-4 w-16 h-16 bg-green-300 rounded-full"></div>
            <!-- Wavy line graph -->
            <svg class="absolute top-8 right-8 w-32 h-16 opacity-20" viewBox="0 0 128 64" fill="none">
              <path d="M0 32 Q16 16 32 32 T64 32 T96 32 T128 32" stroke="currentColor" stroke-width="2" fill="none" class="text-green-400"/>
            </svg>
          </div>
          
          <div class="relative z-10 flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Dynamic Residential Agent</h3>
              
              <!-- Statistics -->
              <div class="mb-4">
                <div class="text-base text-gray-700 mb-2">
                  Remaining: <span class="font-bold text-2xl text-gray-900">511M</span>
                </div>
                <div class="text-xs text-gray-600">
                  expiration date: 2025-07-07
                </div>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex flex-col space-y-3 ml-8">
              <button class="border border-green-600 text-green-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors whitespace-nowrap">
                Extract dynamic IP
              </button>
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors whitespace-nowrap">
                Buy a Flow Pack
              </button>
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
            <!-- Server racks pattern -->
            <div class="absolute top-8 right-8 space-y-1">
              <div class="w-8 h-1 bg-gray-300 rounded"></div>
              <div class="w-8 h-1 bg-gray-300 rounded"></div>
              <div class="w-8 h-1 bg-gray-300 rounded"></div>
            </div>
          </div>
          
          <div class="relative z-10 flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Static Residential (ISP) Agents</h3>
              
              <!-- Status Indicators -->
              <div class="flex items-center space-x-6 mb-4">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-xs text-gray-700">Currently available</span>
                  <span class="font-bold text-gray-900">1</span>
                  <span class="text-xs text-gray-700">proxy</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-gray-700">Expiring Soon</span>
                  <span class="font-bold text-gray-900">0</span>
                  <span class="text-xs text-gray-700">proxy</span>
                </div>
              </div>
              
              <div class="text-xs text-gray-600">
                Expiration date: 2025-07-07
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
            <!-- World map pattern -->
            <svg class="absolute top-8 right-8 w-32 h-20 opacity-20" viewBox="0 0 128 80" fill="none">
              <path d="M20 40 Q40 30 60 40 T100 40" stroke="currentColor" stroke-width="1"/>
              <circle cx="30" cy="35" r="2" fill="currentColor"/>
              <circle cx="80" cy="45" r="2" fill="currentColor"/>
            </svg>
          </div>
          
          <div class="relative z-10 flex justify-between items-start">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Static Data Center Agents</h3>
              
              <!-- Status Indicators -->
              <div class="flex items-center space-x-6 mb-4">
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="text-xs text-gray-700">Currently available</span>
                  <span class="font-bold text-gray-900">1</span>
                  <span class="text-xs text-gray-700">proxy</span>
                </div>
                <div class="flex items-center space-x-2">
                  <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span class="text-xs text-gray-700">Expiring Soon</span>
                  <span class="font-bold text-gray-900">0</span>
                  <span class="text-xs text-gray-700">proxy</span>
                </div>
              </div>
              
              <div class="text-xs text-gray-600">
                Expiration date: 2025-07-07
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

        <!-- Custom Solutions Section -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full"></div>
            <div class="absolute top-8 right-8 w-4 h-4 bg-green-300 rounded-full"></div>
            <div class="absolute top-12 right-12 w-8 h-8 bg-green-200 rounded-full"></div>
            <div class="absolute bottom-4 left-4 w-6 h-6 bg-green-400 rounded-full"></div>
            <div class="absolute bottom-8 left-8 w-4 h-4 bg-green-300 rounded-full"></div>
            <div class="absolute bottom-12 left-12 w-8 h-8 bg-green-200 rounded-full"></div>
            <!-- Network nodes pattern -->
            <svg class="absolute top-8 right-8 w-32 h-20 opacity-20" viewBox="0 0 128 80" fill="none">
              <circle cx="20" cy="20" r="3" fill="currentColor"/>
              <circle cx="60" cy="40" r="3" fill="currentColor"/>
              <circle cx="100" cy="60" r="3" fill="currentColor"/>
              <line x1="20" y1="20" x2="60" y2="40" stroke="currentColor" stroke-width="1"/>
              <line x1="60" y1="40" x2="100" y2="60" stroke="currentColor" stroke-width="1"/>
            </svg>
          </div>
          
          <div class="relative z-10 flex justify-between items-center">
            <div class="flex-1">
              <h3 class="text-xl font-bold text-gray-900 mb-2">Custom solutions for big business</h3>
              <p class="text-gray-600 text-base">
                If you have any custom ideas, please consult our customer service
              </p>
            </div>
            
            <!-- Action Button -->
            <div class="ml-8">
              <button class="border border-green-600 text-green-600 px-6 py-3 rounded-lg text-sm font-medium hover:bg-green-50 transition-colors whitespace-nowrap">
                Contact Customer Service
              </button>
            </div>
          </div>
        </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
// Set page meta
definePageMeta({
  middleware: 'auth'
})
</script>
