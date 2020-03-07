export default {
  namespaced: true,
  state: {
    comment: [{
      slug: '',
      count: 0,
      items: [{
        id: '',
        user: {
          slug: '',
          name: '',
          avatar: {
            small: '',
            medium: '',
            large: ''
          }
        },
        content: '',
        like_count: 0,
        liked: false,
        created_at: ''
      }]
    }]
  },
  mutations: {
    setComment (state, data) {
      state.comment.push(data)
    }
  }
}
