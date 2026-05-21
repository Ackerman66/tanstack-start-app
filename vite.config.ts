import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pages 需要这个配置
  build: {
    outDir: 'dist',
  },
})