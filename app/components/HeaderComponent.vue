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
             to="/faq"
             class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
             aria-label="Navigate to FAQ page"
           >
             FAQ
           </UButton>
           <UButton
             variant="ghost"
             color="gray"
             size="md"
             to="/about"
             class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
             aria-label="Navigate to about page"
           >
             About
           </UButton>
           <UButton
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
      name="slide-down"
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
             to="/faq"
             class="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
             @click="mobileMenuOpen = false"
           >
             FAQ
           </NuxtLink>
           <NuxtLink
             to="/about"
             class="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
             @click="mobileMenuOpen = false"
           >
             About Us
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
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.slide-down-enter-to,
.slide-down-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
}

/* Enhanced button hover effects */
:deep(button) {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(button:hover) {
  transform: translateY(-2px);
}
</style>
