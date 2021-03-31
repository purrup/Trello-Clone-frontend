<template>
  <div
    class="navbar overflow-hidden flex justify-between items-center bg-navbar-DEFAULT w-screen p-1 px-4">
    <div
    class="home flex justify-center items-center bg-navbar-light rounded h-8 w-8 text-white text-base hover:bg-navbar-iconHover">
      <AppIcon
      :icon="['fas', 'home']"/>
    </div>
    <div class="trello-icon text-xl text-navbar-icon mt-1">
      <AppIcon
      :icon="['fab', 'trello']"/>
      <span class="font-bold">
        Trello
      </span>
    </div>
    <div class="user flex justify-center items-center bg-navbar-light rounded-full h-8 w-8 text-white text-base hover:bg-navbar-iconHover">
      <AppIcon
      :icon="['fas', 'user']"/>
    </div>
  </div>
</template>

<script>
export default {
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
