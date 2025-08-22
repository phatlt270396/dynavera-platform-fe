<template>
    <div>
        <TopBar/>
        <div class="flex justify-center">
            <div class="flex space-x-4 border-b h-20 max-w-7xl">
            <!-- Active tab -->
            <button v-for="item in pakegeTypes" class="px-6 py-2 font-semibold text-lg rounded-t-md hover:bg-blue-50" :class="isActive(item.id) ? 'bg-green-50' : ''">
                {{ item.name }}
            </button>

            <!-- Inactive tab -->
           
            </div>
        </div>
        
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            
            <!-- Premium Package -->
            <div v-for="pkg in packages" class="border rounded-xl shadow-sm p-6 flex flex-col justify-between">
                <div>
                <h3 class="text-xl font-semibold">{{ pkg.name }}</h3>
                <p class="text-3xl font-bold mt-2">¥{{ pkg.pricePerGB }}<span class="text-base font-medium">/GB</span></p>
                <ul class="mt-4 space-y-2 text-gray-600">
                    <li>{{ pkg.flow }}</li>
                    <li>{{ pkg.duration }}</li>
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

        <!-- Info Section -->
        <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="text-2xl font-bold">What is a Dynamic Residential Agent?</h2>
            <p class="mt-4 text-gray-600">
                A dynamic residential agent is the middle server between you and the website you are trying to visit. 
                The server's IP address is provided by the Internet Service Provider (ISP), not the digital center. 
                Each dynamic residential IP is a real mobile or desktop device that pinpoints a specific physical location.
            </p>

            <!-- Features -->
            <div class="mt-10 grid md:grid-cols-3 gap-6">
                <div class="p-6 border rounded-xl shadow-sm">
                <div class="text-purple-500 text-3xl mb-3">📡</div>
                <h3 class="font-semibold mb-2">Real IP address</h3>
                <p class="text-gray-600 text-sm">
                    Residential agents use IP for desktop and mobile devices, making it difficult for websites 
                    to distinguish them from real users.
                </p>
                </div>

                <div class="p-6 border rounded-xl shadow-sm">
                <div class="text-purple-500 text-3xl mb-3">🛡️</div>
                <h3 class="font-semibold mb-2">Agents that cannot be blocked</h3>
                <p class="text-gray-600 text-sm">
                    Due to their origin and advanced rotation, residential IP addresses are difficult to detect 
                    and less likely to be blocked by websites.
                </p>
                </div>

                <div class="p-6 border rounded-xl shadow-sm">
                <div class="text-purple-500 text-3xl mb-3">📍</div>
                <h3 class="font-semibold mb-2">Advanced Positioning</h3>
                <p class="text-gray-600 text-sm">
                    Using the decoded IP pool, you can access local content, which covers more than 195 locations, 
                    including cities and U.S. states.
                </p>
                </div>
            </div>
            </div>
        </section>
        <FooterBar/>
    </div>
</template>
<script setup lang="ts">
import FooterBar from '~/components/footerBar.vue';
import TopBar from '~/components/topBar.vue';

const route = useRoute()
const item = route.query.item
const isActive = (id: string) => {
  return item === id;
};
const packages = [
  {
    name: "Business Package",
    pricePerGB: 10,
    flow: "5 TB",
    duration: "Unlimited duration",
    ports: "Unlimited exclusive ports",
    totalPrice: 51200,
    nonActivityPeriod: 143360
  },
  {
    name: "Specialty Package",
    pricePerGB: 15,
    flow: "1 TB",
    duration: "Unlimited duration",
    location: "Urban-level location",
    ports: "Unlimited exclusive ports",
    totalPrice: 15360,
    nonActivityPeriod: 236672
  },
  {
    name: "Premium Package",
    pricePerGB: 20,
    flow: "100 GB",
    duration: "Valid for 365 days",
    ports: "1000 unique ports",
    totalPrice: 2000,
    nonActivityPeriod: 3000
  },
  {
    name: "Premium Package",
    pricePerGB: 28,
    flow: "10 GB",
    duration: "Valid for 180 days",
    ports: "100 unique ports",
    totalPrice: 280,
    nonActivityPeriod: 480
  },
  {
    name: "Junior Package",
    pricePerGB: 38,
    flow: "1 GB",
    duration: "Valid for 30 days",
    ports: "30 exclusive ports",
    totalPrice: 38,
    nonActivityPeriod: 58
  }
];
const pakegeTypes = [
    {
        id: "residential-proxies",
        name: "Residential Proxies",
    },
    {
        id: "static-datacenter-proxies",
        name: "Static Datacenter Proxy",
    },
    {
        id: "static-residential-proxies",
        name: "Static Residential Proxies",
    }
]
</script>