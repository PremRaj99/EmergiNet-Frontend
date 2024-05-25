import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://emergi-net-web-services-6bzifphlj-prem-rajs-projects.vercel.app',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
