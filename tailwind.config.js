/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.css',
    './src/**/*.ts',
    './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'var(--dark-blue-100)',
      },
    },
  },
  plugins: [],
};
