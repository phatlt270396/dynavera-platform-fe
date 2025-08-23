<template>
    <div>
        <TopBar/>
        <div class="grid grid-cols-1 max-w-7xl m-auto mt-8 md:mb-0 mb-12">
            <div class="flex justify-center col-span-1 ">
                <div class="flex flex-col md:flex-row h-20 w-full gap-2">
                    <!-- Active tab -->
                    <button v-for="item in pakegeTypes" class="px-6 py-2 ml-0 font-semibold text-lg hover:border-b-4 hover:border-green-500 text-left w-full" :class="selectedPakage === item.id ? 'text-green-900 border-b-4 border-green-500' : ''" @click="selectedPakage = item.id">
                        {{ item.name }}
                    </button>

                    <!-- Inactive tab -->
            
                </div>
            </div>
        </div>
       

        <!-- Info Section -->
            <Transition name="fade" mode="out-in">
                <div :key="selectedPakage || 'defaultKey'" class="max-w-7xl m-auto">
                    <template  v-if="selectedPakage === 'residential-proxies'">
                    <ResidnetalDynamicPanel />
                    <ResidentalDynamicService />
                    </template>
                    <template v-else-if="selectedPakage === 'static-datacenter-proxies'">
                        <ResidentalStaticPanel />
                        <StaticDatacenterService />
                    </template>
                    <template v-else-if="selectedPakage === 'static-residential-proxies'">
                        <ResidentalStaticPanel />
                        <StaticResidentalService />
                    </template>
                </div>
            
            
            </Transition>
        <FooterBar/>
    </div>
</template>
<script setup lang="ts">
import { Transition } from 'vue';
import FooterBar from '~/components/footerBar.vue';
import ResidentalDynamicService from '~/components/protocols/residentalDynamicService.vue';
import ResidentalStaticPanel from '~/components/protocols/residentalStaticPanel.vue';
import ResidnetalDynamicPanel from '~/components/protocols/residnetalDynamicPanel.vue';
import StaticDatacenterService from '~/components/protocols/staticDatacenterService.vue';
import StaticResidentalService from '~/components/protocols/staticResidentalService.vue';
import TopBar from '~/components/topBar.vue';

const route = useRoute()
const item = route.query.item
const selectedPakage = ref<string | null>(item as string || null)

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
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>