import { createStore } from 'vuex'
import getters from './getters'
import { AppState } from './modules/app'
import { SettingsState } from './modules/settings'

/**
 * 自动导包
 * @returns module: { app, settings }
 */
const allModules = import.meta.globEager('./modules/*.ts')
const modules = {} as any

Object.keys(allModules).forEach(path => {
  const filename = path.split('/')[2].split('.')[0]
  modules[filename] = allModules[path][filename] || allModules[path].default || allModules[path]
})

export interface RootState {
  app: AppState
  settings: SettingsState
}

export default createStore<RootState>({
  getters,
  modules,
})
