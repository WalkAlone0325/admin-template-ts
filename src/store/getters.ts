import { RouteRecordRaw } from 'vue-router'
import { routes } from '@/router/routes'

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

const getters = {
  routeslist: () => filterRoutes(routes),
}

export default getters
