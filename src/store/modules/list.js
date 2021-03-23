import axios from '../../utils/axios.js'

const state = {
  list: [{
  }]
}

const getters = {
}

const mutations = {
  CREATE_LIST (state, { title }) {
    state.board.lists.push({
      title
    })
  },
  REMOVE_LIST (state, listIndex) {
    state.board.lists.splice(listIndex, 1)
  }
}

const actions = {
  async updateList ({ commit }, { id, data }) {
    try {
      const updatedList = await axios.put(`/lists/${id}`, {
        data
      })
      console.log('updatedList:', updatedList.data)
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
