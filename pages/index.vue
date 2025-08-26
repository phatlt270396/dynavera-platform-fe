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
            <span class="block text-green-500">{{ t('home.hero.title.line1') }}</span>
          <span class="block">{{ t('home.hero.title.line2') }}</span>
          <span class="block">{{ t('home.hero.title.line3') }}</span>
        </h1>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          {{ t('home.hero.subtitle') }}
        </p>
        <button class="btn-modern btn-register-modern hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <span class="flex items-center justify-center">
          {{ t('home.hero.registerButton') }}
          <svg class="ml-2 w-5 h-5 arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
          </span>
        </button>
        
        <!-- Stats -->
        <div class="stats-grid-modern">
          <div class="stat-item-modern">
          <div class="animate-pulse-slow text-base md:text-[32px] text-green-500 mb-2 font-bold">{{ t('home.hero.stats.dynamicResidence.value') }}</div>
          <div class="stat-label-modern">{{ t('home.hero.stats.dynamicResidence.label') }}</div>
          </div>
          <div class="stat-item-modern">
          <div class="animate-pulse-slow text-base md:text-[32px] text-green-500 mb-2 font-bold">{{ t('home.hero.stats.globalDataCenters.value') }}</div>
          <div class="stat-label-modern">{{ t('home.hero.stats.globalDataCenters.label') }}</div>
          </div>
          <div class="stat-item-modern">
          <div class="animate-pulse-slow text-base md:text-[32px] text-green-500 mb-2 font-bold !w-auto">{{ t('home.hero.stats.ispOperators.value') }}</div>
          <div class="stat-label-modern">{{ t('home.hero.stats.ispOperators.label') }}</div>
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
              <h3 class="product-card-title">{{ t('home.products.residentialProxies.title') }}</h3>
            </div>
            
            <ul class="feature-list-modern">
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.residentialProxies.features.0') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.residentialProxies.features.1') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.residentialProxies.features.2') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.residentialProxies.features.3') }}</span>
              </li>
            </ul>
            
            <button @click="$router.push({ path: '/protocols', query: { item: 'residential-proxies' } })" class="btn-modern btn-success-modern w-full mt-auto">
              Buy now
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
              <h3 class="product-card-title">{{ t('home.products.staticResidential.title') }}</h3>
            </div>
            
            <ul class="feature-list-modern">
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticResidential.features.0') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticResidential.features.1') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticResidential.features.2') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticResidential.features.3') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticResidential.features.4') }}</span>
              </li>
            </ul>
            
            <button @click="$router.push({ path: '/protocols', query: { item: 'static-residential-proxies'} })" class="btn-modern btn-success-modern w-full mt-auto">
              Buy Now
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
              <h3 class="product-card-title">{{ t('home.products.staticDatacenter.title') }}</h3>
            </div>
            
            <ul class="feature-list-modern">
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticDatacenter.features.0') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticDatacenter.features.1') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticDatacenter.features.2') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticDatacenter.features.3') }}</span>
              </li>
              <li>
                <div class="feature-icon">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="feature-text">{{ t('home.products.staticDatacenter.features.4') }}</span>
              </li>
            </ul>
            
            <button @click="$router.push({ path: '/protocols', query: { item: 'static-datacenter-proxies'} })" class="btn-modern btn-success-modern w-full mt-auto">
              Buy Now
            </button>
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
            <div class="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center w-20 h-20">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Spider Data Collection</h3>
          </div>

          <!-- ASO Optimization -->
          <div class="product-card-modern text-center text-sm mt-0 md:mt-14">
            <div class="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center w-20 h-20">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Effectual Quantity ASO Optimization</h3>
          </div>

          <!-- Game Optimization -->
          <div class="product-card-modern text-center text-sm">
           <div class="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center w-20 h-20">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Commentary monitoring game optimization</h3>
          </div>

          <!-- Market Analysis -->
          <div class="product-card-modern text-center text-sm mt-0 md:mt-14">
            <div class="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center w-20 h-20">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Market Analysis</h3>
          </div>

          <!-- E-commerce -->
          <div class="product-card-modern text-center text-sm">
           <div class="bg-gradient-to-br from-teal-500 to-cyan-600 p-4 rounded-xl shadow-lg mx-auto mb-4 flex items-center justify-center w-20 h-20">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

// Initialize i18n
const { useI18n } = await import('~/composables/useI18n')
const { t, initTranslations } = useI18n()

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
onMounted(async () => {
  console.log('Homepage mounted...')
  await initTranslations() // Initialize i18n
  handleFallbackOAuth() // Check for fallback OAuth callback
  getProtocols()
})
</script>
