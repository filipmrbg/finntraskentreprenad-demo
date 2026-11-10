import { defineConfig, build, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Runs the SSR bundle + static HTML/sitemap/robots prerender automatically
 * at the end of `vite build`, so hosts like Bolt Hosting (which invoke
 * `vite build` directly) always publish full prerendered HTML and SEO files.
 */
function prerenderPlugin(enabled: boolean): Plugin {
  return {
    name: 'finntrask-prerender',
    apply: 'build',
    async closeBundle() {
      if (!enabled) return;
      await build({
        configFile: false,
        plugins: [react()],
        build: {
          ssr: 'src/entry-server.tsx',
          outDir: 'dist-ssr',
          emptyOutDir: true,
        },
      });
      // @ts-expect-error plain ESM script without TypeScript declarations
      const { runPrerender } = await import('./scripts/prerender.mjs');
      await runPrerender();
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ command, isSsrBuild }) => ({
  plugins: [react(), prerenderPlugin(command === 'build' && !isSsrBuild)],
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
