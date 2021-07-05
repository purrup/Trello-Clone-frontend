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
        class="card boards-list"
        v-for="board in boards"
        :key="board._id">
          <router-link
          :to="{ name: 'board', params: { boardId: board._id } }"
          class="text-white text-left font-black text-lg absolute top-0 left-0 right-0 bottom-0 pl-2 pt-1">
            {{ board.title }}
          </router-link>
        </li>

        <li class="card create-boards">
          <div
          :to="{ name: 'home'}"
          class="w-full h-full text-textColor-primary font-normal text-base flex justify-center items-center cursor-pointer"
          @click="isCreateCardOpen = true">
              <span>
                建立新的看板
              </span>
          </div>
        </li>
      </ul>

    </div>

    <CreateBoardModal
      v-if="isCreateCardOpen"
      @click.self="closeCard"
      @close="closeCard"
      />

  </div>
</template>

<script>
import { mapState } from 'vuex'
import CreateBoardModal from '../components/CreateBaordModal.vue'
export default {
  components: {
    CreateBoardModal
  },
  data () {
    return {
      isCreateCardOpen: false
    }
  },
  computed: {
    ...mapState('board', {
      boards: state => state.boards
    })
  },
  methods: {
    closeCard () {
      this.isCreateCardOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  @apply rounded-sm relative mr-7 mb-10 transition duration-200 ease-in;
  width: 23%;
  min-width: 190px;
  height: 96px;
}

.boards-list {
  @apply p-3 bg-navbar-blue ;
  &:hover {
    @apply bg-boardCard-hover;
  }
}
.create-boards {
  @apply  bg-gray-300;
  &:hover {
    @apply bg-gray-400;
  }
}
</style>
