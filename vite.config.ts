import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import VitePluginElementPlus from 'vite-plugin-element-plus'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    VitePluginElementPlus({
      format: mode === 'development' ? 'esm' : 'cjs',
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables.scss";`,
      },
    },
  },
}))
