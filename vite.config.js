import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // The output directory for the build
  },
  server: {
    port: 3000,  // The port for the development server
  },
  resolve: {
    alias: {
      '@': '/src',  // This can be helpful for cleaner imports
    },
  },
});
