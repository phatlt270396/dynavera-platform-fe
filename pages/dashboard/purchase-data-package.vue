<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto">
      <!-- Top Section: Current Plan and Features -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Current plan</h2>
        
        <!-- Current Plan Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <span class="text-sm text-gray-600">2025-07-07 16:30 Expire</span>
          </div>
          
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span class="text-sm text-gray-600">Traffic Left: <span class="font-semibold text-gray-900">0.3GB</span></span>
            <a href="#" class="text-green-600 hover:text-green-500 text-sm underline">Allocate Traffic</a>
          </div>
          
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
            </svg>
            <span class="text-sm text-gray-600">Dedicated ports allocated: <span class="font-semibold text-gray-900">0/10</span></span>
          </div>
        </div>
        
        <!-- Feature Tags -->
        <div class="flex flex-wrap gap-2">
          <div class="flex items-center space-x-1 bg-green-50 border border-green-200 rounded-lg px-3 py-1">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm font-medium text-green-800">47 Million global IPs</span>
          </div>
          
          <div class="flex items-center space-x-1 bg-green-50 border border-green-200 rounded-lg px-3 py-1">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm font-medium text-green-800">generate / ports</span>
          </div>
          
          <div class="flex items-center space-x-1 bg-green-50 border border-green-200 rounded-lg px-3 py-1">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm font-medium text-green-800">unlimited</span>
          </div>
          
          <div class="flex items-center space-x-1 bg-green-50 border border-green-200 rounded-lg px-3 py-1">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm font-medium text-green-800">rotating</span>
          </div>
          
          <div class="flex items-center space-x-1 bg-green-50 border border-green-200 rounded-lg px-3 py-1">
            <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
            <span class="text-sm font-medium text-green-800">City-level positioning</span>
          </div>
        </div>
      </div>
      
      <!-- Package Options Section -->
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <!-- Starter Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-purple-500 transition-colors duration-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Starter</h3>
          <div class="space-y-2 mb-4">
            <div class="text-sm text-gray-600">¥38/GB</div>
            <div class="text-sm text-gray-600">Traffic 1GB</div>
            <div class="text-sm text-gray-600">30 days</div>
            <div class="text-sm text-gray-600">30 dedicated ports</div>
          </div>
          
          <div class="border-t border-gray-200 pt-3 mb-4">
            <div class="text-lg font-bold text-gray-900">¥38</div>
            <div class="text-sm text-gray-500 line-through">price ¥ 58</div>
          </div>
          
          <div class="flex items-center space-x-2 mb-4">
            <label class="text-sm text-gray-600">Quantity:</label>
            <div class="flex items-center border border-gray-300 rounded">
              <button @click="decreaseQuantity('starter')" class="px-2 py-1 hover:bg-gray-50">-</button>
              <input type="number" v-model="quantities.starter" min="1" class="w-12 text-center border-none focus:outline-none">
              <button @click="increaseQuantity('starter')" class="px-2 py-1 hover:bg-gray-50">+</button>
            </div>
          </div>
          
          <button @click="buyPackage('starter')" class="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            Buy now
          </button>
        </div>
        
        <!-- Advanced Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-purple-500 transition-colors duration-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Advanced Package</h3>
          <div class="space-y-2 mb-4">
            <div class="text-sm text-gray-600">¥28/GB</div>
            <div class="text-sm text-gray-600">Traffic 10GB</div>
            <div class="text-sm text-gray-600">180 days</div>
            <div class="text-sm text-gray-600">100 dedicated ports</div>
          </div>
          
          <div class="border-t border-gray-200 pt-3 mb-4">
            <div class="text-lg font-bold text-gray-900">¥280</div>
            <div class="text-sm text-gray-500 line-through">price ¥ 480</div>
          </div>
          
          <div class="flex items-center space-x-2 mb-4">
            <label class="text-sm text-gray-600">Quantity:</label>
            <div class="flex items-center border border-gray-300 rounded">
              <button @click="decreaseQuantity('advanced')" class="px-2 py-1 hover:bg-gray-50">-</button>
              <input type="number" v-model="quantities.advanced" min="1" class="w-12 text-center border-none focus:outline-none">
              <button @click="increaseQuantity('advanced')" class="px-2 py-1 hover:bg-gray-50">+</button>
            </div>
          </div>
          
          <button @click="buyPackage('advanced')" class="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            Buy now
          </button>
        </div>
        
        <!-- Premium Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-purple-500 transition-colors duration-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Premium Package</h3>
          <div class="space-y-2 mb-4">
            <div class="text-sm text-gray-600">¥20/GB</div>
            <div class="text-sm text-gray-600">Traffic 100GB</div>
            <div class="text-sm text-gray-600">365 days</div>
            <div class="text-sm text-gray-600">1000 dedicated ports</div>
          </div>
          
          <div class="border-t border-gray-200 pt-3 mb-4">
            <div class="text-lg font-bold text-gray-900">¥2000</div>
            <div class="text-sm text-gray-500 line-through">price ¥ 3800</div>
          </div>
          
          <div class="flex items-center space-x-2 mb-4">
            <label class="text-sm text-gray-600">Quantity:</label>
            <div class="flex items-center border border-gray-300 rounded">
              <button @click="decreaseQuantity('premium')" class="px-2 py-1 hover:bg-gray-50">-</button>
              <input type="number" v-model="quantities.premium" min="1" class="w-12 text-center border-none focus:outline-none">
              <button @click="increaseQuantity('premium')" class="px-2 py-1 hover:bg-gray-50">+</button>
            </div>
          </div>
          
          <button @click="buyPackage('premium')" class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
            Buy now
          </button>
        </div>
        
        <!-- Professional Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-purple-500 transition-colors duration-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Professional Package</h3>
          <div class="space-y-2 mb-4">
            <div class="text-sm text-gray-600">¥15/GB</div>
            <div class="text-sm text-gray-600">Traffic 1TB</div>
            <div class="text-sm text-gray-600">Never expire</div>
            <div class="text-sm text-gray-600">Unlimited</div>
          </div>
          
          <div class="border-t border-gray-200 pt-3 mb-4">
            <div class="text-lg font-bold text-gray-900">¥15360</div>
            <div class="text-sm text-gray-500 line-through">price ¥ 28672</div>
          </div>
          
          <div class="flex items-center space-x-2 mb-4">
            <label class="text-sm text-gray-600">Quantity:</label>
            <div class="flex items-center border border-gray-300 rounded">
              <button @click="decreaseQuantity('professional')" class="px-2 py-1 hover:bg-gray-50">-</button>
              <input type="number" v-model="quantities.professional" min="1" class="w-12 text-center border-none focus:outline-none">
              <button @click="increaseQuantity('professional')" class="px-2 py-1 hover:bg-gray-50">+</button>
            </div>
          </div>
          
          <button @click="buyPackage('professional')" class="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            Buy now
          </button>
        </div>
        
        <!-- Enterprise Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 relative hover:border-purple-500 transition-colors duration-200">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Enterprise Package</h3>
          <div class="space-y-2 mb-4">
            <div class="text-sm text-gray-600">¥10/GB</div>
            <div class="text-sm text-gray-600">Traffic 5TB</div>
            <div class="text-sm text-gray-600">Never expire</div>
            <div class="text-sm text-gray-600">Unlimited</div>
          </div>
          
          <div class="border-t border-gray-200 pt-3 mb-4">
            <div class="text-lg font-bold text-gray-900">¥51200</div>
            <div class="text-sm text-gray-500 line-through">price ¥ 143360</div>
          </div>
          
          <div class="flex items-center space-x-2 mb-4">
            <label class="text-sm text-gray-600">Quantity:</label>
            <div class="flex items-center border border-gray-300 rounded">
              <button @click="decreaseQuantity('enterprise')" class="px-2 py-1 hover:bg-gray-50">-</button>
              <input type="number" v-model="quantities.enterprise" min="1" class="w-12 text-center border-none focus:outline-none">
              <button @click="increaseQuantity('enterprise')" class="px-2 py-1 hover:bg-gray-50">+</button>
            </div>
          </div>
          
          <button @click="buyPackage('enterprise')" class="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            Buy now
          </button>
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

// Package quantities
const quantities = ref({
  starter: 1,
  advanced: 1,
  premium: 1,
  professional: 1,
  enterprise: 1
})

// Methods
const increaseQuantity = (packageType) => {
  if (quantities.value[packageType] < 10) {
    quantities.value[packageType]++
  }
}

const decreaseQuantity = (packageType) => {
  if (quantities.value[packageType] > 1) {
    quantities.value[packageType]--
  }
}

const buyPackage = (packageType) => {
  const quantity = quantities.value[packageType]
  console.log(`Buying ${quantity} ${packageType} package(s)`)
  
  // Here you would typically redirect to payment page or show payment modal
  alert(`Redirecting to payment for ${quantity} ${packageType} package(s)`)
}
</script>
