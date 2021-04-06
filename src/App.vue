<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
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

#nprogress .spinner-icon {
  border-top-color: #53A4D4;
  border-left-color: #53A4D4;
}
</style>
