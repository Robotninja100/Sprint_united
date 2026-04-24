import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 75, progressive: true, mozjpeg: true },
      jpeg: { quality: 75, progressive: true, mozjpeg: true },
      png: { quality: 80, compressionLevel: 9 },
      webp: { quality: 75 },
      avif: { quality: 60 },
      cache: false,
      includePublic: true,
      logStats: true,
    }),
  ],
  build: {
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
  },
})
