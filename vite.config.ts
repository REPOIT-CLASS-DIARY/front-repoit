// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    host: true,        // 0.0.0.0 + localhost 모두 허용
    port: 5174,        // 5173 → 5174로 변경 (충돌 회피)
    strictPort: true,
  },
});