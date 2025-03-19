import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/flowbite-react/dist/esm/**/*.mjs',
  ],
  theme: {
    screens: {
      xs: '360px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
}
