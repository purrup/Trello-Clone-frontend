<template>
  <div class="min-h-screen flex items-start justify-center bg-gray-50">
    <div class="lg:w-30% mx-auto mt-16 space-y-7 sm:w-1/2 2xl:w-1/4 2xl:mt-32">
      <div class="logo mx-auto h-12 w-auto text-primary text-5xl">
        <AppIcon
        :icon="['fab', 'trello']"/>
        <span class="font-bold">
          Trello
        </span>
      </div>
      <t-card class="shadow-md">
        <h2 class="mt-6 text-center text-lg font-extrabold text-texColor-priamry">
          註冊 Trello
        </h2>
        <div class="flex flex-col justify-center items-start p-8">
          <ValidationObserver
          slim
          class="w-full"
          v-slot="{ invalid }">
            <div class="form-group w-full flex flex-col justify-center items-start space-y-6">
                <ValidationInput
                  class="w-full"
                  v-model="email"
                  rules="required|email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  placeholder="電子郵件"
                  :className="['signup-login-input']"
                />
                <ValidationInput
                  class="w-full"
                  v-model="name"
                  rules="required"
                  name="name"
                  type="name"
                  autocomplete="name"
                  placeholder="姓名或暱稱"
                  :className="['signup-login-input']"
                />
                <ValidationInput
                  class="w-full"
                  v-model="password"
                  rules="required|min:3"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  placeholder="密碼"
                  :className="['signup-login-input']"
                />
            </div>

            <t-button
                :disabled="invalid"
                @click="signUp"
                type="button"
                class="w-full mt-12">
              註冊
            </t-button>
          </ValidationObserver>

          <router-link
            class="w-full text-blue-500 border-t border-gray-300 mt-10 pt-6"
            :to="{ name: 'login'}">
              已經有帳號？ 由此登入
          </router-link>
          <div class="border-t w-full border-gray-300 mt-6 pt-6">
            <t-button
                @click="loginAsTrial"
                type="button"
                class="w-full"
                :variant="'secondary'">
              略過註冊，試用帳號登入
            </t-button>
          </div>
        </div>
      </t-card>
    </div>
  </div>
</template>

<script>
import ValidationInput from '../components/ValidationInput.vue'
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationInput,
    ValidationObserver
  },
  data () {
    return {
      email: '',
      name: '',
      password: ''
    }
  },
  methods: {
    async signUp () {
      const data = {
        email: this.email,
        name: this.name,
        password: this.password
      }
      await this.$store.dispatch('user/signup', data)
    },
    async loginAsTrial () {
      const data = {
        email: 'trial@gmail.com',
        password: '123'
      }
      await this.$store.dispatch('user/login', data)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
