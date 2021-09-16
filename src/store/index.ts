import { createStore, useStore as baseUseStore } from 'vuex'

interface State {
  isSiderOpened: boolean
}

const store = createStore<State>({
  state() {
    return {
      isSiderOpened: true,
    }
  },

  mutations: {
    openSider(state) {
      state.isSiderOpened = true
    },
    closeSider(state) {
      state.isSiderOpened = false
    },
  },
})

export default store

export function useStore() {
  return baseUseStore()
}
