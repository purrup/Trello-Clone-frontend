import axios from '../../utils/axios.js'

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
  async getUser ({ commit }, id) {
    try {
      const { data } = await axios.get(`/users/${id}`)
      console.log(data)
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
