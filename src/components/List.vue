<template>
    <div class="list">
      <div
      class="flex justify-between items-center mb-2 font-bold h-auto break-words"
      @mouseover="showRemoveIcon = true"
      @mouseout="showRemoveIcon = false">
        <input
        type="text"
        v-model="listTitle"
        @keyup.enter="updateListTitle"
        class="w-4/5 bg-gray-400 focus:bg-white focus:text-black focus:font-medium text-black font-semibold border-none text-xl break-words">
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
          ghost-class="ghost-card"
          @sort="updateCardsOrder">
          <transition-group>
            <ListCard
                  v-for="(card, $cardIndex) of list.cards"
                  :key="card._id"
                  :card="card"
                  :cardIndex="$cardIndex"
                  :listId="listId" />
          </transition-group>
        </draggable>

        <input type="text"
                class="block h-10 w-full bg-transparent border-none text-base text-gray-600 placeholder-gray-700"
                placeholder="+ Add New Card"
                @keyup.enter="createCard($event, list.cards)">
      </div>
    </div>
</template>

<script>
import ListCard from '@/components/ListCard.vue'
import draggable from 'vuedraggable'
import { mapMutations, mapActions } from 'vuex'

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
    listId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showRemoveIcon: false
    }
  },
  computed: {
    listTitle: {
      get () {
        return this.list.title
      },
      set (data) {
        this.UPDATE_LIST_TITLE({ id: this.list._id, data })
      }
    },
    cards: {
      get () {
        return this.list.cards
      },
      set (data) {
        this.MOVE_CARD({ listId: this.listId, data })
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
    ...mapActions('list', ['updateList', 'deleteList']),
    ...mapActions('card', ['updateCard']),
    ...mapMutations('list', ['UPDATE_LIST_TITLE', 'MOVE_CARD']),
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
    updateListTitle (e) {
      this.updateList({
        id: this.list._id,
        data: {
          title: e.target.value
        }
      })
      e.target.blur()
    },
    removeList () {
      this.deleteList({ id: this.list._id })
    },
    updateCardsOrder () {
      const cards = this.cards.map((card, index) => {
        card.order = index
        card.listId = this.listId
        return card
      })
      cards.forEach(card => {
        this.updateCard({
          id: card._id,
          data: card
        })
      })
    }
  }
}
</script>

<style lang="css" scoped>
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
