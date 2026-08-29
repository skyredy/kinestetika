import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/kinestetika/',
  plugins: [react(), tailwindcss()],
  server: { port: Number(process.env.PORT) || 5412, strictPort: false },
  build: {
    target: 'es2022',
    cssMinify: 'lightningcss',
  },
});
