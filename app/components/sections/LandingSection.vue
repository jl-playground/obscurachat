<template>
  <section
    id="landing"
    class="relative py-20 md:py-32 lg:py-40 overflow-hidden"
  >
    <!-- Animated Gradient Background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-soft-coral/20 to-transparent rounded-full blur-3xl opacity-20 dark:opacity-10 animate-pulse" />
      
      <!-- Floating particles -->
      <div v-for="(particle, i) in floatingParticles" :key="i" 
        class="absolute w-2 h-2 rounded-full opacity-40"
        :style="particle.style"
      />
    </div>

    <UContainer class="text-center max-w-4xl relative z-10">
      <!-- Main headline -->
      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal dark:text-off-white leading-tight"
      >
        <span class="bg-gradient-to-r from-primary-600 to-soft-coral bg-clip-text text-transparent">
          {{ $t("hero.title") }}
        </span>
      </h1>

      <!-- Subtitle -->
      <p class="mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
        {{ $t("hero.subtitle") }}
      </p>

      <!-- CTA Buttons -->
      <div class="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <UButton
          :label="$t('nav.patreon')"
          variant="solid"
          size="xl"
          class="font-bold cursor-pointer bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 md:px-10 py-3 md:py-4 rounded-lg transition-all duration-300 w-full sm:w-auto"
          @click="patreonNavigator"
        />
        <UButton
          variant="outline"
          size="xl"
          label="Learn More"
          class="font-bold cursor-pointer border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-950 px-8 md:px-10 py-3 md:py-4 rounded-lg transition-all duration-300 w-full sm:w-auto"
          @click="scrollToFeatures"
        />
      </div>

      <!-- Trust indicator -->
      <div class="mt-12 md:mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
          Join thousands of users connecting through meaningful conversations
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const floatingParticles = computed(() => {
  return Array.from({ length: 15 }, (_, i) => {
    const randomX = Math.random() * 100
    const randomY = Math.random() * 100
    const randomDelay = Math.random() * 2
    const randomDuration = 8 + Math.random() * 4
    const color = i % 2 === 0 ? 'rgb(91, 75, 138)' : 'rgb(255, 127, 102)'

    return {
      style: {
        left: `${randomX}%`,
        top: `${randomY}%`,
        backgroundColor: color,
        animation: `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`
      }
    }
  })
})

const patreonNavigator = () => {
  window.open('https://www.patreon.com/obscurachat', '_blank')
}

const scrollToFeatures = () => {
  const element = document.getElementById('how-it-works')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// Add floating animation if not already in CSS
onMounted(() => {
  if (!document.querySelector('style[data-floating-animation]')) {
    const style = document.createElement('style')
    style.setAttribute('data-floating-animation', 'true')
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        25% { transform: translateY(-20px) translateX(10px); }
        50% { transform: translateY(-40px) translateX(-10px); }
        75% { transform: translateY(-20px) translateX(15px); }
      }
    `
    document.head.appendChild(style)
  }
})
</script>
