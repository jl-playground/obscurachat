export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/i18n'
  ],

  devtools: { enabled: true },

  // Import global CSS
  css: ['~/assets/css/main.css'],

  ui: {
    // Nuxt UI configuration
  },

  // Use the /app directory
  dir: {
    app: 'app'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json', name: 'Français' },
      { code: 'it', iso: 'it-IT', file: 'it.json', name: 'Italiano' }
    ],
    langDir: 'locales', // This directory is at the root
    defaultLocale: 'en',

    // Configuration for browser-based language detection
    detectBrowserLanguage: {
      useCookie: true, // Use a cookie to remember the user's choice
      cookieKey: 'obscura_i18n_redirected',
      redirectOn: 'root', // Redirect from the root (/) to the detected locale (e.g., /fr/)
      alwaysRedirect: true, // Ensure redirection even if locale is default
      fallbackLocale: 'en'
    },
    vueI18n: './i18n.config.ts'
  }
})
