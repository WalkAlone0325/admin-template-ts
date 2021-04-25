import { createRouter, createWebHashHistory } from 'vue-router'
import NProgress from '@/utils/progress'
import { routes } from './routes'
import { getCookie } from '@/utils/cookie'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, from, savedPostion) {
    return new Promise((resolve, _reject) => {
      if (savedPostion) {
        return savedPostion
      } else {
        if (from.meta.savedPostion) {
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
  let getInfo = getCookie('DEFAULT_TOKEN') || ''
  // 全部重定向到登录页
  whiteList.indexOf(to.path) !== -1 || getInfo
    ? next()
    : next({
        path: '/login',
        query: { redirect: to.fullPath },
      })
})

router.afterEach(() => {
  NProgress.done()
})

export default router
