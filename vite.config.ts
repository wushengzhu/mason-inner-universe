import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),],
  resolve: {
    alias: {
      '@': path.resolve('./src')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:'@import "@/styles/constant.scss"',//scss 常量加载到全局
      }
    }
  },
  server: {
    hmr: {
      overlay: false
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:2024',
        // 开启websocket服务，默认true
        ws: true,
        changeOrigin: true,
        // 用于修改路径配置,把api路径名去掉
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
