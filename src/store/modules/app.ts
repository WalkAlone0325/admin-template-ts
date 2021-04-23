import { storageLocal } from '@/utils/storage'
import { ActionTree, Module, MutationTree } from 'vuex'
import { RootState } from '..'

export interface AppState {
  sidebar: {
    opened: Boolean
    withoutAnimation: Boolean
  }
}

const state = {
  sidebar: {
    opened: storageLocal.getItem('sidebarStatus') ? !!+storageLocal.getItem('sidebarStatus') : true,
    withoutAnimation: false,
  },
}

const mutations: MutationTree<AppState> = {
  TOGGLE_SIDEBAR: (state: AppState): void => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      storageLocal.setItem('sidebarStatus', 1)
    } else {
      storageLocal.setItem('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state: AppState, withoutAnimation: boolean) => {
    storageLocal.setItem('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
}

const actions: ActionTree<AppState, RootState> = {
  // @ts-ignore
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  // @ts-ignore
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
} as Module<AppState, RootState>
