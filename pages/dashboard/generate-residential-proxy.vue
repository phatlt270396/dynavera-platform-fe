<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto bg-white min-h-screen p-6">
      <!-- Top Section: Current Plan and Traffic -->
      <CurrentPlanTrafficSection @allocateTraffic="handleAllocateTraffic" />

      <!-- Allocate Dedicated Ports Form -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mt-6">
        <h2 class="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-green-500">Allocate dedicated ports</h2>
        
        <form class="space-y-6">
          <!-- Country -->
          <div class="flex items-center">
            <label class="w-32 text-sm font-medium text-gray-700">Country*</label>
            <select class="border border-gray-300 rounded px-3 py-2 text-sm w-48">
              <option selected>US - 美国</option>
            </select>
          </div>

          <!-- Area -->
          <div class="flex items-center">
            <label class="w-32 text-sm font-medium text-gray-700">Area*</label>
            <select class="border border-gray-300 rounded px-3 py-2 text-sm w-48 mr-3">
              <option selected>random</option>
            </select>
            <a href="#" class="text-green-600 text-sm hover:text-green-700 flex items-center">
              check City-level positioning list
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>

          <!-- Protocol -->
          <div class="flex items-center">
            <label class="w-32 text-sm font-medium text-gray-700">Protocol*</label>
            <div class="flex space-x-2">
              <button type="button" class="px-4 py-2 bg-green-600 text-white rounded text-sm">Http(Https supported)</button>
              <button type="button" class="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">Socks5</button>
            </div>
          </div>

          <!-- Rotation -->
          <div class="flex items-center">
            <label class="w-32 text-sm font-medium text-gray-700">Rotation*</label>
            <div class="flex items-center space-x-2">
              <select class="border border-gray-300 rounded px-3 py-2 text-sm w-48">
                <option selected>Rotate regularly</option>
              </select>
              <span class="text-sm text-gray-600">rotate every</span>
              <input type="number" value="5" class="border border-gray-300 rounded px-3 py-2 text-sm w-16">
              <select class="border border-gray-300 rounded px-3 py-2 text-sm w-20">
                <option selected>min</option>
              </select>
            </div>
          </div>
          <div class="ml-32">
            <p class="text-xs text-gray-500">select the rotate time that match your use case best</p>
          </div>

          <!-- Release time -->
          <div class="flex items-center">
            <label class="w-32 text-sm font-medium text-gray-700">Release time*</label>
            <button type="button" class="px-4 py-2 bg-green-600 text-white rounded text-sm">72 hours not used</button>
          </div>

          <!-- Authentication -->
          <div class="flex items-center">
            <label class="w-32 text-sm font-medium text-gray-700">Authentication</label>
            <div class="flex space-x-2">
              <button type="button" class="px-4 py-2 bg-green-600 text-white rounded text-sm">Default user/pass</button>
              <button type="button" class="px-4 py-2 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300">Random user/pass</button>
            </div>
          </div>

          <!-- Ports amount -->
          <div class="flex items-center">
            <label class="w-32 text-sm font-medium text-gray-700">Ports amount*</label>
            <div class="flex items-center border border-gray-300 rounded">
              <button type="button" class="px-3 py-2 hover:bg-gray-50 text-gray-600">-</button>
              <input type="number" value="1" min="1" class="w-16 text-center border-none focus:outline-none text-sm">
              <button type="button" class="px-3 py-2 hover:bg-gray-50 text-gray-600">+</button>
            </div>
          </div>

          <!-- Confirm Button -->
          <div class="pt-6">
            <button @click="handleConfirm" type="button" class="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const handleAllocateTraffic = () => {
  // Redirect to purchase data package page for traffic allocation
  navigateTo('/dashboard/purchase-data-package')
}

const handleConfirm = () => {
  // Redirect back to residential-exclusive-port page
  navigateTo('/dashboard/residential-exclusive-port')
}
</script>
