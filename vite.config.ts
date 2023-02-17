import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

const vitePluginPWA = () =>
  VitePWA({
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: 'React PWA',
      short_name: 'React PWA',
      description: 'React PWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), vitePluginPWA()],
  base: process.env.BASE_URL || '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  esbuild: {
    loader: 'tsx',
    include: /src\/.*\.[tj]sx?$/,
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      },
    },
  },
});
