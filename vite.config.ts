import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/JustBUnknown/', // ◄— Locks down the sub-folder path for GitHub Pages asset routing
  build: {
    outDir: 'dist', // ◄— Outputs cleanly to the default standard dist folder
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
