import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/staticfiles/',
  server: {
    proxy: {
      '/api': {
        //target: 'https://tagalong-backend-210589d74651.herokuapp.com', // The Django server
        target: 'http://127.0.0.1:8000', // The Django server
        changeOrigin: true,
      },
    },
  },
})
