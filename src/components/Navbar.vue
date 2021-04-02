<template>
  <nav
    class="navbar overflow-hidden flex justify-between items-center bg-navbar-DEFAULT w-screen p-1 px-4">
    <div
    class="home flex justify-center items-center bg-navbar-light rounded h-8 w-8 text-white text-base hover:bg-navbar-iconHover">
      <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="-2 -2 28 28"
        stroke="currentColor">
                <path stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      <!-- <AppIcon
      :icon="['fas', 'home']"/> -->
    </div>
    <div class="trello-icon text-xl text-navbar-icon mt-1">
      <AppIcon
      :icon="['fab', 'trello']"/>
      <span class="font-bold">
        Trello
      </span>
    </div>
    <div class="user flex justify-center items-center bg-navbar-light rounded-full h-8 w-8 text-white text-base hover:bg-navbar-iconHover">
      <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 -1 22 22"
            fill="currentColor">
                    <path fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"/>
      </svg>
      <!-- <AppIcon
      :icon="['fas', 'user']"/> -->
    </div>
  </nav>
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
