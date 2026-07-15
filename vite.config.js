import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

/**
 * base: './' keeps asset paths relative so the site works both on
 * username.github.io/repo and on a custom domain at the apex.
 * Override with VITE_BASE_PATH when you need an absolute base.
 */
export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
})
