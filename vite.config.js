import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}']
      },
      manifest: {
        name: 'App React',
        short_name: 'React',
        description: 'App React + Vite PWA',
        scope:'/',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFFFFF',
        theme_color: '#228be6',
        screenshots: [
          {
            src: '/screenshots/strawberry.jpg',
            sizes: '642x350',
            type: 'image/jpg',
            form_factor: 'wide'
          },
          {
            src: '/screenshots/bird.jpg',
            sizes: '640x840',
            type: 'image/jpg',
            form_factor: 'narrow'
          }
        ],
        icons: [
          {
            src: '/icons/sign-check.png',
            sizes: '1024x1024',
            type: 'image/png'
          },
          {
            src: '/icons/sign-pin.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
// 172.20.10.2