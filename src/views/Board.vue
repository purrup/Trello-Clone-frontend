<template>
  <div class="board bg-blue-500 h-screen overflow-y-hidden">
    <AppHeader></AppHeader>
    <div class="flex flex-row items-start">
      <draggable
        v-model="lists"
        v-bind="dragOptions"
        @end="updateListsOrder">
        <transition-group class="flex flex-row items-start">
          <List
            v-for="(list, $listIndex) of board.lists"
            :key="list._id"
            :list="list"
            :listIndex="$listIndex"
            :board="board"
            />
        </transition-group>
      </draggable>

      <div class="list flex">
        <input type="text"
               class="p-2 mr-2 flex-grow bg-white border-none text-base"
               placeholder="+ Add New List"
               @keyup.enter="createList">
      </div>
    </div>

    <div
      v-if="isCardOpen"
      class="card-bg w-screen h-screen absolute"
      @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import List from '@/components/List.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    List,
    draggable
  },
  data () {
    return {
    }
  },
  mounted () {
    this.getBoard(this.$route.params.boardId)
  },
  computed: {
    ...mapState('board', {
      board: state => state.board
    }),
    ...mapState('user', {
      user: state => state.user
    }),
    isCardOpen () {
      return this.$route.name === 'card'
    },
    lists: {
      get () {
        return this.board.lists
      },
      set (value) {
        this.UPDATE_BOARD_LIST(value)
      }
    },
    dragOptions () {
      return {
        animation: 100
      }
    }
  },
  methods: {
    ...mapActions('board', ['getBoard', 'updateBoard']),
    ...mapActions('list', ['updateList']),
    ...mapMutations('board', ['UPDATE_BOARD_LIST']),
    close () {
      return this.$router.push({ name: 'board' })
    },
    createList (event) {
      if (event.target.value === '') {
        // if user does not key in any word, blur the input
        return event.target.blur()
      } else {
        const data = {
          'title': event.target.value,
          'boardId': this.board._id,
          'userCreated': this.user._id,
          'order': this.lists.length // 預設放在lists的最後一個
        }
        this.$store.dispatch('list/createList', { data })
      }
      event.target.value = ''
    },
    async updateListsOrder () {
      const lists = this.lists.map((list, index) => {
        list.order = index
        return list
      })
      await lists.forEach(list => {
        this.updateList({ id: list._id, data: list })
      })
    }
  }
}
</script>

<style lang="css" scoped>

.list {
  @apply bg-gray-400 p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 overflow-x-auto;
}

.card-bg {
  background: rgba(0,0,0,0.5);
  top: 0;
  right: 0;
}
</style>
