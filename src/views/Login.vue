<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-50">
    <div class="lg:w-30% lg:mt-36 mx-auto mt-24 space-y-7 sm:w-1/2  2xl:w-1/4 2xl:mt-40">
      <div class="logo mx-auto h-12 w-auto text-primary text-5xl">
        <AppIcon
        :icon="['fab', 'trello']"/>
        <span class="font-bold">
          Trello
        </span>
      </div>
      <t-card class="shadow-md">
        <h2 class="mt-6 text-center text-lg font-extrabold text-texColor-priamry">
          登入 Trello
        </h2>
        <div class="flex flex-col justify-center items-start p-8">
          <t-input
              class="signup-login-input "
              variant="error"
              v-model="email"
              type="email"
              autocomplete="email"
              placeholder="輸入電子郵件"/>
          <t-input
              class="signup-login-input "
              variant="error"
              v-model="password"
              type="password"
              placeholder="輸入密碼"
              autocomplete="current-password"/>
          <t-button
              @click="login"
              type="button"
              class="w-full mt-6">
            登入
          </t-button>

          <router-link
            class="w-full text-blue-500 border-t border-gray-300 mt-10 pt-6"
            :to="{ name: 'signup'}">
              註冊帳號
            </router-link>
        </div>
      </t-card>
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
  methods: {
    async login () {
      if (!this.email || !this.password) {
        this.$store.commit('notification/SET_ERROR_MESSAGE', '請填入所有欄位')
        return
      }
      const data = {
        email: this.email,
        password: this.password
      }
      await this.$store.dispatch('user/login', data)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
