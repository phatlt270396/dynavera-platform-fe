<template>
  <div class="bg-white rounded-lg p-6 mb-6">
    <div class="flex items-start">
      <!-- Current Plan -->
      <div class="space-y-1 mr-12">
        <div class="flex items-center space-x-40 mb-4">
          <span class="text-xs text-gray-500">Current plan</span>
          <span class="text-xs text-gray-500">Expired</span>
        </div>
        <!-- Progress Bar -->
        <div class="mt-6">
          <div class="w-50 bg-gray-200 rounded-full h-2">
            <div class="bg-green-500 h-2 rounded-full" style="width: 59%"></div>
          </div>
        </div>
        <!-- Dedicated Ports Allocated -->
        <div>
          <div class="flex items-center space-x-20">
            <span class="text-xs text-gray-500">Dedicated ports allocated</span>
            <span class="text-xs text-gray-700 font-medium">0/0</span>
          </div>
        </div>
      </div>
      
      <div class="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
        <!-- Left side - Traffic Left -->
        <div>
            <p class="text-gray-500 text-xs">Traffic Left</p>
            <p class="text-xl font-bold">0 GB</p>
        </div>

        <!-- Middle - Links -->
        <div class="flex gap-6 text-gray-600 text-xs ml-12">
        <button @click="$emit('allocateTraffic')" class="underline hover:text-gray-800">
            Allocate Traffic
        </button>
        <button class="underline hover:text-gray-800">
            Threshold
        </button>
        </div>

        <!-- Right side - Buy Button -->
        <button class="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg ml-12 text-sm">
        <span class="bg-white/20 rounded-full p-1"></span>
            Buy Traffic
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// This component can be customized with props if needed in the future
</script>
