import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Default `/` for the custom domain (SPA routes like /curso).
 * For project pages without custom domain (user.github.io/repo),
 * set VITE_BASE_PATH=/letz-studio/ in the deploy workflow.
 */
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
