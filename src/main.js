import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import swiper from 'swiper'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$swiper = swiper
axios.interceptors.request.use((config) => {
  store.commit('setLoading', 0)
  return config
})
axios.interceptors.response.use((config) => {
  store.commit('setLoading', 2)
  return config
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
