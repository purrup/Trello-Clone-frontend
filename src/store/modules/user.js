// import axios from '../../utils/axios.js'

const state = {
  user:
    {
      '_id': '6054a8b8ad53c477636ffffc',
      'name': 'User No.3',
      'email': 'User email-3',
      'password': 'User password-3'
    }

}

const getters = {
}

const mutations = {
  SET_USER (state, data) {
    // console.log('SET_USER', data)
    state.user = data
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
