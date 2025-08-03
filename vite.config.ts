import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    server: {
      // port: 5174,
      port: Number(env.VITE_PORT),
      strictPort: true
    },
    preview: {
      // port: 9778,
      port: Number(env.VITE_DOCKER_PORT),
      host: '0.0.0.0',
      strictPort: true
    }
  }
})