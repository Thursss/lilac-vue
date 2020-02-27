import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
    menu: ''
  },
  mutations: {
  },
  actions: {
    set_user(state, user) {
      console.log(user);
      state.user = user
    },
    set_menu(state, menu) {
      state.menu = menu
    }
  },
  modules: {
  }
})
