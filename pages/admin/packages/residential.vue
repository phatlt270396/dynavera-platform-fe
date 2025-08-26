<template>
  <div class="p-6">
    <!-- Search and Filter Bar -->
    <div class="bg-white rounded-lg shadow-sm border p-4 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Package Name</label>
          <input 
            v-model="filters.packageName" 
            type="text" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search package name"
          >
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <select 
            v-model="filters.country" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Countries</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="DE">Germany</option>
            <option value="FR">France</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Days</label>
          <div class="relative">
            <select 
              v-model="filters.days" 
              class="w-full px-3 py-2 pr-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Days</option>
              <option value="7">7 days</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="180">180 days</option>
              <option value="365">365 days</option>
            </select>
            <button 
              v-if="filters.days" 
              @click="filters.days = ''" 
              class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
        
        <div>
          <button @click="searchPackages" class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="mb-6 flex space-x-3">
      <button @click="goLive" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Go Live
      </button>
      <button @click="goOffline" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Offline
      </button>
      <button @click="deleteSelected" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        Delete
      </button>
    </div>

    <!-- Packages Table -->
    <div class="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input 
                  type="checkbox" 
                  v-model="selectAll" 
                  @change="toggleSelectAll"
                  class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                >
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Country</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flow</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dedicated Port</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original Price ($)</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price ($)</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operate</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="pkg in packages" :key="pkg.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <input 
                  type="checkbox" 
                  v-model="selectedPackages" 
                  :value="pkg.id"
                  class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ pkg.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ pkg.country }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ pkg.flow }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ pkg.days }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ pkg.dedicatedPort }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${{ pkg.originalPrice }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${{ pkg.currentPrice }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <span class="text-green-600 font-medium">{{ pkg.status }}</span>
                <button @click="editPackage(pkg)" class="ml-2 text-blue-600 hover:text-blue-800">Edit</button>
                <button @click="deletePackage(pkg)" class="ml-2 text-red-600 hover:text-red-800">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Edit/Add Form Modal -->
    <div v-if="showAddForm || showEditForm" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">{{ showEditForm ? 'Edit' : 'Add' }}</h3>
          <form @submit.prevent="savePackage" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Package Name (English) <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="packageForm.nameEn" 
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Package Name (Chinese) <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="packageForm.nameCn" 
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Country <span class="text-red-500">*</span>
              </label>
              <select 
                v-model="packageForm.country" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Country</option>
                <option value="US">美国</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Flow <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="packageForm.flow" 
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="1GB"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Days <span class="text-red-500">*</span>
              </label>
              <select 
                v-model="packageForm.days" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Days</option>
                <option value="7天">7天</option>
                <option value="30天">30天</option>
                <option value="90天">90天</option>
                <option value="180天">180天</option>
                <option value="365天">365天</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Dedicated Port <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="packageForm.dedicatedPort" 
                type="number" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="100"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Original Price ($) <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="packageForm.originalPrice" 
                type="number" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">
                Current Price ($) <span class="text-red-500">*</span>
              </label>
              <input 
                v-model="packageForm.currentPrice" 
                type="number" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0"
              >
            </div>
            
            <div class="flex justify-end space-x-3 pt-4">
              <button 
                type="button" 
                @click="closeForm"
                class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {{ showEditForm ? 'Update' : 'Save' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Delete</h3>
          <p class="text-sm text-gray-600 mb-6">
            After deletion, the configuration will be offline and removed from the list. Are you sure you want to delete?
          </p>
          <div class="flex justify-end space-x-3">
            <button 
              @click="showDeleteModal = false"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              @click="confirmDelete"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Country Selection Modal -->
    <div v-if="showCountryModal" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Country Selection Box</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select 
                v-model="selectedCountry" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="US">美国</option>
                <option value="CA">加拿大</option>
                <option value="UK">英国</option>
                <option value="DE">德国</option>
                <option value="FR">法国</option>
              </select>
            </div>
            
            <div class="space-y-3">
              <div>
                <h4 class="font-medium text-gray-900 mb-2">北美洲</h4>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input type="checkbox" v-model="selectedCountries" value="US" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">美国</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" v-model="selectedCountries" value="CA" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">加拿大</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-gray-900 mb-2">亚洲</h4>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input type="checkbox" v-model="selectedCountries" value="JP" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">日本</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" v-model="selectedCountries" value="KR" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">韩国</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h4 class="font-medium text-gray-900 mb-2">欧洲</h4>
                <div class="space-y-2">
                  <label class="flex items-center">
                    <input type="checkbox" v-model="selectedCountries" value="UK" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">英国</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" v-model="selectedCountries" value="DE" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">德国</span>
                  </label>
                  <label class="flex items-center">
                    <input type="checkbox" v-model="selectedCountries" value="FR" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-sm text-gray-700">法国</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div class="flex justify-end space-x-3 pt-4">
            <button 
              @click="showCountryModal = false"
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              @click="confirmCountrySelection"
              class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Filters
const filters = ref({
  packageName: '',
  country: '',
  days: ''
})

// Table data
const packages = ref([
  {
    id: 14,
    country: 'The United States, the United Kingdom...',
    flow: '80 GB',
    days: '30天',
    dedicatedPort: 100,
    originalPrice: 600,
    currentPrice: 400,
    status: 'Online'
  }
])

// Selection
const selectAll = ref(false)
const selectedPackages = ref([])

// Modals
const showAddForm = ref(false)
const showEditForm = ref(false)
const showDeleteModal = ref(false)
const showCountryModal = ref(false)

// Form data
const packageForm = ref({
  nameEn: '',
  nameCn: '',
  country: '',
  flow: '1GB',
  days: '30天',
  dedicatedPort: 100,
  originalPrice: '',
  currentPrice: ''
})

// Country selection
const selectedCountry = ref('US')
const selectedCountries = ref(['US', 'CA'])

// Methods
const searchPackages = () => {
  console.log('Searching packages with filters:', filters.value)
  // Implement search logic
}

const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedPackages.value = packages.value.map(p => p.id)
  } else {
    selectedPackages.value = []
  }
}

const goLive = () => {
  console.log('Going live for packages:', selectedPackages.value)
  // Implement go live logic
}

const goOffline = () => {
  console.log('Going offline for packages:', selectedPackages.value)
  // Implement go offline logic
}

const deleteSelected = () => {
  if (selectedPackages.value.length > 0) {
    showDeleteModal.value = true
  }
}

const editPackage = (pkg) => {
  packageForm.value = {
    nameEn: pkg.nameEn || '',
    nameCn: pkg.nameCn || '',
    country: pkg.country || '',
    flow: pkg.flow || '1GB',
    days: pkg.days || '30天',
    dedicatedPort: pkg.dedicatedPort || 100,
    originalPrice: pkg.originalPrice || '',
    currentPrice: pkg.currentPrice || ''
  }
  showEditForm.value = true
}

const deletePackage = (pkg) => {
  selectedPackages.value = [pkg.id]
  showDeleteModal.value = true
}

const savePackage = () => {
  console.log('Saving package:', packageForm.value)
  // Implement save logic
  closeForm()
}

const closeForm = () => {
  showAddForm.value = false
  showEditForm.value = false
  packageForm.value = {
    nameEn: '',
    nameCn: '',
    country: '',
    flow: '1GB',
    days: '30天',
    dedicatedPort: 100,
    originalPrice: '',
    currentPrice: ''
  }
}

const confirmDelete = () => {
  console.log('Deleting packages:', selectedPackages.value)
  // Implement delete logic
  showDeleteModal.value = false
  selectedPackages.value = []
}

const confirmCountrySelection = () => {
  console.log('Selected countries:', selectedCountries.value)
  showCountryModal.value = false
  // Update packageForm.country with selected countries
}

// Page meta
definePageMeta({
  title: 'Residential Proxies - DYNAVERA',
  description: 'Manage Residential Proxies packages and configurations',
  layout: 'admin'
})
</script>
