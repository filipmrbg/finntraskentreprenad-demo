import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  optimizeDeps: {
    include: ['cookie', 'react-router', 'react-router-dom'],
    exclude: ['lucide-react'],
  },
  build: {
    cssCodeSplit: true,
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
              icons: ['lucide-react'],
            },
          },
        },
  },
}));
