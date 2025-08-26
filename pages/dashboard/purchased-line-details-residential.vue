<template>
    <DashboardLayout>
      <div class="max-w-7xl mx-auto bg-white min-h-screen p-6">
        <!-- Top Header Section -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div class="flex items-center justify-between">
            <!-- Left: User IP Information -->
            <div class="text-sm text-gray-700">
              <span>Your IP: 157.15.29.9(CN HK)</span>
            </div>
            
            <!-- Center: Proxy Credentials -->
            <div class="text-center space-y-2">
              <div class="text-sm text-gray-700">
                <span>proxy username: 71eb41b9</span>
              </div>
              <div class="text-sm text-gray-700">
                <span>proxy password: ******</span>
              </div>
              <div class="flex items-center justify-center space-x-2">
                <span class="text-sm text-gray-700">Whitelist On</span>
                <a href="#" class="text-sm text-blue-600 hover:text-blue-800 underline">Change</a>
              </div>
            </div>
            
            <!-- Right: Buy Datacenter Proxy Button -->
            <div>
              <button class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <span class="font-medium">Buy Datacenter Proxy</span>
              </button>
            </div>
          </div>
        </div>
  
        <!-- Proxy List Table -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200">
          <div class="overflow-x-auto">
            <table class="w-full text-sm">
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
                  <th class="px-4 py-3 text-left font-medium text-gray-700">Location</th>
                  <th class="px-4 py-3 text-left font-medium text-gray-700">Outbound IP</th>
                                   <th class="px-4 py-3 text-left font-medium text-gray-700">Buy&Expire Time</th>
                   <th class="px-4 py-3 text-left font-medium text-gray-700">Status</th>
                   <th class="px-4 py-3 text-left font-medium text-gray-700">Left Days</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <!-- Example Proxy Entry -->
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3">
                    <input type="checkbox" class="rounded">
                  </td>
                  <td class="px-4 py-3 text-gray-900 font-mono">4523576</td>
                  <td class="px-4 py-3 text-gray-700">socks5</td>
                  <td class="px-4 py-3 text-gray-700">us15.kookeey.info</td>
                  <td class="px-4 py-3 text-gray-700 font-mono">26433</td>
                  <td class="px-4 py-3">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <span class="text-gray-700">User: e25cca03</span>
                        <button class="text-gray-400 hover:text-gray-600">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-gray-700">Pass: 6a250299</span>
                        <button class="text-gray-400 hover:text-gray-600">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        </button>
                      </div>
                      <a href="#" class="text-xs text-blue-600 hover:text-blue-800 underline">change</a>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-gray-700">US-美国</td>
                  <td class="px-4 py-3 text-gray-700 font-mono">173.211.85.208</td>
                                   <td class="px-4 py-3 text-gray-700">
                     <div class="space-y-1">
                       <div>2025-06-07 22:39</div>
                       <div>2025-07-07 22:39</div>
                     </div>
                   </td>
                   <td class="px-4 py-3">
                     <div class="flex items-center space-x-1">
                       <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span class="text-xs text-gray-700">Normal</span>
                     </div>
                   </td>
                   <td class="px-4 py-3">
                     <div class="flex items-center space-x-1">
                       <span class="text-xs text-gray-700">0d</span>
                       <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                         <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                       </svg>
                     </div>
                   </td>
                </tr>
                
                <!-- Additional example entries -->
                <tr class="hover:bg-gray-50">
                  <td class="px-4 py-3">
                    <input type="checkbox" class="rounded">
                  </td>
                  <td class="px-4 py-3 text-gray-900 font-mono">4523577</td>
                  <td class="px-4 py-3 text-gray-700">http</td>
                  <td class="px-4 py-3 text-gray-700">us16.kookeey.info</td>
                  <td class="px-4 py-3 text-gray-700 font-mono">26434</td>
                  <td class="px-4 py-3">
                    <div class="space-y-1">
                      <div class="flex items-center space-x-2">
                        <span class="text-gray-700">User: f36d52c4</span>
                        <button class="text-gray-400 hover:text-gray-600">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="flex items-center space-x-2">
                        <span class="text-gray-700">Pass: 7b3613aa</span>
                        <button class="text-gray-400 hover:text-gray-600">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                          </svg>
                        </button>
                      </div>
                      <a href="#" class="text-xs text-blue-600 hover:text-blue-800 underline">change</a>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-gray-700">US-美国</td>
                  <td class="px-4 py-3 text-gray-700 font-mono">173.211.85.209</td>
                                   <td class="px-4 py-3 text-gray-700">
                     <div class="space-y-1">
                       <div>2025-06-08 10:15</div>
                       <div>2025-07-08 10:15</div>
                     </div>
                   </td>
                   <td class="px-4 py-3">
                     <div class="flex items-center space-x-1">
                       <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                       <span class="text-xs text-gray-700">Normal</span>
                     </div>
                   </td>
                   <td class="px-4 py-3">
                     <div class="flex items-center space-x-1">
                       <span class="text-xs text-gray-700">30d</span>
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
  
  // Reactive data
  const selectedProxies = ref([])
  </script>
  