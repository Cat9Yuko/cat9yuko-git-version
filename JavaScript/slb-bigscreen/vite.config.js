import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [vue()],
  resolve: {
    alias: {
      '@':resolve(__dirname,'src')
    }
  },
  server : {
    proxy: {
      'api': {
        target: "/public",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
    hmr: true,
    
  },
  define: {
    __VUE_PROD_DEVTOOLS__:true
  }
})
