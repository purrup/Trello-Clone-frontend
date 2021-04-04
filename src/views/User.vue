<template>
  <div
    class="w-1/4 mx-auto mt-40 bg-gray-100 rounded-md shadow-md">
    <div
      class="px-10 pt-10 w-full flex justify-start text-textColor-primary font-semibold">
        <span
          class="w-full pb-4 border-b border-primary text-2xl ">
          個人檔案
        </span>
    </div>
    <div class="px-10 pt-5 pb-8 grid grid-cols-3 gap-4 text-textColor-primary text-xl">
      <div class="grid justify-items-start col-span-2">
        <label
          for="name"
          class="">Name</label>
        <input
          v-model="user.name"
          type="text"
          name="name"
          class="mt-2 p-4 text-base block w-full shadow-sm rounded-md"
        >
      </div>
      <div class="grid justify-items-start col-span-2">
        <label
          for="email"
          class="">E-mail</label>
        <input
          v-model="user.email"
          type="text"
          name="email"
          class="mt-2 p-4 text-base block w-full shadow-sm rounded-md"
        >
      </div>
      <div class="grid justify-items-start col-span-2">
        <label
          for="password"
          class="">password</label>
        <input
          v-model="user.password"
          type="text"
          name="password"
          class="mt-2 p-4 text-base block w-full shadow-sm rounded-md"
        >
      </div>

      <div class="grid justify-items-start col-span-2">
        <button type="button"
        class="inline-flex justify-center rounded-md border border-gray-300 shadow-sm mt-5 px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          儲存
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('user', {
      user: state => state.user
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
