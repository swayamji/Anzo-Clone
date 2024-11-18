import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Anzo-Clone/', // Replace 'Your-Repo-Name' with your GitHub repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
