import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app/app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        // Headline
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        // Body / UI Text
        mono: ['Inter', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        // Define the Obscura brand colors
        'deep-violet': '#5B4B8A',
        'soft-coral': '#FF7F66',
        'charcoal': '#1B1B1B',
        'off-white': '#FAFAFA',

        // Map them to Nuxt UI's primary color
        'primary': {
          50: '#EBE9F3',
          100: '#D7D3E8',
          200: '#B0A7D1',
          300: '#897CBA',
          400: '#6250A2',
          500: '#5B4B8A', // <- Primary
          600: '#493C6E',
          700: '#372D53',
          800: '#251E37',
          900: '#120F1C',
          950: '#09070E'
        },
        // Map Soft Coral as an 'accent'
        'accent': {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFD6CF',
          300: '#FFB8A8',
          400: '#FF9A81',
          500: '#FF7F66', // <- Accent
          600: '#E6725C',
          700: '#CC6652',
          800: '#B35947',
          900: '#994D3D',
          950: '#804033'
        }
      }
    }
  },
  plugins: []
}
