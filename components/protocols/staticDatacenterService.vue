<template>
    <div class="mx-auto px-4 py-12">
  <!-- Title -->
  <h2 class="text-2xl md:text-3xl font-bold text-center mb-4">{{ t('protocolDetails.staticDatacenter.whatIs.title') }}</h2>
  <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">{{ t('protocolDetails.staticDatacenter.whatIs.body') }}</p>

  <!-- Cards -->
  <div class="grid gap-6 md:grid-cols-2">
    <!-- Card 1 -->
    <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
      <div class="flex items-center gap-4 flex-col">
        <span class="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-2xl">
          🔗
        </span>
        <div class="text-center">
          <h3 class="font-semibold text-lg mb-1">{{ t('protocolDetails.staticDatacenter.shared.title') }}</h3>
          <p class="text-gray-600 text-sm">{{ t('protocolDetails.staticDatacenter.shared.desc') }}</p>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
      <div class="flex items-center gap-4 flex-col">
        <span class="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 text-2xl">
          ⚙️
        </span>
        <div class="text-center">
          <h3 class="font-semibold text-lg mb-1">{{ t('protocolDetails.staticDatacenter.dedicated.title') }}</h3>
          <p class="text-gray-600 text-sm">{{ t('protocolDetails.staticDatacenter.dedicated.desc') }}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
const { useI18n } = await import('~/composables/useI18n')
const { t } = useI18n()
</script>