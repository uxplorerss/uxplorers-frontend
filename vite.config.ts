import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import svgr from 'vite-plugin-svgr';

const isTest = process.env.NODE_ENV === 'test';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), !isTest && TanStackRouterVite(), react()],
  base: '/uxplorers-frontend/',
  server: {
    proxy: {
      '/uxplorers-frontend/api/ExpBusArrInfoService': {
        target: 'http://apis.data.go.kr/1613000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uxplorers-frontend\/api/, ''),
      },
      '/uxplorers-frontend/api/ExpBusInfoService': {
        target: 'http://apis.data.go.kr/1613000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/uxplorers-frontend\/api/, ''),
      },
      // '/uxplorers-frontend/api': {
      //   target: 'http://apis.data.go.kr/1613000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // },
    },
  },
});
