<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded mr-3"></div>
            <span class="text-xl font-bold gradient-text">DYNAVERA</span>
          </div>

          <!-- User Menu -->
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">
                  {{ user?.name?.charAt(0) || 'U' }}
                </span>
              </div>
              <span class="text-sm text-gray-700">{{ user?.name || 'User' }}</span>
            </div>
            <button 
              @click="logout" 
              class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-2xl font-bold text-gray-900 mb-4">Welcome to Dashboard</h1>
            <p class="text-gray-600 mb-4">You are successfully authenticated!</p>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4 max-w-md mx-auto">
              <h3 class="text-sm font-medium text-green-800 mb-2">User Information:</h3>
              <div class="text-sm text-green-700 space-y-1">
                <p><strong>Name:</strong> {{ user?.name || 'N/A' }}</p>
                <p><strong>Email:</strong> {{ user?.email || 'N/A' }}</p>
                <p><strong>ID:</strong> {{ user?.id || 'N/A' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'auth'
})

// Import useAuth composable
const { useAuth } = await import('~/composables/useAuth')
const { user, logout } = useAuth()
</script>

<style scoped>
/* Clean dashboard styles */
</style>
