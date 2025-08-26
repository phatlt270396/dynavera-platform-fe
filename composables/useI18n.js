import { ref, computed, readonly } from 'vue'

// Available languages
const availableLocales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
]

// Default locale
const defaultLocale = 'en'

// Current locale state
const currentLocale = ref(defaultLocale)

// Import all locale files
const locales = {
  en: () => import('~/locales/en.json'),
  zh: () => import('~/locales/zh.json')
}

// Current translations
const translations = ref({})

// Load translations for current locale
const loadTranslations = async (locale) => {
  try {
    const module = await locales[locale]()
    translations.value = module.default || module
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error)
    // Fallback to English
    if (locale !== 'en') {
      await loadTranslations('en')
    }
  }
}

// Initialize translations
const initTranslations = async () => {
  // Get locale from localStorage or default
  const savedLocale = process.client ? localStorage.getItem('locale') : null
  const locale = savedLocale || defaultLocale
  
  // Set current locale
  currentLocale.value = locale
  
  // Load translations
  await loadTranslations(locale)
}

// Switch locale
const switchLocale = async (locale) => {
  if (!availableLocales.find(l => l.code === locale)) {
    console.error(`Locale ${locale} is not supported`)
    return
  }
  
  currentLocale.value = locale
  
  // Save to localStorage
  if (process.client) {
    localStorage.setItem('locale', locale)
  }
  
  // Load new translations
  await loadTranslations(locale)
  
  // Update document language
  if (process.client) {
    document.documentElement.lang = locale
  }
}

// Translation function
const t = (key, params = {}) => {
  const keys = key.split('.')
  let value = translations.value
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
  }
  
  if (typeof value !== 'string') {
    console.warn(`Translation value is not a string: ${key}`)
    return key
  }
  
  // Replace parameters
  return value.replace(/\{(\w+)\}/g, (match, param) => {
    return params[param] || match
  })
}

// Computed properties
const currentLanguage = computed(() => {
  return availableLocales.find(l => l.code === currentLocale.value)
})

const isRTL = computed(() => {
  // Add RTL languages here if needed
  return false
})

// Export composable
export const useI18n = () => {
  return {
    // State
    currentLocale: readonly(currentLocale),
    translations: readonly(translations),
    
    // Computed
    currentLanguage,
    isRTL,
    availableLocales,
    
    // Methods
    t,
    switchLocale,
    initTranslations,
    loadTranslations
  }
}

// Auto-initialize on client side
if (process.client) {
  initTranslations()
}
