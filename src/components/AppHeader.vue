<template>
  <div class="header h-12 flex justify-between items-center overflow-auto pb-2">
    <input
    type="text"
    v-model="boardName"
    @keyup.enter="blurOnSecondEnter"
    class="w-auto bg-blue-500 focus:bg-white focus:text-black focus:font-medium text-white border-none font-bold text-2xl">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      enterTime: 0
    }
  },
  computed: {
    ...mapState(['board']),
    boardName: {
      get () {
        return this.board.name
      },
      set (value) {
        this.$store.commit('UPDATE_BOARD_NAME', value)
      }
    }
  },
  methods: {
    blurOnSecondEnter (e) {
      // 按兩次enter才會blur input，以免輸入中文時，按一次enter就blur
      this.enterTime++
      if (this.enterTime === 2) {
        e.target.blur()
        this.enterTime = 0
      }
    }
  }
}
</script>

<style scoped>
</style>
