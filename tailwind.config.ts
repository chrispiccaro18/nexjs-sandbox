import type { Config } from 'tailwindcss'
 
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mint-green': {
          DEFAULT: '#ccfbfe',
          100: '#02545a',
          200: '#04a8b4',
          300: '#19ebfa',
          400: '#73f3fc',
          500: '#ccfbfe',
          600: '#d7fcfe',
          700: '#e1fcfe',
          800: '#ebfdff',
          900: '#f5feff'
        },
        'eerie-black': {
          DEFAULT: '#171d1c',
          100: '#040606',
          200: '#090b0b',
          300: '#0d1111',
          400: '#121716',
          500: '#171d1c',
          600: '#3f504d',
          700: '#67837f',
          800: '#98aeab',
          900: '#ccd7d5'
        },
        'neon-blue': {
          DEFAULT: '#5863f8',
          100: '#030741',
          200: '#050e81',
          300: '#0814c2',
          400: '#1827f5',
          500: '#5863f8',
          600: '#7a82f9',
          700: '#9ba2fb',
          800: '#bcc1fc',
          900: '#dee0fe'
        },
        'salmon-pink': {
          DEFAULT: '#f4989c',
          100: '#48080b',
          200: '#900f16',
          300: '#d81720',
          400: '#ed5159',
          500: '#f4989c',
          600: '#f6aeb1',
          700: '#f9c2c5',
          800: '#fbd6d8',
          900: '#fdebec'
        },
        'fairy-tale': {
          DEFAULT: '#eac4d5',
          100: '#3f1729',
          200: '#7e2d52',
          300: '#bc457b',
          400: '#d384a7',
          500: '#eac4d5',
          600: '#eecfdd',
          700: '#f2dbe5',
          800: '#f6e7ee',
          900: '#fbf3f6'
        }
      },
    },
  },
  plugins: [],
}
export default config