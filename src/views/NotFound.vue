<template>
  <div class="mx-auto mt-28 w-1/2 h-1/3 flex flex-col justify-evenly items-start">
      <p class="text-8xl font-black text-textColor-primary">404</p>
      <p class="text-3xl text-textColor-primary">Sorry, couldn't find this page</p>
      <router-link
      class="text-3xl text-primary underline"
      :to="{ name: 'home'}">
        Back to Home?
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
