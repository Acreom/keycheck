<template>
  <div class="header">
    <div class="header__navigation">
      <nuxt-link
        :class="{ active: activeRoute === 'index' }"
        class="header__navigation__link"
        to="/"
        >Check</nuxt-link
      >
      <nuxt-link
        :class="{ active: activeRoute.includes('shortcuts') }"
        class="header__navigation__link"
        to="/shortcuts/"
        >Search</nuxt-link
      >
      <nuxt-link
        :class="{ active: activeRoute.includes('apps') }"
        class="header__navigation__link"
        to="/apps/"
        >Apps</nuxt-link
      >
      <div class="header__navigation__divider"></div>
      <PlatformSwitcher />
    </div>
  </div>
</template>
<script setup lang="ts">
import PlatformSwitcher from "@/components/PlatformSwitcher.vue";

const activeRoute = computed(() => {
  const route = useRoute();
  return route.name ?? "index";
});
</script>
<style lang="scss" scoped>
.header {
  position: sticky;
  z-index: 1000;
  top: 1.25rem;
  margin: 0 auto;
  max-width: 29rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 82px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.0001) 60.85%,
      rgba(255, 255, 255, 0.0001) 86.16%,
      rgba(255, 255, 255, 0.1) 150%
    )
    border-box;
  border: 1px solid transparent;

  &__navigation {
    padding: 0.625rem;
    box-shadow: 0px 6px 14px 0px rgba(76, 76, 76, 0.15);
    background: rgba(70, 70, 70, 0.5);
    backdrop-filter: blur(50px);
    border-radius: 82px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__icon {
      color: $white;
    }

    &__divider {
      width: 1px;
      height: 100%;
      padding: 0.625rem 0;
      background: rgba(255, 255, 255, 0.4);
    }

    &__link {
      font-family: Inter, sans-serif;
      text-align: center;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.134rem;
      text-decoration: none;
      cursor: default;
      color: $linkInactive;
      padding: 0.25rem 1.25rem;

      &:hover {
        color: $linkActive;
      }
      &.active {
        border-radius: 100px;
        background: linear-gradient(
            0deg,
            rgba(94, 94, 94, 0.18) 0%,
            rgba(94, 94, 94, 0.18) 100%
          ),
          rgba(255, 255, 255, 0.07);
        background-blend-mode: color-dodge, normal;
        color: $linkActive;
      }
    }
  }
}
</style>
