// import axios from '../../utils/axios.js'

const state = {
  // showNotification: false,
  successMessage: '',
  errorMessage: ''
}

const getters = {
}

const mutations = {
  SET_SUCCESS_MESSAGE (state, message) {
    // state.showNotification = true
    state.successMessage = message
  },
  SET_ERROR_MESSAGE (state, message) {
    // state.showNotification = true
    state.errorMessage = message
  },
  DELETE_MESSAGE (state) {
    // state.showNotification = false
    state.successMessage = ''
    state.errorMessage = ''
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
