<template>
  <div class="fixed z-10 inset-0 overflow-y-auto"
  >
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div
      class="fixed inset-0 bg-black bg-opacity-70 transition-opacity"
      @click="$emit('close')"></div>

      <div class="inline-block align-bottom bg-primary rounded-md text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="board-title-header p-3 flex justify-between items-center">
          <input
          type="text"
          v-model="boardTitle"
          class="w-2/3 py-1 px-4 bg-primary focus:bg-white focus:text-black focus:font-medium placeholder-secondary-100 text-secondary-100 border-none font-bold text-xl rounded-md"
          placeholder="新增看版標題">

          <div
            class="cancel-button flex items-center h-8 w-8 cursor-pointer"
            @click="$emit('close')"
          >
            <svg
              class="text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-3 -3 26 26"
              fill="currentColor">
                <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd" />
            </svg>
          </div>
        </div>

        <div class="bg-gray-50 py-3 sm:flex sm:flex-row">
          <button type="button"
          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          @click="createBoard"
          >
            建立看板
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      boardTitle: ''
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user
    })
  },
  methods: {
    async createBoard () {
      // need notifications
      const data = {
        title: this.boardTitle,
        userCreated: this.user._id
      }
      await this.$store.dispatch('board/createBoard', { data })
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
