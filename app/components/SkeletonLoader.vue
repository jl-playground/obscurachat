<template>
  <div class="bg-white rounded-lg overflow-hidden scroll-animate hover-lift">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Loading"
      class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300"
    />
    <div v-else class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
    
    <div class="p-4 md:p-6">
      <div v-if="loading" class="space-y-3">
        <div class="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
        <div class="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div class="h-4 bg-gray-200 rounded w-full animate-pulse" />
      </div>
      <div v-else>
        <h3 class="font-semibold text-gray-900 mb-2">{{ title }}</h3>
        <p class="text-gray-600 text-sm">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  imageUrl: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: 'Loading...'
  },
  description: {
    type: String,
    default: 'Content is loading...'
  }
})

const loading = ref(true)

setTimeout(() => {
  loading.value = false
}, 500)
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
