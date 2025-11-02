/* eslint-disable @typescript-eslint/no-require-imports */
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: require('./locales/en.json'),
    de: require('./locales/de.json'),
    fr: require('./locales/fr.json'),
    it: require('./locales/it.json')
  }
}))
