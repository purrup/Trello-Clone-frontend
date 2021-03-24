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
  async updateCard ({ commit }, { id, data }) {
    try {
      const updatedCard = await axios.put(`/cards/${id}`, {
        data
      })
      console.log('updatedCard:', updatedCard.data)
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
