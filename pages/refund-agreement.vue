<script setup lang="ts">
import { PhArrowLeft } from '@phosphor-icons/vue';

</script>

<template>
    <header class="bg-white text-black py-10 text-center flex justify-center px-10 relative">
                                        <div class="absolute left-4">
                                            <a href="/" class="text-purple-600 hover:text-purple-800 font-bold underline flex items-center">
                                                <span class="material-icons mr-2"><PhArrowLeft :size="20" /></span> <span class="text-md">Back to Home</span>
                                            </a>
                                        </div>
                                        <div>
                                           <h1 class="text-2xl font-bold mb-6 text-gray-800">Refund Agreement</h1>
                                        </div>
    </header>
    <div class="bg-[#f1f5fa] p-10">
        <div class="max-w-[900px] mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
            <p class="mb-6 text-gray-700">
                This Refund Agreement constitutes a valid contract between Koovity (including but not limited to the Koovity official website) and you regarding refunds for purchases of Koovity products and services. By accepting this Refund Agreement by affixing your seal, clicking "confirm" on the website, or by any other means, including but not limited to not clicking "confirm" but actually purchasing and using Koovity services, you and Koovity have reached an agreement and agree to all terms and conditions of this Refund Agreement.
            </p>
            <p class="mb-4 text-gray-700 font-semibold">Please note the following terms and conditions:</p>
            <ol class="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                    Pursuant to relevant laws and regulations, you confirm and accept that the products provided by Koovity are computer software services. If you confirm the purchase of a paid plan or customized service, no refunds will be issued.
                </li>
                <li>
                    You should fully understand the features and application scenarios of Koovity before making any purchase. To this end, the Koovity official website provides detailed information on all product features and limitations. You may also contact online customer service for product-related information.
                </li>
                <li>
                    After purchasing Koovity products through offline or online payment, or other mutually agreed methods, you will be granted access to Koovity products and services. Koovity will provide you with products and services tailored to your needs.
                </li>
                <li>
                    You have a duty of care and reasonable review to select the Koovity products that best suit your needs. Koovity offers services that include package pricing, product duration pricing, and customized pricing. Specific services and charging methods are subject to official Koovity information. Koovity may modify and change its charging schedule and service methods based on actual needs.
                </li>
                <li>
                    You acknowledge and agree that the services provided by Koovity are limited to products sold on the Koovity platform. Koovity has no obligation to assist customers in optimizing products purchased independently from outside of Koovity.
                </li>
                <li>
                    Refunds on the Koovity platform will only be made to the original payment account, and will be deducted for any fees, handling fees, top-up bonuses, and other related losses.
                </li>
                <li>
                    If you have any questions or dissatisfaction with your order, please contact our online customer service first.
                </li>
            </ol>
        </div>
    </div>
</template>
