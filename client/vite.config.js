import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  
  return defineConfig({
    plugins: [react()],
    server: {
      proxy: {
        [process.env.VITE_API]: {
          target: process.env.VITE_TARGET,
          changeOrigin: true,
        },
      },
      port: parseInt(process.env.VITE_PORT),
    },
  });
};
