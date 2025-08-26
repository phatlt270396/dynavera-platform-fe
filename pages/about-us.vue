<script setup lang="ts">
import FooterBar from '~/components/footerBar.vue';
import TopBar from '~/components/topBar.vue';

// Initialize i18n
const { useI18n } = await import('~/composables/useI18n')
const { t, initTranslations } = useI18n()

// Initialize i18n on mount
onMounted(async () => {
  await initTranslations()
})
</script>

<template>
  <div class="h-screen">
      <TopBar/>
      <section class="relative w-full h-[560px] bg-gray-200 flex items-center justify-center text-center px-4 m-auto">
        <!-- Background Image -->
        <img src="/assets/images/aboutus.jpg" alt="Background"
            class="absolute inset-0 w-full h-full object-cover">

        <div class="relative z-10 text-white">
          <h2 class="text-2xl md:text-4xl font-bold font- mb-4">{{ t('aboutUs.title') }}</h2>
          <h1 class="text-2xl md:text-4xl font-bold">
            {{ t('aboutUs.subtitle') }}
          </h1>
        </div>
      </section>

      <!-- Content Section -->
      <section class="max-w-7xl mx-auto px-6 py-12 text-center md:text-left">
          <p class="mb-6">
            {{ t('aboutUs.description1') }}
          </p>

          <p class="mb-6">
            {{ t('aboutUs.description2') }}
          </p>

          <p class="font-medium">
            {{ t('aboutUs.address') }}
          </p>
      </section>
  
     <FooterBar/>
  </div>
</template>