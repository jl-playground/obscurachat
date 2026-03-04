<template>
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-12 md:py-24">
    <UContainer>
      <!-- Header Section -->
      <section
        class="text-center mb-16 md:mb-24"
        aria-labelledby="blog-title"
      >
        <h1
          id="blog-title"
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Obscura Blog
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Insights, tips, and stories about dating in the modern age.
        </p>
      </section>

      <!-- Blog Posts Grid -->
      <section
        class="grid grid-cols-1 md:grid-cols-2 gap-8"
        aria-label="Blog posts"
      >
        <!-- Blog Post 1 -->
        <article
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div class="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <Icon
              name="lucide:heart"
              size="64"
              class="text-white opacity-50"
            />
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-sm font-semibold text-primary-600 dark:text-primary-400">Dating Tips</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">March 4, 2026</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              <NuxtLink
                to="/blog/first-conversation"
                class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                How to Start a Great First Conversation
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 flex-grow">
              Master the art of meaningful first messages. Learn techniques that real people use to break the ice and create genuine connections.
            </p>
            <div class="mt-4">
              <NuxtLink
                to="/blog/first-conversation"
                class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all"
                aria-label="Read article: How to Start a Great First Conversation"
              >
                Read More <Icon
                  name="lucide:arrow-right"
                  size="18"
                  class="ml-1"
                />
              </NuxtLink>
            </div>
          </div>
        </article>

        <!-- Blog Post 2 -->
        <article
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div class="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
            <Icon
              name="lucide:lock"
              size="64"
              class="text-white opacity-50"
            />
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-sm font-semibold text-primary-600 dark:text-primary-400">Privacy & Safety</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">February 28, 2026</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              <NuxtLink
                to="/blog/privacy-matters"
                class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Why Your Privacy Matters in Dating Apps
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 flex-grow">
              Understand how Obscura protects your data and why privacy should be your top concern when choosing a dating platform.
            </p>
            <div class="mt-4">
              <NuxtLink
                to="/blog/privacy-matters"
                class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all"
                aria-label="Read article: Why Your Privacy Matters in Dating Apps"
              >
                Read More <Icon
                  name="lucide:arrow-right"
                  size="18"
                  class="ml-1"
                />
              </NuxtLink>
            </div>
          </div>
        </article>

        <!-- Blog Post 3 -->
        <article
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div class="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
            <Icon
              name="lucide:users"
              size="64"
              class="text-white opacity-50"
            />
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-sm font-semibold text-primary-600 dark:text-primary-400">Community</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">February 15, 2026</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              <NuxtLink
                to="/blog/success-stories"
                class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Real Success Stories from Our Community
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 flex-grow">
              Read inspiring stories of couples who found their perfect match on Obscura. Real people, real connections, real relationships.
            </p>
            <div class="mt-4">
              <NuxtLink
                to="/blog/success-stories"
                class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all"
                aria-label="Read article: Real Success Stories from Our Community"
              >
                Read More <Icon
                  name="lucide:arrow-right"
                  size="18"
                  class="ml-1"
                />
              </NuxtLink>
            </div>
          </div>
        </article>

        <!-- Blog Post 4 -->
        <article
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
        >
          <div class="h-48 bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center">
            <Icon
              name="lucide:lightbulb"
              size="64"
              class="text-white opacity-50"
            />
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-sm font-semibold text-primary-600 dark:text-primary-400">Tips & Tricks</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">January 30, 2026</span>
            </div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              <NuxtLink
                to="/blog/profile-tips"
                class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Create a Profile That Gets Noticed
              </NuxtLink>
            </h2>
            <p class="text-gray-600 dark:text-gray-300 flex-grow">
              Learn how to write a compelling bio, answer prompts authentically, and showcase your personality on your Obscura profile.
            </p>
            <div class="mt-4">
              <NuxtLink
                to="/blog/profile-tips"
                class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all"
                aria-label="Read article: Create a Profile That Gets Noticed"
              >
                Read More <Icon
                  name="lucide:arrow-right"
                  size="18"
                  class="ml-1"
                />
              </NuxtLink>
            </div>
          </div>
        </article>
      </section>

      <!-- Newsletter Section -->
      <section
        class="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center"
        aria-labelledby="newsletter-title"
      >
        <h2
          id="newsletter-title"
          class="text-3xl font-bold text-white mb-4"
        >
          Stay Updated
        </h2>
        <p class="text-primary-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for dating tips, community stories, and exclusive updates.
        </p>
        <form
          class="max-w-md mx-auto flex gap-2"
          @submit.prevent="subscribeNewsletter"
        >
          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
            class="flex-1 px-4 py-3 rounded-lg text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Email address for newsletter"
          >
          <UButton
            type="submit"
            label="Subscribe"
            color="white"
            variant="solid"
            class="font-bold"
            aria-label="Subscribe to newsletter"
          />
        </form>
      </section>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const subscribeNewsletter = () => {
  if (email.value) {
    console.log('Subscribed with email:', email.value)
    // Here you'd typically send this to an API
    email.value = ''
    // Show success message (optional)
  }
}

// Set meta tags for SEO
const title = 'Blog - Obscura Chat'
const description
  = 'Read the latest articles about dating, relationships, privacy, and community stories from Obscura Chat.'

useHead({
  title,
  meta: [
    { name: 'description', content: description },
    { name: 'og:title', content: title },
    { name: 'og:description', content: description },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description }
  ]
})

useSeoMeta({
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>
