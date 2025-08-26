<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto bg-white min-h-screen p-6">
      <!-- Top Section: Current Plan and Traffic with Generate Button -->
      <div class="flex items-start gap-3 mb-6">
        <div>
          <CurrentPlanTrafficSection @allocateTraffic="handleAllocateTraffic" />
        </div>
        <div class="flex-shrink-0 mt-10">
          <a href="/dashboard/generate-residential-proxy" class="border border-green-300 bg-white text-green-600 px-4 py-3 rounded-lg hover:bg-green-50 transition-colors flex items-center space-x-2">
            <span class="text-sm">Generate residential proxy</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <!-- Proxy Management Table -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <!-- Filter and Search Bar -->
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center space-x-4">
            <!-- Dropdowns -->
            <select class="border border-gray-300 rounded px-3 py-2 text-xs">
              <option>normal</option>
            </select>
            <select class="border border-gray-300 rounded px-3 py-2 text-xs">
              <option>all location</option>
            </select>
            <select class="border border-gray-300 rounded px-3 py-2 text-xs">
              <option>Proxy ID</option>
            </select>
            
            <!-- Search Input -->
            <input 
              type="text" 
              placeholder="search detail..." 
              class="border border-gray-300 rounded px-3 py-2 text-xs w-48"
            >
            
            <!-- Action Buttons -->
            <button class="bg-green-600 text-white px-4 py-2 rounded text-xs hover:bg-green-700 transition-colors">
              Search
            </button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded text-xs hover:bg-gray-600 transition-colors">
              Reset
            </button>
          </div>
          
          <div class="flex items-center space-x-4">
            <!-- Checkboxes -->
            <label class="flex items-center space-x-2 text-xs">
              <input type="checkbox" class="rounded">
              <span>show User/Pass</span>
            </label>
            <label class="flex items-center space-x-2 text-xs">
              <input type="checkbox" class="rounded">
              <span>show remark</span>
            </label>
            
            <!-- Export Button -->
            <button class="bg-blue-600 text-white px-4 py-2 rounded text-xs hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <span>Export proxies</span>
            </button>
          </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full text-xs">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left">
                  <input type="checkbox" class="rounded">
                </th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">Proxy ID</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">Protocol</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">
                  Inbound
                  <div class="flex mt-1">
                    <button class="px-2 py-1 bg-green-600 text-white rounded-l text-xs">Domain</button>
                    <button class="px-2 py-1 bg-gray-200 text-gray-700 rounded-r text-xs">IP</button>
                  </div>
                </th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">Proxy Port</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">User/Pass</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">Qrcode</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">Location</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">IP rotate time</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">Generate time</th>
                <th class="px-4 py-3 text-left font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              <!-- Empty state -->
              <tr>
                <td colspan="11" class="px-4 py-12">
                  <div class="flex flex-col items-center justify-center text-gray-400">
                    <svg class="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                    </svg>
                    <span class="text-sm">No data</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref } from 'vue'

// Set page meta
definePageMeta({
  middleware: 'auth'
})

// Reactive data
const handleAllocateTraffic = () => {
  // Redirect to purchase data package page for traffic allocation
  navigateTo('/dashboard/purchase-data-package')
}
</script>
