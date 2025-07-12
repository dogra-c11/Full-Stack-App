import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Backend server URL, request to api will be forwarded here and will not give CORS error
      },
    },
  },
  plugins: [react()],
})
