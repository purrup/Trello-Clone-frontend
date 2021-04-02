<template>
  <div class="w-1/2 mx-auto pt-4">
    <div class="boards-list-header flex justify-start items-center font-bold">
      <AppIcon
        :icon="['far', 'user']"
        class="text-xl"/>
      <span class="pl-6 text-lg pt-1 text-textColor-primary">
        個人看板
      </span>
    </div>

    <div>
      <ul
          class="w-full flex flex-1 flex-row flex-wrap justify-start items-center pt-3">
        <li
        class="boards-list-card"
        v-for="board in boards"
        :key="board._id">
          <router-link
          :to="{ name: 'board', params: { boardId: board._id } }"
          class="text-white text-left font-black text-lg absolute top-0 left-0 right-0 bottom-0 pl-2 pt-1">
            {{ board.title }}
          </router-link>
        </li>

        <li class="boards-list-create-card ">
          <div
          :to="{ name: 'home'}"
          class="w-full h-full text-textColor-primary font-normal text-base flex justify-center items-center cursor-pointer">
              <span>
                建立新的看板
              </span>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState('board', {
      boards: state => state.boards
    })
  }
}
</script>

<style lang="scss" scoped>
.boards-list-card {
  @apply p-3 rounded-sm bg-navbar-DEFAULT relative mr-4 mb-6 transition duration-200 ease-in;
  width: 23%;
  min-width: 190px;
  height: 96px;
  &:hover {
    @apply bg-boardCard-hover;
  }
}
.boards-list-create-card {
  @apply rounded-sm bg-gray-300 relative mr-4 mb-5 transition duration-200 ease-in ;
  width: 23%;
  height: 96px;
  min-width: 190px;
  &:hover {
    @apply bg-gray-400;
  }
}
</style>
