import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
  },
  define: {
    // Defines process.env.API_KEY specifically for the build
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
    // Defines an empty process.env object to prevent "process is not defined" errors
    // in libraries that might check process.env.NODE_ENV etc.
    'process.env': {}
  }
});