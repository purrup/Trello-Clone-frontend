<template>
  <div class="h-full w-4/5 mx-auto flex flex-row justify-center items-center">
    <div
        class="w-1/2 md:w-1/3 sm:w-1/2 flex flex-col items-center justify-center">
        <div
          class="px-10 w-1/2 flex justify-start text-textColor-primary font-semibold">
            <span
              class="w-full pb-4 border-b border-primary text-2xl ">
              個人檔案
            </span>
        </div>
        <div class="name text-textColor-primary text-xl pt-8">
          <span>使用者名稱: {{user.name}}</span>
        </div>
        <div class="email text-textColor-primary text-xl pt-8 pb-16">
          <span>電子郵件: {{user.email}}</span>
        </div>
    </div>
    <div class="background-image bg-no-repeat bg-contain bg-center h-1/2 w-1/2"></div>
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
.background-image {
  background-image: url('../assets/pictures/profile.svg');
}
</style>
