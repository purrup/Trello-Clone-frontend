<template>
  <div class="board bg-blue-500 h-screen overflow-y-hidden">
    <AppHeader></AppHeader>
    <div class="flex flex-row items-start">
      <draggable
        v-model="lists"
        v-bind="dragOptions">
        <transition-group class="flex flex-row items-start">
          <List
            v-for="(list, $listIndex) of board.lists"
            :key="list._id"
            :list="list"
            :listIndex="$listIndex"
            :board="board" />
        </transition-group>
      </draggable>

      <div class="list flex">
        <input type="text"
               class="p-2 mr-2 flex-grow bg-white border-none text-base"
               placeholder="+ Add New Column"
               @keyup.enter="createColumn">
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
import { mapState, mapActions } from 'vuex'
import List from '@/components/List.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    List,
    draggable
  },
  data () {
    return {
      backendBoard: {
        _id: '6054a8c4753756779c0223ad'
      }
    }
  },
  mounted () {
    this.getBoard(this.backendBoard._id)
  },
  computed: {
    ...mapState('board', {
      board: state => state.board
    }),
    isCardOpen () {
      return this.$route.name === 'card'
    },
    lists: {
      get () {
        return this.board.lists
      },
      set (value) {
        this.$store.commit('UPDATE_BOARD', value)
      }
    },
    dragOptions () {
      return {
        animation: 100
      }
    }
  },
  methods: {
    ...mapActions('board', ['getBoard']),
    close () {
      return this.$router.push({ name: 'board' })
    },
    createList (event) {
      if (event.target.value === '') {
        // if user does not key in any word, blur the input
        return event.target.blur()
      } else {
        this.$store.commit('CREATE_LIST', {
          title: event.target.value
        })
        event.target.value = ''
      }
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
