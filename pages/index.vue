<template>
  <div class="min-h-screen">
    <!-- Animated Background Particles -->
    <div class="particles-bg">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
    

    <!-- Header -->
    <header class="header-dark shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <div class="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mr-3 neon-glow"></div>
            <span class="text-xl font-bold text-white neon-text">DYNAVERA</span>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <div class="relative group">
              <button class="flex items-center text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                Product Purchase
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <a href="/about" class="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">About Us</a>
          </nav>

          <!-- Right side -->
          <div class="flex items-center space-x-4">
            <div class="relative">
              <button class="flex items-center text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">
                中文
                <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <a href="/login" class="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors">Log in</a>
            <a href="/register" class="btn-primary">
              Register
            </a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="section-dark py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column -->
          <div>
            <h1 class="text-4xl lg:text-5xl font-bold text-white mb-6 neon-text">
              <span class="block">Enterprise-level</span>
              <span class="block">Global proxy IP</span>
              <span class="block">screening service</span>
            </h1>
            <p class="text-lg text-gray-300 mb-8">
              Perfectly compatible with IP requirements in any scenario, while maintaining excellence and stability.
            </p>
            <button class="btn-primary text-lg">
              Register now →
            </button>
            
            <!-- Stats -->
            <div class="grid grid-cols-3 gap-8 mt-12">
              <div class="text-center">
                <div class="text-2xl font-bold stat-number">47 M+</div>
                <div class="text-sm text-gray-400">Dynamic Residence</div>
              </div>
              <div class="text-center border-l border-r border-gray-600">
                <div class="text-2xl font-bold stat-number">99.99%</div>
                <div class="text-sm text-gray-400">Global Data Centers</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold stat-number">&lt; 400ms</div>
                <div class="text-sm text-gray-400">ISP Operators</div>
              </div>
            </div>
          </div>

          <!-- Right Column - Hero Illustration -->
          <div class="flex items-center justify-center hero-float globe-container">
            <img src="~/assets/images/hero-illustration.svg" alt="Global Network" class="w-full h-auto max-w-md hero-sphere" />
          </div>
        </div>
      </div>
    </section>

    <!-- Diverse Application Scenarios -->
    <section class="py-20 section-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-white mb-4 neon-text">Diverse Application Scenarios</h2>
          <div class="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <!-- Spider Data Collection -->
          <div class="glass-card rounded-lg shadow-lg p-6 text-center card-hover">
            <div class="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/spider-icon.svg" alt="Spider" class="w-8 h-8" />
            </div>
            <h3 class="font-semibold text-white">Spider Data Collection</h3>
          </div>

          <!-- ASO Optimization -->
          <div class="glass-card rounded-lg shadow-lg p-6 text-center card-hover">
            <div class="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/aso-icon.svg" alt="ASO" class="w-8 h-8" />
            </div>
            <h3 class="font-semibold text-white">Effectual Quantity ASO Optimization</h3>
          </div>

          <!-- Game Optimization -->
          <div class="glass-card rounded-lg shadow-lg p-6 text-center card-hover">
            <div class="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/game-icon.svg" alt="Game" class="w-8 h-8" />
            </div>
            <h3 class="font-semibold text-white">Commentary monitoring game optimization</h3>
          </div>

          <!-- Market Analysis -->
          <div class="glass-card rounded-lg shadow-lg p-6 text-center card-hover">
            <div class="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/market-icon.svg" alt="Market" class="w-8 h-8" />
            </div>
            <h3 class="font-semibold text-white">Market Analysis</h3>
          </div>

          <!-- E-commerce -->
          <div class="glass-card rounded-lg shadow-lg p-6 text-center card-hover">
            <div class="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/ecommerce-icon.svg" alt="E-commerce" class="w-8 h-8" />
            </div>
            <h3 class="font-semibold text-white">E-commerce gathering</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section class="py-20 section-dark">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-white mb-4 neon-text">Why choose DYNAVERA?</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Enterprise-level solution -->
          <div class="glass-card rounded-lg p-6 text-center card-hover">
            <div class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/enterprise-icon.svg" alt="Enterprise" class="w-6 h-6" />
            </div>
            <h3 class="font-bold text-white mb-3">Enterprise-level solution</h3>
            <p class="text-gray-300 text-sm">
              The HTTP proxy for DYNAVERA uses intelligent network capture and integration technology algorithms to achieve higher success rates.
            </p>
          </div>

          <!-- Unlimited Targets -->
          <div class="glass-card rounded-lg p-6 text-center card-hover">
            <div class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/unlimited-icon.svg" alt="Unlimited" class="w-6 h-6" />
            </div>
            <h3 class="font-bold text-white mb-3">Unlimited Targets</h3>
            <p class="text-gray-300 text-sm">
              There are no restrictions or constraints on your goals, making any data collection work smoother.
            </p>
          </div>

          <!-- Proxy Pool Growth -->
          <div class="glass-card rounded-lg p-6 text-center card-hover">
            <div class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/pool-icon.svg" alt="Pool" class="w-6 h-6" />
            </div>
            <h3 class="font-bold text-white mb-3">Proxy Pool Growth</h3>
            <p class="text-gray-300 text-sm">
              We ensure that DYNAVERA's HTTP proxy is stable and reliable, and we continuously strive to expand the size of the proxy IP pool to meet the needs of each customer.
            </p>
          </div>

          <!-- 7*24 Support -->
          <div class="glass-card rounded-lg p-6 text-center card-hover">
            <div class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 icon-glow">
              <img src="~/assets/images/support-icon.svg" alt="Support" class="w-6 h-6" />
            </div>
            <h3 class="font-bold text-white mb-3">Supports 7*24 hours</h3>
            <p class="text-gray-300 text-sm">
              Our customers can contact us at any time, and we will respond to their urgent needs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Cards Section -->
    <section class="py-20 section-darker">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Residential Proxies -->
          <div class="glass-card border border-gray-600 rounded-lg p-6 card-hover">
            <div class="flex items-center mb-6">
              <div class="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mr-3 flex items-center justify-center icon-glow">
                <img src="~/assets/images/residential-icon.svg" alt="Residential" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-white">Residential Proxies</h3>
            </div>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-300">Owns 47 million rotating IP pool</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Supports 196 countries</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Supports extraction/port mode</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Supports HTTP/Socks5 protocol</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Unlimited concurrency</span>
              </li>
            </ul>
            
            <button class="w-full btn-buy">
              Buy now
            </button>
          </div>

          <!-- Static Datacenter Proxies -->
          <div class="glass-card border border-gray-600 rounded-lg p-6 card-hover">
            <div class="flex items-center mb-6">
              <div class="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mr-3 flex items-center justify-center icon-glow">
                <img src="~/assets/images/datacenter-icon.svg" alt="Datacenter" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-white">Static Datacenter Proxies</h3>
            </div>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">54 global data centers</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">100% exclusive</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">99.99% online rate</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Multiple broadband billing models available</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Native/Special Line Acceleration Optional</span>
              </li>
            </ul>
            
            <button class="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              Buy Now
            </button>
          </div>

          <!-- Static Residential Proxies -->
          <div class="glass-card border border-gray-600 rounded-lg p-6 card-hover">
            <div class="flex items-center mb-6">
              <div class="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded mr-3 flex items-center justify-center icon-glow">
                <img src="~/assets/images/static-residential-icon.svg" alt="Static Residential" class="w-6 h-6" />
              </div>
              <h3 class="text-xl font-bold text-white">Static Residential Proxies</h3>
            </div>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Supports 16+ countries</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">100% real person attributes</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">100% Customized UDP/DNS Selection</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Multiple broadband billing models available</span>
              </li>
              <li class="flex items-center">
                <div class="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <span class="text-gray-700">Native/Special Line Acceleration Optional</span>
              </li>
            </ul>
            
            <button class="w-full bg-gray-800 text-white py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="section-dark py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Left Section -->
          <div>
            <div class="mb-6">
                          <div class="w-32 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded flex items-center justify-center mb-4 neon-glow">
              <span class="text-white text-sm font-bold">DYNAVERA</span>
            </div>
          </div>
          <p class="text-gray-300 leading-relaxed">
            Relying on the underlying resource advantages covering the world and in-depth industry scenario insights, DYNAVERA Nanny-level agent IP service system continuously strengthen the core support role in the business ecosystem of partners.
          </p>
          </div>

          <!-- Right Section -->
          <div class="grid grid-cols-3 gap-8">
            <!-- Product Purchase -->
            <div>
              <h4 class="font-bold text-white mb-4">Product Purchase</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-300 hover:text-cyan-400 transition-colors">Dynamic Residential Proxy</a></li>
                <li><a href="#" class="text-gray-300 hover:text-cyan-400 transition-colors">Static Residential Proxies</a></li>
                <li><a href="#" class="text-gray-300 hover:text-cyan-400 transition-colors">Static Datacenter Proxy</a></li>
              </ul>
            </div>

            <!-- Terms -->
            <div>
              <h4 class="font-bold text-white mb-4">Terms</h4>
              <ul class="space-y-2">
                <li><a href="/privacy-policy" class="text-gray-300 hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" class="text-gray-300 hover:text-cyan-400 transition-colors">Legal Notice</a></li>
                <li><a href="#" class="text-gray-300 hover:text-cyan-400 transition-colors">Refund Agreement</a></li>
              </ul>
            </div>

            <!-- Collaboration Support -->
            <div>
              <h4 class="font-bold text-white mb-4">Collaboration Support</h4>
              <ul class="space-y-2">
                <li><a href="/about" class="text-gray-300 hover:text-cyan-400 transition-colors">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Import Tailwind CSS and custom styles
import '~/assets/css/tailwind.css';
import '~/assets/css/custom.css';
</script>
