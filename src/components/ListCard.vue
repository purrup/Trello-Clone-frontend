<template>
  <div class="card cursor-pointer transition duration-300 ease-in-out bg-white hover:bg-gray-300"
        @click="goToCard(card)"
        @mouseover="showRemoveIcon = true"
        @mouseout="showRemoveIcon = false">
    <div class="head-wrapper w-full flex flex-row justify-between">
      <span
      class="w-auto flex-shrink-0 font-bold">
      {{ cardTitle }}
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
      v-if="cardDescription"
      class="mt-2">
    </AppIcon>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showRemoveIcon: false,
      cardLocal: { ...this.card }
    }
  },
  computed: {
    ...mapState('card', {
      storeCard: state => state.card
    }),
    cardTitle: {
      get () {
        if (this.storeCard._id && this.cardLocal._id === this.storeCard._id) {
          return this.storeCard.title // 此時會觸發watcher cardTitle
        } else {
          return this.cardLocal.title
        }
      }
    },
    cardDescription: {
      get () {
        if (this.storeCard._id && this.cardLocal._id === this.storeCard._id) {
          return this.storeCard.description
        } else {
          return this.cardLocal.description
        }
      }
    }
  },
  watch: {
    cardTitle (newValue) {
      // 當cardTitle有變動時，一定是Card頁面在編輯card title時，此時同步local card的值
      this.cardLocal.title = newValue
    },
    cardDescription (newValue) {
      this.cardLocal.description = newValue
    }
  },
  methods: {
    ...mapActions('card', ['deleteCard']),
    goToCard (card) {
      return this.$router.push({ name: 'card', params: { id: card._id } })
    },
    removeCard () {
      this.deleteCard({ id: this.card._id })
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded text-gray-800 no-underline;
}
</style>
