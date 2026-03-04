<template>
  <div class="bg-gradient-to-r from-primary-600 to-soft-coral rounded-lg p-8 md:p-12">
    <div class="max-w-md mx-auto">
      <h3 class="text-2xl md:text-3xl font-bold text-white mb-2">Stay Connected</h3>
      <p class="text-white/90 mb-6">
        Get the latest updates, safety tips, and success stories delivered to your inbox
      </p>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div class="relative">
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
          />
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-off-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ isLoading ? 'Subscribing...' : 'Subscribe Now' }}
        </button>

        <Transition
          enter-active-class="transition-all duration-300"
          leave-active-class="transition-all duration-300"
          enter-from-class="opacity-0 transform scale-95"
          enter-to-class="opacity-100 transform scale-100"
          leave-from-class="opacity-100 transform scale-100"
          leave-to-class="opacity-0 transform scale-95"
        >
          <p v-if="message" :class="messageClass" class="text-sm text-center">
            {{ message }}
          </p>
        </Transition>
      </form>

      <p class="text-white/70 text-xs mt-4 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const isLoading = ref(false)
const message = ref('')
const messageClass = ref('')

const handleSubmit = async () => {
  if (!email.value) return

  isLoading.value = true
  message.value = ''

  try {
    // Simulate API call - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    message.value = 'Thanks for subscribing! Check your email to confirm.'
    messageClass.value = 'text-green-100'
    email.value = ''
    
    setTimeout(() => {
      message.value = ''
    }, 5000)
  } catch (error) {
    message.value = 'Something went wrong. Please try again.'
    messageClass.value = 'text-red-100'
  } finally {
    isLoading.value = false
  }
}
</script>
