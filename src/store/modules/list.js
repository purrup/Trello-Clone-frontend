import axios from '../../utils/axios.js'

const state = {
  list: [{
  }]
}

const getters = {
}

const mutations = {
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
  },
  async createList ({ commit }, { data }) {
    try {
      // console.log('data:', data)
      const list = await axios.post(`/lists`, { data })
      console.log('created list:', list.data)
      commit('board/CREATE_BOARD_LIST', { data: list.data }, { root: true })
    } catch (error) {
      console.log(error)
    }
  },
  async deleteList ({ commit }, { id }) {
    try {
      await axios.delete(`/lists/${id}`)
      // console.log('deleted list:', response)
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
