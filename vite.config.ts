import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/3zk9.io/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
})
