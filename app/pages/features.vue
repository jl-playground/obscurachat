<template>
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-12 md:py-24">
    <UContainer>
      <!-- Header Section -->
      <section class="text-center mb-16 md:mb-24" aria-labelledby="features-title">
        <h1 
          id="features-title"
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-poppins"
        >
          Why Choose Obscura?
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Experience a dating app that prioritizes genuine connections over superficial judgments.
        </p>
      </section>

      <!-- Features Grid -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" aria-label="Key features">
        <!-- Feature 1 -->
        <article class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl">
            <Icon name="lucide:heart" size="32" class="text-primary-600 dark:text-primary-400" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-poppins">
            Connect First
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Start with meaningful conversations instead of photos. Build genuine connections based on compatibility and shared interests.
          </p>
        </article>

        <!-- Feature 2 -->
        <article class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl">
            <Icon name="lucide:lock" size="32" class="text-primary-600 dark:text-primary-400" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-poppins">
            Privacy First
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Your data is encrypted and protected. We never sell your information or share it with third parties.
          </p>
        </article>

        <!-- Feature 3 -->
        <article class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl">
            <Icon name="lucide:sparkles" size="32" class="text-primary-600 dark:text-primary-400" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-poppins">
            Smart Matching
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Our AI-powered algorithm matches you with people who share your values and interests, not just your location.
          </p>
        </article>

        <!-- Feature 4 -->
        <article class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl">
            <Icon name="lucide:users" size="32" class="text-primary-600 dark:text-primary-400" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-poppins">
            Community Focused
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Join a community of like-minded individuals who value authenticity and real human connection.
          </p>
        </article>

        <!-- Feature 5 -->
        <article class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl">
            <Icon name="lucide:zap" size="32" class="text-primary-600 dark:text-primary-400" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-poppins">
            Lightning Fast
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Optimized for speed and responsiveness. Seamless experience across all devices.
          </p>
        </article>

        <!-- Feature 6 -->
        <article class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div class="mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-xl">
            <Icon name="lucide:shield-check" size="32" class="text-primary-600 dark:text-primary-400" />
          </div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3 font-poppins">
            Safety & Moderation
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            Verified profiles and community guidelines ensure a safe environment for all users.
          </p>
        </article>
      </section>

      <!-- CTA Section -->
      <section class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center" aria-label="Call to action">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4 font-poppins">
          Ready to Find Your Match?
        </h2>
        <p class="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          Join Obscura today and start connecting with people who get you.
        </p>
        <UButton
          label="Download the App"
          variant="solid"
          color="white"
          size="lg"
          class="font-bold"
          aria-label="Download Obscura app"
        />
      </section>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
// Set meta tags for SEO
const title = "Features - Obscura Chat";
const description =
  "Discover the features that make Obscura the best dating app for meaningful connections. Privacy-first, AI-powered matching, and community-focused.";

useHead({
  title,
  meta: [
    { name: "description", content: description },
    { name: "og:title", content: title },
    { name: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ],
});

useSeoMeta({
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
