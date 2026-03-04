<template>
  <section class="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 scroll-animate">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Trusted by Thousands
        </h2>
        <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Join a community of real people looking for genuine connections
        </p>
      </div>

      <!-- Trust Badges -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-white rounded-lg p-8 text-center border border-gray-200 scroll-animate hover-lift">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">100% Verified</h3>
          <p class="text-gray-600">All users go through our verification process for authenticity</p>
        </div>

        <div class="bg-white rounded-lg p-8 text-center border border-gray-200 scroll-animate hover-lift">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Bank-Level Security</h3>
          <p class="text-gray-600">Military-grade encryption protects all your data</p>
        </div>

        <div class="bg-white rounded-lg p-8 text-center border border-gray-200 scroll-animate hover-lift">
          <div class="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-900 mb-2">24/7 Support</h3>
          <p class="text-gray-600">Our team is always available to help</p>
        </div>
      </div>

      <!-- User Testimonials -->
      <div class="mb-16">
        <h3 class="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          What Our Users Say
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg p-8 border border-gray-200 scroll-animate hover-lift">
            <div class="flex items-center mb-4">
              <div class="flex gap-1">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">
              "Finally found someone who gets me. Obscurachat made it easy and safe to be myself while dating."
            </p>
            <p class="font-semibold text-gray-900">- Sarah M.</p>
          </div>

          <div class="bg-white rounded-lg p-8 border border-gray-200 scroll-animate hover-lift">
            <div class="flex items-center mb-4">
              <div class="flex gap-1">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">
              "The privacy features are exceptional. I can chat freely without worrying about my data."
            </p>
            <p class="font-semibold text-gray-900">- James T.</p>
          </div>

          <div class="bg-white rounded-lg p-8 border border-gray-200 scroll-animate hover-lift">
            <div class="flex items-center mb-4">
              <div class="flex gap-1">
                <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            <p class="text-gray-600 mb-6 italic">
              "Met my partner on Obscurachat. The matching algorithm is surprisingly accurate!"
            </p>
            <p class="font-semibold text-gray-900">- Emma & Alex</p>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="bg-gradient-to-r from-primary-600 to-soft-coral rounded-lg p-12 scroll-animate">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          <div>
            <p class="text-3xl md:text-4xl font-bold mb-2">45K+</p>
            <p class="text-white/90">Active Users</p>
          </div>
          <div>
            <p class="text-3xl md:text-4xl font-bold mb-2">98%</p>
            <p class="text-white/90">Satisfaction Rate</p>
          </div>
          <div>
            <p class="text-3xl md:text-4xl font-bold mb-2">32K+</p>
            <p class="text-white/90">Success Stories</p>
          </div>
          <div>
            <p class="text-3xl md:text-4xl font-bold mb-2">0</p>
            <p class="text-white/90">Data Breaches</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.scroll-animate')
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
