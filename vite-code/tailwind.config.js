import defaultTheme from 'tailwindcss/defaultTheme'
import flowbite from 'flowbite-react/tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    screens: {
      xs: '360px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
}
