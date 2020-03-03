import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import swiper from 'swiper'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$swiper = swiper

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
