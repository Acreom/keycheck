<template>
  <div class="about-app">
    <div class="about-app__column">
      <div class="about-app__column__title">
        <nuxt-link :to="currentApp.homepage" target="_blank" class="about-app__column__title__wrapper">
          <img :src="currentApp.icon" :alt="`${currentApp.name} logo`" class="about-app__column__title__wrapper__logo" />
          <h1>{{currentApp.name}}</h1>
          <UpRightArrow class="about-app__column__title__wrapper__redirect-icon" />
        </nuxt-link>
      </div>
      <p class="about-app__column__description">
        {{currentApp.description}}
      </p>
    </div>
    <div class="about-app__column">
      <div class="about-app__column__stats">
        <div class="about-app__column__stats__section">
          <h1>{{shortcutsLength}}</h1>
          <p>Shortcuts</p>
        </div>
        <div class="about-app__column__stats__section">
          <h1>{{matches}}</h1>
          <p>Matching</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import UpRightArrow from "@/assets/icons/UpRightArrow.svg?component";
const route = useRoute();
const { $apps } = useNuxtApp();
const id = route.params.id;
const currentApp = computed(() => $apps.$getApps().find((app: any) => app.id === id));
const shortcuts = computed(() => ({...currentApp.value.shortcuts, ...currentApp.value.globals}));
const shortcutsLength = computed(() => Object.keys(shortcuts.value).length);
const matches = computed(() => $apps.$getMatchesCount(currentApp.value.id));
</script>
<style lang="scss" scoped>
.about-app {
  margin-top: 0.875rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7.875rem;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  &__column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    &__title {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      &__wrapper {
        display: flex;
        align-items: center;
        border-radius: 1.875rem;
        border: 2px solid rgba(255, 255, 255, 0.20);
        padding: 1.25rem 1.5rem;

        &:hover {
          background: rgba(255, 255, 255, 0.15);
        }

        &__logo {
          height: 3.875rem;
        }

        h1 {
          @include h1(system-ui);
          margin-left: 1.6875rem;
        }

        &__redirect-icon {
          color: $white;
          height: 1.75rem;
          margin-left: 3.25rem;
          margin-bottom: 2.5625rem;
        }
      }
    }

    &__description {
      @include p;
      color: #D7D7D7;
      margin-top: 2.125rem;
    }

    &__stats {
      @include p;
      display: flex;
      align-items: flex-start;
      gap: 1.0625rem;
      width: 100%;
      height: 100%;
      color: #D7D7D7;

      h1 {
        @include h1(system-ui);
      }

      &__section {
        width: 100%;
        padding: 2.25rem 1.875rem 1.5rem;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 4.625rem;

        border-radius: 1.875rem;
        border: 2px solid rgba(255, 255, 255, 0.20);
      }
    }
  }
}
</style>