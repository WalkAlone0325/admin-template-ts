import defaultSettings from '@/settings'
import { MutationTree } from 'vuex'

const {
  fixedHeader,
  sidebarConfig: { isShowLogo },
} = defaultSettings

export interface SettingsState {
  isShowLogo: boolean
  fixedHeader: boolean
  sidebar: {
    opened: Boolean
    withoutAnimation: Boolean
  }
}

const state: SettingsState = {
  isShowLogo,
  fixedHeader,
  sidebar: {
    opened: true,
    withoutAnimation: false,
  },
}

const mutations: MutationTree<SettingsState> = {
  // 侧边栏 logo
  CHAGNG_SIDEBAR: (state: SettingsState, payload: boolean) => {
    state.isShowLogo = payload
  },
  // 侧边栏关合
  TOGGLE_SIDEBAR: (state: SettingsState) => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
