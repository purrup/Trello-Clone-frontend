import axios from '../../utils/axios.js'

const state = {
  card: [{
  }]
}

const getters = {
}

const mutations = {
}

const actions = {
  async createCard ({ commit }, { data }) {
    try {
      const createdCard = await axios.post(`/cards`, {
        data
      })
      commit('list/ADD_CARD', { data }, { root: true })
      console.log('createdCard:', createdCard.data)
    } catch (error) {
      console.log(error)
    }
  },
  async updateCard ({ commit }, { id, data }) {
    try {
      const updatedCard = await axios.put(`/cards/${id}`, {
        data
      })
      console.log('updatedCard:', updatedCard.data)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteCard ({ commit }, { id }) {
    try {
      await axios.delete(`/cards/${id}`)
      commit('list/DELETE_CARD', { id }, { root: true })
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
