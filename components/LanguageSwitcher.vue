<template>
  <div class="relative">
    <!-- Language Button -->
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
    >
      <span class="text-lg">{{ currentLanguage?.flag }}</span>
      <span class="hidden sm:inline">{{ currentLanguage?.name }}</span>
      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': showDropdown }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-show="showDropdown"
      class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
    >
      <div class="py-1">
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="selectLanguage(locale.code)"
          class="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          :class="{ 'bg-green-50 text-green-700': locale.code === currentLocale }"
        >
          <span class="text-lg">{{ locale.flag }}</span>
          <span>{{ locale.name }}</span>
          <svg
            v-if="locale.code === currentLocale"
            class="w-4 h-4 ml-auto text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { useI18n } = await import('~/composables/useI18n')
const { currentLocale, currentLanguage, availableLocales, switchLocale } = useI18n()

// Dropdown state
const showDropdown = ref(false)

// Toggle dropdown
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

// Select language
const selectLanguage = async (localeCode) => {
  await switchLocale(localeCode)
  showDropdown.value = false
}

// Close dropdown when clicking outside
const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    showDropdown.value = false
  }
}

// Add click outside listener
onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
/* Custom styles for language switcher */
.language-switcher-enter-active,
.language-switcher-leave-active {
  transition: all 0.2s ease;
}

.language-switcher-enter-from,
.language-switcher-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
