<template>
    <div class="mx-auto px-4 py-12">
  <!-- Title -->
  <h2 class="text-2xl md:text-3xl font-bold text-center mb-4">{{ t('protocolDetails.staticResidential.whatIs.title') }}</h2>
  <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">{{ t('protocolDetails.staticResidential.whatIs.body') }}</p>

  <!-- Cards -->
  <div class="grid gap-6 md:grid-cols-3">
    <!-- Card 1 -->
    <div class="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
      <div class="flex justify-center mb-4">
        <span class="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
          ✏️
        </span>
      </div>
      <h3 class="font-semibold text-lg mb-2">{{ t('protocolDetails.staticResidential.features.asn.title') }}</h3>
      <p class="text-gray-600 text-sm">{{ t('protocolDetails.staticResidential.features.asn.desc') }}</p>
    </div>

    <!-- Card 2 -->
    <div class="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
      <div class="flex justify-center mb-4">
        <span class="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
          ⏱️
        </span>
      </div>
      <h3 class="font-semibold text-lg mb-2">{{ t('protocolDetails.staticResidential.features.uptime.title') }}</h3>
      <p class="text-gray-600 text-sm">{{ t('protocolDetails.staticResidential.features.uptime.desc') }}</p>
    </div>

    <!-- Card 3 -->
    <div class="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
      <div class="flex justify-center mb-4">
        <span class="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
          📌
        </span>
      </div>
      <h3 class="font-semibold text-lg mb-2">{{ t('protocolDetails.staticResidential.features.speed.title') }}</h3>
      <p class="text-gray-600 text-sm">{{ t('protocolDetails.staticResidential.features.speed.desc') }}</p>
    </div>
  </div>
</div>
</template>
<script setup>
const { useI18n } = await import('~/composables/useI18n')
const { t } = useI18n()
</script>