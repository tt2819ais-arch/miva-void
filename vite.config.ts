import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project at /miva-void/
export default defineConfig({
  plugins: [react()],
  base: '/miva-void/',
})
