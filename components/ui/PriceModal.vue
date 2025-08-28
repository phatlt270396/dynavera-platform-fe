<template>
  <div v-if="modelValue" class="fixed inset-0 z-30">
    <div class="absolute inset-0 bg-black/40" @click="$emit('update:modelValue', false)"></div>
    <div class="absolute left-1/2 top-10 -translate-x-1/2 w-[640px] bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div class="text-2xl font-semibold mb-6 text-center">Edit/Add</div>
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 sm:col-span-6">
          <label class="block text-sm text-gray-700 mb-1">country</label>
          <select v-model="form.country" class="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option v-for="c in countryList" :key="c" :value="c">{{ c }}</option>
          </select>
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label class="block text-sm text-gray-700 mb-1">Price (RMB/item/month)</label>
          <input v-model.number="form.price" type="number" class="w-full border border-gray-300 rounded-lg px-3 py-2" />
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label class="block text-sm text-gray-700 mb-1">Support Agreement</label>
          <input v-model="form.protocols" type="text" placeholder="Http/Https/Socks5" class="w-full border border-gray-300 rounded-lg px-3 py-2" />
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label class="block text-sm text-gray-700 mb-1">Authentication</label>
          <input v-model="form.auth" type="text" placeholder="Account and password mode" class="w-full border border-gray-300 rounded-lg px-3 py-2" />
        </div>
        <div class="col-span-12 sm:col-span-6">
          <label class="block text-sm text-gray-700 mb-1">broadband</label>
          <select v-model="form.bandwidth" class="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option v-for="b in bandwidthOptions" :key="b" :value="b">{{ b }}</option>
          </select>
        </div>
      </div>
      <div class="mt-6 flex justify-end gap-3">
        <button @click="$emit('update:modelValue', false)" class="px-4 py-2 rounded-lg border border-gray-300">Cancel</button>
        <button @click="onSave" class="px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white">save</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  value: { type: Object, default: () => ({}) },
  countryList: { type: Array, default: () => [] },
  bandwidthOptions: { type: Array, default: () => [] },
})
const emit = defineEmits(['update:modelValue', 'save'])
const form = reactive({ id: null, country: 'United States', price: 0, protocols: 'Http/Https/Socks5', auth: 'Account and password mode', bandwidth: '10M' })
watch(() => props.value, v => { Object.assign(form, { id: v?.id ?? null, country: v?.country ?? 'United States', price: v?.price ?? 0, protocols: v?.protocols ?? 'Http/Https/Socks5', auth: v?.auth ?? 'Account and password mode', bandwidth: v?.bandwidth ?? '10M' }) }, { immediate: true })
const onSave = () => emit('save', { ...form })
</script>
