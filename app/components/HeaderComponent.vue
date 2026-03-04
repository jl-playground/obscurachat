<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300"
  >
    <UContainer class="flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <AppLogo
          class="cursor-pointer hover:opacity-80 transition-opacity duration-200"
          aria-label="Obscura Chat Logo - Click to go home"
          @click="headerClicked"
        />
      </div>

      <!-- Navigation -->
      <nav
        class="flex items-center space-x-1 md:space-x-8 ml-auto"
        aria-label="Main navigation"
      >
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <UButton
            variant="ghost"
            color="gray"
            size="md"
            :to="{ hash: '#how-it-works' }"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            aria-label="Navigate to how it works section"
          >
            {{ $t("nav.how") }}
          </UButton>
          <UButton
            variant="ghost"
            color="gray"
            size="md"
            :to="{ hash: '#philosophy' }"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            aria-label="Navigate to philosophy section"
          >
            {{ $t("nav.philosophy") }}
          </UButton>
          <UButton
            variant="ghost"
            color="gray"
            size="md"
            to="/features"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            aria-label="Navigate to features page"
          >
            {{ $t("nav.features") || "Features" }}
          </UButton>
          <UButton
            variant="ghost"
            color="gray"
            size="md"
            to="/blog"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            aria-label="Navigate to blog page"
          >
            {{ $t("nav.blog") || "Blog" }}
          </UButton>
          <UButton
            variant="ghost"
            color="gray"
            size="md"
            to="/contact"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
            aria-label="Navigate to contact page"
          >
            {{ $t("nav.contact") || "Contact" }}
          </UButton>
        </div>

        <!-- Dark Mode Toggle -->
        <button
          :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          @click="toggleDarkMode"
        >
          <Icon
            v-if="isDark"
            name="lucide:sun"
            size="20"
            class="text-yellow-500"
          />
          <Icon
            v-else
            name="lucide:moon"
            size="20"
            class="text-gray-700"
          />
        </button>

        <!-- Mobile Menu Button -->
        <button
          aria-label="Toggle mobile menu"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <Icon
            :name="mobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
            size="24"
            class="text-gray-700 dark:text-gray-300"
          />
        </button>

        <!-- CTA Button -->
        <UButton
          :label="$t('nav.patreon')"
          variant="solid"
          size="md"
          class="font-bold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white cursor-pointer transition-all duration-300 whitespace-nowrap"
          aria-label="Open Patreon link"
          @click="patreonNavigator"
        />
      </nav>
    </UContainer>

    <!-- Mobile Menu -->
    <transition
      name="slide"
      @enter="onMenuEnter"
      @leave="onMenuLeave"
    >
      <nav
        v-if="mobileMenuOpen"
        class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800"
        aria-label="Mobile navigation menu"
      >
        <UContainer class="py-4 space-y-2">
          <NuxtLink
            to="#how-it-works"
            class="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ $t("nav.how") }}
          </NuxtLink>
          <NuxtLink
            to="#philosophy"
            class="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ $t("nav.philosophy") }}
          </NuxtLink>
          <NuxtLink
            to="/features"
            class="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ $t("nav.features") || "Features" }}
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ $t("nav.blog") || "Blog" }}
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ $t("nav.contact") || "Contact" }}
          </NuxtLink>
        </UContainer>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from '#app'

const router = useRouter()
const mobileMenuOpen = ref(false)
const isDark = ref(false)

// Initialize dark mode state
if (import.meta.client) {
  isDark.value = document.documentElement.classList.contains('dark')
}

const toggleDarkMode = () => {
  if (import.meta.client) {
    document.documentElement.classList.toggle('dark')
    isDark.value = !isDark.value
    // Optional: Save preference to localStorage
    localStorage.setItem(
      'theme-preference',
      isDark.value ? 'dark' : 'light'
    )
  }
}

const patreonNavigator = () => {
  window.open('https://www.patreon.com/obscurachat', '_blank')
}

const headerClicked = async () => {
  mobileMenuOpen.value = false
  router.push({ hash: '#landing' })
}

const onMenuEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.maxHeight = element.scrollHeight + 'px'
}

const onMenuLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.maxHeight = '0'
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.3s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
}
</style>
