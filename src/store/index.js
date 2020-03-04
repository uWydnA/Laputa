import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/store/module/login'
import video from '@/store/module/video'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer (data) {
      return {
        login: data.login,
        video: data.video
      }
    }
  })],
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    video
  }
})
