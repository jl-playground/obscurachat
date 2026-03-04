<template>
  <footer class="bg-gradient-to-r from-charcoal to-gray-900 dark:from-gray-950 dark:to-gray-900 text-off-white border-t border-gray-800">
    <UContainer>
      <div class="py-12 md:py-16">
        <!-- Newsletter Section -->
        <div class="mb-12">
          <NewsletterSignup />
        </div>

        <!-- Main footer content -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <!-- Brand section -->
          <div class="md:col-span-2">
            <h3 class="text-lg font-bold mb-2 text-white">
              obscurachat
            </h3>
            <p class="text-sm text-gray-400 leading-relaxed">
              A modern platform for meaningful conversations and authentic connections. Connection first. Appearance second.
            </p>
            <div class="flex gap-4 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.029 3.748 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on GitHub"
                class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
              >
                <svg
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.545 2.914 1.209.092-.937.35-1.546.636-1.903-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.647 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0110 4.817a9.568 9.568 0 012.501.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.578.688.48C17.137 18.195 20 14.44 20 10.017 20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick links -->
          <nav aria-labelledby="footer-quicklinks-title">
            <h4
              id="footer-quicklinks-title"
              class="text-sm font-semibold text-white mb-4"
            >
              Quick Links
            </h4>
            <ul class="space-y-2 text-sm">
              <li>
                <NuxtLink
                  to="/"
                  class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Go to home page"
                >
                  Home
                </NuxtLink>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Go to how it works section"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#philosophy"
                  class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Go to philosophy section"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <NuxtLink
                  to="/features"
                  class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Go to features page"
                >
                  Features
                </NuxtLink>
              </li>
              <li>
               <NuxtLink
                   to="/blog"
                   class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                   aria-label="Go to blog page"
                 >
                   Blog
                 </NuxtLink>
               </li>
               <li>
                 <NuxtLink
                   to="/faq"
                   class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                   aria-label="Go to FAQ page"
                 >
                   FAQ
                 </NuxtLink>
               </li>
               <li>
                 <NuxtLink
                   to="/about"
                   class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                   aria-label="Go to about page"
                 >
                   About
                 </NuxtLink>
               </li>
             </ul>
           </nav>

          <!-- Support -->
          <nav aria-labelledby="footer-support-title">
            <h4
              id="footer-support-title"
              class="text-sm font-semibold text-white mb-4"
            >
              Support
            </h4>
            <ul class="space-y-2 text-sm">
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Go to contact page"
                >
                  Contact Us
                </NuxtLink>
              </li>
              <li>
                <a
                  href="/privacy"
                  class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label="Read our privacy policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
               <a
                   href="/terms"
                   class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                   aria-label="Read our terms of service"
                 >
                   Terms of Service
                 </a>
               </li>
               <li>
                 <NuxtLink
                   to="/safety"
                   class="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                   aria-label="Go to safety tips page"
                 >
                   Safety Tips
                 </NuxtLink>
               </li>
             </ul>
           </nav>
         </div>

        <!-- Divider -->
        <div class="border-t border-gray-800" />

        <!-- Bottom footer -->
        <div class="pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>{{ $t("footer.copyright") }}</p>
          <p class="mt-4 md:mt-0">
            Made with <span
              class="text-soft-coral"
              aria-label="love"
            >❤</span> by the obscurachat team
          </p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
