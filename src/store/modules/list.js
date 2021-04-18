import axios from '../../utils/axios.js'

const state = {
  list: [{
  }]
}

const getters = {
}

const mutations = {
  SET_LIST (state, data) {
    state.list = data
  },
  MOVE_LIST (state, data) {
    state.list = data
  },
  UPDATE_LIST_TITLE (state, { id, data }) {
    state.list.forEach(list => {
      if (list._id === id) {
        list.title = data
      }
    })
  },
  CREATE_LIST (state, { data }) {
    state.list.push(data)
  },
  DELETE_LIST (state, { id }) {
    state.list = state.list.filter(list => list._id !== id)
  },
  ADD_CARD (state, { data }) {
    state.list.forEach(list => {
      if (list._id === data.listId) {
        if (!list.cards) {
          list.cards = []
          list.cards.push(data)
        }
        list.cards.push(data)
      }
    })
  },
  MOVE_CARD (state, { listId, data }) {
    state.list.forEach(list => {
      if (list._id === listId) {
        list.cards = data
      }
    })
  },
  DELETE_CARD (state, { id }) {
    state.list.forEach((list, index) => {
      const cards = list.cards.filter(card => card._id !== id)
      state.list[index].cards = cards
    })
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
      commit('CREATE_LIST', { data: list.data })
    } catch (error) {
      console.log(error)
    }
  },
  async deleteList ({ commit }, { id }) {
    try {
      commit('DELETE_LIST', { id })
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
