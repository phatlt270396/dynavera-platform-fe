<template>
    <section class="py-8 col-span-3">
                    <div class="mx-auto grid md:grid-cols-3 gap-8">
                    
                    <!-- Package Cards -->
                    <div v-for="pkg in packages" :key="pkg.id" class="border rounded-xl shadow-sm p-6 flex flex-col justify-between relative">
                        
                        <div>
                        <h3 class="text-xl font-semibold">{{ pkg.name }}</h3>
                        <p class="text-sm text-gray-500 mb-2">{{ pkg.description }}</p>
                        <p class="text-3xl font-bold mt-2">¥{{ pkg.pricePerGb }}<span class="text-base font-medium">/GB</span></p>
                        <!-- Discount Badge -->
                        <div v-if="pkg.discountPercentage > 0" class="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full mt-2">
                            {{ pkg.discountPercentage }}% OFF
                        </div>
                        <ul class="mt-4 space-y-2 text-gray-600">
                            <li>{{ pkg.includedTrafficGb }}GB traffic</li>
                            <li>{{ pkg.durationDays }} days validity</li>
                            <li>{{ pkg.ports }} ports</li>
                            <li v-if="pkg.features && pkg.features.length > 0" v-for="feature in pkg.features" :key="feature">{{ feature }}</li>
                        </ul>
                        <p class="mt-4 text-lg font-semibold">¥{{ pkg.currentPrice }} <span v-if="pkg.originalPrice !== pkg.currentPrice" class="text-sm text-gray-500 line-through">¥{{ pkg.originalPrice }}</span></p>
                        </div>
                        <button class="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors duration-300">
                            <span v-if="pkg.trialPackage">Try {{ pkg.trialPackage }}</span>
                            <span v-else>Grab it now</span>
                        </button>
                    </div>
                    </div>
                </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  value: any;
}>();
const packages = ref(props.value?.data?.detail.packages || []);
</script>