<template>
  <div class="card-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input type="text"
             :value="card.title"
             class="p-2 w-full mr-2 flex-grow text-xl font-bold border border-gray-400 rounded "
             @change="updateCardProperty($event, 'title')"
             @keyup.enter="updateCardroperty($event, 'title')">
      <textarea
        class="relative w-full bg-transparent px-2 border mt-2 h-64 border-gray-400 rounded leading-normal"
        :value="card.description"
        placeholder="add description"
        @change="updateCardProperty($event, 'description')"/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getCard']),
    card () {
      return this.getCard(this.$route.params.id)
    }
  },
  methods: {
    updateCardProperty (e, key) {
      this.$store.commit('UPDATE_CARD', {
        card: this.card,
        key,
        value: e.target.value
      })
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
