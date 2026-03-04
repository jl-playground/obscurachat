<template>
  <div class="bg-white rounded-lg overflow-hidden border border-gray-200 scroll-animate hover-lift">
    <div class="h-40 bg-gradient-to-r from-primary-600 to-soft-coral flex items-center justify-center">
      <svg class="w-16 h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
    <div class="p-6 text-center">
      <h3 class="text-xl font-bold text-gray-900 mb-1">{{ name }}</h3>
      <p class="text-primary-600 font-semibold mb-3">{{ role }}</p>
      <p class="text-gray-600 text-sm">{{ bio }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 25px -5px rgba(91, 75, 138, 0.1);
}
</style>
