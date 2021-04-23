import { RouteRecordRaw } from 'vue-router'
import {} from 'vuex'
import { routes } from '@/router/routes'

// 路由处理
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

// const state = {
//   routeslist: filterRoutes(routes)
// }

const getters = {
  sidebar: (state: any) => state.app.sidebar,
  // sidebarLogo: (state: any) => state.settings.sidebarLogo,
  routeslist: () => filterRoutes(routes),
}

export default getters
