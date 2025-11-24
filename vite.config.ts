import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Externalize all libraries that are defined in index.html importmap
      // This prevents Rollup from trying to bundle them and failing
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
        'lucide-react',
        'clsx',
        '@google/genai',
        '@supabase/supabase-js'
      ]
    }
  }
});
