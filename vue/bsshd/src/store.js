import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    exceptionDay: '',
    taskDay: '',
    user: null
  },
  getters: {
    exceptionDay: state => {
      return state.exceptionDay
    },
    taskDay: state => {
      return state.taskDay
    }
  },
  mutations: {},
  actions: {}
})
