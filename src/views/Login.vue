<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full mt-20 mt 2xl:mt-32 space-y-7">
      <div>
        <div class="logo mx-auto h-12 w-auto text-primary text-4xl">
          <AppIcon
          :icon="['fab', 'trello']"/>
          <span class="font-bold">
            Trello
          </span>
        </div>
        <h2 class="mt-6 text-center text-2xl font-extrabold text-texColor-priamry">
          Sign in to your account
        </h2>
      </div>

      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address"
                  class="sr-only">Email address</label>
          <input  v-model="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Email address">
        </div>
        <div>
          <label for="password"
                  class="sr-only">Password</label>
          <input  v-model="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                  placeholder="Password">
        </div>
      </div>
      <div class="flex items-center justify-end underline">

        <div class="text-sm">
          <router-link :to=" { name: 'home' }"
          class="font-medium text-primary hover:text-secondary-300">
            Havn't sign up yet?
          </router-link>
        </div>
      </div>
      <div>
        <button
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          @click="submit">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-primary group-hover:text-textColor-hover"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
  },
  methods: {
    async submit () {
      const data = {
        email: this.email,
        password: this.password
      }
      const user = await this.$store.dispatch('user/login', data)
      this.$store.commit('user/SET_login')
      this.$router.push({ name: 'home', params: { userId: user._id } })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
