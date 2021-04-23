import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    meta: {
      // icon: 'el-icon-s-home',
      hidden: false,
      // savedPosition: false,
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
          title: '首页',
          hidden: false,
          savedPosition: false,
          icon: 'el-icon-s-platform',
        },
      },
    ],
  },
  {
    path: '/components',
    name: 'components',
    redirect: '/components/table',
    component: Layout,
    meta: {
      icon: 'el-icon-menu',
      title: '组件',
      hidden: false,
      savedPosition: true,
    },
    children: [
      {
        path: '/components/table',
        name: 'table',
        component: () => import('@/views/components/table/index.vue'),
        meta: {
          title: '表格',
          icon: 'el-icon-tickets',
          hidden: false,
          savedPosition: true,
        },
      },
      {
        path: '/components/button',
        name: 'button',
        component: () => import('@/views/components/button/index.vue'),
        meta: {
          title: '按钮',
          icon: 'el-icon-c-scale-to-original',
          hidden: false,
          savedPosition: true,
        },
      },
      {
        path: '/components/context-menu',
        name: 'context-menu',
        component: () => import('@/views/components/context-menu/index.vue'),
        meta: {
          title: '右键菜单',
          icon: 'el-icon-folder-opened',
          hidden: false,
          savedPosition: true,
        },
      },
      {
        path: '/components/markdown',
        name: 'markdown',
        component: () => import('@/views/components/markdown/index.vue'),
        meta: {
          title: 'MD编辑器',
          icon: 'el-icon-document-add',
          hidden: false,
          savedPosition: true,
        },
      },
      {
        path: '/components/echarts',
        name: 'echarts',
        component: () => import('@/views/echarts/index.vue'),
        meta: {
          title: 'Echarts',
          icon: 'el-icon-s-data',
          hidden: false,
          savedPosition: true,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register.vue'),
    meta: {
      title: '注册',
      hidden: true,
    },
  },
  {
    // 路由重定向404页面
    path: '/:pathMatch(.*)',
    component: Layout,
    redirect: '/error/404',
    meta: {
      icon: 'el-icon-s-home',
      title: 'notFound',
      hidden: true,
      savedPosition: false,
    },
  },
]
