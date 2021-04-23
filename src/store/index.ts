import { createStore } from 'vuex'
import getters from './getters'

const allModules = import.meta.globEager('./modules/*.ts')
const modules = {} as any

Object.keys(allModules).forEach(path => {
  const filename = path.split('/')[2].split('.')[0]
  modules[filename] = allModules[path][filename] || allModules[path].default || allModules[path]
})

export default createStore({
  getters,
  modules,
})
