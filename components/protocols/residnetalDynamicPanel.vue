<template>
    <section class="py-8 col-span-3">
                    <div class="mx-auto grid md:grid-cols-3 gap-8">
                    
                    <!-- Premium Package -->
                        <div v-for="pkg in packages" class="border rounded-xl shadow-sm p-6 flex flex-col justify-between">
                            <div>
                            <h3 class="text-xl font-semibold">{{ pkg.name }}</h3>
                            <p class="text-3xl font-bold mt-2">¥{{ pkg.pricePerGb }}<span class="text-base font-medium">/GB</span></p>
                            <ul class="mt-4 space-y-2 text-gray-600">
                                <li>{{ pkg.includedTrafficGb }}</li>
                                <li>{{ pkg.durationDays }}</li>
                                <li>{{ pkg.ports }}</li>
                            </ul>
                            <p class="mt-4 text-lg font-semibold">¥{{ 51200 }} <span class="text-sm text-gray-500">(Non-Activity Period: ¥{{ pkg.nonActivityPeriod }})</span></p>
                            </div>
                            <button class="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg">
                            Grab it now
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