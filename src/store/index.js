import Vue from 'vue'
import Vuex from 'vuex'
import login from '@/store/module/login'
import video from '@/store/module/video'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    video
  }
})
