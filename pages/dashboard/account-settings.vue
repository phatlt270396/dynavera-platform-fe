<template>
  <DashboardLayout>
    <div class="max-w-4xl mx-auto bg-white min-h-screen p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-8">Account Information - Account Settings</h1>
      
      <!-- User Account Information Section -->
      <div class="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div class="flex items-start space-x-6">
          <!-- Profile Picture -->
          <div class="w-20 h-20 bg-black rounded-full flex flex-col items-center justify-center">
            <div class="w-8 h-8 bg-green-500 rounded-sm mb-1"></div>
            <span class="text-white text-xs">kookeey</span>
          </div>
          
          <!-- User Details -->
          <div class="flex-1 space-y-4">
            <div class="flex items-center">
              <span class="text-gray-700 w-32">User nickname:</span>
              <div class="flex items-center space-x-3">
                <span class="text-gray-900">Ray Dr</span>
                <a href="#" class="text-green-600 hover:text-green-700 text-sm">Change</a>
              </div>
            </div>
            
            <div class="flex items-center">
              <span class="text-gray-700 w-32">Account level:</span>
              <div class="flex items-center space-x-3">
                <span class="text-gray-900">Normal Account</span>
                <a href="#" class="text-gray-500 hover:text-gray-700 text-sm">Cancel account</a>
              </div>
            </div>
            
            <div class="flex items-center">
              <span class="text-gray-700 w-32">Registration Time:</span>
              <span class="text-gray-900">2025-08-19 15:23</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Developer Information Section -->
      <div class="bg-white rounded-lg border border-gray-200 p-6">
        <div class="space-y-4">
          <div class="flex items-center">
            <span class="text-gray-700 w-32">Developer ID:</span>
            <span class="text-gray-900">7468760</span>
          </div>
          
          <div class="flex items-center">
            <span class="text-gray-700 w-32">Developer Token:</span>
            <div class="flex items-center space-x-3">
              <span class="text-gray-900 font-mono text-sm">ZHluYXZlcmFwdGVAZ21haWwuY29tMTc1NTU5MTc5MTM5NzgwOA==</span>
              <div class="flex items-center space-x-1">
                <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <a href="#" class="text-red-500 hover:text-red-700 text-sm">Refresh</a>
              </div>
            </div>
          </div>
          
          <!-- Warning Message -->
          <div class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p class="text-red-600 text-sm">请妥善保管开发者Token,保障您的数据安全</p>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
// No additional logic needed for this page
</script>
