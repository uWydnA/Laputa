import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/store/module/login'
import video from '@/store/module/video'
import comment from '@/store/module/comment'
import createPersistedState from 'vuex-persistedstate'
import { Toast } from 'vant'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer (data) {
      return {
        login: data.login,
        video: data.video,
        comment: data.comment
      }
    }
  })],
  state: {
    isLoading: 0
  },
  mutations: {
    setLoading (state, data) {
      state.isLoading = data
      if (data == 2) {
        Toast.clear()
      } else {
        Toast.loading({
          message: 'loading...',
          forbidClick: true,
          duration: 0
        })
      }
    }
  },
  actions: {

  },
  modules: {
    login,
    video,
    comment
  }
})
