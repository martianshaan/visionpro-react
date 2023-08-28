/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path'; // Import the path module

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      _: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['./src/**/*.js', './src/**/*.jsx'],
      exclude: [],
    }),
  ],
});
