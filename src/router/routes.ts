import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

/**
 * @param hidden 是否显示在菜单上
 * @param title 菜单标题
 * @param icon 图标
 * @param savedPosition 是否保存浏览位置（keep-alive）
 */
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    meta: {
      hidden: false,
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
      {
        path: '/components/animates',
        name: 'animates',
        component: () => import('@/views/animates/index.vue'),
        meta: {
          title: '动画效果',
          icon: 'el-icon-magic-stick',
          hidden: false,
          savedPosition: true,
        },
      },
    ],
  },
  {
    path: '/error',
    name: 'error',
    component: Layout,
    redirect: '/error/401',
    meta: {
      icon: 'el-icon-position',
      title: 'error',
      hidden: false,
      savedPosition: true,
    },
    children: [
      {
        path: '/error/401',
        component: () => import('@/views/error/401.vue'),
        meta: {
          title: '401',
          hidden: false,
          savedPosition: true,
          icon: 'el-icon-warning-outline',
        },
      },
      {
        path: '/error/404',
        component: () => import('@/views/error/404.vue'),
        meta: {
          title: '404',
          hidden: false,
          savedPosition: true,
          icon: 'el-icon-document-delete',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/index.vue'),
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
      title: '404',
      hidden: true,
      savedPosition: false,
    },
  },
]
