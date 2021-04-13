<template>
    <div class="list max-h-full flex flex-col">
      <div
        class="list-header flex flex-auto h-auto justify-between items-center mb-2 font-bold"
        >
        <AutoTextarea
          v-model="listTitle"
          @keydown.enter.native.prevent
          @keyup.enter.native="updateListTitle($event.target.value), $event.target.blur()"
          @blurFromTextarea="updateListTitle"
          class="w-10/12"
        />
        <div
        class="w-1/12 h-6 cursor-pointer flex justify-center items-center"
        @mouseover="showRemoveIcon = true"
        @mouseout="showRemoveIcon = false">

          <AppIcon
          v-show="showRemoveIcon"
            :icon="['far', 'trash-alt']"
            @click.stop="removeList"
            class="text-base hover:text-red-500 transition duration-500 ease-in-out">
          </AppIcon>
        </div>
      </div>
      <div class="flex-auto overflow-y-auto h-full max-h-full">
        <draggable
          class="card overflow-y-auto h-full max-h-full"
          v-model="cards"
          group="cards-group"
          v-bind="dragOptions"
          ghost-class="ghost-card"
          @sort="updateCardsOrder">
          <transition-group tag="div">
            <ListCard
                  v-for="card of cards"
                  :key="card._id"
                  :card="card"
                  />
          </transition-group>
        </draggable>
      </div>
      <input type="text"
        class="h-8 w-full my-2 bg-transparent border-none text-base text-gray-600 placeholder-gray-700 focus:bg-white focus:text-black focus:font-medium"
        placeholder="+ 新增另一張卡片"
        @keyup.enter="addCard($event, cards)"
      >
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
  // mounted () {
  //   console.log('list: ', this.list)
  // },
  computed: {
    ...mapState('user', {
      user: state => state.user
    }),
    ...mapState('board', {
      board: state => state.board
    }),
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
    async updateListTitle (value) {
      if (value === '') {
        return
      }
      await this.updateList({
        id: this.list._id,
        data: {
          title: value
        }
      })
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
.ghost-card {
  @apply border opacity-50 border-blue-500 bg-gray-200;
}
.list-header {
  height: 50px;
  min-height: 32px;
}
</style>
