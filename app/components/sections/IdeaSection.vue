<template>
  <section
    id="philosophy"
    class="py-20 md:py-32 lg:py-40 bg-white dark:bg-gray-950"
  >
    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left side: Image with enhanced styling -->
        <div class="relative order-2 lg:order-1">
          <!-- Decorative background element -->
          <div class="absolute -inset-8 bg-gradient-to-br from-primary-100 to-soft-coral/20 dark:from-primary-950 dark:to-gray-800 rounded-3xl opacity-30 blur-2xl" />

          <!-- Image container -->
          <div class="relative">
            <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
              <img
                src="/images/idea-silhouette.png"
                alt="Abstract silhouette visual representing connection and philosophy"
                class="w-full h-auto object-cover aspect-square hover:scale-105 transition-transform duration-500"
              >
            </div>

            <!-- Accent box -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-soft-coral to-primary-600 rounded-2xl opacity-20 dark:opacity-10 blur-xl" />
          </div>
        </div>

        <!-- Right side: Content -->
        <div class="order-1 lg:order-2 max-w-xl">
          <!-- Badge -->
          <div class="inline-block mb-4">
            <span class="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full">
              Our Philosophy
            </span>
          </div>

          <!-- Title -->
          <h2 class="text-4xl md:text-5xl font-bold text-charcoal dark:text-off-white leading-tight mb-6">
            <span class="bg-gradient-to-r from-primary-600 to-soft-coral bg-clip-text text-transparent">
              {{ $t("philosophy.title") }}
            </span>
          </h2>

          <!-- Description -->
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            {{ $t("philosophy.text") }}
          </p>

          <!-- Key points list -->
          <div class="space-y-4">
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center mt-1">
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-gray-700 dark:text-gray-300">Meaningful conversations over superficial judgments</span>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center mt-1">
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-gray-700 dark:text-gray-300">Privacy and authentic connections at the core</span>
            </div>
            <div class="flex gap-4 items-start">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500 dark:bg-primary-400 flex items-center justify-center mt-1">
                <svg
                  class="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="text-gray-700 dark:text-gray-300">Chemistry is built through conversation, not profiles</span>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="mt-10">
            <UButton
              variant="solid"
              size="lg"
              label="Join the Community"
              class="font-bold cursor-pointer bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-lg transition-all duration-300"
              @click="patreonNavigator"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const patreonNavigator = () => {
  window.open('https://www.patreon.com/obscurachat', '_blank')
}
</script>
