export default {
  namespaced: true,
  state: {
    token: '',
    namePassword: []
  },
  mutations: {
    setToken (state, data) {
      state.token = data
    },
    setNamePassword (state, data) {
      return state.namePassword.push(data)
    }
  }
}
