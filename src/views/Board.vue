<template>
  <main v-if="board._id">
    <BoardHeader/>
    <div
    class="board bg-primary overflow-x-scroll px-4 py-2 pb-4">
      <div class="flex flex-row items-start h-full max-h-full">
        <draggable
          class="h-full max-h-full"
          v-model="lists"
          v-bind="dragOptions"
          @end="updateListsOrder">
          <transition-group
          tag="div"
          class="flex flex-row items-start h-full max-h-full">
            <BoardList
              v-for="(list, index) of lists"
              :key="list._id ? list._id : index"
              :list="list"
              />
          </transition-group>
        </draggable>

        <div class="list flex">
          <input type="text"
                class="p-2 mr-2 flex-grow bg-white border-none rounded text-base"
                placeholder="+ 新增其他列表"
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
  </main>
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
      storeLists: state => state.lists
    }),
    ...mapState('user', {
      user: state => state.user
    }),
    isCardOpen () {
      return this.$route.name === 'card'
    },
    lists: {
      get () {
        return this.storeLists
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
  /* Navbar 40px, boardheader 44px*/
  height: calc(100vh - 40px - 44px);
  max-height: calc(100vh - 40px - 44px);
}

.card-bg {
  background: rgba(0,0,0,0.5);
  top: 0;
  right: 0;
}
</style>
