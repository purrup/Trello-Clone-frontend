<template>
  <div
    class="w-1/4 mx-auto mt-20 bg-gray-50 rounded-md shadow-md md:w-2/5 sm:w-1/2">
    <div
      class="px-10 pt-10 w-full flex justify-start text-textColor-primary font-semibold">
        <span
          class="w-full pb-4 border-b border-primary text-2xl ">
          個人檔案
        </span>
    </div>
    <div class="w-3/5 mx-auto pt-10 pb-8 grid grid-cols-3 gap-10 text-textColor-primary text-lg">
      <div class="grid justify-items-start col-span-3">
        <ValidationInput
          class="w-full"
          v-model="user.name"
          rules="required"
          name="name"
          type="name"
          autocomplete="name"
          placeholder="姓名或暱稱"
          :className="[]"
        />
      </div>
      <div class="grid justify-items-start col-span-3">
        <ValidationInput
              class="w-full"
              v-model="user.email"
              rules="required|email"
              name="email"
              type="email"
              autocomplete="email"
              placeholder="電子郵件"
              :className="[]"
        />
      </div>
      <!-- <div class="grid justify-items-start col-span-3">
        <label
          for="password"
          class="">password</label>
        <input
          v-model="user.password"
          type="text"
          name="password"
          class="mt-2 p-4 text-base block w-full shadow-sm rounded-md"
        >
      </div> -->

      <div class="grid justify-items-start col-span-2">
        <button type="button"
        class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm mt-5 px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          儲存變更
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ValidationInput from '../components/ValidationInput.vue'

export default {
  components: {
    ValidationInput
  },
  computed: {
    ...mapState('user', {
      user: state => state.user
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
