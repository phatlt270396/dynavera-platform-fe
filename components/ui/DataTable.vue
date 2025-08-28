<template>
  <div class="overflow-auto rounded-xl border border-gray-100 shadow-sm bg-white">
    <table class="min-w-full text-sm">
      <thead class="bg-gray-50">
        <tr>
          <slot name="head" />
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script setup>
</script>
