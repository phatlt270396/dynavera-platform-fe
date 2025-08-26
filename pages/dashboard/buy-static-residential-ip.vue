<template>
  <DashboardLayout>
    <div class="max-w-7xl mx-auto bg-white min-h-screen p-6">
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <!-- Left Column: Configuration -->
        <div class="space-y-6 lg:col-span-3">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Configuration</h2>
          
          <!-- Location -->
          <div class="flex items-center space-x-4">
            <label class="text-sm font-medium text-gray-700 w-32">Location<span class="text-red-500">*</span></label>
            <select class="border border-gray-300 rounded px-3 py-2 text-sm w-48">
              <option selected>US - 美国, random</option>
            </select>
            <p class="text-xs text-gray-500">Please choose your goal location</p>
          </div>

          <!-- Protocol -->
          <div class="flex items-start space-x-4">
            <label class="text-sm font-medium text-gray-700 w-32 mt-2">Protocol<span class="text-red-500">*</span></label>
            <div class="flex-1">
              <div class="grid grid-cols-3 gap-2">
                <button 
                  @click="selectedProtocol = 'Http(s)'"
                  :class="selectedProtocol === 'Http(s)' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >Http(s)</button>
                <button 
                  @click="selectedProtocol = 'Socks5'"
                  :class="selectedProtocol === 'Socks5' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >Socks5</button>
                <button 
                  @click="selectedProtocol = 'Vmess'"
                  :class="selectedProtocol === 'Vmess' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >Vmess</button>
                <button 
                  @click="selectedProtocol = 'Shadowsocks'"
                  :class="selectedProtocol === 'Shadowsocks' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >Shadowsocks</button>
                <button 
                  @click="selectedProtocol = 'Wireguard'"
                  :class="selectedProtocol === 'Wireguard' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >Wireguard</button>
                <button 
                  @click="selectedProtocol = 'GRE IP'"
                  :class="selectedProtocol === 'GRE IP' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >GRE IP</button>
              </div>
              <p class="text-xs text-gray-500 mt-1">Some business sences may need specified procotol</p>
            </div>
          </div>

          <!-- Authentication -->
          <div class="flex items-center space-x-4">
            <label class="text-sm font-medium text-gray-700 w-32">Authentication</label>
            <div class="flex space-x-2">
              <button 
                @click="selectedAuthentication = 'Default user/pass'"
                :class="selectedAuthentication === 'Default user/pass' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                class="px-4 py-2 rounded text-sm transition-colors"
              >Default user/pass</button>
              <button 
                @click="selectedAuthentication = 'Random user/pass'"
                :class="selectedAuthentication === 'Random user/pass' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                class="px-4 py-2 rounded text-sm transition-colors"
              >Random user/pass</button>
            </div>
          </div>

          <!-- UDP -->
          <div class="flex items-center space-x-4">
            <label class="text-sm font-medium text-gray-700 w-32">UDP</label>
            <div class="flex space-x-2">
              <button 
                @click="selectedUDP = 'Off'"
                :class="selectedUDP === 'Off' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                class="px-4 py-2 rounded text-sm transition-colors"
              >Off</button>
              <button 
                @click="selectedUDP = 'On'"
                :class="selectedUDP === 'On' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                class="px-4 py-2 rounded text-sm transition-colors"
              >On</button>
            </div>
          </div>

          <!-- Bandwidth Price -->
          <div class="flex items-start space-x-4">
            <label class="text-sm font-medium text-gray-700 w-32 mt-2">bandwidth price</label>
            <div class="flex-1">
              <div class="flex space-x-2">
                <button 
                  @click="selectedBandwidth = 'Count with Mbps'"
                  :class="selectedBandwidth === 'Count with Mbps' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-4 py-2 rounded text-sm transition-colors"
                >Count with Mbps</button>
                <button 
                  @click="selectedBandwidth = 'Count with bandwidth package'"
                  :class="selectedBandwidth === 'Count with bandwidth package' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-4 py-2 rounded text-sm transition-colors"
                >Count with bandwidth package</button>
              </div>
              
              <div class="flex items-center space-x-2 mt-3">
                <div class="flex space-x-1">
                  <button 
                    @click="selectedMbps = 5"
                    :class="selectedMbps === 5 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                    class="px-3 py-1 rounded text-xs transition-colors"
                  >5</button>
                  <button 
                    @click="selectedMbps = 10"
                    :class="selectedMbps === 10 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                    class="px-3 py-1 rounded text-xs transition-colors"
                  >10</button>
                  <button 
                    @click="selectedMbps = 15"
                    :class="selectedMbps === 15 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                    class="px-3 py-1 rounded text-xs transition-colors"
                  >15</button>
                  <button 
                    @click="selectedMbps = 20"
                    :class="selectedMbps === 20 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                    class="px-3 py-1 rounded text-xs transition-colors"
                  >20</button>
                  <button 
                    @click="selectedMbps = 25"
                    :class="selectedMbps === 25 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                    class="px-3 py-1 rounded text-xs transition-colors"
                  >25</button>
                  <button 
                    @click="selectedMbps = 30"
                    :class="selectedMbps === 30 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                    class="px-3 py-1 rounded text-xs transition-colors"
                  >30</button>
                </div>
                <span class="text-sm text-gray-600">Mbps</span>
              </div>
              
              <div class="flex items-center space-x-2 mt-2">
                <div class="flex items-center border border-gray-300 rounded">
                  <button @click="decreaseMbps" class="px-2 py-1 hover:bg-gray-50 text-gray-600">-</button>
                  <input v-model="selectedMbps" type="number" min="1" max="100" class="w-12 text-center border-none focus:outline-none text-sm" style="-moz-appearance: textfield; -webkit-appearance: textfield; appearance: textfield;">
                  <button @click="increaseMbps" class="px-2 py-1 hover:bg-gray-50 text-gray-600">+</button>
                </div>
                <span class="text-sm text-gray-600">Mbps</span>
              </div>
            </div>
          </div>

          <!-- Special Inbound -->
          <div class="flex items-start space-x-4">
            <label class="text-sm font-medium text-gray-700 w-32 mt-2">Special inbound</label>
            <div class="flex-1">
              <div class="flex space-x-2">
                <button 
                  @click="selectedInbound = 'Raw inbound'"
                  :class="selectedInbound === 'Raw inbound' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-4 py-2 rounded text-sm transition-colors"
                >Raw inbound</button>
                <button 
                  @click="selectedInbound = 'Hong Kong'"
                  :class="selectedInbound === 'Hong Kong' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-4 py-2 rounded text-sm transition-colors"
                >Hong Kong</button>
                <button 
                  @click="selectedInbound = 'Bangkok'"
                  :class="selectedInbound === 'Bangkok' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-4 py-2 rounded text-sm transition-colors"
                >Bangkok</button>
                <button 
                  @click="selectedInbound = 'Los Angeles'"
                  :class="selectedInbound === 'Los Angeles' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-4 py-2 rounded text-sm transition-colors"
                >Los Angeles</button>
              </div>
              <p class="text-xs text-gray-500 mt-1">Special inbound will use kookeey's global proprietary network system to transfer transnational traffic, which can provide most stable network quality. We recommend you choose the inbound that nearby your local network</p>
            </div>
          </div>
        </div>

        <!-- Right Column: Order Confirmation -->
        <div class="space-y-6 lg:col-span-2">
          <h2 class="text-xl font-semibold text-gray-900 mb-6">Please confirm your order</h2>
          
          <!-- SID -->
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-600">SID:</span>
            <span class="text-sm font-mono">6574557175187248456619890</span>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </button>
          </div>

          <!-- Order Summary -->
          <div class="bg-gray-50 rounded-lg p-4 space-y-2">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Proxy type:</span>
              <span class="text-gray-900">Static ISP</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Location:</span>
              <span class="text-gray-900">US - 美国/random</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Protocol:</span>
              <span class="text-gray-900">{{ selectedProtocol }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Bandwidth:</span>
              <span class="text-gray-900">{{ selectedMbps }}Mbps</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Business goal:</span>
              <span class="text-gray-900">-</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Use device:</span>
              <span class="text-gray-900">General</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Authentication:</span>
              <span class="text-gray-900">{{ selectedAuthentication }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Special inbound:</span>
              <span class="text-gray-900">{{ selectedInbound }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">UDP:</span>
              <span class="text-gray-900">{{ selectedUDP }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Remark:</span>
              <input 
                v-model="remark" 
                type="text" 
                placeholder="Enter remark" 
                class="text-gray-900 border-none bg-transparent focus:outline-none focus:ring-0 text-right"
              >
            </div>
          </div>

          <!-- Period -->
          <div class="flex items-start space-x-4">
            <label class="text-sm font-medium text-gray-700 w-20 mt-2">Period<span class="text-red-500">*</span></label>
            <div class="flex-1">
              <div class="grid grid-cols-3 gap-2">
                <button 
                  @click="selectedPeriod = '30d'"
                  :class="selectedPeriod === '30d' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >30d</button>
                <button 
                  @click="selectedPeriod = '60d'"
                  :class="selectedPeriod === '60d' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >60d (5% off)</button>
                <button 
                  @click="selectedPeriod = '90d'"
                  :class="selectedPeriod === '90d' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >90d (10% off)</button>
                <button 
                  @click="selectedPeriod = '120d'"
                  :class="selectedPeriod === '120d' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >120d (12% off)</button>
                <button 
                  @click="selectedPeriod = '180d'"
                  :class="selectedPeriod === '180d' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >180d (15% off)</button>
                <button 
                  @click="selectedPeriod = '1 year'"
                  :class="selectedPeriod === '1 year' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >1 year (20% off)</button>
                <button 
                  @click="selectedPeriod = '2 year'"
                  :class="selectedPeriod === '2 year' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                  class="px-3 py-2 rounded text-xs text-center transition-colors"
                >2 year (32% off)</button>
              </div>
            </div>
          </div>

          <!-- IP Amount -->
          <div class="flex items-center space-x-4">
            <label class="text-sm font-medium text-gray-700 w-20">IP amount<span class="text-red-500">*</span></label>
            <div class="flex items-center space-x-2">
              <div class="flex items-center border border-gray-300 rounded">
                <button @click="decreaseIpAmount" class="px-2 py-1 hover:bg-gray-50 text-gray-600">-</button>
                <input v-model="ipAmount" type="number" min="1" max="100" class="w-12 text-center border-none focus:outline-none text-sm" style="-moz-appearance: textfield; -webkit-appearance: textfield; appearance: textfield;">
                <button @click="increaseIpAmount" class="px-2 py-1 hover:bg-gray-50 text-gray-600">+</button>
              </div>
            </div>
          </div>

          <!-- Auto Renew -->
          <div class="flex items-center space-x-4">
            <label class="text-sm font-medium text-gray-700 w-20">Auto renew</label>
            <div class="flex items-center space-x-2">
              <input v-model="autoRenew" type="checkbox" class="rounded">
              <span class="text-sm text-gray-700">(deducted from balance)</span>
            </div>
          </div>

          <!-- Payment Options -->
          <div class="flex items-start space-x-4">
            <label class="text-sm font-medium text-gray-700 w-20 mt-2">Payment</label>
            <div class="flex-1 flex space-x-3">
              <div class="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-green-500 flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium">Card Payment</span>
                </div>
              </div>
              <div class="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-green-500 flex-1">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium">For remittance or other payment, please contact customer service</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Order Amount -->
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-700">Order amount</span>
            <div class="flex items-center space-x-2">
              <span class="text-sm text-gray-700">total cost</span>
              <span class="text-2xl font-bold text-orange-500">¥60</span>
            </div>
          </div>

          <!-- Refund Policy -->
          <div class="flex items-center space-x-4 -mt-6">
            <div class="flex items-center space-x-2">
              <input v-model="agreeRefundPolicy" type="checkbox" class="rounded">
              <span class="text-sm text-gray-700">Please read and agree refund policy</span>
            </div>
          </div>

          <!-- Recharge Link -->
          <div>
            <a href="#" class="text-sm text-gray-600 hover:text-gray-800 underline">Recharge</a>
          </div>

          <!-- Confirm and Purchase Button -->
          <button class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">
            Confirm and Purchase
          </button>

          <!-- Important Notes -->
          <div class="space-y-2 text-xs text-red-600">
            <p>▲ All of the kookeey proxies should be used in the network outside of mainland China</p>
            <p>It may take 3-5 mins to generate new proxy.</p>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref } from 'vue'

// Reactive data
const selectedProtocol = ref('Socks5')
const selectedAuthentication = ref('Default user/pass')
const selectedUDP = ref('Off')
const selectedBandwidth = ref('Count with Mbps')
const selectedMbps = ref(5)
const selectedInbound = ref('Raw inbound')
const selectedPeriod = ref('30d')
const ipAmount = ref(1)
const autoRenew = ref(false)
const agreeRefundPolicy = ref(false)
const remark = ref('')

// Functions
const decreaseMbps = () => {
  if (selectedMbps.value > 1) {
    selectedMbps.value--
  }
}

const increaseMbps = () => {
  if (selectedMbps.value < 100) {
    selectedMbps.value++
  }
}

const decreaseIpAmount = () => {
  if (ipAmount.value > 1) {
    ipAmount.value--
  }
}

const increaseIpAmount = () => {
  if (ipAmount.value < 100) {
    ipAmount.value++
  }
}
</script>
