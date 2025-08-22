<template>
  <div class="min-h-screen bg-gray-50 network-bg">
    <!-- OAuth Loading Overlay -->
    <div v-if="isProcessingOAuth" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-8 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <h2 class="text-xl font-semibold text-gray-900 mb-2">Processing authentication...</h2>
        <p class="text-gray-600">Please wait while we complete your sign-in.</p>
      </div>
    </div>
    <!-- Header -->
    <TopBar/>

    <!-- Hero Section -->
    <section class="bg-white py-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-green-50 opacity-50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column -->
        <div class="animate-slide-in-left">
        <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span class="block text-green-500">Enterprise-level</span>
          <span class="block">Global proxy IP</span>
          <span class="block">screening service</span>
        </h1>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          Perfectly compatible with IP requirements in any scenario, while maintaining excellence and stability.
        </p>
        <button class="btn-modern btn-register-modern hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <span class="flex items-center justify-center">
          Register now
          <svg class="ml-2 w-5 h-5 arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
          </span>
        </button>
        
        <!-- Stats -->
        <div class="stats-grid-modern">
          <div class="stat-item-modern">
          <div class="animate-pulse-slow text-base md:text-[32px] text-green-500 mb-2 font-bold">47 M+</div>
          <div class="stat-label-modern">Dynamic Residence</div>
          </div>
          <div class="stat-item-modern">
          <div class="animate-pulse-slow text-base md:text-[32px] text-green-500 mb-2 font-bold">99.99%</div>
          <div class="stat-label-modern">Global Data Centers</div>
          </div>
          <div class="stat-item-modern">
          <div class="animate-pulse-slow text-base md:text-[32px] text-green-500 mb-2 font-bold !w-auto">&lt;400ms</div>
          <div class="stat-label-modern">ISP Operators</div>
          </div>
        </div>
        </div>

        <!-- Right Column - Hero Illustration -->
        <div class="flex items-center justify-center animate-slide-in-right">
        <img src="~/assets/images/globe_network_green.svg" alt="Global Network" class="w-full h-auto max-w-md animate-float" />
        </div>
      </div>
      </div>
    </section>

    <!-- Diverse Application Scenarios -->
    <section class="py-20 bg-white relative">
      <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-indigo-50 opacity-30"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 animate-slide-in-up">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Diverse Application Scenarios</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto animate-pulse-slow"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <!-- Spider Data Collection -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-2 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Spider Data Collection</h3>
          </div>

          <!-- ASO Optimization -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-2 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Effectual Quantity ASO Optimization</h3>
          </div>

          <!-- Game Optimization -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-2 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Commentary monitoring game optimization</h3>
          </div>

          <!-- Market Analysis -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-2 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Market Analysis</h3>
          </div>

          <!-- E-commerce -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-2 rounded-xl mx-auto mb-4 flex items-center justify-center shadow-md">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">E-commerce gathering</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="py-20 bg-gray-50 relative">
      <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 animate-slide-in-up">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why choose DYNAVERA?</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Enterprise-level solution -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-3 rounded-xl shadow-md mx-auto mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Enterprise-level solution</h3>
            <p class="text-gray-600 text-sm">
              The HTTP proxy for DYNAVERA uses intelligent network capture and integration technology algorithms to achieve higher success rates.
            </p>
          </div>

          <!-- Unlimited Targets -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-3 rounded-xl shadow-md mx-auto mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Unlimited Targets</h3>
            <p class="text-gray-600 text-sm">
              There are no restrictions or constraints on your goals, making any data collection work smoother.
            </p>
          </div>

          <!-- Proxy Pool Growth -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-3 rounded-xl shadow-md mx-auto mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Proxy Pool Growth</h3>
            <p class="text-gray-600 text-sm">
              We ensure that DYNAVERA's HTTP proxy is stable and reliable, and we continuously strive to expand the size of the proxy IP pool to meet the needs of each customer.
            </p>
          </div>

          <!-- 7*24 Support -->
          <div class="product-card-modern text-center">
            <div class="bg-green-500 p-3 rounded-xl shadow-md mx-auto mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"></path>
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-3">Supports 7*24 hours</h3>
            <p class="text-gray-600 text-sm">
              Our customers can contact us at any time, and we will respond to their urgent needs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Cards Section -->
    <section class="py-20 bg-white relative">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-30"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Residential Proxies -->
          <div class="product-card-modern relative">
            <div class="product-card-header">
              <div class="bg-green-500 p-3 rounded-xl shadow-md mr-4 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 class="product-card-title">Residential Proxies</h3>
            </div>
            
            <ul class="feature-list-modern">
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Owns 47 million rotating IP pool</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Supports 196 countries</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Supports extraction/port mode</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Supports HTTP/Socks5 protocol</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Unlimited concurrency</span>
              </li>
            </ul>
            
            <button @click="$router.push({ path: '/protocols', query: { item: 'residential-proxies' } })" class="btn-modern btn-success-modern w-full mt-auto">
              Buy now
            </button>
          </div>

          <!-- Static Datacenter Proxies -->
          <div class="product-card-modern relative">
            <div class="product-card-header">
              <div class="bg-green-500 p-3 rounded-xl shadow-md mr-4 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 class="product-card-title">Static Datacenter Proxies</h3>
            </div>
            
            <ul class="feature-list-modern">
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">54 global data centers</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">100% exclusive</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">99.99% online rate</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Multiple broadband billing models available</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Native/Special Line Acceleration Optional</span>
              </li>
            </ul>
            
            <button @click="$router.push({ path: '/protocols', query: { item: 'static-datacenter-proxies'} })" class="btn-modern btn-success-modern w-full mt-auto">
              Buy Now
            </button>
          </div>

          <!-- Static Residential Proxies -->
          <div class="product-card-modern relative">
            <div class="product-card-header">
              <div class="bg-green-500 p-3 rounded-xl shadow-md mr-4 flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 class="product-card-title">Static Residential Proxies</h3>
            </div>
            
            <ul class="feature-list-modern">
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Supports 16+ countries</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">100% real person attributes</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">100% Customized UDP/DNS Selection</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Multiple broadband billing models available</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">Native/Special Line Acceleration Optional</span>
              </li>
            </ul>
            
            <button @click="$router.push({ path: '/protocols', query: { item: 'static-residential-proxies'} })" class="btn-modern btn-success-modern w-full mt-auto">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <FooterBar/>
  </div>
</template>

<script setup>
// Import Tailwind CSS and animations
import '~/assets/css/tailwind.css';
import '~/assets/css/animations.css';

import axios from 'axios'
import TopBar from '~/components/topBar.vue';
import FooterBar from '~/components/footerBar.vue';

// Fallback OAuth callback handler (in case Google still redirects to homepage)
const route = useRoute()

// Handle OAuth callback if code is present (fallback)
const handleFallbackOAuth = async () => {
  const { code, error: oauthError } = route.query
  
  if (code && !oauthError) {
    console.log('Fallback OAuth callback detected on homepage, redirecting to /auth/callback...')
    // Redirect to the proper callback page with the code
    await navigateTo(`/auth/callback?code=${code}`)
  }
}

const getProtocols = () => {
  return axios.get('/api/v1/proxy/protocols/DYNAMIC_RESIDENTIAL')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching data:', error)
      throw error
    })
}

// Process on mount
onMounted(() => {
  console.log('Homepage mounted...')
  handleFallbackOAuth() // Check for fallback OAuth callback
  getProtocols()
})
</script>
