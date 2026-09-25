import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface2)',
        border: 'var(--border)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        gold: 'var(--gold)',
        blue: {
          ...colors.blue,
          DEFAULT: 'var(--blue)',
        },
        purple: {
          ...colors.purple,
          DEFAULT: 'var(--purple)',
        },
        pink: {
          ...colors.pink,
          DEFAULT: 'var(--pink)',
        },
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
