<template>
  <div id="app">
    <Navbar
    v-if="$route.meta.showNavbar"/>
    <router-view/>
    <Notification
      :successMessage="successMessage"
      :errorMessage="errorMessage"
    />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Notification from '@/components/Notification.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Navbar,
    Notification
  },
  computed: {
    ...mapState('notification', {
      successMessage: state => state.successMessage,
      errorMessage: state => state.errorMessage
    })
  }
}
</script>

<style>
body, html {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.container {
  @apply mx-auto;
}

/* progress bar css setting */
#nprogress .bar {
  background: #53A4D4 !important;
  height: 2px !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px #53A4D4, 0 0 5px #53A4D4;
}

/* #nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 25% !important;
  right: 50% !important;
} */

#nprogress .spinner {
  opacity: 0 !important;
}

#nprogress .spinner-icon {
  /* border-top-color: #53A4D4;
  border-left-color: #53A4D4; */
  width: 0px !important;
  height: 0px !important;
}
</style>
