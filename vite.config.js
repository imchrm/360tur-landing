import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
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
