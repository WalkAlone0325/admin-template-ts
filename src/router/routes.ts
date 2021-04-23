import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    meta: {
      icon: 'el-icon-s-home',
      showLink: true,
      savedPosition: false,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
          title: '首页',
          showLink: 'true',
          savedPosition: false,
          icon: 'el-icon-s-platform',
        },
      },
    ],
  },
]
