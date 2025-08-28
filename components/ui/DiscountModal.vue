<template>
  <div v-if="modelValue" class="fixed inset-0 z-30">
    <div class="absolute inset-0 bg-black/40" @click="$emit('update:modelValue', false)"></div>
    <div class="absolute left-1/2 top-10 -translate-x-1/2 w-[640px] bg-white rounded-xl shadow-lg border border-gray-100 p-6">
      <div class="text-2xl font-semibold mb-6 text-center">Edit/Add</div>
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12">
          <label class="block text-sm text-gray-700 mb-1">country</label>
          <select v-model="form.country" class="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option v-for="c in countryList" :key="c" :value="c">{{ c }}</option>
          </select>
        </div>
        <div class="col-span-12">
          <label class="block text-sm text-gray-700 mb-1">Days</label>
          <select v-model="form.days" class="w-full border border-gray-300 rounded-lg px-3 py-2">
            <option v-for="d in dayOptions" :key="d" :value="d">{{ d }}</option>
          </select>
        </div>
        <div class="col-span-12">
          <label class="block text-sm text-gray-700 mb-1">Discount</label>
          <input v-model="form.discount" type="text" placeholder="e.g., 15% off" class="w-full border border-gray-300 rounded-lg px-3 py-2" />
        </div>
      </div>
      <div class="mt-8 flex justify-center gap-4">
        <button @click="$emit('update:modelValue', false)" class="px-6 py-2 rounded-lg border border-gray-300">Cancel</button>
        <button @click="onSave" class="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white">save</button>
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
  dayOptions: { type: Array, default: () => [] },
})
const emit = defineEmits(['update:modelValue', 'save'])
const form = reactive({ id: null, country: 'United States', days: '30天', discount: '' })
watch(() => props.value, v => { Object.assign(form, { id: v?.id ?? null, country: v?.country ?? 'United States', days: v?.days ?? '30天', discount: v?.discount ?? '' }) }, { immediate: true })
const onSave = () => emit('save', { ...form })
</script>
