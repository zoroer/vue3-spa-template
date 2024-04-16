import { resolve } from 'node:path'

// vite
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import { defineConfig, loadEnv } from 'vite'
import { cssConf, bundleConf } from './viteConf'
import { viteVConsole } from 'vite-plugin-vconsole'
import Components from 'unplugin-vue-components/vite'

// 三方
import { VantResolver } from "unplugin-vue-components/resolvers";

export default (params => {
  // 配置文件中加载环境变量
  const env = loadEnv(params.mode, __dirname)
  const { VITE_ENV } = env

  return defineConfig({
    root: './',
    base: '/',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@api': resolve(__dirname, 'src/api'),
        '@common': resolve(__dirname, 'src/common'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@views': resolve(__dirname, 'src/views'),
        '@stores': resolve(__dirname, 'src/stores'),
        '@viteConf': resolve(__dirname, 'viteConf'),
      }
    },
    css: cssConf,
    build: bundleConf,
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      // 运行时检查eslint规范
      eslint({
        cache: false,
        // fix: true,
        include: ['src/**/*.js', 'src/**/*.vue']
      }),
      viteVConsole({
        entry: [
          resolve('src/main.js')
        ],
        enabled: VITE_ENV === 'dev'
      })
    ],
    server: {
      host: '0.0.0.0',
      port: env.VITE_PORT,
      open: true,
      proxy: {}
    }
  })
})
