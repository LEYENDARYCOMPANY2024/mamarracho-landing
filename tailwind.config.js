/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: { mama: { naranja: '#FF5200', purpura: '#7C00FF', celeste: '#7DD3FC' } },
      fontFamily: {
        logo: ['"Bagel Fat One"', 'Impact', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
