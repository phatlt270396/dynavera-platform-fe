<template>
    <div class="mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Left: Configuration -->
        <div class="md:col-span-2 bg-white p-6 rounded-xl shadow">
            <!-- Country -->
            <h3 class="font-semibold mb-2">{{ t('protocols.form.countriesInNeed') }} *</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
                <button 
                    v-for="item in countries" 
                    :key="item.code"
                    class="border rounded-lg px-3 py-2 text-sm transition-colors" 
                    :class="selectedCountry === item.code ? 'font-medium border-green-500 bg-green-50 text-green-700' : 'border-gray-300 hover:border-green-300'" 
                    @click="selectedCountry = item.code"
                >
                    {{ item.name }}
                </button>
            </div>

            <!-- Protocol -->
            <h3 class="font-semibold mb-2">{{ t('protocols.form.deliveryAgreement') }} *</h3>
            <div class="flex flex-wrap gap-3 mb-6">
                <button 
                    v-for="protocol in protocols" 
                    :key="protocol.name"
                    class="border rounded-lg px-4 py-2 transition-colors" 
                    :class="selectedProtocol === protocol.name ? 'font-medium border-green-500 bg-green-50 text-green-700' : 'border-gray-300 hover:border-green-300'" 
                    @click="selectedProtocol = protocol.name"
                >
                    {{ protocol.name }}
                </button>
            </div>

            <!-- IP Authorization -->
            <h3 class="font-semibold mb-2">{{ t('protocols.form.ipAuthorizationType') }} *</h3>
            <div class="flex gap-3 mb-6">
                <button 
                    v-for="ip in ipAuthorizationTypes" 
                    :key="ip"
                    class="border rounded-lg px-4 py-2 transition-colors" 
                    :class="selectedIp === ip ? 'font-medium border-green-500 bg-green-50 text-green-700' : 'border-gray-300 hover:border-green-300'" 
                    @click="selectedIp = ip"
                >
                    {{ ip }}
                </button>
            </div>

            <!-- UDP -->
            <h3 class="font-semibold mb-2">{{ t('protocols.form.udp') }}</h3>
            <div class="flex gap-3">
                <button 
                    v-for="udp in udps" 
                    :key="udp"
                    class="border rounded-lg px-4 py-2 transition-colors" 
                    :class="selectedUdp === udp ? 'font-medium border-green-500 bg-green-50 text-green-700' : 'border-gray-300 hover:border-green-300'" 
                    @click="selectedUdp = udp"
                >
                    {{ udp }}
                </button>
            </div>
        </div>

        <!-- Right: Order Summary -->
        <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="font-semibold mb-4">{{ t('protocols.form.viewOrder') }}</h3>

            <p class="text-sm text-gray-700">
                <span class="font-medium">{{ t('protocols.form.countriesInNeed') }}:</span> 
                {{ getSelectedCountryName() || t('common.notSelected') }}
            </p>
            <p class="text-sm text-gray-700">
                <span class="font-medium">{{ t('protocols.form.deliveryAgreement') }}:</span> 
                {{ getSelectedProtocolName() || t('common.notSelected') }}
            </p>
            <p class="text-sm text-gray-700">
                <span class="font-medium">{{ t('protocols.form.udp') }}:</span> 
                {{ getSelectedUdpName() || t('common.notSelected') }}
            </p>

            <!-- Length -->
            <div class="mt-4">
            <label class="block text-sm font-medium mb-1">{{ t('protocols.form.lengthOfPurchase') }} *</label>
            <select class="border rounded-lg w-full px-3 py-2">
                <option v-for="day in durationOptions" :key="day">{{ day.displayName }} {{ t('common.days') }}</option>
            </select>
            </div>

            <!-- Quantity -->
            <div class="mt-4">
            <label class="block text-sm font-medium mb-1">{{ t('protocols.form.numberOfPurchases') }} *</label>
            <div class="flex items-center gap-2">
                <button class="border px-3 py-1 rounded">-</button>
                <input type="text" value="1" class="border rounded w-12 text-center py-1" />
                <button class="border px-3 py-1 rounded">+</button>
            </div>
            </div>

            <!-- Total -->
            <div class="mt-6 text-xl font-bold text-orange-500">¥ 50.00</div>

            <!-- Button -->
            <button @click="handleBuyNow" class="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold buy-now-button">
                Buy Now
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const { useI18n } = await import('~/composables/useI18n')
const { t } = useI18n()
const props = defineProps<{
    value: any
}>();
const countries = ref(props.value?.data.detail.ipConfiguration?.availableCountries || [])
const protocols = ref(props.value?.data.detail.ipConfiguration?.availableProtocols || []);
const ipAuthorizationTypes = ref(props.value?.data.detail.ipConfiguration?.authorizationTypes || []);
const udps = ref(props.value?.data?.detail?.ipConfiguration?.udpOptions || []);
const durationOptions = ref(props.value?.data.detail.ipConfiguration?.durationOptions || []);
const selectedCountry = ref<string | null>(null);
const selectedProtocol = ref<string | null>(null);
const selectedIp = ref<string | null>(null);
const selectedUdp = ref<string | null>(null);

// Function to set default values
const setDefaultValues = () => {
    if (props.value?.data?.detail?.ipConfiguration) {
        const config = props.value.data.detail.ipConfiguration;
        
        // Set first country as default if available
        if (config.availableCountries?.length > 0) {
            selectedCountry.value = config.availableCountries[0].code;
        }
        
        // Set first protocol as default if available
        if (config.availableProtocols?.length > 0) {
            selectedProtocol.value = config.availableProtocols[0].name;
        }
        
        // Set first IP authorization as default if available
        if (config.authorizationTypes?.length > 0) {
            selectedIp.value = config.authorizationTypes[0];
        }
        
        // Set first UDP as default if available
        if (config.udpOptions?.length > 0) {
            selectedUdp.value = config.udpOptions[0];
        }
    }
};

// Set default values when data is loaded
watch(() => props.value, setDefaultValues, { immediate: true });

// Methods to get display names for selected options
const getSelectedCountryName = () => {
    const country = countries.value.find((c: any) => c.code === selectedCountry.value);
    return country ? country.name : 'Not selected';
};

const getSelectedProtocolName = () => {
    const protocol = protocols.value.find((p: any) => p.name === selectedProtocol.value);
    return protocol ? protocol.name : 'Not selected';
};

const getSelectedUdpName = () => {
    return selectedUdp.value || 'Not selected';
};

// Ensure defaults set on mount
onMounted(() => {
    setDefaultValues();
});

// Handle buy now button click
const handleBuyNow = () => {
  // For Static Residential Proxies, redirect to buy static residential IP page
  navigateTo('/dashboard/buy-static-residential-ip')
}
</script>