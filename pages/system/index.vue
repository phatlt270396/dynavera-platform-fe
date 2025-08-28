<template>
  <div class="min-h-screen bg-white">
    <div class="grid grid-cols-12 gap-0">
      <!-- Sidebar -->
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
              <button @click="openPrice(section.id)" class="w-full text-left px-2 py-2 rounded hover:bg-white" :class="activeSection === section.id && activeSubView === 'price' ? 'bg-white font-medium' : ''">Price Configuration</button>
              <button v-if="section.id !== 'residential'" @click="openDiscount(section.id)" class="w-full text-left px-2 py-2 rounded hover:bg-white" :class="activeSection === section.id && activeSubView === 'discount' ? 'bg-white font-medium' : ''">Discount configuration</button>
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
            <button class="w-full text-left px-4 py-2 text-sm hover:bg-gray-50" @click="openSubAccounts">Sub-accounts</button>
          </div>
        </div>
        <!-- Filters -->
        <div v-if="activeSubView === 'packages'" class="mb-6">
          <FiltersCard>
            <div class="grid grid-cols-12 gap-4 items-center">
              <div class="col-span-12 sm:col-span-3">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Package Name</label>
                <input v-model="filters.packageName" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="" />
              </div>
              <div class="col-span-12 sm:col-span-3">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Country</label>
                <select v-model="filters.country" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
              <div class="col-span-12 sm:col-span-3">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Days</label>
                <select v-model="filters.days" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option value="30">30 days</option>
                  <option value="15">15 days</option>
                </select>
              </div>
              <div class="col-span-12 sm:col-span-3 flex items-end justify-end">
                <button class="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-sm transition">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  Search
                </button>
              </div>
            </div>
          </FiltersCard>
        </div>

        <!-- Static Datacenter - Price Configuration View -->
        <section v-if="activeSection === 'static-datacenter' && activeSubView === 'price'">
          <FiltersCard class="mb-4">
            <div class="grid grid-cols-12 gap-4 items-center">
              <div class="col-span-12 sm:col-span-2">
                <label class="block text-xs font-semibold text-gray-500 mb-1">ID</label>
                <input v-model="sdPriceFilters.id" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div class="col-span-12 sm:col-span-4">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Country</label>
                <select v-model="sdPriceFilters.country" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">All</option>
                  <option v-for="c in countryList" :key="c">{{ c }}</option>
                </select>
              </div>
              <div class="col-span-12 sm:col-span-3">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Protocol</label>
                <select v-model="sdPriceFilters.protocol" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="Http">Http</option>
                  <option value="Https">Https</option>
                  <option value="Socks5">Socks5</option>
                </select>
              </div>
              <div class="col-span-12 sm:col-span-2">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Broadband</label>
                <select v-model="sdPriceFilters.bandwidth" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">All</option>
                  <option>5M</option>
                  <option>10M</option>
                  <option>20M</option>
                </select>
              </div>
              <div class="col-span-12 sm:col-span-1 flex items-end justify-end">
                <button @click="applySdPriceFilter" class="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg">search</button>
              </div>
            </div>
          </FiltersCard>

          <div class="flex flex-wrap gap-3 mb-4">
            <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg" @click="bulkGoLiveSdPrice">Go Live</button>
            <button class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg" @click="bulkOfflineSdPrice">Offline</button>
            <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg" @click="bulkDeleteSdPrice">delete</button>
            <button class="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg" @click="openSdPriceEdit()">Add</button>
          </div>

          <DataTable>
            <template #head>
              <th class="p-3 w-24 text-left">
                <label class="inline-flex items-center space-x-2">
                  <input type="checkbox" :checked="sdPriceAllSelected" @change="toggleSelectAllSdPrice($event)" />
                  <span>Select All</span>
                </label>
              </th>
              <th class="p-3 w-20 text-left">ID</th>
              <th class="p-3 text-left">country</th>
              <th class="p-3 w-40 text-left">Price (RMB/item/month)</th>
              <th class="p-3 w-48 text-left">Support Agreement</th>
              <th class="p-3 w-60 text-left">Authentication</th>
              <th class="p-3 w-24 text-left">broadband</th>
              <th class="p-3 w-40 text-left">operate</th>
            </template>
            <tr v-for="row in sdPriceRowsFiltered" :key="row.id" class="hover:bg-gray-50">
              <td class="p-3"><input type="checkbox" :checked="sdPriceSelected.has(row.id)" @change="toggleSelectSdPrice(row.id, $event)" /></td>
              <td class="p-3">{{ row.id }}</td>
              <td class="p-3">{{ row.country }}</td>
              <td class="p-3">{{ row.price }}</td>
              <td class="p-3">{{ row.protocols }}</td>
              <td class="p-3">{{ row.auth }}</td>
              <td class="p-3">{{ row.bandwidth }}</td>
              <td class="p-3">
                <button @click="openOnline(row)" class="text-green-600 hover:underline">Online</button>
                <button @click="openSdPriceEdit(row)" class="ml-2 text-sky-600 hover:underline">Edit</button>
                <button @click="deleteSdPrice(row.id)" class="ml-2 text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </DataTable>
        </section>

        <!-- Static Datacenter - Discount Configuration View -->
        <section v-if="activeSection === 'static-datacenter' && activeSubView === 'discount'">
          <FiltersCard class="mb-4">
            <div class="grid grid-cols-12 gap-4 items-center">
              <div class="col-span-12 sm:col-span-3">
                <label class="block text-xs font-semibold text-gray-500 mb-1">ID</label>
                <input v-model="sdDiscountFilters.id" type="text" class="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div class="col-span-12 sm:col-span-3">
                <label class="block text-xs font-semibold text-gray-500 mb-1">Days</label>
                <select v-model="sdDiscountFilters.days" class="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="">All</option>
                  <option>15天</option>
                  <option>30天</option>
                </select>
              </div>
              <div class="col-span-12 sm:col-span-6 flex items-end justify-end">
                <button class="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg">search</button>
              </div>
            </div>
          </FiltersCard>

          <div class="flex flex-wrap gap-3 mb-4">
            <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg" @click="bulkGoLiveSdDiscount">Go Live</button>
            <button class="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg" @click="bulkOfflineSdDiscount">Offline</button>
            <button class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg" @click="bulkDeleteSdDiscount">delete</button>
            <button class="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg" @click="openSdDiscountEdit()">Add</button>
          </div>

          <DataTable>
            <template #head>
              <th class="p-3 w-24 text-left">
                <label class="inline-flex items-center space-x-2">
                  <input type="checkbox" :checked="sdDiscountAllSelected" @change="toggleSelectAllSdDiscount($event)" />
                  <span>Select All</span>
                </label>
              </th>
              <th class="p-3 w-20 text-left">ID</th>
              <th class="p-3 text-left">country</th>
              <th class="p-3 w-24 text-left">Days</th>
              <th class="p-3 w-32 text-left">Discount</th>
              <th class="p-3 w-40 text-left">operate</th>
            </template>
            <tr v-for="row in sdDiscountRows" :key="row.id" class="hover:bg-gray-50">
              <td class="p-3"><input type="checkbox" :checked="sdDiscountSelected.has(row.id)" @change="toggleSelectSdDiscount(row.id, $event)" /></td>
              <td class="p-3">{{ row.id }}</td>
              <td class="p-3">{{ row.country }}</td>
              <td class="p-3">{{ row.days }}</td>
              <td class="p-3">{{ row.discount }}</td>
              <td class="p-3">
                <button @click="openOnline(row)" class="text-green-600 hover:underline">Online</button>
                <button @click="openSdDiscountEdit(row)" class="ml-2 text-sky-600 hover:underline">Edit</button>
                <button @click="deleteSdDiscount(row.id)" class="ml-2 text-red-600 hover:underline">Delete</button>
              </td>
            </tr>
          </DataTable>
        </section>

        <PriceModal v-model="showSdPriceEditModal" :value="sdPriceEditForm" :country-list="countryList" :bandwidth-options="BANDWIDTH_OPTIONS" @save="saveSdPriceEdit" />
        <DiscountModal v-model="showSdDiscountEditModal" :value="sdDiscountEditForm" :country-list="countryList" :day-options="dayOptions" @save="saveSdDiscountEdit" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import FiltersCard from '~/components/ui/FiltersCard.vue'
import DataTable from '~/components/ui/DataTable.vue'
import PriceModal from '~/components/ui/PriceModal.vue'
import DiscountModal from '~/components/ui/DiscountModal.vue'
const { useStaticResidentialApi } = await import('~/composables/useStaticResidentialApi')
const { useStaticDatacenterApi } = await import('~/composables/useStaticDatacenterApi')
const { COUNTRY_LIST, DAY_OPTIONS, FLOW_OPTIONS, BANDWIDTH_OPTIONS, PROTOCOL_OPTIONS, AUTH_OPTIONS } = await import('~/composables/constants')
const srApi = useStaticResidentialApi()
const sdApi = useStaticDatacenterApi()
const route = useRoute()
const router = useRouter()

const { $fetch } = useNuxtApp()

definePageMeta({ middleware: 'auth' })

const activeSection = ref('residential')
const activeSubView = ref('packages')

const sections = reactive([
  { id: 'residential', title: 'Residential Proxies', open: true },
  { id: 'static-residential', title: 'Static Residential Proxies', open: true },
  { id: 'static-datacenter', title: 'Static Datacenter Proxies', open: true },
])

const filters = reactive({ packageName: '', country: 'us', days: '30' })

const userMenuOpen = ref(false)
const showChangePass = ref(false)
const cp = reactive({ oldPass: '', newPass: '', confirm: '' })
const cpErrors = reactive({ old: '', new: '', confirm: '' })
const showSubAccounts = ref(false)
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
const newSub = reactive({ developerId: '', trafficLeft: '', remark: '', dcProxies: 0, ispProxies: 0, addTime: '' })

const handleGlobalClick = (e) => {
  const target = e.target
  // close if click outside simple heuristic: if not inside button or menu
  if (!(target.closest && (target.closest('.relative') || target.closest('.z-10')))) {
    userMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', handleGlobalClick)
  // hydrate from route
  if (route.query.section) activeSection.value = String(route.query.section)
  if (route.query.view) activeSubView.value = String(route.query.view)
  if (route.query.page) currentPage.value = Number(route.query.page)
  if (route.query.size) pageSize.value = Number(route.query.size)
  if (route.query.sd_country) sdPriceFilters.country = String(route.query.sd_country)
  if (route.query.sd_id) sdPriceFilters.id = String(route.query.sd_id)
  // hydrate static residential lists
  loadStaticResidential()
  // hydrate static datacenter lists
  loadStaticDatacenter()
})

onBeforeUnmount(() => {
  window.removeEventListener('click', handleGlobalClick)
})

// Demo table data and pagination
const rows = ref([
  { id: 14, country: 'The United States, the United Kingdom...', flow: '80 GB', days: '30天', port: 100, originalPrice: 600, currentPrice: 400 },
  { id: 15, country: 'United States', flow: '40 GB', days: '30天', port: 80, originalPrice: 500, currentPrice: 350 },
  { id: 16, country: 'Japan', flow: '60 GB', days: '15天', port: 50, originalPrice: 450, currentPrice: 300 },
  { id: 17, country: 'Korea', flow: '20 GB', days: '15天', port: 20, originalPrice: 200, currentPrice: 150 },
  { id: 18, country: 'Germany', flow: '120 GB', days: '30天', port: 150, originalPrice: 800, currentPrice: 600 },
  { id: 19, country: 'France', flow: '90 GB', days: '30天', port: 120, originalPrice: 700, currentPrice: 500 },
  { id: 20, country: 'UK', flow: '110 GB', days: '30天', port: 140, originalPrice: 750, currentPrice: 520 },
  { id: 21, country: 'Canada', flow: '50 GB', days: '15天', port: 60, originalPrice: 420, currentPrice: 300 },
  { id: 22, country: 'Italy', flow: '70 GB', days: '30天', port: 90, originalPrice: 480, currentPrice: 360 },
  { id: 23, country: 'Spain', flow: '30 GB', days: '15天', port: 40, originalPrice: 260, currentPrice: 200 },
  { id: 24, country: 'Australia', flow: '85 GB', days: '30天', port: 110, originalPrice: 630, currentPrice: 470 },
])

const pageSize = ref(10)
const currentPage = ref(1)

const totalPages = computed(() => Math.max(1, Math.ceil(rows.value.length / pageSize.value)))
const startItem = computed(() => (currentPage.value - 1) * pageSize.value)
const endItem = computed(() => Math.min(rows.value.length, startItem.value + pageSize.value))
const pagedRows = computed(() => rows.value.slice(startItem.value, endItem.value))
const pageNumbers = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1))

const goPrev = () => { if (currentPage.value > 1) currentPage.value-- }
const goNext = () => { if (currentPage.value < totalPages.value) currentPage.value++ }
const goPage = (p) => { currentPage.value = p }

// Modal state & handlers (generic)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const showCountryModal = ref(false)

const editForm = reactive({ id: null, nameEn: '', nameCn: '', country: 'United States', flow: '1GB', days: '30天', port: 100, originalPrice: 0, currentPrice: 0 })
const flowOptions = FLOW_OPTIONS
const dayOptions = DAY_OPTIONS
const countryList = COUNTRY_LIST

const openEdit = (row) => {
  if (row) {
    Object.assign(editForm, {
      id: row.id,
      nameEn: row.nameEn || '',
      nameCn: row.nameCn || '',
      country: row.country,
      flow: row.flow,
      days: row.days,
      port: row.port,
      originalPrice: row.originalPrice,
      currentPrice: row.currentPrice,
    })
  }
  showEditModal.value = true
}
const closeEdit = () => { showEditModal.value = false }
const saveEdit = () => { /* TODO: call API */ showEditModal.value = false }

const openDelete = (row) => { editForm.id = row?.id || null; showDeleteModal.value = true }
const closeDelete = () => { showDeleteModal.value = false }
const confirmDelete = () => { /* TODO: call API */ showDeleteModal.value = false }

const openOnline = (row) => { /* placeholder for online action */ }

const openChangePassword = () => { showChangePass.value = true }
const closeChangePassword = () => { showChangePass.value = false; cp.oldPass = cp.newPass = cp.confirm = ''; cpErrors.old = cpErrors.new = cpErrors.confirm = '' }
const openSubAccounts = () => { userMenuOpen.value = false; navigateTo('/system/sub-accounts') }
const closeSubAccounts = () => { showSubAccounts.value = false }
const openAddSub = () => { showAddSub.value = true }
const closeAddSub = () => { showAddSub.value = false; newSub.developerId = newSub.trafficLeft = newSub.remark = ''; newSub.dcProxies = 0; newSub.ispProxies = 0 }
const confirmAddSub = () => {
  const id = Date.now()
  subAccounts.value.push({ id, developerId: newSub.developerId, trafficLeft: newSub.trafficLeft || '0', dcProxies: newSub.dcProxies, ispProxies: newSub.ispProxies, addTime: new Date().toISOString().slice(0,16).replace('T',' '), status: 'approved', remark: newSub.remark })
  closeAddSub()
}
const deleteSub = (id) => { subAccounts.value = subAccounts.value.filter(s => s.id !== id) }
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

// Country picker (English)
const regions = [
  { name: 'North America', countries: ['United States', 'Canada'] },
  { name: 'Asia', countries: ['Japan', 'South Korea'] },
  { name: 'Europe', countries: ['Germany', 'France', 'Italy', 'Spain', 'United Kingdom'] },
  { name: 'South America', countries: ['Brazil', 'Chile'] },
  { name: 'Africa', countries: ['South Africa', 'Egypt'] },
]
const activeRegion = ref('North America')
const selectedCountries = ref([])
const countryFilter = ref('')
const filteredCountries = computed(() => {
  const region = regions.find(r => r.name === activeRegion.value)
  const list = region ? region.countries : []
  if (!countryFilter.value) return list
  const q = countryFilter.value.toLowerCase()
  return list.filter(c => c.toLowerCase().includes(q))
})
const openCountries = () => { showCountryModal.value = true }
const closeCountries = () => { showCountryModal.value = false }
const applyCountries = () => { /* map selection to editForm.country or separate field */ showCountryModal.value = false }

// Handlers to switch views from sidebar
const openPrice = (sectionId) => { activeSection.value = sectionId; activeSubView.value = 'price' }
const openPackages = (sectionId) => { activeSection.value = sectionId; activeSubView.value = 'packages' }
const openDiscount = (sectionId) => { activeSection.value = sectionId; activeSubView.value = 'discount' }

// Static Residential Price dataset and filters
const srPriceRows = ref([])
const srPriceFilters = reactive({ id: '', country: '', protocol: '', bandwidth: '' })
const srPriceRowsFiltered = computed(() => {
  return srPriceRows.value.filter(r => {
    if (srPriceFilters.id && String(r.id) !== String(srPriceFilters.id)) return false
    if (srPriceFilters.country && r.country.indexOf(srPriceFilters.country) === -1) return false
    if (srPriceFilters.protocol && (!r.protocols || r.protocols.toLowerCase().indexOf(srPriceFilters.protocol.toLowerCase()) === -1)) return false
    if (srPriceFilters.bandwidth && r.bandwidth !== srPriceFilters.bandwidth) return false
    return true
  })
})
const applySrPriceFilter = () => {/* reactive computed already filters */}

// Static Residential Discount dataset (demo)
const srDiscountRows = ref([])
const srDiscountFilters = reactive({ id: '', days: '' })

const showSrDiscountEditModal = ref(false)
const srDiscountEditForm = reactive({ id: null, country: 'United States', days: '30天', discount: '' })
const openSrDiscountEdit = (row) => {
  if (row) {
    srDiscountEditForm.id = row.id
    srDiscountEditForm.country = typeof row.country === 'string' ? row.country : 'United States'
    srDiscountEditForm.days = row.days
    srDiscountEditForm.discount = row.discount
  } else {
    srDiscountEditForm.id = null
    srDiscountEditForm.country = 'United States'
    srDiscountEditForm.days = '30天'
    srDiscountEditForm.discount = ''
  }
  showSrDiscountEditModal.value = true
}
const closeSrDiscountEdit = () => { showSrDiscountEditModal.value = false }
const saveSrDiscountEdit = async () => { try { await srApi.upsertDiscount({ ...srDiscountEditForm }) } catch (e) {} showSrDiscountEditModal.value = false; loadStaticResidential() }

// Initial load for Static Residential datasets
const loadStaticResidential = async () => {
  try {
    const [prices, discounts] = await Promise.all([
      srApi.listPrices().catch(() => []),
      srApi.listDiscounts().catch(() => []),
    ])
    if (Array.isArray(prices)) srPriceRows.value = prices
    if (Array.isArray(discounts)) srDiscountRows.value = discounts
  } catch (e) {
    console.error('Failed to load static residential data', e)
  }
}

// Static Datacenter datasets and filters
const sdPriceRows = ref([])
const sdPriceFilters = reactive({ id: '', country: '', protocol: '', bandwidth: '' })
const sdPriceRowsFiltered = computed(() => {
  return sdPriceRows.value.filter(r => {
    if (sdPriceFilters.id && String(r.id) !== String(sdPriceFilters.id)) return false
    if (sdPriceFilters.country && r.country.indexOf(sdPriceFilters.country) === -1) return false
    if (sdPriceFilters.protocol && (!r.protocols || r.protocols.toLowerCase().indexOf(sdPriceFilters.protocol.toLowerCase()) === -1)) return false
    if (sdPriceFilters.bandwidth && r.bandwidth !== sdPriceFilters.bandwidth) return false
    return true
  })
})
const applySdPriceFilter = () => {/* computed handles */}

// Selection and bulk actions for SD price
const sdPriceSelected = ref(new Set())
const sdPriceAllSelected = computed(() => sdPriceRowsFiltered.value.length > 0 && sdPriceRowsFiltered.value.every(r => sdPriceSelected.value.has(r.id)))
const toggleSelectSdPrice = (id, e) => { const s = sdPriceSelected.value; e.target.checked ? s.add(id) : s.delete(id); sdPriceSelected.value = new Set(s) }
const toggleSelectAllSdPrice = (e) => { const s = new Set(); if (e.target.checked) sdPriceRowsFiltered.value.forEach(r => s.add(r.id)); sdPriceSelected.value = s }
const bulkGoLiveSdPrice = () => { if (sdPriceSelected.value.size === 0) return; if (confirm('Confirm go live selected items?')) {/* optional status update */} }
const bulkOfflineSdPrice = () => { if (sdPriceSelected.value.size === 0) return; if (confirm('Confirm offline selected items?')) {/* optional status update */} }
const bulkDeleteSdPrice = async () => { if (sdPriceSelected.value.size === 0) return; if (!confirm('Delete selected items?')) return; for (const id of sdPriceSelected.value) { try { await sdApi.deletePrice(id) } catch (e) {} } await loadStaticDatacenter(); sdPriceSelected.value = new Set() }

// SD price edit modal
const showSdPriceEditModal = ref(false)
const sdPriceEditForm = reactive({ id: null, country: 'United States', price: 0, protocols: 'Http/Https/Socks5', auth: 'Account and password mode', bandwidth: '10M' })
const openSdPriceEdit = (row) => {
  if (row) {
    sdPriceEditForm.id = row.id
    sdPriceEditForm.country = row.country
    sdPriceEditForm.price = row.price
    sdPriceEditForm.protocols = row.protocols
    sdPriceEditForm.auth = row.auth
    sdPriceEditForm.bandwidth = row.bandwidth
  } else {
    sdPriceEditForm.id = null
    sdPriceEditForm.country = 'United States'
    sdPriceEditForm.price = 0
    sdPriceEditForm.protocols = 'Http/Https/Socks5'
    sdPriceEditForm.auth = 'Account and password mode'
    sdPriceEditForm.bandwidth = '10M'
  }
  showSdPriceEditModal.value = true
}
const closeSdPriceEdit = () => { showSdPriceEditModal.value = false }
const saveSdPriceEdit = async () => { try { await sdApi.upsertPrice({ ...sdPriceEditForm }) } catch (e) {} showSdPriceEditModal.value = false; await loadStaticDatacenter() }
const deleteSdPrice = async (id) => { if (!confirm('Delete this item?')) return; try { await sdApi.deletePrice(id) } catch (e) {} await loadStaticDatacenter() }

// SD Discount
const sdDiscountRows = ref([])
const sdDiscountFilters = reactive({ id: '', days: '' })
const showSdDiscountEditModal = ref(false)
const sdDiscountEditForm = reactive({ id: null, country: 'United States', days: '30天', discount: '' })
const openSdDiscountEdit = (row) => {
  if (row) {
    sdDiscountEditForm.id = row.id
    sdDiscountEditForm.country = typeof row.country === 'string' ? row.country : 'United States'
    sdDiscountEditForm.days = row.days
    sdDiscountEditForm.discount = row.discount
  } else {
    sdDiscountEditForm.id = null
    sdDiscountEditForm.country = 'United States'
    sdDiscountEditForm.days = '30天'
    sdDiscountEditForm.discount = ''
  }
  showSdDiscountEditModal.value = true
}
const closeSdDiscountEdit = () => { showSdDiscountEditModal.value = false }
const saveSdDiscountEdit = async () => { try { await sdApi.upsertDiscount({ ...sdDiscountEditForm }) } catch (e) {} showSdDiscountEditModal.value = false; await loadStaticDatacenter() }
const deleteSdDiscount = async (id) => { if (!confirm('Delete this discount?')) return; try { await sdApi.deleteDiscount(id) } catch (e) {} await loadStaticDatacenter() }

// Selection and bulk actions for SD discount
const sdDiscountSelected = ref(new Set())
const sdDiscountAllSelected = computed(() => sdDiscountRows.value.length > 0 && sdDiscountRows.value.every(r => sdDiscountSelected.value.has(r.id)))
const toggleSelectSdDiscount = (id, e) => { const s = sdDiscountSelected.value; e.target.checked ? s.add(id) : s.delete(id); sdDiscountSelected.value = new Set(s) }
const toggleSelectAllSdDiscount = (e) => { const s = new Set(); if (e.target.checked) sdDiscountRows.value.forEach(r => s.add(r.id)); sdDiscountSelected.value = s }
const bulkGoLiveSdDiscount = () => { if (sdDiscountSelected.value.size === 0) return; if (confirm('Confirm go live selected discounts?')) {/* optional status */} }
const bulkOfflineSdDiscount = () => { if (sdDiscountSelected.value.size === 0) return; if (confirm('Confirm offline selected discounts?')) {/* optional status */} }
const bulkDeleteSdDiscount = async () => { if (sdDiscountSelected.value.size === 0) return; if (!confirm('Delete selected discounts?')) return; for (const id of sdDiscountSelected.value) { try { await sdApi.deleteDiscount(id) } catch (e) {} } await loadStaticDatacenter(); sdDiscountSelected.value = new Set() }

// Sync key state to route query (after deps are defined)
watch([activeSection, activeSubView, () => currentPage.value, () => pageSize.value, () => sdPriceFilters.country, () => sdPriceFilters.id], () => {
  const q = {
    section: activeSection.value,
    view: activeSubView.value,
    page: String(currentPage.value),
    size: String(pageSize.value),
    sd_country: sdPriceFilters.country || undefined,
    sd_id: sdPriceFilters.id || undefined,
  }
  router.replace({ query: { ...route.query, ...q } })
})

// Initial load for Static Datacenter datasets
const loadStaticDatacenter = async () => {
  try {
    const [prices, discounts] = await Promise.all([
      sdApi.listPrices().catch(() => []),
      sdApi.listDiscounts().catch(() => []),
    ])
    if (Array.isArray(prices)) sdPriceRows.value = prices
    if (Array.isArray(discounts)) sdDiscountRows.value = discounts
  } catch (e) {
    console.error('Failed to load static datacenter data', e)
  }
}

// Residential Price dataset and filters (from API)
const resPriceRows = ref([])
const resPriceFilters = reactive({ id: '', country: '', protocol: '', bandwidth: '' })
const resPriceRowsFiltered = computed(() => {
  return resPriceRows.value.filter(r => {
    if (resPriceFilters.id && String(r.id) !== String(resPriceFilters.id)) return false
    if (resPriceFilters.country && String(r.country).indexOf(resPriceFilters.country) === -1) return false
    if (resPriceFilters.protocol && (!r.protocols || String(r.protocols).toLowerCase().indexOf(resPriceFilters.protocol.toLowerCase()) === -1)) return false
    if (resPriceFilters.bandwidth && r.bandwidth !== resPriceFilters.bandwidth) return false
    return true
  })
})

const loadResidentialPriceConfig = async () => {
  try {
    const config = useRuntimeConfig()
    const baseUrl = config?.public?.apiBaseUrl || ''
    const data = await $fetch(`${baseUrl}/v1/proxy/packages/type/DYNAMIC_RESIDENTIAL/detail`, { method: 'GET' })
    // Expecting an array; map to table schema if needed
    resPriceRows.value = Array.isArray(data) ? data : (data?.items || [])
  } catch (e) {
    console.error('Failed to load residential price config', e)
    resPriceRows.value = []
  }
}

// Re-load when switching to Residential Price view
watch([() => activeSection.value, () => activeSubView.value], () => {
  if (activeSection.value === 'residential' && activeSubView.value === 'price') {
    loadResidentialPriceConfig()
  }
})

// initial hydrate
onMounted(() => {
  if (activeSection.value === 'residential' && activeSubView.value === 'price') {
    loadResidentialPriceConfig()
  }
})

useHead({ title: 'System Management' })
</script>

<style scoped>
</style>


