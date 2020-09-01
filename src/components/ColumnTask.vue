<template>
  <div class="task"
        @click="goToTask(task)">
    <span class="w-full flex-no-shrink font-bold">
    {{ task.name }}
    </span>
    <p v-if="task.description"
      class="w-full flex-no-shrink font-bold mt-1 text-sm">
      {{ task.description }}
    </p>
  </div>
</template>

<script>
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin.js'

export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    }
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    goToTask (task) {
      return this.$router.push({ name: 'task', params: { id: task.id } })
    }
  }
}
</script>

<style lang="css">
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}
</style>
