<template>
    <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-2xl font-bold">{{ t('protocolDetails.dynamicResidential.whatIs.title') }}</h2>
            <p class="mt-4 text-gray-600">{{ t('protocolDetails.dynamicResidential.whatIs.body') }}</p>

            <!-- Features -->
            <div class="mt-10 grid md:grid-cols-3 gap-6">
                <div class="p-6 rounded-xl shadow-md">
                    <div class="text-purple-500 text-3xl mb-3 flex justify-center">
                        <span class="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                            📡
                        </span>
                    </div>
                    <h3 class="font-semibold mb-2">{{ t('protocolDetails.dynamicResidential.features.realIp.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('protocolDetails.dynamicResidential.features.realIp.desc') }}</p>
                </div>

                <div class="p-6 rounded-xl shadow-md">
                    <div class="text-purple-500 text-3xl mb-3 flex justify-center">
                        <span class="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600">🛡️</span>
                    </div>
                    <h3 class="font-semibold mb-2">{{ t('protocolDetails.dynamicResidential.features.unblockable.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('protocolDetails.dynamicResidential.features.unblockable.desc') }}</p>
                </div>

                <div class="p-6 border rounded-xl shadow-md">
                    <div class="text-purple-500 text-3xl mb-3 flex justify-center">
                        <span class="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600">📍</span>
                    </div>
                    <h3 class="font-semibold mb-2">{{ t('protocolDetails.dynamicResidential.features.positioning.title') }}</h3>
                    <p class="text-gray-600 text-sm">{{ t('protocolDetails.dynamicResidential.features.positioning.desc') }}</p>
                </div>
            </div>
            </div>
        </section>
</template>
<script setup>
const { useI18n } = await import('~/composables/useI18n')
const { t } = useI18n()
</script>