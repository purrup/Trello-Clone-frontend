<template>
  <div class="header h-auto flex justify-between items-center overflow-auto pb-2">
    <span
    class="h-0 px-4 whitespace-nowrap overflow-hidden absolute font-bold text-xl"
    ref="hideSpan">{{ boardTitle }}</span>
    <input
    type="text"
    v-model="boardTitle"
    ref="input"
    @keyup.enter="blurOnSecondEnter"
    @blur="updateBoardTitle"
    class="py-1 px-4 bg-secondary-100 focus:bg-white focus:text-black focus:font-medium text-white border-none font-bold text-xl rounded-md"
    :style="autoWidth">
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      enterTime: 0,
      inputWidth: 0
    }
  },
  mounted () {
    this.resizeWidth()
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
        this.resizeWidth()
      }
    },
    autoWidth () {
      return {
        'width': `${this.inputWidth}px`
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
    },
    resizeWidth () {
      this.inputWidth = this.$refs.hideSpan.offsetWidth // offsetWidth是「元素本身」的寬度/高度，並完整了包含了邊界、捲軸及padding，所以包含了span px-4的寬度
    }
  }
}
</script>

<style scoped>
</style>
