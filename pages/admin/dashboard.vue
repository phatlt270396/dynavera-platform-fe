<template>
  <div>
    <!-- Page Header -->
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-900">Product Configuration</h2>
      <p class="text-gray-600 mt-2">Manage DYNAVERA proxy product settings and configurations</p>
    </div>

    <!-- Product Configuration Menu -->
    <div class="bg-white rounded-lg shadow">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-medium text-gray-900">Proxy Product Configuration</h3>
      </div>
      
      <div class="p-6">
        <!-- Product List -->
        <div class="space-y-4">
          <!-- Residential Proxies -->
          <div class="border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg">
              <div class="flex items-center space-x-3">
                <div class="w-5 h-5 border-2 border-gray-400 rounded flex items-center justify-center">
                  <span class="text-gray-400 text-xs">□</span>
                </div>
                <h4 class="font-medium text-gray-900">Residential Proxies</h4>
              </div>
              <button @click="toggleProduct('residential')" class="text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5 transform transition-transform" :class="{ 'rotate-180': expandedProducts.residential }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            
            <div v-if="expandedProducts.residential" class="p-4 border-t border-gray-200">
              <div class="ml-8 space-y-3">
                <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                      <span class="text-gray-400 text-xs">□</span>
                    </div>
                    <span class="text-gray-700">Price Configuration</span>
                  </div>
                  <button class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Static Residential Proxies -->
          <div class="border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg">
              <div class="flex items-center space-x-3">
                <div class="w-5 h-5 border-2 border-gray-400 rounded flex items-center justify-center">
                  <span class="text-gray-400 text-xs">□</span>
                </div>
                <h4 class="font-medium text-gray-900">Static Residential Proxies</h4>
              </div>
              <button @click="toggleProduct('staticResidential')" class="text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5 transform transition-transform" :class="{ 'rotate-180': expandedProducts.staticResidential }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            
            <div v-if="expandedProducts.staticResidential" class="p-4 border-t border-gray-200">
              <div class="ml-8 space-y-3">
                <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                      <span class="text-gray-400 text-xs">□</span>
                    </div>
                    <span class="text-gray-700">Price Configuration</span>
                  </div>
                  <button class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                    Configure
                  </button>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                      <span class="text-gray-400 text-xs">□</span>
                    </div>
                    <span class="text-gray-700">Discount Configuration</span>
                  </div>
                  <button class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Static Datacenter Proxies -->
          <div class="border border-gray-200 rounded-lg">
            <div class="flex items-center justify-between p-4 bg-gray-50 rounded-t-lg">
              <div class="flex items-center space-x-3">
                <div class="w-5 h-5 border-2 border-gray-400 rounded flex items-center justify-center">
                  <span class="text-gray-400 text-xs">□</span>
                </div>
                <h4 class="font-medium text-gray-900">Static Datacenter Proxies</h4>
              </div>
              <button @click="toggleProduct('staticDatacenter')" class="text-gray-400 hover:text-gray-600">
                <svg class="w-5 h-5 transform transition-transform" :class="{ 'rotate-180': expandedProducts.staticDatacenter }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            
            <div v-if="expandedProducts.staticDatacenter" class="p-4 border-t border-gray-200">
              <div class="ml-8 space-y-3">
                <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                      <span class="text-gray-400 text-xs">□</span>
                    </div>
                    <span class="text-gray-700">Price Configuration</span>
                  </div>
                  <button class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                    Configure
                  </button>
                </div>
                
                <div class="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                  <div class="flex items-center space-x-3">
                    <div class="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
                      <span class="text-gray-400 text-xs">□</span>
                    </div>
                    <span class="text-gray-700">Discount Configuration</span>
                  </div>
                  <button class="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 flex justify-end space-x-4">
          <button class="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-2 bg-green-100 rounded-lg">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Active Products</p>
            <p class="text-2xl font-semibold text-gray-900">3</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-2 bg-blue-100 rounded-lg">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Total Revenue</p>
            <p class="text-2xl font-semibold text-gray-900">$45,678</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="p-2 bg-yellow-100 rounded-lg">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Configurations</p>
            <p class="text-2xl font-semibold text-gray-900">5</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Product expansion state
const expandedProducts = ref({
  residential: true,
  staticResidential: true,
  staticDatacenter: true
})

// Toggle product expansion
const toggleProduct = (product) => {
  expandedProducts.value[product] = !expandedProducts.value[product]
}

// Page meta
definePageMeta({
  title: 'Super Admin Dashboard - DYNAVERA',
  description: 'DYNAVERA super admin dashboard for product configuration',
  layout: 'admin' // Use the admin layout with sidebar
})
</script>
