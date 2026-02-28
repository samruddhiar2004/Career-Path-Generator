import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // This changes localhost:5173 to localhost:3000
    strictPort: true, 
  }
})