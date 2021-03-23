import Vue from 'vue'
import Vuex from 'vuex'
import board from '../store/modules/board.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    board
  }
})
