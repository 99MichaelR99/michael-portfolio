
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using a relative base ensures the site works on GitHub Pages subpaths without manual tweaks.
export default defineConfig({
  plugins: [react()],
  base: './'
})
