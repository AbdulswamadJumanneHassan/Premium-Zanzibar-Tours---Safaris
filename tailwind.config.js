export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ocean: '#0A4D68',
        turquoise: '#00B4D8',
        gold: '#D4AF37',
        charcoal: '#1F2937',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 20px 60px rgba(15, 23, 42, 0.18)',
      },
    },
  },
  plugins: [],
};
