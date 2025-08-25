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

const ResidentalDynamicPanel = {
    success: true,
    message: "Proxy package detail retrieved successfully",
    data: {
        type: "DYNAMIC_RESIDENTIAL",
        typeDescription: "Dynamic Residential Proxy",
        packages: [
            {
                id: 1,
                name: "Basic Plan",
                tier: "BASIC",
                description: "Perfect for small projects and testing",
                pricePerGb: 2.5,
                includedTrafficGb: 10,
                durationDays: 30,
                ports: 1,
                currentPrice: 25,
                originalPrice: 25,
                discountPercentage: 0,
                isActive: true,
                country: "US",
                protocol: "HTTP",
                features: [
                    "10GB traffic",
                    "30 days validity",
                    "1 port",
                    "Basic support"
                ],
                isRecommended: false,
                isMostPopular: false,
                promotionalTag: null,
                trialPackage: null,
                geographicCoverageLevel: null
            },
            {
                id: 101,
                name: "Standard Plan",
                tier: "STANDARD",
                description: "Ideal for growing businesses",
                pricePerGb: 2.25,
                includedTrafficGb: 100,
                durationDays: 30,
                ports: 5,
                currentPrice: 225,
                originalPrice: 250,
                discountPercentage: 10,
                isActive: true,
                country: "US",
                protocol: "HTTP",
                features: [
                    "100GB traffic",
                    "30 days validity",
                    "5 ports",
                    "Priority support",
                    "10% discount"
                ],
                isRecommended: true,
                isMostPopular: true,
                promotionalTag: "Most Popular",
                trialPackage: null,
                geographicCoverageLevel: null
            },
            {
                id: 201,
                name: "Enterprise Package",
                tier: "ENTERPRISE",
                description: "Maximum value for enterprise operations",
                pricePerGb: 10,
                includedTrafficGb: 5000,
                durationDays: -1,
                ports: -1,
                currentPrice: 51200,
                originalPrice: 443360,
                discountPercentage: 64,
                isActive: true,
                country: "US",
                protocol: "HTTP",
                features: [
                    "5TB of traffic",
                    "Unlimited duration",
                    "City-level positioning",
                    "Unlimited dedicated ports"
                ],
                isRecommended: false,
                isMostPopular: false,
                promotionalTag: "Biggest Discount",
                trialPackage: "Trial Gift Package+",
                geographicCoverageLevel: "City-level"
            }
        ],
        commonSpecifications: {
            ipRotationFrequency: "Every 10 minutes",
            concurrentConnections: 100,
            successRate: 99.5,
            averageResponseTime: 150,
            geographicCoverage: "United States",
            supportedProtocols: "HTTP, HTTPS, SOCKS5",
            authenticationMethods: "Username/Password, IP Whitelist"
        },
        commonFeatures: [
            "Rotating residential IPs",
            "High success rate (99.5%)",
            "Fast response times",
            "Geographic targeting",
            "Multiple protocol support",
            "24/7 customer support",
            "Real-time monitoring",
            "API access"
        ],
        usageStats: {
            totalUsers: 1250,
            averageMonthlyUsageGb: 45.5,
            uptimePercentage: 99.9,
            customerRating: 4.8
        }
    },
    errorCode: null,
    timestamp: 1756016728675
}
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

const getpackageFromType = async (type: string) => {
    if (type === 'residential-proxies') {
        // return residentalDynamicDetail.value = ResidentalDynamicPanel
        await $fetch('/api/packages/type/DYNAMIC_RESIDENTIAL/detail')
        // axios.get('https://dynavera.net/api/packages/type/DYNAMIC_RESIDENTIAL/detail', {
        //     headers: {
        //         accept: "application/json",
        //         origin: undefined,
        //         referer: undefined,
        //     }
        // }).then((response) => {
        //     console.log(response.data);
        // }).catch((error) => {
        //     console.error('Error fetching package details:', error)
        // })
    } else if (type === 'static-datacenter-proxies') {
        return 'Static Datacenter Proxy'
    } else if (type === 'static-residential-proxies') {
        return 'Static Residential Proxies'
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