<template>
    <div class="column cursor-pointer">
      <div
      class="flex justify-between items-center mb-2 font-bold"
      @mouseover="showRemoveIcon = true"
      @mouseout="showRemoveIcon = false">
        {{ column.name }}
        <AppIcon
        v-show="showRemoveIcon"
          :icon="['far', 'trash-alt']"
          @click.stop="removeColumn"
          class="removeIcon ">
        </AppIcon>
      </div>
      <div class="list-reset">
        <draggable v-model="columnTasks"
         :group="{ name: 'tasks-group' }"
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
    },
    board: {
      type: Object,
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
        animation: 200
      }
    }
  },
  methods: {
    createTask (event, tasks) {
      this.$store.commit('CREATE_TASK', {
        tasks,
        name: event.target.value
      })
      event.target.value = ''
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
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>
