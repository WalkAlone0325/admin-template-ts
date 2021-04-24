import { RouteRecordRaw } from 'vue-router'
import { routes } from '@/router/routes'
import { RootState } from '..'
import { Module } from 'vuex'

/**
 * 路由处理
 * @param data 路由表数据
 * @returns 处理后的路由表
 */
function filterRoutes(data: RouteRecordRaw[]) {
  return data
    .filter(routeslist => !routeslist.meta?.hidden)
    .map(routeItem => {
      if (routeItem.children?.length === 1) {
        return routeItem.children[0]
      } else {
        return routeItem
      }
    })
}

export interface AppState {
  routeslist: RouteRecordRaw[] | undefined
  isCollapse?: boolean
}

const state = {
  routeslist: [],
  sidebar: {
    opened: true,
    withoutAnimation: false,
  },
}

const getters = {
  isCollapse: (state: any) => state.isCollapse,
  routelist: () => filterRoutes(routes),
}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
} as Module<AppState, RootState>
