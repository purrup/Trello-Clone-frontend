<template>
  <nav
    class="navbar flex justify-between items-center bg-navbar-blue w-screen p-1 px-4">
    <router-link
    :to="{ name: 'home' }"
    class="home flex justify-center items-center bg-navbar-light rounded h-8 w-8 text-white text-base hover:bg-navbar-iconHover">
      <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="-2 -2 28 28"
        stroke="currentColor">
                <path stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </router-link>
    <router-link
      :to="{ name: 'home' }"
      class="trello-icon text-xl text-navbar-icon mt-1"
    >
      <AppIcon
      :icon="['fab', 'trello']"/>
      <span class="font-bold">
        Trello
      </span>
    </router-link>
    <div
      @click="isUserPanelOpen = !isUserPanelOpen"
      class="user flex justify-center items-center bg-navbar-light rounded-full h-8 w-8 text-white text-base hover:bg-navbar-iconHover cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 22 22"
            fill="currentColor">
            <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
            />
      </svg>
      <div
        v-if="isUserPanelOpen"
        class="origin-top-right absolute right-5 mt-32 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        <router-link
        :to="{ name: 'user'}"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
        個人檔案
        </router-link>
        <div
        @click="logout"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
        登出
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isUserPanelOpen: false
    }
  },
  computed: {
    ...mapState('user', {
      user: state => state.user,
      isLogin: state => state.isLogin
    })
  },
  methods: {
    async logout () {
      await this.$store.dispatch('user/logout')
      this.$store.commit('user/SET_logout')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  min-height: 40px;
  max-height: 40px;
}
.trello-icon {
  &:hover {
    color: #CCE1ED;
  }
}
</style>
