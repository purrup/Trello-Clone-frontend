<template>
  <div class="card cursor-pointer transition duration-300 ease-in-out bg-white hover:bg-gray-300"
        @click="goToCard(card)"
        @mouseover="showRemoveIcon = true"
        @mouseout="showRemoveIcon = false">
    <div class="head-wrapper w-full flex flex-row justify-between">
      <span class="w-auto flex-shrink-0 font-bold">
      {{ card.title }}
      </span>
      <AppIcon
        v-show="showRemoveIcon"
        :icon="['far', 'trash-alt']"
        @click.stop="removeCard"
        class="removeIcon hover:text-red-500 transition duration-500 ease-in-out">
      </AppIcon>
    </div>
    <AppIcon
      icon="bars"
      v-if="card.description"
      class="mt-2">
    </AppIcon>
  </div>
</template>

<script>

export default {
  props: {
    listIndex: {
      type: Number,
      required: true
    },
    card: {
      type: Object,
      required: true
    },
    cardIndex: {
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
    goToCard (card) {
      return this.$router.push({ name: 'card', params: { id: card.id } })
    },
    removeCard () {
      const listIndex = this.listIndex
      const cardIndex = this.cardIndex
      this.$store.commit('REMOVE_CARD', { listIndex, cardIndex })
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded text-gray-800 no-underline;
}
</style>
