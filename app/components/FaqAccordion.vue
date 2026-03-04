<template>
  <div class="bg-gradient-to-b from-off-white to-white rounded-lg overflow-hidden">
    <button
      @click="isOpen = !isOpen"
      class="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
      :aria-expanded="isOpen"
    >
      <span class="font-semibold text-left text-gray-900">{{ title }}</span>
      <div
        class="flex-shrink-0 transform transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      >
        <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </button>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="opacity-0 max-h-0"
      enter-to-class="opacity-100 max-h-96"
      leave-from-class="opacity-100 max-h-96"
      leave-to-class="opacity-0 max-h-0"
    >
      <div v-if="isOpen" class="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <p class="text-gray-600 leading-relaxed">
          {{ content }}
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const isOpen = ref(false)
</script>

<style scoped>
button {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
