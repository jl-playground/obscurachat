<template>
  <section
    class="py-12 md:py-20"
    aria-labelledby="testimonials-title"
  >
    <UContainer>
      <h2
        id="testimonials-title"
        class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
      >
        What Our Users Say
      </h2>

      <div class="relative">
        <!-- Carousel Container -->
        <div class="overflow-hidden">
          <transition
            name="slide-fade"
            mode="out-in"
          >
            <div
              :key="currentIndex"
              class="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <article
                v-for="(testimonial, index) in visibleTestimonials"
                :key="`${currentIndex}-${index}`"
                class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <!-- Rating Stars -->
                <div
                  class="flex gap-1 mb-4"
                  :aria-label="`${testimonial.rating} out of 5 stars`"
                >
                  <Icon
                    v-for="i in 5"
                    :key="i"
                    :name="i <= testimonial.rating ? 'lucide:star' : 'lucide:star'"
                    size="20"
                    :class="i <= testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'"
                  />
                </div>

                <!-- Quote -->
                <blockquote class="text-lg text-gray-600 dark:text-gray-300 mb-6 flex-grow italic">
                  "{{ testimonial.quote }}"
                </blockquote>

                <!-- Author Info -->
                <div class="flex items-center gap-4 border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div class="flex-shrink-0">
                    <div
                      class="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold"
                      :aria-label="`Avatar for ${testimonial.author}`"
                    >
                      {{ testimonial.author.charAt(0) }}
                    </div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">
                      {{ testimonial.author }}
                    </p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      {{ testimonial.role }}
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </transition>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex items-center justify-center gap-4 mt-8 flex-wrap">
          <button
            :aria-label="`Show previous testimonials (${currentIndex + 1}/${totalSlides})`"
            class="p-3 rounded-full bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
            @click="previousSlide"
          >
            <Icon
              name="lucide:chevron-left"
              size="24"
              class="text-primary-600 dark:text-primary-400"
            />
          </button>

          <!-- Slide Indicators -->
          <div
            class="flex gap-2"
            role="tablist"
            aria-label="Testimonial slides"
          >
            <button
              v-for="(_, index) in totalSlides"
              :key="index"
              :aria-label="`Go to slide ${index + 1}`"
              :aria-selected="currentIndex === index"
              role="tab"
              :class="[
                'h-3 rounded-full transition-all duration-300',
                currentIndex === index
                  ? 'bg-primary-600 dark:bg-primary-400 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 w-3 hover:bg-gray-400 dark:hover:bg-gray-500'
              ]"
              @click="currentIndex = index"
            ></button>
          </div>

          <button
            :aria-label="`Show next testimonials (${currentIndex + 1}/${totalSlides})`"
            class="p-3 rounded-full bg-primary-100 dark:bg-primary-900 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
            @click="nextSlide"
          >
            <Icon
              name="lucide:chevron-right"
              size="24"
              class="text-primary-600 dark:text-primary-400"
            />
          </button>
        </div>

        <!-- Auto-play indicator -->
        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          Slide {{ currentIndex + 1 }} of {{ totalSlides }}
        </p>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Testimonial {
  quote: string
  author: string
  role: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    quote: 'I finally found someone who gets me. Obscura\'s focus on conversation over photos made all the difference!',
    author: 'Sarah',
    role: 'Matched in 2024',
    rating: 5
  },
  {
    quote: 'As someone concerned about privacy, Obscura\'s approach is refreshing. I can be myself without worry.',
    author: 'Marcus',
    role: 'Long-time User',
    rating: 5
  },
  {
    quote: 'The conversations I had on Obscura were the most genuine I\'ve experienced on any dating app.',
    author: 'Emma',
    role: 'Happy Member',
    rating: 5
  },
  {
    quote: 'I appreciate that the app prioritizes meaningful connections. Quality over quantity.',
    author: 'James',
    role: 'Verified User',
    rating: 4
  },
  {
    quote: 'Finally, a dating app that understands what modern singles really want.',
    author: 'Alex',
    role: 'Active Member',
    rating: 5
  },
  {
    quote: 'Obscura made me feel safe and valued. The community is wonderful!',
    author: 'Jessica',
    role: 'Community Member',
    rating: 5
  }
]

const currentIndex = ref(0)
const itemsPerSlide = 3
const autoplayInterval = ref<NodeJS.Timeout | null>(null)

const visibleTestimonials = computed(() => {
  const start = currentIndex.value * itemsPerSlide
  const end = start + itemsPerSlide
  return testimonials.slice(start, end)
})

const totalSlides = computed(() => {
  return Math.ceil(testimonials.length / itemsPerSlide)
})

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value
}

const previousSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value
}

const startAutoplay = () => {
  autoplayInterval.value = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
