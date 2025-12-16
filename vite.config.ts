import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This ensures assets work correctly on GitHub Pages
  build: {
    outDir: 'dist',
  },
  define: {
    // If API_KEY is undefined during build, default to empty string to avoid "process is not defined" or undefined errors
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
});