<template>
  <section class="py-16 md:py-24 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 scroll-animate">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-soft-coral bg-clip-text text-transparent">
          Why Choose Us
        </h2>
        <p class="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Join thousands of users who have found meaningful connections on Obscurachat
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Active Users Stat -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 scroll-animate hover-lift">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-soft-coral rounded-full mb-6">
              <IconUsers class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-4xl font-bold text-primary-600 mb-2">
              <span ref="activeUsersCounter">{{ activeUsers }}</span>K+
            </h3>
            <p class="text-gray-700 font-semibold mb-2">Active Users</p>
            <p class="text-gray-600 text-sm">Growing community of genuine people</p>
          </div>
        </div>

        <!-- Successful Matches Stat -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 scroll-animate hover-lift">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-soft-coral rounded-full mb-6">
              <IconHeart class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-4xl font-bold text-soft-coral mb-2">
              <span ref="matchesCounter">{{ matches }}</span>K+
            </h3>
            <p class="text-gray-700 font-semibold mb-2">Successful Matches</p>
            <p class="text-gray-600 text-sm">Real connections being made daily</p>
          </div>
        </div>

        <!-- Success Stories Stat -->
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-8 scroll-animate hover-lift">
          <div class="text-center">
            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-600 to-soft-coral rounded-full mb-6">
              <IconStar class="w-8 h-8 text-white" />
            </div>
            <h3 class="text-4xl font-bold text-primary-600 mb-2">
              <span ref="storiesCounter">{{ stories }}</span>K+
            </h3>
            <p class="text-gray-700 font-semibold mb-2">Success Stories</p>
            <p class="text-gray-600 text-sm">Couples who met and found love</p>
          </div>
        </div>
      </div>

      <!-- Features List -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-6">
          <div class="flex gap-4 scroll-animate">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <IconCheck class="h-6 w-6" />
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">Complete Privacy</h4>
              <p class="text-gray-600 mt-1">Your identity is completely protected with end-to-end encryption</p>
            </div>
          </div>

          <div class="flex gap-4 scroll-animate">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <IconCheck class="h-6 w-6" />
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">Advanced Matching</h4>
              <p class="text-gray-600 mt-1">Our algorithm finds compatible matches based on interests</p>
            </div>
          </div>

          <div class="flex gap-4 scroll-animate">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <IconCheck class="h-6 w-6" />
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">Verified Users</h4>
              <p class="text-gray-600 mt-1">All users are verified to ensure genuine connections</p>
            </div>
          </div>
        </div>

        <div class="space-y-6">
          <div class="flex gap-4 scroll-animate">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <IconCheck class="h-6 w-6" />
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">24/7 Support</h4>
              <p class="text-gray-600 mt-1">Our dedicated support team is always here to help</p>
            </div>
          </div>

          <div class="flex gap-4 scroll-animate">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <IconCheck class="h-6 w-6" />
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">Safety First</h4>
              <p class="text-gray-600 mt-1">Advanced moderation and reporting tools keep everyone safe</p>
            </div>
          </div>

          <div class="flex gap-4 scroll-animate">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center h-12 w-12 rounded-md bg-primary-600 text-white">
                <IconCheck class="h-6 w-6" />
              </div>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">Mobile First</h4>
              <p class="text-gray-600 mt-1">Seamless experience on any device, anytime, anywhere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'
import { useCountUp } from '~/composables/useCountUp'

const activeUsers = ref(0)
const matches = ref(0)
const stories = ref(0)

const { count: activeUsersCount, startCount: startActiveUsers } = useCountUp(45, 2000)
const { count: matchesCount, startCount: startMatches } = useCountUp(128, 2000)
const { count: storiesCount, startCount: startStories } = useCountUp(32, 2000)

const { observeElements } = useScrollAnimation()

onMounted(() => {
  // Watch for when this section comes into view
  const observer = observeElements('.scroll-animate', () => {
    if (activeUsers.value === 0) {
      startActiveUsers()
      startMatches()
      startStories()
    }
  })

  // Create intersection observer for hover-lift elements
  const hoverElements = document.querySelectorAll('.hover-lift')
  const options = { threshold: 0.1 }
  
  const hoverObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in')
      }
    })
  }, options)

  hoverElements.forEach(el => hoverObserver.observe(el))
})

// Sync count display with the counter values
watch(activeUsersCount, (newVal) => {
  activeUsers.value = newVal
})

watch(matchesCount, (newVal) => {
  matches.value = newVal
})

watch(storiesCount, (newVal) => {
  stories.value = newVal
})
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgba(91, 75, 138, 0.15);
}
</style>
