import defaultSettings from '@/settings'

const {
  fixedHeader,
  sidebarConfig: { title, logoUrl, isShow },
} = defaultSettings

export interface SettingsState {
  isShow: boolean
  title: string
  logoUrl: string
  fixedHeader: boolean
}

const state: SettingsState = {
  isShow,
  title,
  logoUrl,
  fixedHeader,
}

const mutations = {
  CHANGE_SETTING: (state: any, { key, value }: any) => {
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
}

const actions = {
  changeSetting({ commit }: any, data: any) {
    commit('CHANGE_SETTING', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
