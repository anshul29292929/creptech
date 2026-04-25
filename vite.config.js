/* global process */
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const prerender = require('vite-plugin-prerender');

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    prerender({
      staticDir: path.join(process.cwd(), 'dist'),
      routes: [
        '/',
        '/portfolio',
        '/contact',
        '/company',
        '/process',
        '/pricing',
        '/careers',
        '/journal',
        '/legal',
        '/privacy-terms',
        '/project/patient-management',
        '/project/real-estate',
        '/project/inventory-management',
        '/project/hr-manager',
        '/project/crm-lead-gen'
      ],
    })
  ],
})
