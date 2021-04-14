import axios from '../../utils/axios.js'
import router from '../../router.js'

const state = {
  user: {},
  isLogin: localStorage.getItem('isLogin') || false,
  expiration: new Date(localStorage.getItem('expiration')) || false,
  token: localStorage.getItem('token') || false
}

const getters = {
  getUser (state) {
    return state.user
  },
  getToken (state) {
    return state.token
  }
}

const mutations = {
  SET_USER (state, data) {
    state.user = data
  },
  SET_login (state) {
    localStorage.setItem('expiration', new Date(Date.now() + 1000 * 3600 * 24))
    localStorage.setItem('isLogin', true)
    state.isLogin = true
  },
  SET_TOKEN (state, data) {
    localStorage.setItem('token', data)
    state.token = data
  },
  SET_logout (state) {
    state.isLogin = false
    localStorage.setItem('isLogin', false)
    localStorage.removeItem('token')
    state.user = {}
    state.token = false
    state.expiration = false
  }
}

const actions = {
  async signup ({ commit }, data) {
    try {
      const response = await axios.post(`/signup`, data)
      commit('SET_USER', response.data.user)
      commit('SET_TOKEN', response.data.token)
      commit('notification/SET_SUCCESS_MESSAGE', `註冊成功！歡迎${response.data.user.name}！`, { root: true })
      commit('SET_login')
      router.push({ name: 'home' })
    } catch (error) {
      if (error.response.status) {
        commit('notification/SET_ERROR_MESSAGE', error.response.data.message, { root: true })
      }
      console.log(error)
    }
  },
  async login ({ commit }, data) {
    try {
      const response = await axios.post(`/login`, data)
      commit('SET_USER', response.data.user)
      commit('SET_TOKEN', response.data.token)
      commit('SET_login')
      commit('notification/SET_SUCCESS_MESSAGE', '登入成功！', { root: true })
      router.push({ name: 'home' })
    } catch (error) {
      if (error.response.status === 401) {
        commit('notification/SET_ERROR_MESSAGE', error.response.data.message, { root: true })
      }
      console.log(error)
    }
  },
  async logout ({ commit }) {
    try {
      await axios.post('/logout')
      commit('notification/SET_SUCCESS_MESSAGE', '登出成功！', { root: true })
    } catch (error) {
      console.log(error)
    }
  },
  async getUser ({ commit }) {
    try {
      const { data } = await axios.get(`/users`)
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
