import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // We removed the rollupOptions that externalized React.
    // Now Vite will bundle React and other deps, ensuring the app runs correctly on Vercel.
    outDir: 'dist',
  }
});
