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
                <button v-for="udp in udps" class="border rounded-lg px-4 py-2" :class="selectedUdp === udp.id ? 'font-medium border-green-500 bg-green-50' : ''" @click="selectedUdp = udp.id">{{ udp.name }}</button>
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
            <button class="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold">
                Buy Now
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const countries = [
  { id: "US", name: "United States" },
  { id: "GB", name: "United Kingdom" },
  { id: "FR", name: "France" },
  { id: "JP", name: "Japan" },
  { id: "SG", name: "Singapore" },
  { id: "DE", name: "Germany" },
  { id: "VN", name: "Vietnam" },
  { id: "AT", name: "Austria" },
  { id: "CA", name: "Canada" },
  { id: "DK", name: "Denmark" },
  { id: "ES", name: "Spain" },
  { id: "ID", name: "Indonesia" },
  { id: "IT", name: "Italy" },
  { id: "KR", name: "Korea" },
  { id: "MY", name: "Malaysia" },
  { id: "NL", name: "Netherlands" },
  { id: "PL", name: "Poland" },
  { id: "SE", name: "Sweden" }
];
const protocols = [
  { id: "socks5", name: "Socks5" },
  { id: "http", name: "Http(s)" },
  { id: "vmess", name: "Vmess" },
  { id: "shadowsocks", name: "Shadowsocks" },
  { id: "wireguard", name: "Wireguard" },
  { id: "gre", name: "GRE" }
];
const ipAuthorizationTypes = [
  { id: "enjoyed-alone", name: "Enjoyed alone" },
]; 
const udps = [
  { id: "stop", name: "Stop" },
  { id: "open", name: "Open" }
];
const selectedCountry = ref<string | null>("US");
const selectedProtocol = ref<string | null>("socks5");
const selectedIp = ref<string | null>("enjoyed-alone");
const selectedUdp = ref<string | null>("stop");
</script>