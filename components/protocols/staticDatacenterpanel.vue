<template>
    <div class="mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Left: Configuration -->
        <div class="md:col-span-2 bg-white p-6 rounded-xl shadow">
            <!-- Country -->
            <h3 class="font-semibold mb-2">Countries in Need *</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
            <!-- <button class="border rounded-lg px-3 py-2 text-sm font-medium border-green-500 bg-green-50">
                United States - US
            </button> -->
                <button 
                    v-for="item in countries" 
                    :key="item.code"
                    class="border rounded-lg px-3 py-2 text-sm transition-colors" 
                    :class="selectedCountry === item.code ? 'font-medium border-green-500 bg-green-50 text-green-700' : 'border-gray-300 hover:border-green-300'" 
                    @click="selectedCountry = item.code"
                >
                    {{ item.name }} (Code: {{ item.code }})
                </button>
            </div>

            <!-- Protocol -->
            <h3 class="font-semibold mb-2">Delivery Agreement *</h3>
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
            <h3 class="font-semibold mb-2">IP Authorization Type *</h3>
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
            <h3 class="font-semibold mb-2">UDP</h3>
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
            <h3 class="font-semibold mb-4">View your order</h3>

            <!-- Debug Info -->
            <div class="mb-4 p-2 bg-gray-100 rounded text-xs">
                <p>Debug - Selected Values:</p>
                <p>Country: {{ selectedCountry }}</p>
                <p>Protocol: {{ selectedProtocol }}</p>
                <p>IP: {{ selectedIp }}</p>
                <p>UDP: {{ selectedUdp }}</p>
            </div>

            <p class="text-sm text-gray-700">
                <span class="font-medium">Countries in Need:</span> 
                {{ getSelectedCountryName() }}
            </p>
            <p class="text-sm text-gray-700">
                <span class="font-medium">Delivery Agreement:</span> 
                {{ getSelectedProtocolName() }}
            </p>
            <p class="text-sm text-gray-700">
                <span class="font-medium">UDP:</span> 
                {{ getSelectedUdpName() }}
            </p>

            <!-- Length -->
            <div class="mt-4">
            <label class="block text-sm font-medium mb-1">Length of IP purchase *</label>
            <select class="border rounded-lg w-full px-3 py-2">
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
            </select>
            </div>

            <!-- Quantity -->
            <div class="mt-4">
            <label class="block text-sm font-medium mb-1">Number of IP purchases *</label>
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
    console.log('Setting default values...');
    console.log('Props value:', props.value);
    
    if (props.value?.data?.detail?.ipConfiguration) {
        const config = props.value.data.detail.ipConfiguration;
        console.log('Config:', config);
        
        // Set first country as default if available
        if (config.availableCountries?.length > 0) {
            selectedCountry.value = config.availableCountries[0].code;
            console.log('Set country to:', config.availableCountries[0].code);
        }
        
        // Set first protocol as default if available
        if (config.availableProtocols?.length > 0) {
            selectedProtocol.value = config.availableProtocols[0].name;
            console.log('Set protocol to:', config.availableProtocols[0].name);
        }
        
        // Set first IP authorization as default if available
        if (config.authorizationTypes?.length > 0) {
            selectedIp.value = config.authorizationTypes[0];
            console.log('Set IP to:', config.authorizationTypes[0]);
        }
        
        // Set first UDP as default if available
        if (config.udpOptions?.length > 0) {
            selectedUdp.value = config.udpOptions[0];
            console.log('Set UDP to:', config.udpOptions[0]);
        }
    } else {
        console.log('No config found, setting to null');
        selectedCountry.value = null;
        selectedProtocol.value = null;
        selectedIp.value = null;
        selectedUdp.value = null;
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

// Debug function to log data structure
const debugData = () => {
    console.log('Countries:', countries.value);
    console.log('Protocols:', protocols.value);
    console.log('Protocols detail:', protocols.value.map((p: any) => ({ id: p.id, name: p.name })));
    console.log('IP Auth Types:', ipAuthorizationTypes.value);
    console.log('UDPs:', udps.value);
    console.log('Selected Country:', selectedCountry.value);
    console.log('Selected Protocol:', selectedProtocol.value);
    console.log('Selected IP:', selectedIp.value);
    console.log('Selected UDP:', selectedUdp.value);
};

// Call debug on mount
onMounted(() => {
    setDefaultValues();
    debugData();
});

// Handle buy now button click
const handleBuyNow = () => {
  // For Static Datacenter Proxies, redirect to purchase data center IP page
  navigateTo('/dashboard/purchase-data-center-ip')
}
</script>