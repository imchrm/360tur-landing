import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react()],
  server: {
    host: true, // слушает 0.0.0.0 — доступ с других машин в локальной сети
    port: 5173,
    open: true,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
