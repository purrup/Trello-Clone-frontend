<template>
  <transition
    name="fade"
    >
    <t-alert
    class="alert"
    :variant="variant"
    :show="show"
    @hidden="hidden"
    >
      {{ message }}
    </t-alert>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    successMessage: String,
    errorMessage: String
  },
  data () {
    return {
      timeout: 6000,
      show: !!this.message
    }
  },
  computed: {
    // ...mapState('notification', {
    //   show: state => state.showNotification
    // }),
    variant () {
      return this.successMessage ? 'success' : 'danger'
    },
    message () {
      return this.successMessage ? this.successMessage : this.errorMessage
    }
  },
  methods: {
    ...mapMutations('notification', ['DELETE_MESSAGE']),
    hidden () {
      this.show = false
      this.DELETE_MESSAGE()
    }
  },
  watch: {
    message (newMessage) {
      if (newMessage) {
        this.show = true
      }
    },
    show (newBoolean) {
      if (newBoolean === true) {
        setTimeout(() => {
          this.show = false
        }, this.timeout)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  @apply absolute top-4 right-7;
}
.fade-enter-active, .fade-leave-active {
  animation: 'fade-in-right' .4s ease-out;
}
</style>
