<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto bg-white min-h-screen p-6">
      <!-- Top Section: Current Plan and Traffic -->
      <CurrentPlanTrafficSection @allocateTraffic="handleAllocateTraffic" />

                 <!-- Tabs Section -->
         <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
         <div class="flex border-b border-gray-200">
         <button 
             @click="activeTab = 'userpass'"
             :class="activeTab === 'userpass' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'"
             class="pb-4 font-medium text-lg transition-colors mr-8"
         >
             User/pass mode
         </button>
         <button 
             @click="activeTab = 'whitelist'"
             :class="activeTab === 'whitelist' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'"
             class="pb-4 font-medium text-lg transition-colors"
         >
             Whitelist mode
         </button>
         </div>
         <!-- Main Content: Proxy Configuration -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        <!-- Left Section: Configuration -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <!-- Userpass Tab Content -->
          <div v-show="activeTab === 'userpass'" class="space-y-6">

            
            <!-- Country -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Country <span class="text-red-500">*</span>
              </label>
              <select v-model="config.country" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="global">Global - 全球混播</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="jp">Japan</option>
                <option value="kr">South Korea</option>
              </select>
            </div>

            <!-- Area -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Area <span class="text-red-500">*</span>
              </label>
              <select v-model="config.area" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="random">random</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="jp">Japan</option>
                <option value="kr">South Korea</option>
              </select>
            </div>

            <!-- Proxy Gateway -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Proxy gateway <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                v-model="config.gateway"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="gate.kookeey.info (默认网关)"
              >
            </div>

            <!-- Protocol -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Protocol <span class="text-red-500">*</span>
              </label>
              <div class="flex space-x-4">
                <button 
                  @click="config.protocol = 'http'"
                  :class="config.protocol === 'http' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'"
                  class="px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Http(Https supported)
                </button>
                <button 
                  @click="config.protocol = 'socks5'"
                  :class="config.protocol === 'socks5' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'"
                  class="px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Socks5
                </button>
              </div>
            </div>

            <!-- Rotation -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Rotation <span class="text-red-500">*</span>
              </label>
              <div class="space-y-3">
                <select v-model="config.rotation" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="regular">Rotate regularly</option>
                  <option value="manual">Manual rotation</option>
                  <option value="none">No rotation</option>
                </select>
                <div class="flex items-center space-x-2">
                  <span class="text-xs text-gray-600">rotate every</span>
                  <input 
                    type="number" 
                    v-model="config.rotateInterval"
                    class="w-16 border border-gray-300 rounded px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="1"
                  >
                  <select v-model="config.rotateUnit" class="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="min">min</option>
                    <option value="hour">hour</option>
                    <option value="day">day</option>
                  </select>
                </div>
                <div class="text-xs text-gray-600">ROTATE TIME</div>
              </div>
            </div>

            <!-- Security -->
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-center mb-3">
                <span class="text-xs font-medium text-gray-700">Security</span>
              </div>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Proxy username</span>
                  <span class="font-mono text-gray-900">d023389b</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Proxy password</span>
                  <div class="flex items-center space-x-2">
                    <span class="font-mono text-gray-900">8d7f1bbc</span>
                    <a href="#" class="text-green-600 hover:text-green-500 text-xs underline">Change</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Proxy Username -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Proxy username <span class="text-red-500">*</span>
              </label>
              <select v-model="config.username" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="USERID-SECURITY_NAME">USERID-SECURITY_NAME</option>
                <option value="CUSTOM_USERNAME">CUSTOM_USERNAME</option>
                <option value="RANDOM_USERNAME">RANDOM_USERNAME</option>
              </select>
            </div>

            <!-- Proxy Password -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Proxy password <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                v-model="config.password"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="SECURITY_PASS-ISO_CODE-SESSION_STR-ROTATE_TIME"
              >
            </div>

            <!-- Format -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Format <span class="text-red-500">*</span>
              </label>
              <select v-model="config.format" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="user:pass@ip:port">user:pass@ip:port</option>
                <option value="ip:port:user:pass">ip:port:user:pass</option>
                <option value="user:pass:ip:port">user:pass:ip:port</option>
              </select>
            </div>

            <!-- Delimiter -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Delimiter <span class="text-red-500">*</span>
              </label>
              <select v-model="config.delimiter" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="newline">newline</option>
                <option value="space">space</option>
                <option value="comma">comma</option>
              </select>
            </div>

            <!-- Quantity -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Quantity <span class="text-red-500">*</span>
              </label>
              <div class="flex items-center space-x-2">
                <button @click="decreaseQuantity" class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">-</button>
                <input 
                  type="number" 
                  v-model="config.quantity"
                  min="1"
                  class="w-20 text-center border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                <button @click="increaseQuantity" class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">+</button>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-4">
              <button @click="generateProxy" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Generate
              </button>
              <div class="flex items-center space-x-2">
                <button @click="generateAPI" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Generate API
                </button>
                <select v-model="apiFormat" class="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="txt">txt格式</option>
                  <option value="json">json格式</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Whitelist Tab Content -->
          <div v-show="activeTab === 'whitelist'" class="space-y-6">
            <!-- Country -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Country <span class="text-red-500">*</span>
              </label>
              <select v-model="config.country" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="us">US - 美国</option>
                <option value="global">Global - 全球混播</option>
                <option value="uk">United Kingdom</option>
                <option value="jp">Japan</option>
                <option value="kr">South Korea</option>
              </select>
            </div>

            <!-- Protocol -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Protocol <span class="text-red-500">*</span>
              </label>
              <div class="flex space-x-4">
                <button 
                  @click="config.protocol = 'http'"
                  :class="config.protocol === 'http' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'"
                  class="px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Http(Https supported)
                </button>
                <button 
                  @click="config.protocol = 'socks5'"
                  :class="config.protocol === 'socks5' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-300'"
                  class="px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Socks5
                </button>
              </div>
            </div>

            <!-- Delimiter -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Delimiter <span class="text-red-500">*</span>
              </label>
              <select v-model="config.delimiter" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="newline">Standard line breaks (\r\n)</option>
                <option value="space">Space</option>
                <option value="comma">Comma</option>
              </select>
            </div>

            <!-- Quantity -->
            <div>
              <label class="block text-xs font-medium text-gray-700 mb-2">
                Quantity <span class="text-red-500">*</span>
              </label>
              <div class="flex items-center space-x-2">
                <button @click="decreaseQuantity" class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">-</button>
                <input 
                  type="number" 
                  v-model="config.quantity"
                  min="1"
                  class="w-20 text-center border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                <button @click="increaseQuantity" class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">+</button>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-4">
              <button @click="generateProxy" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Generate
              </button>
              <div class="flex items-center space-x-2">
                <button @click="generateAPI" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Generate API
                </button>
                <select v-model="apiFormat" class="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="txt">txt格式</option>
                  <option value="json">json格式</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section: Output -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <!-- Your IP -->
          <div class="bg-gray-50 rounded-lg p-3 mb-4">
            <span class="text-xs text-gray-600">Your IP: </span>
            <span class="text-sm font-medium text-gray-900">154.18.212.197</span>
          </div>
          
          <!-- Warning Messages -->
          <div class="space-y-3 mb-6">
            <div class="flex items-center space-x-2 text-red-600 text-sm">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"></path>
              </svg>
              <span>If you have any questions, please contact Online service</span>
            </div>
            <div class="text-gray-600 text-sm">
              All of the kookeey proxies should be used in the network outside of mainland China
            </div>
          </div>
          
          <!-- Formatted proxy list -->
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <h3 class="text-base font-semibold text-gray-900">Formatted proxy list</h3>
              <div class="flex space-x-2">
                <button @click="copyToClipboard" class="text-green-600 hover:text-green-500 text-sm underline flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  <span>Copy</span>
                </button>
                <button @click="exportProxy" class="text-green-600 hover:text-green-500 text-sm underline flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                  </svg>
                  <span>Export ↑</span>
                </button>
                <button class="text-green-600 hover:text-green-500 text-sm underline flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                  <span>Advanced ▾</span>
                </button>
              </div>
            </div>
            
            <textarea 
              v-model="proxyOutput"
              class="w-full h-64 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
              placeholder="Generated proxy list will appear here..."
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Whitelist Management Section -->
      <div v-show="activeTab === 'whitelist'" class="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 class="text-base font-semibold text-gray-900 mb-4">Whitelist</h3>
        
        <!-- Add IP Section -->
        <div class="flex items-center space-x-4 mb-6">
          <input 
            type="text" 
            v-model="newIp"
            placeholder="Add IP"
            class="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
          <div class="flex items-center space-x-2">
            <input type="checkbox" v-model="enableRiskControl" class="rounded">
            <label class="text-sm text-gray-700">Enable risk control</label>
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <button @click="addIp" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
            Add
          </button>
        </div>
        
        <!-- Info Message -->
        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p class="text-sm text-blue-800">
            Please confirm your network IP is added to white IPs list.. Mainland China IP can not be added.New IPs synchronization may take up to 10 mins.
          </p>
        </div>
        
        <!-- Search IP -->
        <div class="flex justify-between items-center mb-4">
          <h4 class="text-md font-medium text-gray-900">Whitelisted IPs</h4>
          <div class="relative">
            <input 
              type="text" 
              v-model="searchIp"
              placeholder="Search IP"
              class="pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
            <svg class="w-4 h-4 text-gray-400 absolute left-2 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        
        <!-- Table Header -->
        <div class="grid grid-cols-8 gap-4 py-3 border-b border-gray-200 text-xs font-medium text-gray-700">
          <div>Whitelisted IPs</div>
          <div>Risk Control</div>
          <div>IP Auth Status</div>
          <div>Last Active</div>
          <div>Verification Expired Time</div>
          <div>IP enabled status</div>
          <div>Remark</div>
          <div>Operation</div>
        </div>
        
        <!-- No Data -->
        <div class="flex flex-col items-center justify-center py-12 text-gray-500">
          <svg class="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
          </svg>
          <span class="text-sm">No data</span>
        </div>
      </div>
       </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import CurrentPlanTrafficSection from '~/components/CurrentPlanTrafficSection.vue'

// Set page meta
definePageMeta({
  middleware: 'auth'
})

// Reactive data
const activeTab = ref('userpass')

// activeTab reactive state managed without console logs



const apiFormat = ref('txt')
const newIp = ref('')
const enableRiskControl = ref(false)
const searchIp = ref('')

const config = ref({
  country: 'global',
  area: 'random',
  gateway: 'gate-hk.kookeey.info (东亚用户优化)',
  protocol: 'http',
  rotation: 'regular',
  rotateInterval: 5,
  rotateUnit: 'min',
  username: 'USERID-SECURITY_NAME',
  password: 'SECURITY_PASS-ISO_CODE-SESSION_STR-ROTATE_TIME',
  format: 'user:pass@ip:port',
  delimiter: 'newline',
  quantity: 1
})

const proxyOutput = ref('')

// Methods
const decreaseQuantity = () => {
  if (config.value.quantity > 1) {
    config.value.quantity--
  }
}

const increaseQuantity = () => {
  if (config.value.quantity < 100) {
    config.value.quantity++
  }
}

const generateProxy = () => {
  // Generate sample proxy string
  const proxyString = `6574557-df54e04f1:06454f51-global-81815137-5m@gate-hk.kookeey.info:1000`
  
  // Generate multiple proxies based on quantity
  const proxies = []
  for (let i = 0; i < config.value.quantity; i++) {
    const sessionId = Math.floor(Math.random() * 10000000)
    const proxy = `${sessionId}-df54e04f1:06454f51-global-${Math.floor(Math.random() * 100000000)}-5m@gate-hk.kookeey.info:1000`
    proxies.push(proxy)
  }
  
  proxyOutput.value = proxies.join('\n')
}

const generateAPI = () => {
  // Generate API endpoint for proxy generation
  const apiUrl = `https://api.kookeey.info/proxy/generate?format=${apiFormat.value}&country=${config.value.country}&protocol=${config.value.protocol}&quantity=${config.value.quantity}`
  
  proxyOutput.value = `API Endpoint: ${apiUrl}\n\nSample Response:\n{\n  "status": "success",\n  "proxies": [\n    "6574557-df54e04f1:06454f51-global-81815137-5m@gate-hk.kookeey.info:1000"\n  ],\n  "format": "${apiFormat.value}"\n}`
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(proxyOutput.value)
    alert('Copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy: ', err)
  }
}

const exportProxy = () => {
  if (!proxyOutput.value) {
    alert('No proxy data to export')
    return
  }
  
  const blob = new Blob([proxyOutput.value], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `proxies-${new Date().toISOString().split('T')[0]}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

const addIp = () => {
  if (!newIp.value.trim()) {
    alert('Please enter an IP address')
    return
  }
  
  console.log('Adding IP:', newIp.value, 'Risk control:', enableRiskControl.value)
  alert(`IP ${newIp.value} added to whitelist`)
  newIp.value = ''
}

const handleAllocateTraffic = () => {
  // Redirect to purchase data package page for traffic allocation
  navigateTo('/dashboard/purchase-data-package')
}
</script>
