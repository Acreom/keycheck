<template>
  <div class="header">
    <div class="header__navigation">
      <nuxt-link to="/">Check</nuxt-link>
      <nuxt-link to="/browse">Browse</nuxt-link>
      <nuxt-link to="/apps">Apps</nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 16px 8px;
  &__navigation {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>