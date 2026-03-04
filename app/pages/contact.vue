<template>
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 py-12 md:py-24">
    <UContainer>
      <!-- Header Section -->
      <section class="text-center mb-16" aria-labelledby="contact-title">
        <h1 
          id="contact-title"
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Get in Touch
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </section>

      <!-- Contact Form and Info Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Contact Form -->
        <section class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <form @submit.prevent="handleSubmit" class="space-y-6" novalidate aria-label="Contact form">
              <!-- Name Field -->
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Your Name <span class="text-brand-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="John Doe"
                  required
                  @blur="validateField('name')"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  aria-label="Full name"
                  aria-describedby="name-error"
                />
                <p v-if="errors.name" id="name-error" class="mt-2 text-sm text-brand-600 dark:text-brand-400">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Email Field -->
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email Address <span class="text-brand-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  @blur="validateField('email')"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  aria-label="Email address"
                  aria-describedby="email-error"
                />
                <p v-if="errors.email" id="email-error" class="mt-2 text-sm text-brand-600 dark:text-brand-400">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Subject Field -->
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Subject <span class="text-brand-500">*</span>
                </label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  placeholder="How can we help?"
                  required
                  @blur="validateField('subject')"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                  aria-label="Subject"
                  aria-describedby="subject-error"
                />
                <p v-if="errors.subject" id="subject-error" class="mt-2 text-sm text-brand-600 dark:text-brand-400">
                  {{ errors.subject }}
                </p>
              </div>

              <!-- Message Field -->
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Message <span class="text-brand-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Tell us more..."
                  required
                  rows="6"
                  @blur="validateField('message')"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                  aria-label="Message"
                  aria-describedby="message-error"
                ></textarea>
                <p v-if="errors.message" id="message-error" class="mt-2 text-sm text-brand-600 dark:text-brand-400">
                  {{ errors.message }}
                </p>
              </div>

              <!-- Success Message -->
              <transition name="fade">
                <div 
                  v-if="submitSuccess"
                  class="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 text-green-700 dark:text-green-300 rounded-lg"
                  role="alert"
                >
                  <p class="font-semibold">Success!</p>
                  <p>Thank you for your message. We'll get back to you soon.</p>
                </div>
              </transition>

              <!-- Submit Button -->
              <UButton
                type="submit"
                :label="isSubmitting ? 'Sending...' : 'Send Message'"
                :disabled="isSubmitting"
                variant="solid"
                color="primary"
                size="lg"
                class="w-full font-bold"
                aria-label="Submit contact form"
              />
            </form>
          </div>
        </section>

        <!-- Contact Info -->
        <section aria-labelledby="contact-info-title">
          <h2 id="contact-info-title" class="sr-only">Contact information</h2>
          
          <!-- Email Card -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl">
                  <Icon name="lucide:mail" size="24" class="text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Email</h3>
                <p class="text-gray-600 dark:text-gray-300 mt-1">
                  <a href="mailto:support@obscurachat.com" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    support@obscurachat.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Response Time Card -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg mb-6">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl">
                  <Icon name="lucide:clock" size="24" class="text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Response Time</h3>
                <p class="text-gray-600 dark:text-gray-300 mt-1">
                  We typically respond within 24-48 hours.
                </p>
              </div>
            </div>
          </div>

          <!-- Hours Card -->
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0">
                <div class="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl">
                  <Icon name="lucide:calendar" size="24" class="text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div>
                <h3 class="text-lg font-bold text-gray-900 dark:text-white">Hours</h3>
                <p class="text-gray-600 dark:text-gray-300 mt-1">
                  Monday - Friday<br />9:00 AM - 6:00 PM PST
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </UContainer>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const form = reactive<FormData>({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = reactive<FormErrors>({});
const isSubmitting = ref(false);
const submitSuccess = ref(false);

const validateEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateField = (field: keyof FormData) => {
  errors[field as keyof FormErrors] = undefined;

  if (!form[field]) {
    errors[field as keyof FormErrors] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
  } else if (field === "email" && !validateEmail(form.email)) {
    errors.email = "Please enter a valid email address";
  } else if (field === "message" && form.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
};

const validateForm = (): boolean => {
  let isValid = true;

  (Object.keys(form) as Array<keyof FormData>).forEach((field) => {
    if (!form[field]) {
      isValid = false;
      errors[field as keyof FormErrors] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
  });

  if (form.email && !validateEmail(form.email)) {
    isValid = false;
    errors.email = "Please enter a valid email address";
  }

  if (form.message && form.message.length < 10) {
    isValid = false;
    errors.message = "Message must be at least 10 characters";
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) return;

  isSubmitting.value = true;
  submitSuccess.value = false;

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form
    form.name = "";
    form.email = "";
    form.subject = "";
    form.message = "";
    submitSuccess.value = true;

    // Hide success message after 3 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 3000);
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    isSubmitting.value = false;
  }
};

// Set meta tags for SEO
const title = "Contact Us - Obscura Chat";
const description =
  "Get in touch with Obscura Chat support. We're here to help with any questions or feedback about our dating app.";

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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
