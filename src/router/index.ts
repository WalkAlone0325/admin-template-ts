import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from 'nprogress'
import { routes } from './routes'

import { storageSession } from '@/utils/storage'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, from, savedPostion) {
    return new Promise((resolve, _reject) => {
      if (savedPostion) {
        return savedPostion
      } else {
        if (from.meta.saveSrollTop) {
          const top: number = document.documentElement.scrollTop || document.body.scrollTop
          resolve({ left: 0, top })
        }
      }
    })
  },
})

const whiteList = ['/login', '/register']

router.beforeEach((to, _from, next) => {
  NProgress.start()
  document.title = to.meta.title as string // 动态title
  // 全部重定向到登录页
  // whiteList.indexOf(to.path) !== -1 || storageSession.getItem('info') ? next() : next('/login')
  // 编写不做拦截
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
