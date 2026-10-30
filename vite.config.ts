import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './', // ◄— Allows the asset paths to adapt to any subdirectory dynamically
  build: {
    outDir: '.', // ◄— Forces Vite to compile index.html directly into your main project root folder
    emptyOutDir: false, // Prevents your source files from being accidentally deleted during build
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
