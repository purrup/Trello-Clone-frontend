<template>
  <div class="header h-12 flex justify-between items-center overflow-auto pb-2">
    <input
    type="text"
    v-model="boardTitle"
    @keyup.enter="blurOnSecondEnter"
    @blur="updateBoardTitle"
    class="bg-secondary-100 focus:bg-white focus:text-black focus:font-medium text-white border-none font-bold text-2xl rounded-sm">
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      enterTime: 0
    }
  },
  computed: {
    ...mapState('board', {
      board: state => state.board
    }),
    boardTitle: {
      get () {
        return this.board.title
      },
      set (value) {
        this.UPDATE_BOARD_TITLE(value)
      }
    }
  },
  methods: {
    ...mapMutations('board', ['UPDATE_BOARD_TITLE']),
    ...mapActions('board', ['updateBoard']),
    blurOnSecondEnter (e) {
      // 按兩次enter才會blur input，以免輸入中文時，按一次enter就blur
      this.enterTime++
      if (this.enterTime === 2) {
        e.target.blur()
        this.enterTime = 0
      }
    },
    // input blur後 dispatch updateBoard
    async updateBoardTitle () {
      await this.updateBoard({ id: this.board._id, data: this.board })
    }
  }
}
</script>

<style scoped>
</style>
