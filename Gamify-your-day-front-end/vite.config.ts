import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      // components: '/src/components',
      // context: '/src/context',
      // types: '/src/types',
      // utiles: '/src/utiles',
      // fetchDB: '/src/fetchDB',
      // data: '/src/data',
      // images: '/src/images',
      // styles: '/src/styles',
      // utils: '/src/utiles',
    },
  },
});
