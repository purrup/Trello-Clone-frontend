import axios from '../../utils/axios.js'
import router from '../../router.js'

const state = {
  board: [],
  boards: []
}

const getters = {
  getCard (state) {
    return (id) => {
      for (const list of state.board.lists) {
        for (const card of list.cards) {
          if (card._id === id) {
            return card
          }
        }
      }
    }
  }
}

const mutations = {
  SET_BOARD (state, data) {
    state.board = data
  },
  SET_BOARDS (state, data) {
    state.boards = data
  },
  UPDATE_BOARD_TITLE (state, value) {
    state.board.title = value
  },
  UPDATE_BOARD_LIST (state, value) {
    state.board.lists = value
  },
  ADD_NEW_BOARD (state, data) {
    console.log('ADD_NEW_BOARD', data)
    state.boards.push(data)
  },
  DELETE_BOARD (state, id) {
    state.boards = state.boards.filter(board => board._id !== id)
  },
  RESET_BOARD (state) {
    state.board = []
    state.boards = []
  }
}

const actions = {
  async getBoards ({ commit, rootState }) {
    try {
      // const response = await axios.get(`/boards`, {
      //   headers: {
      //     'Authorization': `Bearer ${rootState.user.token}`
      //   }
      // })
      const response = await axios.get(`/boards`)
      commit('SET_BOARDS', response.data)
    } catch (error) {
      if (error.response.status === 404) {
        commit('SET_BOARDS', [])
        console.log(error.response.data)
      }
      console.log(error)
    }
  },
  async getBoard ({ commit }, id) {
    try {
      const { data } = await axios.get(`/boards/${id}`)
      commit('SET_BOARD', data)
      commit('list/SET_LIST', data.lists, { root: true })
    } catch (error) {
      if (error.response.status === 404) {
        console.log(error.response.data)
        router.push({ name: 'NotFound' })
      }
      console.log(error)
    }
  },
  async createBoard ({ commit }, { data }) {
    try {
      const newBoard = await axios.post(`/boards`, { data })
      commit('ADD_NEW_BOARD', newBoard.data)
    } catch (error) {
      console.log(error)
    }
  },
  async updateBoard ({ commit }, { id, data }) {
    try {
      const updatedBoard = await axios.put(`/boards/${id}`, {
        data
      })
      console.log('updatedBoard:', updatedBoard.data)
    } catch (error) {
      console.log(error)
    }
  },
  async deleteBoard ({ commit }, id) {
    try {
      const response = await axios.delete(`/boards/${id}`)
      commit('notification/SET_SUCCESS_MESSAGE', `已刪除看板: ${response.data.title}`, { root: true })
      commit('DELETE_BOARD', id)
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
