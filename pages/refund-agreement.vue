<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <TopBar />
    
    <!-- Main Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
        <!-- Title -->
        <div class="text-center mb-12">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Refund Agreement</h1>
          <div class="w-16 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto"></div>
          <p class="text-gray-600 mt-4">Last updated: {{ new Date().toLocaleDateString() }}</p>
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">1. Refund Policy Overview</h2>
            <p class="text-gray-700 mb-4">
              DYNAVERA is committed to customer satisfaction. We offer a fair and transparent refund policy for our proxy services.
            </p>
            <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p class="text-gray-700">
                <strong>Money-Back Guarantee:</strong> 30-day satisfaction guarantee<br>
                <strong>Processing Time:</strong> 3-5 business days<br>
                <strong>Contact:</strong> refunds@dynavera.com
              </p>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">2. Eligibility for Refunds</h2>
            <p class="text-gray-700 mb-4">
              Refunds may be issued under the following circumstances:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Service not delivered within 24 hours of payment</li>
              <li>Technical issues preventing service usage for more than 48 hours</li>
              <li>Service quality significantly below advertised specifications</li>
              <li>Billing errors or duplicate charges</li>
              <li>Account cancellation within 30 days of initial purchase</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">3. Non-Refundable Items</h2>
            <p class="text-gray-700 mb-4">
              The following are not eligible for refunds:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li>Services used beyond 30% of the purchased bandwidth/data</li>
              <li>Violations of our terms of service</li>
              <li>Fraudulent or suspicious activity</li>
              <li>Services purchased during promotional periods (unless specified)</li>
              <li>Enterprise plans with custom configurations</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">4. Refund Process</h2>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Step-by-Step Process:</h3>
              <ol class="list-decimal list-inside text-gray-700 space-y-2">
                <li>Submit refund request via email to refunds@dynavera.com</li>
                <li>Include your account details and reason for refund</li>
                <li>Our team will review your request within 24 hours</li>
                <li>If approved, refund will be processed within 3-5 business days</li>
                <li>You will receive confirmation email with refund details</li>
              </ol>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">5. Refund Methods</h2>
            <p class="text-gray-700 mb-4">
              Refunds will be issued using the original payment method:
            </p>
            <ul class="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Credit/Debit Cards:</strong> 3-5 business days</li>
              <li><strong>PayPal:</strong> 1-3 business days</li>
              <li><strong>Cryptocurrency:</strong> 1-2 business days</li>
              <li><strong>Bank Transfer:</strong> 5-10 business days</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">6. Partial Refunds</h2>
            <p class="text-gray-700 mb-4">
              Partial refunds may be issued based on usage:
            </p>
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>0-10% usage: 100% refund</li>
                <li>11-30% usage: 70% refund</li>
                <li>31-50% usage: 50% refund</li>
                <li>51%+ usage: No refund</li>
              </ul>
            </div>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
            <p class="text-gray-700 mb-4">
              For refund requests or questions about this policy:
            </p>
            <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <p class="text-gray-700">
                <strong>Refund Requests:</strong> refunds@dynavera.com<br>
                <strong>General Support:</strong> support@dynavera.com<br>
                <strong>Response Time:</strong> Within 24 hours<br>
                <strong>Business Hours:</strong> 24/7 Support Available
              </p>
            </div>
          </section>
        </div>

        <!-- Back Button -->
        <div class="text-center mt-12">
          <NuxtLink to="/" class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <FooterBar />
  </div>
</template>

<script setup>
import TopBar from '~/components/topBar.vue';
import FooterBar from '~/components/footerBar.vue';

// Set page title
useHead({
  title: 'Refund Agreement - DYNAVERA',
  meta: [
    { name: 'description', content: 'Refund policy and agreement for DYNAVERA proxy services.' }
  ]
})
</script>
