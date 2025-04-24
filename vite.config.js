import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/579_final_proj/', // or '/myapp/' if deploying to a subfolder
});