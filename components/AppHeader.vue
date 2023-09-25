<template>
  <div class="header">
    <div class="header__navigation">
      <KeyboardIcon class="header__navigation__icon" />
      <div class="header__navigation__divider"></div>
      <nuxt-link :class="{active: activeRoute === 'index'}" class="header__navigation__link" to="/">Check</nuxt-link>
      <nuxt-link :class="{active: activeRoute.includes('apps')}" class="header__navigation__link" to="/apps">Apps</nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
import KeyboardIcon from "@/assets/icons/KeyboardIcon.svg?component";

const activeRoute = computed(() => {
  const route = useRoute();
  return route.name ?? 'index';
})
</script>
<style lang="scss" scoped>
.header {
  position: sticky;
  z-index: 1000;
  top: 1.25rem;
  padding: 0.625rem 2.5rem;
  border-radius: 82px;
  background: rgba(27, 28, 31, 0.75);
  backdrop-filter: blur(12px);
  max-width: 20rem;
  margin: 0 auto;

  &__navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    &__icon {
      color: $white;
    }

    &__divider {
      width: 1px;
      height: 100%;
      padding: 0.625rem 0;
      background: rgba(255,255,255,0.1);
    }

    &__link {
      font-family: Inter;
      text-align: center;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.134rem;
      text-decoration: none;
      cursor: default;
      color: $linkInactive;

      &:hover, &.active {
        color: $linkActive;
      }
    }
  }
}
</style>