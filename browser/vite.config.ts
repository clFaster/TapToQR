import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'public/manifest.json',
          dest: '.',
        },
        {
          src: 'public/img/*',
          dest: 'img/.',
        }
      ],
    }),
  ],

  base: '',

  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        popup: './pages/popup.html',
        options: './pages/options.html',
        customQr: './pages/customQr.html',
      },
      output: {
        entryFileNames: 'pages/[name].js',
        chunkFileNames: 'chunks/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      }
    },
  },
});
