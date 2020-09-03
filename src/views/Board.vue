<template>
  <div class="board bg-blue-500 h-screen overflow-y-hidden">
    <AppHeader></AppHeader>
    <div class="flex flex-row items-start">
      <draggable
        v-model="columns"
        v-bind="dragOptions">
        <transition-group class="flex flex-row items-start">
          <BoardColumn
            v-for="(column, $columnIndex) of board.columns"
            :key="column.name"
            :column="column"
            :columnIndex="$columnIndex"
            :board="board" />
        </transition-group>
      </draggable>

      <div class="column flex">
        <input type="text"
               class="p-2 mr-2 flex-grow bg-white border-none text-base"
               placeholder="+ Add New Column"
               @keyup.enter="createColumn">
      </div>
    </div>

    <div
      v-if="isTaskOpen"
      class="task-bg w-screen h-screen absolute"
      @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardColumn from '@/components/BoardColumn.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    BoardColumn,
    draggable
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen () {
      return this.$route.name === 'task'
    },
    columns: {
      get () {
        return this.board.columns
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
    close () {
      return this.$router.push({ name: 'board' })
    },
    createColumn (event) {
      if (event.target.value === '') {
        // if user does not key in any word, blur the input
        return event.target.blur()
      } else {
        this.$store.commit('CREATE_COLUMN', {
          name: event.target.value
        })
        event.target.value = ''
      }
    }
  }
}
</script>

<style lang="css">

.column {
  @apply bg-gray-400 p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}

.board {
  @apply p-4 overflow-x-auto;
}

.task-bg {
  background: rgba(0,0,0,0.5);
  top: 0;
  right: 0;
}
</style>
