<template>
    <header class="bg-white h-36 shadow-sm border-b backdrop-blur-sm flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center animate-slide-in-left">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded mr-3 animate-glow"></div>
            <span class="text-xl font-bold gradient-text">DYNAVERA</span>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-8">
            <div class="relative group">
              <button class="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                Product Purchase
                <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <a href="/about" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">About Us</a>
          </nav>

          <!-- Right side -->
          <div class="flex items-center space-x-4 animate-slide-in-right">
            <div class="relative">
              <button class="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">
                中文
                <svg class="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </div>
            <a href="/login" class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105">Log in</a>
            <a href="/register" class="btn-modern btn-primary-modern">
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
</template>