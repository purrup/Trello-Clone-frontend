<template>
  <div class="bg-gradient-to-b from-purple-100 to-white">
    <header>
      <nav class="flex justify-between items-center bg-opacity-0 p-4">
        <router-link
          :to="{ name: 'landing' }"
          class="trello-icon mt-1 text-4xl"
        >
          <AppIcon
          :icon="['fab', 'trello']"
          class="text-blue-600"/>
          <span class="font-black text-textColor-priamry">
            Trello
          </span>
        </router-link>
        <div class="button-group flex justify-between items-center space-x-3">
          <t-button
          class="bg-opacity-0 hover:border-blue-600 hover:bg-opacity-0 text-blue-600 font-semibold"
          @click="$router.push({ name: 'login' })">
            登入
          </t-button>
          <t-button
          class="font-semibold"
          @click="$router.push({ name: 'signup' })">
            註冊
          </t-button>
        </div>
      </nav>
    </header>
    <main>
      <div class="container text-center md:text-left h-full w-full md:w-4/5 image bg-no-repeat md:bg-contain md:bg-right">
        <div class="w-full md:w-7/12 px-5 md:p-0 pt-10 flex flex-col items-center sm:items-start justify-center h-full">
          <h1 class="text-5xl sm:text-6xl font-extrabold pb-4 leading-tight">Trello 協助團隊推動工作進展。</h1>
          <p class="text-xl font-semibold leading-tight w-10/12">協同合作、管理專案並創造生產力的新高峰。從摩天樓到家庭辦公室，您的團隊工作方式都是獨一無二：借助 Trello 來完成一切工作。</p>
          <div class="signup-derict pt-10">
            <t-button
              class="px-3 py-2 text-xl font-semibold"
              @click="$router.push({ name: 'signup' })">
              立即註冊，免費使用！
            </t-button>
          </div>
        </div>
      </div>
    </main>
    <footer class="h-10">
      <span class="px-1">Made by</span>
      <a href="https://github.com/purrup">Vin</a>
      <span class="px-1">@2021</span>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
  height: 68px;
}
main {
  height: calc(100vh - 68px - 40px);

}
.image {
  background-image: none;
}
@media (min-width: 768px) {
  .image {
    background-image: url('../assets/pictures/board.svg');
    background-size: 50%;
  }
}

</style>
