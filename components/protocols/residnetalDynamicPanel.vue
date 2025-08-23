<template>
    <section class="py-8 col-span-3">
                    <div class="mx-auto grid md:grid-cols-3 gap-8">
                    
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
</template>
<script setup lang="ts">
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
</script>