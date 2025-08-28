<template>
  <div class="min-h-screen bg-white">
    <div class="grid grid-cols-12 gap-0">
      <!-- Sidebar (same as index) -->
      <aside class="col-span-12 md:col-span-3 bg-white min-h-screen border-r border-gray-100">
        <div class="p-5 border-b border-gray-100">
          <div class="h-20 w-full rounded-lg flex items-center justify-center bg-white">
            <img src="/assets/images/dynavera/dynavera-logo-transparent.png" alt="DYNAVERA" class="h-14 md:h-16 w-auto object-contain" />
          </div>
        </div>
        <div class="px-4 py-6 space-y-3">
          <div v-for="(section, si) in sections" :key="section.id" class="rounded-lg border border-gray-100 bg-gray-50">
            <button class="w-full flex items-center justify-between px-4 py-3 text-gray-800 font-medium hover:bg-white transition" @click="section.open = !section.open">
              <div class="flex items-center space-x-3">
                <span class="inline-flex items-center justify-center w-6 h-6 rounded-md bg-green-100 text-green-600">✓</span>
                <span>{{ section.title }}</span>
              </div>
              <span class="text-gray-400">{{ section.open ? '▾' : '▸' }}</span>
            </button>
            <div v-show="section.open" class="px-4 pb-4 space-y-2 text-gray-600">
              <button @click="goSystemHome" class="w-full text-left px-2 py-2 rounded hover:bg-white">Price Configuration</button>
              <button v-if="section.id !== 'residential'" @click="goSystemHome" class="w-full text-left px-2 py-2 rounded hover:bg-white">Discount configuration</button>
            </div>
          </div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="col-span-12 md:col-span-9 p-6">
        <!-- Header with avatar -->
        <div class="flex items-center justify-end mb-6 relative">
          <button @click="userMenuOpen = !userMenuOpen" class="relative focus:outline-none rounded-full border border-gray-200 p-1 hover:shadow">
            <img src="/favicon-dynavera.png" alt="avatar" class="w-9 h-9 rounded-full object-cover" />
          </button>
          <div v-show="userMenuOpen" class="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-md py-2 z-10">
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50" @click="openChangePassword">Change password</button>
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50" @click="() => navigateTo('/system/sub-accounts')">Sub-accounts</button>
          </div>
        </div>

        <!-- Sub-Accounts Content -->
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-2xl font-semibold">Sub-Account</h1>
            <div class="flex items-center gap-2">
              <input v-model="subSearch" type="text" placeholder="User ID/User Name" class="border border-gray-300 rounded-lg px-3 py-2 w-64" />
              <button @click="openBindSub" class="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg">Bind sub-account</button>
              <button @click="openAddSub" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">Add sub-account</button>
            </div>
          </div>

          <div class="overflow-auto border border-gray-100 rounded">
            <table class="min-w-full text-sm">
              <thead class="bg-gray-50">
                <tr>
                  <th class="p-3 text-left">Developer id</th>
                  <th class="p-3 text-left">Traffic Left</th>
                  <th class="p-3 text-left">Datacenter proxies</th>
                  <th class="p-3 text-left">Static ISP proxies</th>
                  <th class="p-3 text-left">Add Time</th>
                  <th class="p-3 text-left">Status</th>
                  <th class="p-3 text-left">Remark</th>
                  <th class="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                <tr v-for="s in subAccountsFiltered" :key="s.id" class="hover:bg-gray-50">
                  <td class="p-3">{{ s.developerId }}</td>
                  <td class="p-3">{{ s.trafficLeft }}</td>
                  <td class="p-3">{{ s.dcProxies }}</td>
                  <td class="p-3">{{ s.ispProxies }}</td>
                  <td class="p-3">{{ s.addTime }}</td>
                  <td class="p-3"><span class="inline-flex items-center text-green-600">• approved</span></td>
                  <td class="p-3">{{ s.remark || '-' }}</td>
                  <td class="p-3 space-x-3">
                    <button class="text-red-600 hover:underline" @click="deleteSub(s.id)">Delete</button>
                    <button class="text-sky-600 hover:underline" @click="openAllocTraffic(s)">Traffic Allocation</button>
                    <button class="text-sky-600 hover:underline" @click="openAllocIp(s)">IP Allocation</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Add Sub-Account Modal -->
        <div v-if="showAddSub" class="fixed inset-0 z-40">
          <div class="absolute inset-0 bg-black/40" @click="closeAddSub"></div>
          <div class="absolute left-1/2 top-20 -translate-x-1/2 w-[520px] bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 class="text-lg font-semibold mb-4">Create sub-account</h3>
            <div class="space-y-4">
              <div>
                <label class="block text-sm text-gray-700 mb-1">Developer id</label>
                <input v-model="newSub.developerId" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="User ID/User Name" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-700 mb-1">Traffic Left</label>
                  <input v-model="newSub.trafficLeft" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="e.g., 9" />
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-1">Remark</label>
                  <input v-model="newSub.remark" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" />
                </div>
              </div>
            </div>
            <div class="mt-6 flex justify-end gap-3">
              <button @click="closeAddSub" class="px-4 py-2 rounded-lg border border-gray-300">Cancel</button>
              <button @click="confirmAddSub" class="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white">Create</button>
            </div>
          </div>
        </div>

        <!-- Bind Sub-Account Modal -->
        <div v-if="showBindSub" class="fixed inset-0 z-50">
          <div class="absolute inset-0 bg-black/40" @click="closeBindSub"></div>
          <div class="absolute left-1/2 top-20 -translate-x-1/2 w-[520px] bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-semibold">Add Sub-account Binding</h3>
              <button class="text-gray-400" @click="closeBindSub">✕</button>
            </div>
            <p class="text-xs text-gray-500 mb-4">After adding you can view sub-account dynamic traffic balance and static data center/ISP line generation data.</p>
            <div class="space-y-4">
              <div>
                <label class="block text-sm text-gray-700 mb-1">User ID</label>
                <input v-model="bindForm.userId" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Please enter" />
              </div>
              <div>
                <label class="block text-sm text-gray-700 mb-1">Developer Mark</label>
                <input v-model="bindForm.developerMark" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Please enter" />
              </div>
              <div>
                <label class="block text-sm text-gray-700 mb-1">Remarks</label>
                <input v-model="bindForm.remark" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Please enter" />
              </div>
            </div>
            <div class="mt-6 flex justify-end gap-3">
              <button @click="closeBindSub" class="px-4 py-2 rounded-lg border border-gray-300">Cancel</button>
              <button @click="confirmBindSub" class="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white">Confirm</button>
            </div>
          </div>
        </div>

        <!-- Allocate traffic Modal -->
        <div v-if="showAllocTraffic" class="fixed inset-0 z-50">
          <div class="absolute inset-0 bg-black/40" @click="closeAllocTraffic"></div>
          <div class="absolute left-1/2 top-16 -translate-x-1/2 w-[680px] bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold">Allocate traffic</h3>
              <button class="text-gray-400" @click="closeAllocTraffic">✕</button>
            </div>

            <div class="space-y-5">
              <div>
                <label class="block text-sm text-gray-700 mb-1">Target User ID:</label>
                <div class="flex gap-3">
                  <input v-model="allocTrafficForm.targetUserId" type="text" placeholder="Please enter the target user" class="flex-1 border border-gray-300 rounded-lg px-3 py-2" />
                  <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg" @click="checkUserInfo">Check User Information</button>
                </div>
              </div>

              <div>
                <label class="block text-sm text-gray-700 mb-1">Traffic package type:</label>
                <select v-model="allocTrafficForm.packageType" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Starter (1GB, 30 ports, 30 days)</option>
                  <option>Pro (5GB, 50 ports, 30 days)</option>
                  <option>Business (20GB, 100 ports, 30 days)</option>
                </select>
              </div>

              <div>
                <label class="block text-sm text-gray-700 mb-1">Allocation Quantity:</label>
                <div class="inline-flex items-center border border-gray-300 rounded-lg">
                  <button @click="decAllocQty" class="px-4 py-2">-</button>
                  <span class="px-6 select-none">{{ allocTrafficForm.quantity }}</span>
                  <button @click="incAllocQty" class="px-4 py-2">+</button>
                </div>
              </div>
            </div>

            <div class="mt-6 flex justify-end">
              <button class="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white" @click="confirmAllocTraffic">Generate allocation order</button>
            </div>
          </div>
        </div>

        <!-- Allocate IP Modal -->
        <div v-if="showAllocIp" class="fixed inset-0 z-50">
          <div class="absolute inset-0 bg-black/40" @click="closeAllocIp"></div>
          <div class="absolute left-1/2 top-16 -translate-x-1/2 w-[640px] bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-lg font-semibold">Allocate IP</h3>
              <button class="text-gray-400" @click="closeAllocIp">✕</button>
            </div>
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 sm:col-span-6">
                <label class="block text-sm text-gray-700 mb-1">Target user IP</label>
                <input v-model="allocForm.targetUserIp" type="text" disabled class="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div class="col-span-12 sm:col-span-6">
                <label class="block text-sm text-gray-700 mb-1">Target user name</label>
                <input v-model="allocForm.targetUserName" type="text" disabled class="w-full bg-gray-100 border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div class="col-span-12">
                <label class="block text-sm text-gray-700 mb-1">IP type</label>
                <select v-model="allocForm.ipType" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Static residential proxy</option>
                  <option>Datacenter proxy</option>
                </select>
              </div>
              <div class="col-span-12">
                <label class="block text-sm text-gray-700 mb-1">Egress IP</label>
                <select v-model="allocForm.egressIp" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>10.0.0.0</option>
                  <option>10.0.0.1</option>
                  <option>10.0.0.2</option>
                </select>
              </div>
            </div>
            <div class="mt-6 flex justify-end">
              <button @click="confirmAllocIp" class="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white">Allocate IP</button>
            </div>
          </div>
        </div>

        <!-- Change Password Modal (reuse) -->
        <div v-if="showChangePass" class="fixed inset-0 z-50">
          <div class="absolute inset-0 bg-black/40" @click="closeChangePassword"></div>
          <div class="absolute left-1/2 top-12 -translate-x-1/2 w-[640px] bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div class="text-2xl font-semibold mb-6 text-center">Change password</div>
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12">
                <label class="block text-sm text-gray-700 mb-1">Old Password</label>
                <input v-model="cp.oldPass" type="password" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Please enter your current password" />
                <p v-if="cpErrors.old" class="text-red-600 text-xs mt-1">{{ cpErrors.old }}</p>
              </div>
              <div class="col-span-12">
                <label class="block text-sm text-gray-700 mb-1">New Password</label>
                <input v-model="cp.newPass" type="password" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="4-10 letters or numbers" />
                <p v-if="cpErrors.new" class="text-red-600 text-xs mt-1">{{ cpErrors.new }}</p>
              </div>
              <div class="col-span-12">
                <label class="block text-sm text-gray-700 mb-1">Confirm Password</label>
                <input v-model="cp.confirm" type="password" class="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Re-enter new password" />
                <p v-if="cpErrors.confirm" class="text-red-600 text-xs mt-1">{{ cpErrors.confirm }}</p>
              </div>
            </div>
            <div class="mt-8 flex justify-center gap-4">
              <button @click="closeChangePassword" class="px-6 py-2 rounded-lg border border-gray-300">Cancel</button>
              <button @click="confirmChangePassword" class="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white">confirm</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

definePageMeta({ middleware: 'auth' })

const userMenuOpen = ref(false)
const showChangePass = ref(false)
const cp = reactive({ oldPass: '', newPass: '', confirm: '' })
const cpErrors = reactive({ old: '', new: '', confirm: '' })

const subSearch = ref('')
const subAccounts = ref([
  { id: 1, developerId: 'wx_ce77ce4eb', trafficLeft: '9', dcProxies: 1, ispProxies: 0, addTime: '2025-06-08 12:10', status: 'approved', remark: '' },
  { id: 2, developerId: 'Rayagent', trafficLeft: '306M', dcProxies: 0, ispProxies: 0, addTime: '2025-06-07 20:07', status: 'approved', remark: '' },
])
const subAccountsFiltered = computed(() => {
  const q = subSearch.value.trim().toLowerCase()
  if (!q) return subAccounts.value
  return subAccounts.value.filter(s => s.developerId.toLowerCase().includes(q))
})

const showAddSub = ref(false)
const newSub = reactive({ developerId: '', trafficLeft: '', remark: '', dcProxies: 0, ispProxies: 0 })
const openAddSub = () => { showAddSub.value = true }
const closeAddSub = () => { showAddSub.value = false; newSub.developerId = newSub.trafficLeft = newSub.remark = ''; newSub.dcProxies = 0; newSub.ispProxies = 0 }
const confirmAddSub = () => {
  const id = Date.now()
  subAccounts.value.push({ id, developerId: newSub.developerId, trafficLeft: newSub.trafficLeft || '0', dcProxies: newSub.dcProxies, ispProxies: newSub.ispProxies, addTime: new Date().toISOString().slice(0,16).replace('T',' '), status: 'approved', remark: newSub.remark })
  closeAddSub()
}
const deleteSub = (id) => { subAccounts.value = subAccounts.value.filter(s => s.id !== id) }

// Bind modal
const showBindSub = ref(false)
const bindForm = reactive({ userId: '', developerMark: '', remark: '' })
const openBindSub = () => { showBindSub.value = true }
const closeBindSub = () => { showBindSub.value = false; bindForm.userId = bindForm.developerMark = bindForm.remark = '' }
const confirmBindSub = () => { showBindSub.value = false }

// Allocate traffic modal
const showAllocTraffic = ref(false)
const allocTrafficForm = reactive({ targetUserId: '', packageType: 'Starter (1GB, 30 ports, 30 days)', quantity: 1 })
const openAllocTraffic = (row) => { showAllocTraffic.value = true; allocTrafficForm.targetUserId = row.developerId }
const closeAllocTraffic = () => { showAllocTraffic.value = false }
const incAllocQty = () => { allocTrafficForm.quantity += 1 }
const decAllocQty = () => { if (allocTrafficForm.quantity > 1) allocTrafficForm.quantity -= 1 }
const checkUserInfo = () => {}
const confirmAllocTraffic = () => { showAllocTraffic.value = false }

// Allocate IP modal
const showAllocIp = ref(false)
const allocForm = reactive({ targetUserIp: '', targetUserName: '', ipType: 'Static residential proxy', egressIp: '10.0.0.0' })
const openAllocIp = (row) => { showAllocIp.value = true; allocForm.targetUserIp = row.developerId; allocForm.targetUserName = row.developerId }
const closeAllocIp = () => { showAllocIp.value = false }
const confirmAllocIp = () => { showAllocIp.value = false }

// Helpers from index: change password
const openChangePassword = () => { showChangePass.value = true }
const closeChangePassword = () => { showChangePass.value = false; cp.oldPass = cp.newPass = cp.confirm = ''; cpErrors.old = cpErrors.new = cpErrors.confirm = '' }
const confirmChangePassword = () => {
  cpErrors.old = cpErrors.new = cpErrors.confirm = ''
  const current = localStorage.getItem('systemPass') || '123456'
  if (cp.oldPass !== current) {
    cpErrors.old = 'The current password is incorrect, please try again'
  }
  if (!/^[A-Za-z0-9]{4,10}$/.test(cp.newPass)) {
    cpErrors.new = 'Please enter 4-10 letters or numbers'
  }
  if (cp.newPass !== cp.confirm) {
    cpErrors.confirm = 'The two passwords you entered do not match'
  }
  if (!cpErrors.old && !cpErrors.new && !cpErrors.confirm) {
    localStorage.setItem('systemPass', cp.newPass)
    showChangePass.value = false
  }
}

// Sidebar sections (same labels)
const sections = reactive([
  { id: 'residential', title: 'Residential Proxies', open: true },
  { id: 'static-residential', title: 'Static Residential Proxies', open: true },
  { id: 'static-datacenter', title: 'Static Datacenter Proxies', open: true },
])
const goSystemHome = () => navigateTo('/system')
</script>


