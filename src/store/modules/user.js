import axios from '../../utils/axios.js'

const state = {
  user: {},
  isLogin: localStorage.getItem('isLogin') || false,
  expiration: new Date(localStorage.getItem('expiration')) || false
}

const getters = {
  getUser (state) {
    return state.user
  }
}

const mutations = {
  SET_USER (state, data) {
    // console.log('SET_USER', data)
    state.user = data
  },
  SET_login (state) {
    localStorage.setItem('expiration', new Date(Date.now() + 1000 * 3600 * 24))
    localStorage.setItem('isLogin', true)
    state.isLogin = true
  },
  SET_logout (state) {
    state.isLogin = false
    localStorage.setItem('isLogin', false)
  }
}

const actions = {
  async login ({ commit }, data) {
    try {
      // console.log(data)
      const response = await axios.post(`/login`, data)
      commit('SET_USER', response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  async logout ({ commit }) {
    try {
      await axios.post('/logout')
    } catch (error) {
      console.log(error)
    }
  },
  async getUser ({ commit }) {
    try {
      const { data } = await axios.get(`/users`)
      // console.log(data)
      commit('SET_USER', data)
    } catch (error) {
      console.log(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
