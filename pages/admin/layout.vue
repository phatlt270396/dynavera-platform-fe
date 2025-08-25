<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Admin Header -->
    <header class="bg-white shadow-sm border-b fixed top-0 left-0 right-0 z-40">
      <div class="flex justify-between items-center h-16 px-4">
        <div class="flex items-center">
          <button @click="toggleSidebar" class="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <h1 class="text-xl font-semibold text-gray-900 ml-2">DYNAVERA Super Admin</h1>
          <span class="ml-3 px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">SUPER ADMIN</span>
        </div>
        <div class="flex items-center space-x-4">
          <span class="text-sm text-gray-600">Welcome, {{ adminUser }}</span>
          <button @click="logout" class="text-sm text-red-600 hover:text-red-800 transition-colors">
            Logout
          </button>
        </div>
      </div>
    </header>

    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0" :class="{ '-translate-x-full': !sidebarOpen }">
      <div class="h-full flex flex-col pt-16">
        <!-- Sidebar Header -->
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-900">Admin Panel</h2>
        </div>

        <!-- Navigation Menu -->
        <nav class="flex-1 px-4 py-6 space-y-2">
          <!-- Dashboard -->
          <NuxtLink 
            to="/admin/dashboard" 
            class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
            :class="route.path === '/admin/dashboard' ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"></path>
            </svg>
            Dashboard
          </NuxtLink>

          <!-- Product Management -->
          <div class="space-y-1">
            <button 
              @click="toggleProductMenu" 
              class="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                </svg>
                Product Management
              </div>
              <svg class="w-4 h-4 transform transition-transform" :class="{ 'rotate-180': productMenuOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div v-if="productMenuOpen" class="ml-6 space-y-1">
              <NuxtLink 
                to="/admin/packages/residential" 
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
                :class="route.path === '/admin/packages/residential' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Residential Proxies
              </NuxtLink>
              
              <NuxtLink 
                to="/admin/packages/static-residential" 
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
                :class="route.path === '/admin/packages/static-residential' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Static Residential
              </NuxtLink>
              
              <NuxtLink 
                to="/admin/packages/static-datacenter" 
                class="flex items-center px-3 py-2 text-sm rounded-lg transition-colors"
                :class="route.path === '/admin/packages/static-datacenter' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Static Datacenter
              </NuxtLink>
            </div>
          </div>

          <!-- System Settings -->
          <NuxtLink 
            to="/admin/settings" 
            class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
            :class="route.path === '/admin/settings' ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            System Settings
          </NuxtLink>

          <!-- User Management -->
          <NuxtLink 
            to="/admin/users" 
            class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
            :class="route.path === '/admin/users' ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
            </svg>
            User Management
          </NuxtLink>

          <!-- Analytics -->
          <NuxtLink 
            to="/admin/analytics" 
            class="flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors"
            :class="route.path === '/admin/analytics' ? 'bg-green-100 text-green-700' : 'text-gray-700 hover:bg-gray-100'"
          >
            <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Analytics
          </NuxtLink>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="lg:pl-64">
      <div class="pt-16">
        <!-- Content Area -->
        <main class="p-6">
          <slot />
        </main>
      </div>
    </div>

    <!-- Mobile Overlay -->
    <div v-if="sidebarOpen" @click="closeSidebar" class="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 lg:hidden"></div>
  </div>
</template>

<script setup>
// Check if user is super admin
const adminUser = ref('')
const isSuperAdmin = ref(false)

// Sidebar state
const sidebarOpen = ref(false)
const productMenuOpen = ref(true)

// Route
const route = useRoute()

// Methods
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const closeSidebar = () => {
  sidebarOpen.value = false
}

const toggleProductMenu = () => {
  productMenuOpen.value = !productMenuOpen.value
}

onMounted(() => {
  // Check super admin authentication
  const superAdminLoggedIn = localStorage.getItem('superAdminLoggedIn')
  const superAdminUser = localStorage.getItem('superAdminUser')
  
  if (superAdminLoggedIn === 'true' && superAdminUser) {
    isSuperAdmin.value = true
    adminUser.value = superAdminUser
  } else {
    // Redirect to system login if not authenticated
    navigateTo('/system')
  }
})

// Logout function
const logout = () => {
  // Clear super admin session
  localStorage.removeItem('superAdminLoggedIn')
  localStorage.removeItem('superAdminUser')
  localStorage.removeItem('superAdminSession')
  
  // Redirect to system login
  navigateTo('/system')
}

// Page meta
definePageMeta({
  title: 'Admin Layout - DYNAVERA',
  description: 'DYNAVERA admin layout with sidebar navigation'
})
</script>
