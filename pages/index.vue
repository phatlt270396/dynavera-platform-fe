<template>
  <div class="min-h-screen bg-gray-50 network-bg pt-16">
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
    <section id="vanta-canvas" class="bg-black py-20 pt-32 relative overflow-hidden min-h-screen flex items-center">
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column -->
          <div class="animate-slide-in-left">
            <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span class="block text-green-500">Enterprise-level</span>
              <span class="block">Global proxy IP</span>
              <span class="block">screening service</span>
            </h1>
            <p class="text-lg text-white/80 mb-8 leading-relaxed">
              Perfectly compatible with IP requirements in any scenario, while maintaining excellence and stability.
            </p>
            <button class="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 mb-4">
              <span>Register now</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
            
            <!-- Stats -->
            <div class="flex space-x-8 mt-8">
              <div class="text-center">
                <div class="text-2xl font-bold text-white">47 M+</div>
                <div class="text-sm text-white/60">Dynamic Residence</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-white">99.99%</div>
                <div class="text-sm text-white/60">Global Data Centers</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-white">&lt; 400ms</div>
                <div class="text-sm text-white/60">ISP Operators</div>
              </div>
            </div>
            
            <!-- Disclaimer -->
            <p class="text-xs text-gray-400 mt-6">
              Note: All products only support use in overseas network environments
            </p>
          </div>

          <!-- Right Column - Empty for Vanta background -->
          <div class="relative">
            <!-- Contact Information -->
            <!-- <div class="absolute right-0 top-0 space-y-6">
              <div class="flex items-center space-x-3 text-white">
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <span class="text-sm">24小时在线咨询</span>
              </div>
              
              <div class="flex items-center space-x-3 text-white">
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="text-sm">公众号</span>
              </div>
              
              <div class="flex items-center space-x-3 text-white">
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span class="text-sm">微信客服</span>
              </div>
              
              <div class="flex items-center space-x-3 text-white">
                <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <span class="text-sm">TG客服</span>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- Product Cards Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Residential Proxies -->
          <div class="bg-white rounded-lg shadow-sm border p-8 relative hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <!-- Logo and Title -->
            <div class="flex items-center mb-6">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">Residential Proxies</h3>
            </div>
            
            <!-- Price -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-gray-900">¥10</div>
              <div class="text-gray-600">/ GB</div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-600 mb-8">
              High-quality dynamic residential proxies for global data collection and market research.
            </p>
            
            <!-- Features -->
            <ul class="space-y-4 mb-8">
              <li class="flex items-center hover:bg-green-50 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-green-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 group-hover/item:text-green-700 transition-colors duration-200">47 million rotating IP pool</span>
              </li>
              <li class="flex items-center hover:bg-green-50 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-green-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 group-hover/item:text-green-700 transition-colors duration-200">Supports 196 countries</span>
              </li>
              <li class="flex items-center hover:bg-green-50 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-green-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 group-hover/item:text-green-700 transition-colors duration-200">HTTP/Socks5 protocol</span>
              </li>
              <li class="flex items-center hover:bg-green-50 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-green-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 group-hover/item:text-green-700 transition-colors duration-200">Unlimited concurrency</span>
              </li>
            </ul>
            
            <!-- CTA Button -->
            <button class="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn">
              <span class="group-hover/btn:translate-x-1 transition-transform duration-300 inline-block">Buy now →</span>
            </button>
          </div>

          <!-- Data Center Proxies (Highlighted) -->
          <div class="bg-green-600 rounded-lg shadow-sm border border-green-600 p-8 relative transform scale-105 hover:shadow-xl hover:scale-110 transition-all duration-300 group">
            <!-- Logo and Title -->
            <div class="flex items-center mb-6">
              <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white">Data Center Proxies</h3>
            </div>
            
            <!-- Price -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-white">¥8</div>
              <div class="text-white/80">/ GB</div>
            </div>
            
            <!-- Description -->
            <p class="text-white/80 mb-8">
              High-performance static datacenter proxies for enterprise-level applications.
            </p>
            
            <!-- Divider -->
            <div class="border-t border-white/20 mb-8"></div>
            
            <!-- Features -->
            <ul class="space-y-4 mb-8">
              <li class="flex items-center hover:bg-white/10 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-white mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white group-hover/item:text-green-200 transition-colors duration-200">54 global data centers</span>
              </li>
              <li class="flex items-center hover:bg-white/10 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-white mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white group-hover/item:text-green-200 transition-colors duration-200">99.99% uptime guarantee</span>
              </li>
              <li class="flex items-center hover:bg-white/10 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-white mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white group-hover/item:text-green-200 transition-colors duration-200">Premium Support</span>
              </li>
              <li class="flex items-center hover:bg-white/10 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-white mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-white group-hover/item:text-green-200 transition-colors duration-200">Dedicated IP addresses</span>
              </li>
            </ul>
            
            <!-- CTA Button -->
            <button class="w-full bg-white text-green-600 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn">
              <span class="group-hover/btn:translate-x-1 transition-transform duration-300 inline-block">Buy now →</span>
            </button>
          </div>

          <!-- ISP Proxies -->
          <div class="bg-white rounded-lg shadow-sm border p-8 relative hover:shadow-lg hover:scale-105 transition-all duration-300 group">
            <!-- Logo and Title -->
            <div class="flex items-center mb-6">
              <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">ISP Proxies</h3>
            </div>
            
            <!-- Price -->
            <div class="mb-6">
              <div class="text-3xl font-bold text-gray-900">¥12</div>
              <div class="text-gray-600">/ GB</div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-600 mb-8">
              Premium ISP-level proxies for high-speed and reliable connections.
            </p>
            
            <!-- Features -->
            <ul class="space-y-4 mb-8">
              <li class="flex items-center hover:bg-green-50 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-green-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 group-hover/item:text-green-700 transition-colors duration-200">16+ ISP operators</span>
              </li>
              <li class="flex items-center hover:bg-green-50 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-green-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 group-hover/item:text-green-700 transition-colors duration-200">Ultra-fast connection</span>
              </li>
              <li class="flex items-center hover:bg-green-50 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-green-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 group-hover/item:text-green-700 transition-colors duration-300">Dedicated Support</span>
              </li>
              <li class="flex items-center hover:bg-green-50 p-2 rounded-lg transition-all duration-200 group/item">
                <svg class="w-5 h-5 text-green-500 mr-3 group-hover/item:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700 group-hover/item:text-green-700 transition-colors duration-200">Custom bandwidth options</span>
              </li>
            </ul>
            
            <!-- CTA Button -->
            <button class="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 hover:scale-105 hover:shadow-lg transition-all duration-300 group/btn">
              <span class="group-hover/btn:translate-x-1 transition-transform duration-300 inline-block">Buy now →</span>
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
            <div class="p-2 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <img src="/assets/images/diverse-1.png" alt="Spider Data Collection Icon" class="text-white w-32 h-28"/>
            </div>
            <h3 class="font-semibold text-gray-900 text-sm">Spider Data Collection</h3>
          </div>

          <!-- ASO Optimization -->
          <div class="product-card-modern text-center text-sm mt-0 md:mt-14">
            <div class="p-2 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <img src="/assets/images/diverse-2.png" alt="ASO Icon" class="text-white w-32 h-28"/>
            </div>
            <h3 class="font-semibold text-gray-900">Effectual Quantity ASO Optimization</h3>
          </div>

          <!-- Game Optimization -->
          <div class="product-card-modern text-center text-sm">
           <div class="p-2 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <img src="/assets/images/diverse-3.png" alt="ASO Icon" class="text-white w-32 h-28"/>
            </div>
            <h3 class="font-semibold text-gray-900">Commentary monitoring game optimization</h3>
          </div>

          <!-- Market Analysis -->
          <div class="product-card-modern text-center text-sm mt-0 md:mt-14">
            <div class="p-2 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <img src="/assets/images/diverse-4.png" alt="Market Analysis Icon" class="text-white w-32 h-28"/>
            </div>
            <h3 class="font-semibold text-gray-900">Market Analysis</h3>
          </div>

          <!-- E-commerce -->
          <div class="product-card-modern text-center text-sm">
           <div class="p-2 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <img src="/assets/images/diverse-5.png" alt="ASO Icon" class="text-white w-32 h-28"/>
            </div>
            <h3 class="font-semibold text-gray-900">E-commerce gathering</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="text-center mb-16 animate-slide-in-up">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Why choose DYNAVERA?</h2>
        </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Card 1: Easy To Use -->
          <div class="text-center bg-white rounded-lg shadow-sm border-2 border-transparent hover:border-green-500 p-8 hover:shadow-lg transition-all duration-300 group hover:scale-105">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3">Easy To Use</h3>
            
            <!-- Underline -->
            <div class="w-12 h-0.5 bg-green-500 mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>
            
            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              You are going to use a passage of Lorem ipsum, you need to be sure passage of Lorem ipsum.
            </p>
          </div>

          <!-- Card 2: Awesome Design -->
          <div class="text-center bg-white rounded-lg shadow-sm border-2 border-transparent hover:border-green-500 p-8 hover:shadow-lg transition-all duration-300 group hover:scale-105">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3">Awesome Design</h3>
            
            <!-- Underline -->
            <div class="w-12 h-0.5 bg-green-500 mx-auto mb-4"></div>
            
            <!-- Description -->
            <p class="text-gray-600 text-sm mb-6 leading-relaxed">
              You are going to use a passage of Lorem ipsum, you need to be sure passage of Lorem ipsum.
            </p>
          </div>

          <!-- Card 3: Easy to Customize -->
          <div class="text-center bg-white rounded-lg shadow-sm border-2 border-transparent hover:border-green-500 p-8 hover:shadow-lg transition-all duration-300 group hover:scale-105">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <svg class="w-4 h-4 text-green-600 absolute -top-1 -right-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3">Easy to Customize</h3>
            
            <!-- Underline -->
            <div class="w-12 h-0.5 bg-green-500 mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>
            
            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              You are going to use a passage of Lorem ipsum, you need to be sure passage of Lorem ipsum.
            </p>
          </div>

          <!-- Card 4: Any Time Support -->
          <div class="text-center bg-white rounded-lg shadow-sm border-2 border-transparent hover:border-green-500 p-8 hover:shadow-lg transition-all duration-300 group hover:scale-105">
            <!-- Icon -->
            <div class="w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-green-600 group-hover:text-green-700 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-gray-900 mb-3">Any Time Support</h3>
            
            <!-- Underline -->
            <div class="w-12 h-0.5 bg-green-500 mx-auto mb-4 group-hover:w-16 transition-all duration-300"></div>
            
            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
              You are going to use a passage of Lorem ipsum, you need to be sure passage of Lorem ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Promotional Banner Section -->
    <section class="py-12 bg-gradient-to-br from-gray-900 to-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl">
          <!-- Background Pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-full h-full">
              <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" stroke-width="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div class="absolute bottom-8 left-8 w-16 h-16 bg-white/5 rounded-full animate-pulse" style="animation-delay: 1s;"></div>
          <div class="absolute top-1/2 right-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse" style="animation-delay: 2s;"></div>

          <div class="flex flex-col lg:flex-row items-center justify-between relative z-10">
            <!-- Left Content -->
            <div class="text-center lg:text-left mb-8 lg:mb-0 lg:mr-8">
              <!-- Main Number -->
              <div class="text-4xl md:text-5xl font-bold text-white mb-3">
                47M+
              </div>
              
              <!-- Subtitle -->
              <div class="text-white text-lg md:text-xl mb-3 font-semibold">
                Global Dynamic IP Pool
              </div>
              
              <!-- Description -->
              <div class="text-green-100 text-sm md:text-base mb-6 max-w-md">
                Experience the world's largest proxy network with zero-risk free trial. Get started instantly with our premium residential and datacenter proxies.
              </div>
              
              <!-- CTA Button -->
              <button class="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center mx-auto lg:mx-0 group">
                <span>Start Free Trial</span>
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </div>

            <!-- Right Content -->
            <div class="flex flex-col items-center lg:items-end space-y-3">
              <!-- DYNAVERA Logo -->
              <img src="/assets/images/dynavera/dynavera-logo-transparent.png" alt="DYNAVERA Logo" class="h-16 md:h-20 w-auto" />
              
              <!-- Stats -->
              <div class="text-center lg:text-right">
                <div class="text-white text-xs opacity-80 mb-1">Trusted by</div>
                <div class="text-xl md:text-2xl font-bold text-white">10,000+</div>
                <div class="text-green-200 text-xs">Active Users</div>
              </div>
            </div>
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

// Vanta.js Globe effect
let vantaEffect = null

// Process on mount
onMounted(() => {
  console.log('Homepage mounted...')
  handleFallbackOAuth() // Check for fallback OAuth callback
  getProtocols()
  
  // Initialize Vanta.js Globe effect
  if (process.client && typeof window !== 'undefined') {
    // Wait for scripts to load
    const initVanta = () => {
      if (window.VANTA && window.VANTA.GLOBE) {
        vantaEffect = window.VANTA.GLOBE({
          el: "#vanta-canvas",
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 0.7,
          scaleMobile: 0.7,
          color: 0x22c55e,
          color2: 0xffffff,
          backgroundColor: 0x000000,
          size: 0.8,
          points: 5.00,
          maxDistance: 20.00,
          spacing: 15.00
        })
      } else {
        // Retry after a short delay
        setTimeout(initVanta, 100)
      }
    }
    
    // Start initialization
    initVanta()
  }
})

// Cleanup on unmount
onUnmounted(() => {
  if (vantaEffect) {
    vantaEffect.destroy()
  }
})
</script>