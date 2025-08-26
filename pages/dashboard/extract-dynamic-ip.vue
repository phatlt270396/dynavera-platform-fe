<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto">
      <!-- Top Section: Current Plan and Traffic -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
        <div class="flex justify-between items-center">
          <div class="space-y-2">
            <h2 class="text-lg font-semibold text-gray-900">Current plan</h2>
            <div class="flex items-center space-x-6 text-sm text-gray-600">
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>2025-07-07 16:30 Expire</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
                <span>Dedicated ports allocated: <span class="font-semibold text-gray-900">0/10</span></span>
              </div>
              <div class="flex items-center space-x-2">
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <span>Traffic Left: <span class="font-bold text-gray-900 text-lg">0.3GB</span></span>
                <a href="#" class="text-green-600 hover:text-green-500 text-sm underline">Allocate Traffic</a>
              </div>
            </div>
          </div>
          <button class="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
            Buy Traffic
          </button>
        </div>
      </div>

      <!-- Main Content: Proxy Configuration -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Section: Configuration -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <!-- Tabs -->
          <div class="flex space-x-8 mb-6 border-b border-gray-200">
            <button 
              @click="activeTab = 'userpass'"
              :class="activeTab === 'userpass' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'"
              class="pb-2 font-medium transition-colors"
            >
              Userpass
            </button>
            <button 
              @click="activeTab = 'whitelist'"
              :class="activeTab === 'whitelist' ? 'border-b-2 border-green-500 text-green-600' : 'text-gray-500 hover:text-gray-700'"
              class="pb-2 font-medium transition-colors"
            >
              Whitelist
            </button>
          </div>

          <!-- Configuration Form -->
          <div class="space-y-6">
            <!-- Country -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
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
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Area <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                v-model="config.area"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="random"
              >
            </div>

            <!-- Proxy Gateway -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Proxy gateway <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                v-model="config.gateway"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="gate-hk.kookeey.info (东亚用户优化)"
              >
            </div>

            <!-- Protocol -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
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
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Rotation <span class="text-red-500">*</span>
              </label>
              <div class="space-y-3">
                <select v-model="config.rotation" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="regular">Rotate regularly</option>
                  <option value="manual">Manual rotation</option>
                  <option value="none">No rotation</option>
                </select>
                <div class="flex items-center space-x-2">
                  <span class="text-sm text-gray-600">rotate every</span>
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
                <div class="text-sm text-gray-600">ROTATE TIME</div>
              </div>
            </div>

            <!-- Security -->
            <div class="bg-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-center mb-3">
                <span class="text-sm font-medium text-gray-700">Security</span>
              </div>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Proxy username:</span>
                  <span class="font-mono text-gray-900">df54e04f1</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-gray-600">Proxy password:</span>
                  <div class="flex items-center space-x-2">
                    <span class="font-mono text-gray-900">06454f51</span>
                    <a href="#" class="text-green-600 hover:text-green-500 text-xs underline">Change</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Proxy Username -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Proxy username <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                v-model="config.username"
                class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="USERID-SECURITY_NAME"
              >
            </div>

            <!-- Proxy Password -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
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
              <label class="block text-sm font-medium text-gray-700 mb-2">
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
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Delimiter <span class="text-red-500">*</span>
              </label>
              <select v-model="config.delimiter" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option value="newline">Standard line breaks (\r\n)</option>
                <option value="comma">Comma separated</option>
                <option value="semicolon">Semicolon separated</option>
              </select>
            </div>

            <!-- Quantity -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Quantity <span class="text-red-500">*</span>
              </label>
              <div class="flex items-center space-x-3">
                <button 
                  @click="decreaseQuantity"
                  class="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <input 
                  type="number" 
                  v-model="config.quantity"
                  class="w-20 border border-gray-300 rounded px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="1"
                  max="100"
                >
                <button 
                  @click="increaseQuantity"
                  class="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex space-x-4 pt-4">
              <button 
                @click="generateProxy"
                class="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Generate
              </button>
              <div class="flex items-center space-x-2">
                <button 
                  @click="generateAPI"
                  class="border border-green-600 text-green-600 py-3 px-6 rounded-lg font-medium hover:bg-green-50 transition-colors"
                >
                  Generate API
                </button>
                <select v-model="apiFormat" class="border border-gray-300 rounded px-3 py-3 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option value="txt">txt格式</option>
                  <option value="json">JSON格式</option>
                  <option value="csv">CSV格式</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Section: Proxy Output -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <!-- Your IP -->
          <div class="mb-4 p-3 bg-gray-50 rounded-lg">
            <span class="text-sm text-gray-600">Your IP: </span>
            <span class="text-sm font-medium text-gray-900">157.15.29.9(CN HK)</span>
          </div>

          <!-- Formatted Proxy List -->
          <div class="space-y-4">
            <div class="flex justify-between items-center">
              <h3 class="text-lg font-semibold text-gray-900">Formatted proxy list</h3>
              <div class="flex space-x-2">
                <button 
                  @click="copyToClipboard"
                  class="text-sm text-green-600 hover:text-green-500 font-medium"
                >
                  Copy
                </button>
                <button 
                  @click="exportProxy"
                  class="text-sm text-green-600 hover:text-green-500 font-medium"
                >
                  Export ↑
                </button>
              </div>
            </div>

            <!-- Proxy Output Area -->
            <div class="border border-gray-300 rounded-lg p-4 bg-gray-50 min-h-[400px]">
              <textarea 
                v-model="proxyOutput"
                class="w-full h-full bg-transparent border-none outline-none resize-none text-sm font-mono text-gray-900"
                readonly
                placeholder="Generated proxy list will appear here..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Navigation -->
      <div class="mt-8 flex justify-between items-center">
        <div></div>
        <div class="flex items-center space-x-4">
          <button class="text-gray-400 hover:text-gray-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <span class="text-sm text-gray-600">19/38</span>
          <button class="text-gray-400 hover:text-gray-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
          <select class="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500">
            <option>默认比例</option>
            <option>1:1</option>
            <option>2:1</option>
            <option>3:1</option>
          </select>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref, computed } from 'vue'

// Set page meta
definePageMeta({
  middleware: 'auth'
})

// Reactive data
const activeTab = ref('userpass')
const apiFormat = ref('txt')

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
</script>
