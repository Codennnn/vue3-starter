import { createStore, useStore as baseUseStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
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
