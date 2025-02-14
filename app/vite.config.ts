import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 8008,
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src'),
    },
  },
})
