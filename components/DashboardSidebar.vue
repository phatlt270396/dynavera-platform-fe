<template>
  <aside class="w-72 bg-white shadow-lg fixed h-full overflow-y-auto">
    <!-- Logo Section -->
    <div class="p-6 border-gray-200">
      <div class="flex items-center">
        <img src="/assets/images/dynavera/dynavera-logo-transparent.png" alt="DYNAVERA" class="h-10 w-auto">
        <span class="ml-3 text-xl font-bold text-gray-900">DYNAVERA</span>
      </div>
    </div>

    <!-- Navigation Menu -->
    <nav class="p-4">
      <!-- Dashboard -->
      <div class="mb-4">
        <a href="/dashboard/" class="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
          <svg class="w-5 h-5 mr-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
          </svg>
          <span class="font-medium text-gray-700">Dashboard</span>
        </a>
      </div>

      <!-- Residential Proxies -->
      <div class="mb-4">
        <div 
          @click="toggleMenu('residential')"
          class="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors"
          :class="openMenus.residential ? 'bg-green-50 border border-green-200' : 'hover:bg-gray-50'"
        >
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-3" :class="openMenus.residential ? 'text-green-600' : 'text-gray-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span class="font-medium" :class="openMenus.residential ? 'text-green-800' : 'text-gray-700'">Dynamic Residential Proxies</span>
          </div>
          <svg 
            class="w-4 h-4 transition-transform duration-200" 
            :class="openMenus.residential ? 'text-green-600 rotate-180' : 'text-gray-600'"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </div>
        <div 
          v-show="openMenus.residential"
          class="ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-200"
        >
          <a href="/dashboard/purchase-data-package" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Purchase a data package</a>
          <a href="/dashboard/extract-dynamic-ip" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Extract dynamic IP</a>
          <a href="/dashboard/dynamic-traffic-statistics" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Dynamic traffic statistics</a>
          <a href="/dashboard/residential-exclusive-port" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Residential exclusive port</a>
          <a href="#" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Contact customer service</a>
        </div>
      </div>

      <!-- Static Residential Proxies -->
      <div class="mb-4">
        <div 
          @click="toggleMenu('staticResidential')"
          class="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors"
          :class="openMenus.staticResidential ? 'bg-green-50 border border-green-200' : 'hover:bg-gray-50'"
        >
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-3" :class="openMenus.staticResidential ? 'text-green-600' : 'text-gray-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
            </svg>
            <span class="font-medium" :class="openMenus.staticResidential ? 'text-green-800' : 'text-gray-700'">Static Residential (ISP) Proxies</span>
          </div>
          <svg 
            class="w-4 h-4 transition-transform duration-200" 
            :class="openMenus.staticResidential ? 'text-green-600 rotate-180' : 'text-gray-600'"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </div>
        <div 
          v-show="openMenus.staticResidential"
          class="ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-200">
          <a href="/dashboard/buy-static-residential-ip" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Buy a static residential IP</a>
          <a href="/dashboard/purchased-line-details-residential" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Purchased line details</a>
        </div>
      </div>

      <!-- Static Datacenter Proxies -->
      <div class="mb-4">
        <div 
          @click="toggleMenu('staticDatacenter')"
          class="flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors"
          :class="openMenus.staticDatacenter ? 'bg-green-50 border border-green-200' : 'hover:bg-gray-50'"
        >
          <div class="flex items-center">
            <svg class="w-5 h-5 mr-3" :class="openMenus.staticDatacenter ? 'text-green-600' : 'text-gray-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
            <span class="font-medium" :class="openMenus.staticDatacenter ? 'text-green-800' : 'text-gray-700'">Static Data Center Proxies</span>
          </div>
          <svg 
            class="w-4 h-4 transition-transform duration-200" 
            :class="openMenus.staticDatacenter ? 'text-green-600 rotate-180' : 'text-gray-600'"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </div>
        <div 
          v-show="openMenus.staticDatacenter"
          class="ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-200"
        >
          <a href="/dashboard/purchase-data-center-ip" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Purchase Data Center IP</a>
          <a href="/dashboard/purchased-line-details-datacenter" class="block text-sm text-gray-600 hover:text-green-600 py-1 transition-colors">Purchased line details</a>
        </div>
      </div>
    </nav>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Reactive state for menu toggles
const openMenus = ref({
  residential: false,
  staticResidential: false,
  staticDatacenter: false
})

// Load menu state from localStorage on component mount
onMounted(() => {
  if (process.client) {
    const savedState = localStorage.getItem('dashboardMenuState')
    if (savedState) {
      try {
        const parsedState = JSON.parse(savedState)
        openMenus.value = { ...openMenus.value, ...parsedState }
      } catch (e) {
        console.error('Error parsing saved menu state:', e)
      }
    }
  }
})

// Function to toggle menu states
const toggleMenu = (menuName) => {
  openMenus.value[menuName] = !openMenus.value[menuName]
  
  // Save menu state to localStorage
  if (process.client) {
    localStorage.setItem('dashboardMenuState', JSON.stringify(openMenus.value))
  }
}
</script>
