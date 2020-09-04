<template>
    <div class="column">
      <div
      class="flex justify-between items-center mb-2 font-bold"
      @mouseover="showRemoveIcon = true"
      @mouseout="showRemoveIcon = false">
        {{ column.name }}
        <AppIcon
        v-show="showRemoveIcon"
          :icon="['far', 'trash-alt']"
          @click.stop="removeColumn"
          class="removeIcon hover:text-red-500 transition duration-500 ease-in-out">
        </AppIcon>
      </div>
      <div>
        <draggable
          class="columnTask overflow-y-auto"
          v-model="columnTasks"
          group="tasks-group"
          v-bind="dragOptions"
          ghost-class="ghost-task">
          <transition-group>
            <ColumnTask
                  v-for="(task, $taskIndex) of column.tasks"
                  :key="task.id"
                  :task="task"
                  :taskIndex="$taskIndex"
                  :columnIndex="columnIndex" />
          </transition-group>
        </draggable>

        <input type="text"
                class="block h-10 w-full bg-transparent border-none text-base text-gray-600 placeholder-gray-700"
                placeholder="+ Add New Task"
                @keyup.enter="createTask($event, column.tasks)">
      </div>
    </div>
</template>

<script>
import ColumnTask from '@/components/ColumnTask.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    ColumnTask,
    draggable
  },
  data () {
    return {
      showRemoveIcon: false
    }
  },
  props: {
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
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
        animation: 200,
        emptyInsertThreshold: 100,
        scrollSensitivity: 10000
      }
    }
  },
  methods: {
    createTask (event, tasks) {
      if (event.target.value === '') {
        // if user does not key in any word, blur the input
        return event.target.blur()
      } else {
        this.$store.commit('CREATE_TASK', {
          tasks,
          name: event.target.value
        })
        event.target.value = ''
      }
    },
    removeColumn () {
      const columnIndex = this.columnIndex
      this.$store.commit('REMOVE_COLUMN', columnIndex)
    }
  }
}
</script>

<style lang="css">
.column {
  @apply cursor-pointer bg-gray-400 p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
.columnTask {
  max-height: 80vh;
}
.ghost-task {
  @apply border opacity-50 border-blue-500 bg-gray-200;
}
</style>
