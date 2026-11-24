/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        lavender: '#C9B6E4',
        lilac: '#E8DDF5',
        ivory: '#FAF8F3',
        blush: '#F4E8EE',
        sage: '#B9C7B0',
        plum: '#40334E',
        gold: '#C9AD78',
        moss: '#7E9A87',
        mist: '#E6EEE3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(64,51,78,0.18)',
        glow: '0 0 40px rgba(201,182,228,0.55)',
      },
    },
  },
  plugins: [],
}
