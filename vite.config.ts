import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const root = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 43123,
    strictPort: false,
  },
  preview: {
    host: '0.0.0.0',
    port: 43123,
    strictPort: false,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        karte: resolve(root, 'karte/index.html'),
        bogen: resolve(root, 'karte/bogen/index.html'),
        erwachsene: resolve(root, 'erwachsene/index.html'),
      },
    },
  },
})
