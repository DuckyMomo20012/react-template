import WindiCSS from 'vite-plugin-windicss';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), WindiCSS()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
