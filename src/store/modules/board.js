import axios from '../../utils/axios.js'

const state = {
  board: [],
  boards: []
  // {
  //   '_id': '6054a8c4753756779c0223ad',
  //   'members': [],
  //   'title': 'Board title-0',
  //   'userCreated': '6054a8b8ad53c477636ffffc',
  //   '__v': 0,
  //   'lists': [
  //     {
  //       '_id': '6054a8cb9ebf1477b941162a',
  //       'title': 'List title-0',
  //       'boardId': '6054a8c4753756779c0223ad',
  //       'userCreated': '6054a8b8ad53c477636ffffa',
  //       'order': 0,
  //       '__v': 0,
  //       'cards': [
  //         {
  //           '_id': '6054a8d27f33d677da9c5ff3',
  //           'members': [],
  //           'title': 'Card title-3',
  //           'listId': '6054a8cb9ebf1477b941162a',
  //           'boardId': '6054a8c4753756779c0223ad',
  //           'userCreated': '6054a8b8ad53c477636ffffc',
  //           'order': 3,
  //           '__v': 0
  //         },
  //         {
  //           '_id': '6054a8d27f33d677da9c5ff4',
  //           'members': [],
  //           'title': 'Card title-4',
  //           'listId': '6054a8cb9ebf1477b941162a',
  //           'boardId': '6054a8c4753756779c0223ad',
  //           'userCreated': '6054a8b8ad53c477636ffffb',
  //           'order': 4,
  //           '__v': 0
  //         },
  //         {
  //           '_id': '6054a8d27f33d677da9c5ff7',
  //           'members': [],
  //           'title': 'Card title-7',
  //           'listId': '6054a8cb9ebf1477b941162a',
  //           'boardId': '6054a8c4753756779c0223ad',
  //           'userCreated': '6054a8b8ad53c477636ffffd',
  //           'order': 7,
  //           '__v': 0
  //         }
  //       ]
  //     },
  //     {
  //       '_id': '6054a8cb9ebf1477b941162c',
  //       'title': 'List title-2',
  //       'boardId': '6054a8c4753756779c0223ad',
  //       'userCreated': '6054a8b8ad53c477636ffffb',
  //       'order': 2,
  //       '__v': 0,
  //       'cards': [
  //         {
  //           '_id': '6054a8d27f33d677da9c5ff6',
  //           'members': [],
  //           'title': 'Card title-6',
  //           'listId': '6054a8cb9ebf1477b941162c',
  //           'boardId': '6054a8c4753756779c0223ad',
  //           'userCreated': '6054a8b8ad53c477636ffffb',
  //           'order': 6,
  //           '__v': 0
  //         },
  //         {
  //           '_id': '6054a8d27f33d677da9c5ff1',
  //           'members': [],
  //           'title': 'Card title-1',
  //           'listId': '6054a8cb9ebf1477b941162c',
  //           'boardId': '6054a8c4753756779c0223ad',
  //           'userCreated': '6054a8b8ad53c477636ffff9',
  //           'order': 1,
  //           '__v': 0
  //         }
  //       ]
  //     }
  //   ]
  // }

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
  }
}

const actions = {
  async getBoards ({ commit }) {
    try {
      const response = await axios.get(`/boards`)
      commit('SET_BOARDS', response.data)
    } catch (error) {
      if (error.response.status === 404) {
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
      await axios.delete(`/boards/${id}`)
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
