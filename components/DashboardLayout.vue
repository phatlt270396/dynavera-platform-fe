<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <DashboardSidebar />
    
    <!-- Main Content Area -->
    <div class="flex-1 ml-96">
      <!-- Header -->
      <DashboardHeader />
      
      <!-- Main Content -->
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
// Components will be auto-imported by Nuxt
</script>
