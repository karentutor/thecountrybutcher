/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        cormorant: ['var(--font-cormorant)'],
      },
      colors: {
        primary: {
          100: 'rgba(70,133,255, 0.1)',
          200: 'rgba(70,133,255, 0.3)',
          300: 'rgba(70,133,255, 0.4)',
          400: 'rgba(70,133,255, 0.5)',
          500: 'rgba(70,133,255, 0.6)',
          600: 'rgba(70,133,255, 0.7)',
          700: 'rgba(70,133,255, 0.8)',
          800: 'rgba(70,133,255, 0.9)',
          900: 'rgba(70,133,255, 1)',
        },
        secondary: '#564e48',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')({ strategy: 'class' })],
}
