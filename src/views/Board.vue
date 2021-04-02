<template>
  <div class="board bg-primary h-screen overflow-y-hidden">
    <BoardHeader/>
    <div class="flex flex-row items-start">
      <draggable
        v-model="lists"
        v-bind="dragOptions"
        @end="updateListsOrder">
        <transition-group class="flex flex-row items-start">
          <BoardList
            v-for="(list, index) of lists"
            :key="list._id ? list._id : index"
            :list="list"
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
import BoardList from '@/components/BoardList.vue'
import BoardHeader from '@/components/BoardHeader.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    BoardList,
    draggable,
    BoardHeader
  },
  data () {
    return {
    }
  },
  mounted () {
    // this.getBoard(this.$route.params.boardId)
  },
  computed: {
    ...mapState('board', {
      board: state => state.board
    }),
    ...mapState('list', {
      list: state => state.list
    }),
    ...mapState('user', {
      user: state => state.user
    }),
    isCardOpen () {
      return this.$route.name === 'card'
    },
    lists: {
      get () {
        return this.list
      },
      set (data) {
        this.MOVE_LIST(data)
      }
    },
    dragOptions () {
      return {
        animation: 100,
        filter: 'textarea, input',
        preventOnFilter: false
      }
    }
  },
  methods: {
    ...mapActions('board', ['getBoard', 'updateBoard']),
    ...mapActions('list', ['updateList']),
    ...mapMutations('list', ['MOVE_LIST']),
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

.board {
  @apply px-4 py-2 overflow-x-auto;
}

.card-bg {
  background: rgba(0,0,0,0.5);
  top: 0;
  right: 0;
}
</style>
