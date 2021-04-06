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

    <div class="option h-8 w-8 flex justify-center items-center bg-secondary-100 rounded text-white text-base hover:bg-navbar-iconHover cursor-pointer"
    @click="isOptionOpen = true">
      <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="-2 -2 24 24"
      fill="currentColor">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </svg>
      <div
        v-if="isOptionOpen"
        class="optioin-button-group origin-top-right absolute right-4 mt-20 w-28 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-700 ease-in-out">
        <div class="delete-board block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
        @click="isConfirmModalOpen = true">
          <AppIcon
            :icon="['far', 'trash-alt']"
            class="mr-1">
          </AppIcon>
          <span>
            刪除看板
          </span>
        </div>
      </div>
    </div>
    <confirmModal
    v-if="isConfirmModalOpen"
    @confirm="deleteBoard"/>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import confirmModal from '../components/confirmModal.vue'

export default {
  components: {
    confirmModal
  },
  data () {
    return {
      enterTime: 0,
      inputWidth: 0,
      isOptionOpen: false,
      isConfirmModalOpen: false
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
    },
    deleteBoard (boolean) {
      if (boolean === true) {
        this.$store.dispatch('board/deleteBoard', this.board._id)
        console.log('delete')
        this.$router.push({ name: 'home' })
      }
      this.isConfirmModalOpen = false
      this.isOptionOpen = false
    }
  }
}
</script>

<style scoped>
</style>
