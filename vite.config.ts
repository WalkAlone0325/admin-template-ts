import { UserConfigExport, ConfigEnv } from 'vite'
import { resolve } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
import { loadEnv } from './build/utils'
import { createProxy } from './build/proxy'
import vue from '@vitejs/plugin-vue'

const pathResolve = (dir: string): any => {
  return resolve(__dirname, '.', dir)
}

const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_OPEN } = loadEnv()

const alias: Record<string, string> = {
  '@': pathResolve('src'),
}

const root: string = process.cwd()

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  let prodMock = true
  return {
    // base: process.env.NODE_ENV === 'production' ? '/amdin/' : VITE_PUBLIC_PATH,
    base: '/amdin/',
    root,
    resolve: {
      alias,
    },

    // 服务端
    server: {
      // https: false,
      /**
       * 端口号
       * @default 3000
       */
      // port: VITE_PORT,
      // 本地跨域代理
      // proxy: createProxy(VITE_PROXY),
    },
    plugins: [
      vue(),
      // viteMockServe({
      //   mockPath: 'mock',
      //   localEnabled: command === 'serve',
      //   prodEnabled: command !== 'serve' && prodMock,
      //   injectCode: `
      //   import { setupProdMockServer } from './mockProdServer';
      //   setupProdMockServer()
      // `,
      //   logger: true,
      // }),
    ],
    build: {
      brotliSize: false,
      // 消除打包大小超过500kb警告
      chunkSizeWarningLimit: 2000,
    },
  }
}
