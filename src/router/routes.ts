import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/welcome',
    meta: {
      icon: 'el-icon-s-home',
      showLink: true,
      savedPosition: false,
    },
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('@/views/welcome.vue'),
        meta: {
          title: 'home',
          showLink: 'true',
          savedPosition: false,
        },
      },
    ],
  },
]
