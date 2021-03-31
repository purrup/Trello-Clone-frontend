<template>
    <div class="list">
      <div
        class="flex justify-between items-center mb-2 font-bold list-header"
        @mouseover="showRemoveIcon = true"
        @mouseout="showRemoveIcon = false">
        <AutoTextarea
          v-model="listTitle"
          @keydown.enter.native.prevent
          @keyup.enter.native="updateListTitle"
          @blur.native="updateListTitle"
          class="w-10/12"
        />
        <AppIcon
        v-show="showRemoveIcon"
          :icon="['far', 'trash-alt']"
          @click.stop="removeList"
          class="w-2/12 hover:text-red-500 transition duration-500 ease-in-out ">
        </AppIcon>
      </div>
      <div class="">
        <draggable
          class="card overflow-y-auto"
          v-model="cards"
          group="cards-group"
          v-bind="dragOptions"
          ghost-class="ghost-card"
          @sort="updateCardsOrder">
          <transition-group>
            <ListCard
                  v-for="card of cards"
                  :key="card._id"
                  :card="card"
                  />
          </transition-group>
        </draggable>

        <input type="text"
                class="block h-10 w-full bg-transparent border-none text-base text-gray-600 placeholder-gray-700 focus:bg-white focus:text-black focus:font-medium"
                placeholder="+ Add New Card"
                @keyup.enter="addCard($event, cards)">
      </div>
    </div>
</template>

<script>
import ListCard from '@/components/ListCard.vue'
import AutoTextarea from '@/components/AutoTextarea.vue'
import draggable from 'vuedraggable'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  components: {
    ListCard,
    draggable,
    AutoTextarea
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showRemoveIcon: false
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user
    }),
    ...mapState('board', {
      board: state => state.board
    }),
    // ...mapState('list', {
    //   storeList: state => state.list
    // }),
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
        this.MOVE_CARD({ listId: this.list._id, data })
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
    ...mapActions('card', ['updateCard', 'createCard']),
    ...mapMutations('list', ['UPDATE_LIST_TITLE', 'MOVE_CARD']),
    async addCard (event, cards) {
      if (event.target.value === '') {
        // if user does not key in any word, blur the input
        return event.target.blur()
      } else {
        const data = {
          title: event.target.value,
          listId: this.list._id,
          boardId: this.board._id,
          userCreated: this.user._id,
          order: cards.length ? cards.length : 0
        }
        await this.createCard({ data })
        event.target.value = ''
      }
    },
    async updateListTitle (e) {
      await this.updateList({
        id: this.list._id,
        data: {
          title: e.target.value
        }
      })
      e.target.blur()
    },
    async removeList () {
      await this.deleteList({ id: this.list._id })
    },
    async updateCardsOrder () {
      const cards = this.cards.map((card, index) => {
        card.order = index
        card.listId = this.list._id
        return card
      })
      await cards.forEach(card => {
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
.list-header {
  min-height: 20px;
}
</style>
