<template>
  <div class="task cursor-pointer"
        @click="goToTask(task)"
        @mouseover="showRemoveIcon = true"
        @mouseout="showRemoveIcon = false">
    <div class="head-wrapper w-full flex flex-row justify-between">
      <span class="w-auto flex-no-shrink font-bold">
      {{ task.name }}
      </span>
      <AppIcon
        v-show="showRemoveIcon"
        :icon="['far', 'trash-alt']"
        @click.stop="removeTask"
        class="removeIcon">
      </AppIcon>
    </div>
    <AppIcon
    icon="bars"
    v-if="task.description"
    class="mt-2">
    </AppIcon>
    <!-- <p v-if="task.description"
      class="w-full flex-no-shrink text-sm">
      {{ task.description }}
    </p> -->
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
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded text-grey-darkest no-underline bg-white;
}
.task:hover {
  background-color: #EDF2F7;
}
.removeIcon:hover {
  color: #F56565;
}
</style>
