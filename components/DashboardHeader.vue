<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="flex justify-between items-center px-6 py-4">
      <!-- Left side - placeholder for logo -->
      <div class="text-gray-400 text-sm"></div>
      
      <!-- Right side - user controls -->
      <div class="flex items-center space-x-4">
        <!-- Language Selector -->
        <div class="flex items-center space-x-2">
          <span class="text-sm text-gray-700">中文</span>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        
        <!-- Separator -->
        <div class="w-px h-6 bg-gray-300"></div>
        
        <!-- Balance -->
        <div class="text-sm text-gray-700">
          Balance ¥0
        </div>
        
        <!-- Separator -->
        <div class="w-px h-6 bg-gray-300"></div>
        
                                        <!-- Top Up Button -->
                    <NuxtLink to="/dashboard/recharge" class="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors inline-block">
                      top up
                    </NuxtLink>
        
        <!-- Separator -->
        <div class="w-px h-6 bg-gray-300"></div>
        
        <!-- User Icon -->
        <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
          <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>
