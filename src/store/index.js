import Vue from 'vue'
import Vuex from 'vuex'
import board from '../store/modules/board.js'
import list from '../store/modules/list.js'
import user from '../store/modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    board,
    list,
    user
  }
})
