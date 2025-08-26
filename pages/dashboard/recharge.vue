<template>
  <DashboardLayout>
    <div class="max-w-6xl mx-auto bg-white min-h-screen p-6">
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 class="text-xl font-bold text-gray-900 mb-8">Recharge Order Details</h1>
        
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <!-- Left Section: Payment Methods -->
          <div class="space-y-6">
            <h2 class="text-base font-semibold text-gray-900 mb-4">Payment Methods</h2>
            
            <!-- Credit Card/Bank Card Option -->
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="flex items-center mb-4">
                <input 
                  type="radio" 
                  id="creditCard" 
                  name="paymentMethod" 
                  value="creditCard"
                  v-model="selectedPaymentMethod"
                  class="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                >
                <label for="creditCard" class="ml-3 text-xs font-medium text-gray-900">
                  Credit Card/Bank Card
                </label>
              </div>
              
              <!-- Card Provider Logos -->
              <div class="flex items-center space-x-3 flex-wrap">
                <img src="/assets/images/payment-cards/unionpay.svg" alt="UnionPay" class="w-12 h-8 rounded shadow-sm hover:shadow-md transition-shadow duration-200">
                <img src="/assets/images/payment-cards/mastercard.svg" alt="Mastercard" class="w-12 h-8 rounded shadow-sm hover:shadow-md transition-shadow duration-200">
                <img src="/assets/images/payment-cards/amex.svg" alt="American Express" class="w-12 h-8 rounded shadow-sm hover:shadow-md transition-shadow duration-200">
                <img src="/assets/images/payment-cards/visa.svg" alt="Visa" class="w-12 h-8 rounded shadow-sm hover:shadow-md transition-shadow duration-200">
                <img src="/assets/images/payment-cards/jcb.svg" alt="JCB" class="w-12 h-8 rounded shadow-sm hover:shadow-md transition-shadow duration-200">
              </div>
            </div>
            
            <!-- Other Method Option -->
            <div class="border border-gray-200 rounded-lg p-4">
              <div class="flex items-center mb-4">
                <input 
                  type="radio" 
                  id="otherMethod" 
                  name="paymentMethod" 
                  value="otherMethod"
                  v-model="selectedPaymentMethod"
                  class="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                >
                <label for="otherMethod" class="ml-3 text-xs font-medium text-gray-900 flex items-center">
                  Other method
                  <svg class="w-4 h-4 ml-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </label>
              </div>
              
              <p class="text-xs text-gray-600 ml-7 leading-relaxed">
                Please contact our 24-hour online customer service.
              </p>
            </div>
          </div>
          
          <!-- Right Section: Order Summary -->
          <div class="space-y-6">
            <div class="flex items-center mb-4">
              <svg class="w-6 h-6 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
              </svg>
              <h2 class="text-base font-semibold text-gray-900">Recharge Order Details</h2>
            </div>
            
            <!-- Pay Amount Input -->
            <div class="space-y-3">
              <label class="block text-sm font-medium text-gray-700">Pay amount</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">¥</span>
                <input 
                  type="number" 
                  v-model="payAmount"
                  class="pl-8 pr-4 py-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg font-medium transition-all duration-200"
                  placeholder="Enter amount"
                  min="10"
                  step="1"
                  aria-label="Payment amount"
                >
              </div>
              
              <!-- Quick Amount Buttons -->
              <div class="flex flex-wrap gap-2">
                <button 
                  v-for="amount in quickAmounts" 
                  :key="amount"
                  @click="payAmount = amount"
                  class="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
                  :class="payAmount === amount ? 'bg-green-50 border-green-500 text-green-700 shadow-sm' : 'text-gray-700'"
                >
                  ¥ {{ amount }}
                </button>
              </div>
            </div>
            
            <!-- Order Details -->
            <div class="bg-gray-50 rounded-lg p-4 space-y-3 border border-gray-200">
              <div class="flex justify-between items-center">
                <span class="text-xs text-gray-600">Pay order number:</span>
                <span class="text-sm font-mono text-gray-900 break-all">{{ orderNumber }}</span>
              </div>
              
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2">
                  <div class="relative">
                    <div class="bg-yellow-400 text-gray-800 px-2 py-1 rounded text-xs font-medium relative">
                      +22% Extra
                      <!-- Folded corner effect -->
                      <div class="absolute top-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-yellow-600"></div>
                      <div class="absolute top-0 right-0 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-yellow-300"></div>
                    </div>
                  </div>
                  <span class="text-xs text-gray-600">Estimated Credit:</span>
                </div>
                <span class="text-sm font-semibold text-gray-900">¥ {{ estimatedCredit }}</span>
              </div>
              
              <div class="flex justify-between items-center border-t border-gray-300 pt-3">
                <span class="text-xs font-medium text-gray-900">Actual Payment:</span>
                <span class="text-lg font-bold text-gray-900">¥ {{ payAmount }}</span>
              </div>
            </div>
            
            <!-- Confirm Button -->
            <button 
              @click="confirmPurchase"
              class="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Confirm and Purchase
            </button>
            
            <!-- Terms and Conditions -->
            <div class="space-y-3">
              <div class="flex items-start">
                <input 
                  type="checkbox" 
                  id="agreeTerms"
                  v-model="agreeTerms"
                  class="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                >
                <label for="agreeTerms" class="ml-2 text-xs text-gray-600 leading-relaxed">
                  I have read and agree 
                  <a href="#" class="text-green-600 hover:text-green-500 underline transition-colors">refund policy</a>
                </label>
              </div>
              
              <ul class="text-xs text-gray-600 space-y-2">
                <li class="flex items-start">
                  <span class="text-red-500 mr-2 mt-0.5">•</span>
                  <span class="leading-relaxed">All of the kookeey proxies should be used in the network outside of mainland China</span>
                </li>
                <li class="flex items-start">
                  <span class="text-gray-500 mr-2 mt-0.5">•</span>
                  <span class="leading-relaxed">If you need invoice, please contact client service.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref, computed } from 'vue'

// Set page meta
definePageMeta({
  middleware: 'auth'
})

// Reactive data
const selectedPaymentMethod = ref('creditCard')
const payAmount = ref(10)
const agreeTerms = ref(false)

// Quick amount options
const quickAmounts = [50, 100, 500, 1000, 5000]

// Generate random order number
const orderNumber = ref('71238411751895419964486')

// Computed properties
const estimatedCredit = computed(() => {
  return (payAmount.value * 1.22).toFixed(1)
})

// Methods
const confirmPurchase = () => {
  if (!agreeTerms.value) {
    alert('Please agree to the refund policy')
    return
  }
  
  if (payAmount.value <= 0) {
    alert('Please enter a valid amount')
    return
  }
  
  if (payAmount.value < 10) {
    alert('Minimum payment amount is ¥10')
    return
  }
  
  // Here you would typically make an API call to process the payment
  console.log('Processing payment:', {
    amount: payAmount.value,
    paymentMethod: selectedPaymentMethod.value,
    orderNumber: orderNumber.value,
    estimatedCredit: estimatedCredit.value
  })
  
  alert('Payment processed successfully!')
}
</script>
