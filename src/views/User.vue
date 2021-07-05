<template>
  <div class="h-full w-4/5 mx-auto flex flex-col justify-around items-center md:flex-row md:justify-center">
    <div
        class="w-2/3 md:w-1/2 flex flex-col items-center justify-center">
        <div
          class="lg:px-10 w-full lg:w-1/2 flex justify-start text-textColor-primary font-semibold">
            <span
              class="w-full pb-4 border-b border-primary text-2xl ">
              個人檔案
            </span>
        </div>
        <div class="name text-textColor-primary w-full text-xl pt-8">
          <span>使用者名稱: {{user.name}}</span>
        </div>
        <div class="email text-textColor-primary w-full text-xl pt-8 pb-16">
          <span>電子郵件: {{user.email}}</span>
        </div>
    </div>
    <div class="h-0 w-0 sm:h-1/2 sm:w-1/2 background-image bg-none sm:bg-no-repeat sm:bg-contain sm:bg-center"></div>
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
