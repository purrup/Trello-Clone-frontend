<template>
  <transition
    name="fade"
    >
    <t-alert
    class="alert"
    :variant="variant"
    :show="show"
    :timeout="timeout"
    >
      {{ message }}
    </t-alert>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    successMessage: String,
    errorMessage: String
  },
  data () {
    return {
      timeout: 6000
    }
  },
  computed: {
    ...mapState('notification', {
      show: state => state.showNotification
    }),
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
      this.DELETE_MESSAGE()
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
