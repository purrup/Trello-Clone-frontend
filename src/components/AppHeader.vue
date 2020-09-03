<template>
  <div class="header h-12 flex justify-between items-center overflow-auto pb-2">
    <input
    type="text"
    v-model="boardName"
    @keyup.enter="$event.target.blur()"
    class="w-auto bg-blue-500 focus:bg-white focus:text-black focus:font-medium text-white border-none font-bold text-2xl">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    test (e) {
      console.log(e.target)
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
  }
}
</script>

<style scoped>
.header {
}
</style>
