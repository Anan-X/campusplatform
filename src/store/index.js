import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: null,
    token: '',
    admin:false
  },
  mutations: {
    loginAfter (state, payload) {
      state.userInfo = payload.data.info
      state.token = payload.data.token
      state.admin = true
      // 把token储存在localStorage中
      localStorage.setItem('token',state.token)
    },
    exit (state) {
      state.userInfo = null
      state.token = ''
      state.admin = false
      localStorage.removeItem('token')
      sessionStorage.removeItem('store')
      sessionStorage.clear()
    }
  }
})

export default store