<template>
  <div class="card-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input type="text"
             v-model="cardTitle"
             class="p-2 w-full mr-2 flex-grow text-xl font-bold border border-gray-400 rounded "
             @blur="updateCard($event, 'title')">
      <textarea
        class="relative w-full bg-transparent px-2 border mt-2 h-64 border-gray-400 rounded leading-normal"
        v-model="cardDescription"
        placeholder="add description"
        @blur="updateCard($event, 'description')"/>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  created () {
    this.getCard({ id: this.$route.params.id })
  },
  computed: {
    ...mapState('card', {
      card: state => state.card
    }),
    cardTitle: {
      get () {
        return this.card.title
      },
      set (value) {
        const data = {
          title: value
        }
        this.SET_CARD({ data })
      }
    },
    cardDescription: {
      get () {
        return this.card.description
      },
      set (value) {
        const data = {
          description: value
        }
        this.SET_CARD({ data })
      }
    }
  },
  methods: {
    ...mapMutations('card', ['SET_CARD']),
    ...mapMutations('list', ['UPDATE_LIST_CARD']),
    ...mapActions('card', ['getCard']),
    updateCard (event, key) {
      let data = {}
      data[key] = event.target.value
      this.$store.dispatch('card/updateCard', {
        id: this.card._id,
        data
      })
      event.target.value = ''
    }
  }
}
</script>

<style scoped>
.card-view {
  @apply relative flex flex-row bg-white mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}

</style>
