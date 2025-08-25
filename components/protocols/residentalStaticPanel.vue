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
                <button v-for="item in countries" class="border rounded-lg px-3 py-2 text-sm" :class="selectedCountry === item.id ? 'font-medium border-green-500 bg-green-50' : ''" @click="selectedCountry = item.id" >{{ item.name }}</button>
            </div>

            <!-- Protocol -->
            <h3 class="font-semibold mb-2">Delivery Agreement *</h3>
            <div class="flex flex-wrap gap-3 mb-6">
                <button v-for="protocol in protocols" :class="selectedProtocol === protocol.id ? 'font-medium border-green-500 bg-green-50' : ''" @click="selectedProtocol = protocol.id" class="border rounded-lg px-4 py-2">{{ protocol.name }}</button>
            </div>

            <!-- IP Authorization -->
            <h3 class="font-semibold mb-2">IP Authorization Type *</h3>
            <div class="flex gap-3 mb-6">
                <button v-for="ip in ipAuthorizationTypes" class="border rounded-lg px-4 py-2" :class="selectedIp === ip.id ? 'font-medium border-green-500 bg-green-50' : ''" @click="selectedIp = ip.id">Enjoyed alone</button>
            </div>

            <!-- UDP -->
            <h3 class="font-semibold mb-2">UDP</h3>
            <div class="flex gap-3">
                <button v-for="udp in udps" class="border rounded-lg px-4 py-2" :class="selectedUdp === udp ? 'font-medium border-green-500 bg-green-50' : ''" @click="selectedUdp = udp">{{ udp }}</button>
            </div>
        </div>

        <!-- Right: Order Summary -->
        <div class="bg-white p-6 rounded-xl shadow">
            <h3 class="font-semibold mb-4">View your order</h3>

            <p class="text-sm text-gray-700"><span class="font-medium">Countries in Need:</span> United States - US</p>
            <p class="text-sm text-gray-700"><span class="font-medium">Delivery Agreement:</span> Socks5</p>
            <p class="text-sm text-gray-700"><span class="font-medium">UDP:</span> Stop</p>

            <!-- Length -->
            <div class="mt-4">
            <label class="block text-sm font-medium mb-1">Length of IP purchase *</label>
            <select class="border rounded-lg w-full px-3 py-2">
                <option v-for="day in durationOptions" :key="day">{{ day.displayName }} days</option>
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
            <button class="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold">
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
const selectedCountry = ref<string | null>("US");
const selectedProtocol = ref<string | null>("socks5");
const selectedIp = ref<string | null>("enjoyed-alone");
const selectedUdp = ref<string | null>("stop");
</script>