import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B4F72',
        accent: '#85C1E9',
        gold: '#D4AC0D',
        dark: '#0D1117',
        light: '#F4F8FB',
        text: '#E8EDF2',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Menlo', 'Monaco', 'monospace'],
      },
      animation: {
        'scroll-down': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
