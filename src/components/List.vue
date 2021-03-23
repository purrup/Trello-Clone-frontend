<template>
    <div class="list">
      <div
      class="flex justify-between items-center mb-2 font-bold"
      @mouseover="showRemoveIcon = true"
      @mouseout="showRemoveIcon = false">
        {{ list.title }}
        <AppIcon
        v-show="showRemoveIcon"
          :icon="['far', 'trash-alt']"
          @click.stop="removeList"
          class="removeIcon hover:text-red-500 transition duration-500 ease-in-out">
        </AppIcon>
      </div>
      <div>
        <draggable
          class="card overflow-y-auto"
          v-model="cards"
          group="cards-group"
          v-bind="dragOptions"
          ghost-class="ghost-card">
          <transition-group>
            <ListCard
                  v-for="(card, $cardIndex) of list.cards"
                  :key="card._id"
                  :card="card"
                  :cardIndex="$cardIndex"
                  :listIndex="listIndex" />
          </transition-group>
        </draggable>

        <input type="text"
                class="block h-10 w-full bg-transparent border-none text-base text-gray-600 placeholder-gray-700"
                placeholder="+ Add New Task"
                @keyup.enter="createCard($event, list.cards)">
      </div>
    </div>
</template>

<script>
import ListCard from '@/components/ListCard.vue'
import draggable from 'vuedraggable'

export default {
  components: {
    ListCard,
    draggable
  },
  props: {
    list: {
      type: Object,
      required: true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      showRemoveIcon: false
    }
  },
  computed: {
    cards: {
      get () {
        return this.list.cards
      },
      set (value) {
        const listIndex = this.listIndex
        this.$store.commit('MOVE_CARD', { listIndex, value })
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
    createCard (event, cards) {
      if (event.target.value === '') {
        // if user does not key in any word, blur the input
        return event.target.blur()
      } else {
        this.$store.commit('CREATE_CARD', {
          cards,
          title: event.target.value
        })
        event.target.value = ''
      }
    },
    removeList () {
      const listIndex = this.listIndex
      this.$store.commit('REMOVE_LIST', listIndex)
    }
  }
}
</script>

<style lang="css">
.list {
  @apply cursor-pointer bg-gray-400 p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
.card {
  max-height: 80vh;
}
.ghost-card {
  @apply border opacity-50 border-blue-500 bg-gray-200;
}
</style>
