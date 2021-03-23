import Vue from 'vue'
import Vuex from 'vuex'
import board from '../store/modules/board.js'
import list from '../store/modules/list.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    board,
    list
  }
})
