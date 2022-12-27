import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [react()],
    server: {
      host: true,
      port: Number(process.env.VITE_PORT),
      hmr: {
        clientPort: Number(process.env.VITE_HMR_PORT),
      },
    },
  })
}
