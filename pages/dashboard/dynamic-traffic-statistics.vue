<template>
  <DashboardLayout>
        <div class="max-w-7xl mx-auto bg-white min-h-screen p-6">
      <!-- Top Section: Current Plan and Traffic with Generate Button -->
      <CurrentPlanTrafficSection @allocateTraffic="handleAllocateTraffic" />
        

      <!-- Statistics Section -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-base font-semibold text-gray-900">Statistics(MB)</h3>
          <div class="flex items-center space-x-2">
            <input type="date" value="2025-07-07" class="border border-gray-300 rounded px-3 py-1 text-xs">
            <span class="text-xs text-gray-500">to</span>
            <input type="date" value="2025-07-07" class="border border-gray-300 rounded px-3 py-1 text-xs">
          </div>
        </div>
        
        <!-- Graph Container -->
        <div class="h-64 bg-gray-50 rounded-lg border border-gray-200 relative">
          <!-- Y-axis labels -->
          <div class="absolute left-4 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-4">
            <span>1.0</span>
            <span>0.8</span>
            <span>0.6</span>
            <span>0.4</span>
            <span>0.2</span>
            <span>0</span>
          </div>
          
          <!-- Grid lines -->
          <div class="absolute left-12 right-4 top-0 bottom-0">
            <div class="h-full flex flex-col justify-between">
              <div class="border-b border-gray-200"></div>
              <div class="border-b border-gray-200"></div>
              <div class="border-b border-gray-200"></div>
              <div class="border-b border-gray-200"></div>
              <div class="border-b border-gray-200"></div>
              <div class="border-b border-gray-200"></div>
            </div>
          </div>
          
          <!-- Empty graph area -->
          <div class="absolute left-12 right-4 top-4 bottom-4 flex items-center justify-center text-gray-400">
            <span class="text-xs">No data available</span>
          </div>
        </div>
      </div>

      <!-- Residential Usage Section -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <!-- Tabs -->
        <div class="flex space-x-8 border-b border-gray-200 mb-6">
          <button 
            @click="activeTab = 'records'"
            :class="activeTab === 'records' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'"
            class="pb-4 font-medium text-base transition-colors"
          >
            Traffic Change Records
          </button>
          <button 
            @click="activeTab = 'detail'"
            :class="activeTab === 'detail' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'"
            class="pb-4 font-medium text-base transition-colors"
          >
            Traffic Usage Detail
          </button>
        </div>

        <!-- Filter Options -->
        <div class="flex items-center space-x-4 mb-6">
          <select class="border border-gray-300 rounded px-3 py-2 text-xs">
            <option>Rayagent</option>
          </select>
          <input type="date" value="2025-06-08" class="border border-gray-300 rounded px-3 py-2 text-xs">
          <span class="text-xs text-gray-500">to</span>
          <input type="date" value="2025-07-07" class="border border-gray-300 rounded px-3 py-2 text-xs">
          <select class="border border-gray-300 rounded px-3 py-2 text-xs">
            <option>Type</option>
          </select>
          <button class="bg-green-600 text-white px-4 py-2 rounded text-xs hover:bg-green-700 transition-colors">
            Export
          </button>
        </div>

        <!-- Traffic Change Records Table -->
        <div v-show="activeTab === 'records'" class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th class="text-left py-3 px-4 text-sm font-medium text-gray-700">Time</th>
                <th class="text-left py-3 px-4 text-sm font-medium text-gray-700">UID</th>
                <th class="text-left py-3 px-4 text-sm font-medium text-gray-700">Account</th>
                <th class="text-left py-3 px-4 text-sm font-medium text-gray-700">Type</th>
                <th class="text-left py-3 px-4 text-sm font-medium text-gray-700">Amount</th>
                <th class="text-left py-3 px-4 text-sm font-medium text-gray-700">Traffic Left</th>
                <th class="text-left py-3 px-4 text-sm font-medium text-gray-700">Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-100">
                <td class="py-3 px-4 text-sm text-gray-900">2025-06-14 16:28:32</td>
                <td class="py-3 px-4 text-sm text-gray-900">6574557</td>
                <td class="py-3 px-4 text-sm text-gray-900">Rayagent</td>
                <td class="py-3 px-4 text-sm text-gray-900">allocation</td>
                <td class="py-3 px-4 text-sm text-red-600">-204 MB</td>
                <td class="py-3 px-4 text-sm text-gray-900">306 MB</td>
                <td class="py-3 px-4 text-sm text-gray-900">ToUid#7123841</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Traffic Usage Detail Tab -->
        <div v-show="activeTab === 'detail'" class="text-center py-12 text-gray-500">
          <span class="text-sm">Traffic Usage Detail content will appear here</span>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref } from 'vue'
import CurrentPlanTrafficSection from '~/components/CurrentPlanTrafficSection.vue'

// Set page meta
useHead({
  title: 'Dynamic Traffic Statistics - Dynavera',
  meta: [
    { name: 'description', content: 'View dynamic traffic statistics and usage records' }
  ]
})

// Reactive data
const activeTab = ref('records')

const handleAllocateTraffic = () => {
  // Redirect to purchase data package page for traffic allocation
  navigateTo('/dashboard/purchase-data-package')
}
</script>
