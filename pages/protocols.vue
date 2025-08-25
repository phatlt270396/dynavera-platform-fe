<template>
    <div>
        <TopBar/>
        <div class="grid grid-cols-1 max-w-7xl m-auto mt-8 md:mb-0 mb-12">
            <div class="flex justify-center col-span-1 ">
                <div class="flex flex-col md:flex-row h-20 w-full gap-2">
                    <!-- Active tab -->
                    <button v-for="item in pakegeTypes" class="px-6 py-2 ml-0 font-semibold text-lg hover:border-b-4 hover:border-green-500 text-left w-full" :class="selectedPakage === item.id ? 'text-green-900 border-b-4 border-green-500' : ''" @click="selectedPakage = item.id;getpackageFromType(selectedPakage)">
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
                        <ResidnetalDynamicPanel v-if="residentalDynamicDetail" :value="residentalDynamicDetail" />
                        <ResidentalDynamicService />
                    </template>
                    <template v-else-if="selectedPakage === 'static-datacenter-proxies'">
                        <ResidentalStaticPanel v-if="residentalStaticDetail" :value="residentalStaticDetail" />
                        <StaticDatacenterService />
                    </template>
                    <template v-else-if="selectedPakage === 'static-residential-proxies'">
                        <ResidentalStaticPanel v-if="residentalStaticDetail" :value="residentalStaticDetail" />
                        <StaticResidentalService />
                    </template>
                </div>
            </Transition>
        <FooterBar/>
    </div>
</template>
<script setup lang="ts">
import axios from 'axios';
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
interface ResidentalDynamicDetail {
    success: boolean;
    message: string;
    data: {
        type: string;
        typeDescription: string;
        packages: Array<{
            id: number;
            name: string;
            tier: string;
            description: string;
            pricePerGb: number;
            includedTrafficGb: number;
            durationDays: number;
            ports: number;
            currentPrice: number;
            originalPrice: number;
            discountPercentage: number;
            isActive: boolean;
            country: string;
            protocol: string;
            features: string[];
            isRecommended: boolean;
            isMostPopular: boolean;
            promotionalTag: string | null;
            trialPackage: string | null;
            geographicCoverageLevel: string | null;
        }>;
        commonSpecifications: {
            ipRotationFrequency: string;
            concurrentConnections: number;
            successRate: number;
            averageResponseTime: number;
            geographicCoverage: string;
            supportedProtocols: string;
            authenticationMethods: string;
        };
        commonFeatures: string[];
        usageStats: {
            totalUsers: number;
            averageMonthlyUsageGb: number;
            uptimePercentage: number;
            customerRating: number;
        };
    };
    errorCode: number | null;
    timestamp: number;
}

const residentalDynamicDetail = ref<ResidentalDynamicDetail | null>(null)
const residentalStaticDetail = ref<any | null>(null)
const residentalStaticDatacenterDetail = ref<any | null>(null)
const getItemDynamicResidental = () => {
    axios.get('https://dynavera.net/api/v1/proxy/packages/type/DYNAMIC_RESIDENTIAL/detail', {
    }).then((response) => {
        residentalDynamicDetail.value = response.data;
    }).catch((error) => {
        console.error('Error fetching package details:', error)
    })
}
const getItemStaticResidental = () => {
    axios.get('https://dynavera.net/api/v1/proxy/packages/type/STATIC_RESIDENTIAL/detail', {
    }).then((response) => {
        residentalStaticDetail.value = response.data;
    }).catch((error) => {
        console.error('Error fetching package details:', error)
    })
}
const getItemStaticDatacenter = () => {
    axios.get('https://dynavera.net/api/v1/proxy/packages/type/STATIC_DATACENTER/detail', {
    }).then((response) => {
        residentalStaticDatacenterDetail.value = response.data;
    }).catch((error) => {
        console.error('Error fetching package details:', error)
    })
}
const getpackageFromType = async (type: string) => {
    if (type === 'residential-proxies') {
       getItemDynamicResidental()
    } else if (type === 'static-datacenter-proxies') {
        getItemStaticDatacenter()
    } else if (type === 'static-residential-proxies') {
        getItemStaticResidental()
    }
}
onMounted(() => {
    if (selectedPakage.value) {
        getpackageFromType(selectedPakage.value)
    } else {
        selectedPakage.value = 'residential-proxies'
        getpackageFromType(selectedPakage.value)
    }
})
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