<template>
  <div class="task cursor-pointer transition duration-300 ease-in-out bg-white hover:bg-gray-500"
        @click="goToTask(task)"
        @mouseover="showRemoveIcon = true"
        @mouseout="showRemoveIcon = false">
    <div class="head-wrapper w-full flex flex-row justify-between">
      <span class="w-auto flex-shrink-0 font-bold">
      {{ task.name }}
      </span>
      <AppIcon
        v-show="showRemoveIcon"
        :icon="['far', 'trash-alt']"
        @click.stop="removeTask"
        class="removeIcon hover:text-red-500 transition duration-500 ease-in-out">
      </AppIcon>
    </div>
    <AppIcon
      icon="bars"
      v-if="task.description"
      class="mt-2">
    </AppIcon>
  </div>
</template>

<script>

export default {
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
    },
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      showRemoveIcon: false
    }
  },
  methods: {
    goToTask (task) {
      return this.$router.push({ name: 'task', params: { id: task.id } })
    },
    removeTask () {
      const columnIndex = this.columnIndex
      const taskIndex = this.taskIndex
      this.$store.commit('REMOVE_TASK', { columnIndex, taskIndex })
    }
  }
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded text-gray-800 no-underline;
}
/* .task:hover {
  background-color: #EDF2F7;
} */
.removeIcon {
  transition: all 5s ease-in-out;
}
</style>
