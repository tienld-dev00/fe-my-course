/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          primary: '#3DCBB1',
          secondary: '#FFD130',
          danger: '#C5322A',
        },
        surface: {
          light: '#ffffff',
          dark: '#1B1B1B',
        },
        object: {
          white: {
            90: 'rgba(249, 249, 249, 0.9)',
            60: 'rgba(249, 249, 249, 0.6)',
            30: 'rgba(249, 249, 249, 0.3)',
            20: 'rgba(249, 249, 249, 0.2)',
          },
          black: {
            90: 'rgba(27, 27, 27, 0.9)',
            60: 'rgba(27, 27, 27, 0.6)',
            30: 'rgba(27, 27, 27, 0.3)',
            10: 'rgba(27, 27, 27, 0.1)',
          },
        },
        alert: {
          warning: '#A04AE3',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
