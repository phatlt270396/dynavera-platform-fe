<script setup lang="ts">
import FooterBar from '~/components/footerBar.vue';
import TopBar from '~/components/topBar.vue';

</script>

<template>
  <div class="h-screen">
      <TopBar/>
      <section class="relative w-full h-[560px] bg-gray-200 flex items-center justify-center text-center px-4 m-auto">
        <!-- Background Image -->
        <img src="/assets/images/aboutus.jpg" alt="Background"
            class="absolute inset-0 w-full h-full object-cover">

        <div class="relative z-10 text-white">
          <h2 class="text-2xl md:text-4xl font-bold font- mb-4">About Us</h2>
          <h1 class="text-2xl md:text-4xl font-bold">
            Enterprise-level global proxy IP screening service
          </h1>
        </div>
      </section>

      <!-- Content Section -->
      <section class="max-w-7xl mx-auto px-6 py-12 text-center md:text-left">
          <p class="mb-6">
            Founded in 2025 and headquartered in Singapore, <span class="font-semibold">DYNAVERAPTE.LTD.</span> is a high-tech enterprise dedicated to providing global proxy IP products and services to Chinese internet companies expanding overseas, including cross-border e-commerce, international game publishing, and international mobile advertising.
          </p>

          <p class="mb-6">
            Leveraging its global infrastructure and core IP library retention algorithms, <span class="font-semibold">DYNAVERAPTE.LTD.</span> offers carefully selected proxy IPs tailored to specific business needs. These include static IDC, static residential ISP, and dynamic residential IP. Covering over 180 countries and regions, <span class="font-semibold">DYNAVERAPTE.LTD.</span> strives to empower businesses on their global journey and is a trusted choice for many renowned global brands.
          </p>

          <p class="font-medium">
            Company Address: 50 Chinasweeroad, #08-02, Thongchai Building, Singapore 169874
          </p>
      </section>
  
     <FooterBar/>
  </div>
</template>