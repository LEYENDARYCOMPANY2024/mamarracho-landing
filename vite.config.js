import { defineConfig } from 'vite';

// El código vive en /src y los archivos estáticos en /public.
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  base: './',
  build: { outDir: '../dist', emptyOutDir: true },
});
