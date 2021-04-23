import defaultSettings from '@/settings'

const {
  fixedHeader,
  sidebarConfig: { title, logoUrl, isShow },
} = defaultSettings

const state = {
  isShow,
  title,
  logoUrl,
  fixedHeader,
}

const mutations = {
  CHANGE_SETTING: (state: any, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
