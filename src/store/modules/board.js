import axios from '../../utils/axios.js'

const state = {
  board: [{}]
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
  UPDATE_BOARD_TITLE (state, value) {
    state.board.title = value
  },
  UPDATE_BOARD (state, value) {
    state.board.lists = value
  },
  CREATE_LIST (state, { title }) {
    state.board.lists.push({
      title
    })
  },
  REMOVE_LIST (state, listIndex) {
    state.board.lists.splice(listIndex, 1)
  },
  CREATE_CARD (state, { cards, title }) {
    cards.push({
      title,
      description: ''
    })
  },
  UPDATE_CARD (state, { card, key, value }) {
    card[key] = value
  },
  MOVE_CARD (state, { listIndex, value }) {
    state.board.lists[listIndex].card = value
  },
  REMOVE_CARD (state, { listIndex, cardIndex }) {
    const cardList = state.board.lists[listIndex].cards
    cardList.splice(cardIndex, 1)
  }
}

const actions = {
  async getBoard ({ commit }, id) {
    try {
      const { data } = await axios.get(`/boards/${id}`)
      commit('SET_BOARD', data[0])
    } catch (error) {
      console.log(error)
    }
  },
  async updateBoard ({ commit }, { id, data }) {
    try {
      console.log('data:', data)
      const updatedBoard = await axios.put(`/boards/${id}`, {
        data
      })
      console.log('updatedBoard:', updatedBoard.data)
      // commit('SET_BOARD', updatedBoard[0])
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
