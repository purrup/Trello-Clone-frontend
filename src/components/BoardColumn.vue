<template>
    <div class="column">
      <div class="flex items-center mb-2 font-bold">
        {{ column.name }}
      </div>
      <div class="list-reset">
        <draggable v-model="columnTasks"
          v-bind="dragOptions">
          <transition-group>
            <ColumnTask
                  v-for="(task, $taskIndex) of column.tasks"
                  :key="task.id"
                  :task="task"
                  :taskIndex="$taskIndex"
                  :column="column"
                  :columnIndex="columnIndex"
                  :board="board" />
          </transition-group>
        </draggable>

        <input type="text"
                class="block p-2 w-full bg-transparent"
                placeholder="+ Enter New Task"
                @keyup.enter="createTask($event, column.tasks)">
      </div>
    </div>
</template>

<script>
import ColumnTask from '@/components/ColumnTask.vue'
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin.js'
import draggable from 'vuedraggable'

export default {
  components: {
    ColumnTask,
    draggable
  },
  mixins: [movingTasksAndColumnsMixin],
  computed: {
    columnTasks: {
      get () {
        return this.column.tasks
      },
      set (value) {
        const columnIndex = this.columnIndex
        this.$store.commit('MOVE_TASK', { columnIndex, value })
      }
    },
    dragOptions () {
      return {
        animation: 200
      }
    }
  },
  methods: {

    pickupColumn (e, fromColumnIndex) {
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.dropEffect = 'move'

      e.dataTransfer.setData('from-column-index', fromColumnIndex)
      e.dataTransfer.setData('type', 'column')
    },
    createTask (event, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: event.target.value
      })
      event.target.value = ''
    }
  }
}
</script>

<style lang="css">
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>
