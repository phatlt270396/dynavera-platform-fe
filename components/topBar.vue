<template>
    <header class="bg-white h-36 shadow-sm border-b backdrop-blur-sm flex items-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center animate-slide-in-left">
            <img src="/assets/images/dynavera/dynavera-logo.png" alt="DYNAVERA Logo" class="h-20 w-auto mb-2" />
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
            <a href="/register" class="h-12 w-auto flex items-center px-4 bg-green-600 rounded-2xl text-white transition-all duration-300 hover:scale-105">
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
</template>