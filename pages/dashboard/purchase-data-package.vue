<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto">
      <!-- Top Section: Current Plan and Traffic -->
      <CurrentPlanTrafficSection @allocateTraffic="showAllocateModal = true" />
      
      <!-- Feature Tags Section -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
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
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 h-full">
        <!-- Starter Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-purple-500 transition-colors duration-200 flex flex-col">
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
          
          <button @click="buyPackage('starter')" class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors mt-auto">
            Buy now
          </button>
        </div>
        
        <!-- Advanced Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-purple-500 transition-colors duration-200 flex flex-col">
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
          
          <button @click="buyPackage('advanced')" class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors mt-auto">
            Buy now
          </button>
        </div>
        
        <!-- Premium Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-purple-500 transition-colors duration-200 flex flex-col">
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
          
          <button @click="buyPackage('premium')" class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors mt-auto">
            Buy now
          </button>
        </div>
        
        <!-- Professional Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:border-purple-500 transition-colors duration-200 flex flex-col">
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
          
          <button @click="buyPackage('professional')" class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors mt-auto">
            Buy now
          </button>
        </div>
        
        <!-- Enterprise Package -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4 relative hover:border-purple-500 transition-colors duration-200 flex flex-col">
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
          
          <button @click="buyPackage('professional')" class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors mt-auto">
            Buy now
          </button>
        </div>
              </div>
      </div>

      <!-- Allocate Traffic Modal -->
      <div v-if="showAllocateModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
        <div class="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-8 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Allocate traffic</h3>
            <button @click="showAllocateModal = false" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-8 space-y-8">
            <!-- Target User ID -->
            <div class="flex items-center space-x-6">
              <label class="text-sm font-medium text-gray-700 whitespace-nowrap w-32">Target User ID:</label>
              <div class="flex-1 flex space-x-3">
                <input 
                  type="text" 
                  v-model="allocateForm.targetUserId"
                  placeholder="Please enter the target user ID"
                  class="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                <button class="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors text-sm font-medium">
                  Check User Information
                </button>
              </div>
            </div>

            <!-- Traffic Package Type -->
            <div class="flex items-start space-x-6">
              <label class="text-sm font-medium text-gray-700 whitespace-nowrap w-32 pt-3">Traffic package type:</label>
              <select 
                v-model="allocateForm.packageType"
                class="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="starter">Starter (1GB, 30 ports, 30 days)</option>
                <option value="advanced">Advanced (10GB, 100 ports, 180 days)</option>
                <option value="premium">Premium (100GB, 1000 ports, 365 days)</option>
                <option value="professional">Professional (1TB, unlimited, never expire)</option>
                <option value="enterprise">Enterprise (5TB, unlimited, never expire)</option>
              </select>
            </div>

            <!-- Allocation Quantity -->
            <div class="flex items-start space-x-6">
              <label class="text-sm font-medium text-gray-700 whitespace-nowrap w-32 pt-3">Allocation Quantity:</label>
              <div class="flex items-center border border-gray-300 rounded-md">
                <button @click="decreaseAllocationQuantity" class="px-4 py-3 hover:bg-gray-50 transition-colors">-</button>
                <input 
                  type="number" 
                  v-model="allocateForm.quantity"
                  min="1"
                  class="w-20 text-center border-none focus:outline-none text-lg"
                >
                <button @click="increaseAllocationQuantity" class="px-4 py-3 hover:bg-gray-50 transition-colors">+</button>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-8 pb-8">
            <button 
              @click="generateAllocationOrder"
              class="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              Generate allocation order
            </button>
          </div>
        </div>
      </div>

      <!-- Confirm Allocation Modal -->
      <div v-if="showConfirmModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
        <div class="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-6 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-900">Confirm allocation?</h3>
            <button @click="showConfirmModal = false" class="text-gray-400 hover:text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6">
            <!-- SID -->
            <div class="mb-4">
              <span class="text-sm text-gray-600">SID: </span>
              <span class="text-sm text-gray-600">{{ confirmData.sid }}</span>
            </div>

            <!-- Allocation Details -->
            <div class="space-y-3">
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-sm text-gray-700">Package Type:</span>
                <span class="text-sm font-medium text-gray-900">{{ confirmData.packageType }}</span>
              </div>
              
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-sm text-gray-700">flow:</span>
                <span class="text-sm font-medium text-gray-900">{{ confirmData.flow }}</span>
              </div>
              
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-sm text-gray-700">Dedicated port:</span>
                <span class="text-sm font-medium text-gray-900">{{ confirmData.dedicatedPort }}</span>
              </div>
              
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-sm text-gray-700">Validity:</span>
                <span class="text-sm font-medium text-gray-900">{{ confirmData.validity }}</span>
              </div>
              
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-sm text-gray-700">Allocation Quantity:</span>
                <span class="text-sm font-medium text-gray-900">{{ confirmData.allocationQuantity }}</span>
              </div>
              
              <div class="flex justify-between py-2 border-b border-gray-200">
                <span class="text-sm text-gray-700">Total flow:</span>
                <span class="text-sm font-medium text-gray-900">{{ confirmData.totalFlow }}</span>
              </div>
              
              <div class="flex justify-between py-2">
                <span class="text-sm text-gray-700">Current allocatable traffic:</span>
                <span class="text-sm font-medium text-gray-900">{{ confirmData.currentAllocatableTraffic }}</span>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-6 pb-6">
            <button 
              @click="confirmAllocation"
              class="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-medium"
            >
              confirm
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
</template>

<script setup>
import { ref } from 'vue'
import CurrentPlanTrafficSection from '~/components/CurrentPlanTrafficSection.vue'

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

// Modal state
const showAllocateModal = ref(false)
const showConfirmModal = ref(false)

// Allocate form data
const allocateForm = ref({
  targetUserId: '',
  packageType: 'starter',
  quantity: 1
})

// Confirm modal data
const confirmData = ref({
  sid: '',
  packageType: '',
  flow: '',
  dedicatedPort: '',
  validity: '',
  allocationQuantity: 1,
  totalFlow: '',
  currentAllocatableTraffic: ''
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

// Modal methods
const increaseAllocationQuantity = () => {
  if (allocateForm.value.quantity < 10) {
    allocateForm.value.quantity++
  }
}

const decreaseAllocationQuantity = () => {
  if (allocateForm.value.quantity > 1) {
    allocateForm.value.quantity--
  }
}

const generateAllocationOrder = () => {
  const { targetUserId, packageType, quantity } = allocateForm.value
  
  if (!targetUserId.trim()) {
    alert('Please enter a target user ID')
    return
  }
  
  console.log('Generating allocation order:', { targetUserId, packageType, quantity })
  
  // Show confirmation modal
  showConfirmModal.value = true
  confirmData.value = {
    sid: '712384117518678235772005909',
    packageType: packageType,
    flow: getPackageFlow(packageType),
    dedicatedPort: getPackagePorts(packageType),
    validity: getPackageValidity(packageType),
    allocationQuantity: quantity,
    totalFlow: calculateTotalFlow(packageType, quantity),
    currentAllocatableTraffic: '0.3GB'
  }
}

// Helper functions for package details
const getPackageFlow = (packageType) => {
  const flows = {
    starter: '1GB',
    advanced: '10GB',
    premium: '100GB',
    professional: '1TB',
    enterprise: '5TB'
  }
  return flows[packageType] || '1GB'
}

const getPackagePorts = (packageType) => {
  const ports = {
    starter: '30',
    advanced: '100',
    premium: '1000',
    professional: 'unlimited',
    enterprise: 'unlimited'
  }
  return ports[packageType] || '30'
}

const getPackageValidity = (packageType) => {
  const validity = {
    starter: '30 days',
    advanced: '180 days',
    premium: '365 days',
    professional: 'never expire',
    enterprise: 'never expire'
  }
  return validity[packageType] || '30 days'
}

const calculateTotalFlow = (packageType, quantity) => {
  const baseFlow = getPackageFlow(packageType)
  if (quantity === 1) return baseFlow
  
  // Convert to GB for calculation
  let flowInGB = 1
  if (baseFlow.includes('TB')) {
    flowInGB = parseInt(baseFlow) * 1024
  } else if (baseFlow.includes('GB')) {
    flowInGB = parseInt(baseFlow)
  }
  
  const totalGB = flowInGB * quantity
  if (totalGB >= 1024) {
    return `${(totalGB / 1024).toFixed(1)}TB`
  }
  return `${totalGB}GB`
}

const confirmAllocation = () => {
  console.log('Allocation confirmed:', confirmData.value)
  
  // Here you would typically make an API call to confirm the allocation
  alert('Allocation confirmed successfully!')
  
  // Close both modals and reset form
  showConfirmModal.value = false
  showAllocateModal.value = false
  allocateForm.value = {
    targetUserId: '',
    packageType: 'starter',
    quantity: 1
  }
}
</script>
