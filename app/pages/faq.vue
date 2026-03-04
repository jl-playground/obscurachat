<template>
  <div>
    <div class="min-h-screen bg-gradient-to-b from-off-white to-white">
      <div class="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div class="text-center mb-16 scroll-animate">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-soft-coral bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p class="text-gray-600 text-lg md:text-xl">
            Everything you need to know about Obscurachat
          </p>
        </div>

        <!-- FAQ Accordion -->
        <div class="space-y-4">
          <FaqAccordion
            v-for="(item, index) in faqItems"
            :key="index"
            :title="item.title"
            :content="item.content"
            :index="index"
          />
        </div>

        <!-- Contact Section -->
        <div class="mt-16 bg-gradient-to-r from-primary-600 to-soft-coral rounded-lg p-8 text-center scroll-animate">
          <h3 class="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p class="text-white/90 mb-6">
            Our support team is here to help. Reach out to us anytime.
          </p>
          <NuxtLink to="/contact" class="inline-block bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-off-white transition-colors">
            Contact Support
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useScrollAnimation } from '~/composables/useScrollAnimation'

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'FAQ - Obscurachat',
  meta: [
    {
      name: 'description',
      content: 'Frequently asked questions about Obscurachat - Your guide to anonymous dating'
    }
  ]
})

const faqItems = [
  {
    title: 'What is Obscurachat?',
    content: 'Obscurachat is a secure and anonymous dating platform where you can meet like-minded people while maintaining complete privacy. Our advanced encryption ensures your identity remains protected.'
  },
  {
    title: 'Is my identity really anonymous?',
    content: 'Yes! We use end-to-end encryption and don\'t require real names or personal information. You can create a pseudonym and chat anonymously with other users. Your privacy is our top priority.'
  },
  {
    title: 'How does the matching system work?',
    content: 'Our intelligent matching algorithm analyzes your interests, preferences, and personality traits to suggest compatible matches. The more you interact, the better our algorithm becomes at finding your perfect match.'
  },
  {
    title: 'Is Obscurachat safe?',
    content: 'Safety is paramount. We verify all users, monitor for suspicious activity, and provide reporting tools for inappropriate behavior. Our moderation team works 24/7 to maintain a safe community.'
  },
  {
    title: 'How do I create an account?',
    content: 'Simply download the app or visit our website, click "Sign Up," and follow the registration process. You\'ll need to verify your email and create a profile. The whole process takes just a few minutes.'
  },
  {
    title: 'Can I delete my account and data?',
    content: 'Absolutely. You can delete your account anytime from your settings. All your data will be permanently removed from our servers within 30 days.'
  },
  {
    title: 'How much does it cost?',
    content: 'Obscurachat offers a free version with basic features. Premium memberships unlock advanced filters, unlimited matches, and exclusive features starting at $9.99/month.'
  },
  {
    title: 'How do I report someone?',
    content: 'If you encounter any inappropriate behavior, you can report the user directly through the app or website. Our moderation team reviews all reports and takes appropriate action.'
  },
  {
    title: 'Is there a mobile app?',
    content: 'Yes! Obscurachat is available on both iOS and Android. Download from the App Store or Google Play for the best experience on the go.'
  },
  {
    title: 'What if I have technical issues?',
    content: 'Our support team is available 24/7. Email us at support@obscurachat.com or use the in-app chat feature. We typically respond within 2 hours.'
  }
]

const { observeElements } = useScrollAnimation()

onMounted(() => {
  observeElements('.scroll-animate')
})
</script>

<style scoped>
:deep(.accordion-item) {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
