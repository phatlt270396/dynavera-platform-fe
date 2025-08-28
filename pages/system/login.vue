<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-sm bg-white/5 rounded-xl p-8 border border-white/10">
      <div class="text-center mb-8">
        <img src="/assets/images/dynavera/dynavera-logo-transparent.png" alt="DYNAVERA" class="h-12 w-auto mx-auto mb-3" />
        <h1 class="text-white text-2xl font-semibold">System Login</h1>
        <p class="text-gray-300 text-sm mt-1">Administrator access</p>
      </div>

      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="block text-gray-300 text-sm mb-1">Username</label>
          <input v-model="username" type="text" class="w-full rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 caret-green-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Username" required />
        </div>
        <div>
          <label class="block text-gray-300 text-sm mb-1">Password</label>
          <input v-model="password" type="password" class="w-full rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 caret-green-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Password" required />
        </div>
        <p v-if="error" class="text-red-300 text-sm">{{ error }}</p>
        <div class="pt-2">
          <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

definePageMeta({ middleware: 'auth' })

const username = ref('')
const password = ref('')
const error = ref('')

const submit = async () => {
  error.value = ''
  if (!username.value || !password.value) return
  // Hard-coded credentials
  const VALID_USER = 'admin'
  const VALID_PASS = '123456'
  if (username.value === VALID_USER && password.value === VALID_PASS) {
    localStorage.setItem('systemAuthed', 'true')
    // Store current system password for client-side validation (demo only)
    localStorage.setItem('systemPass', VALID_PASS)
    await navigateTo('/system')
  } else {
    error.value = 'Invalid credentials'
  }
}

onMounted(() => {
  if (localStorage.getItem('systemAuthed') === 'true') {
    navigateTo('/system')
  }
})
</script>


