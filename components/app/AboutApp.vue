<template>
  <div class="about-app">
    <div class="about-app__column">
      <div class="about-app__column__title">
        <nuxt-link
          :to="currentApp.homepage"
          target="_blank"
          class="about-app__column__title__wrapper"
        >
          <div class="about-app__column__title__wrapper__text">
            <img
              :src="currentApp.icon"
              :alt="`${currentApp.name} logo`"
              class="about-app__column__title__wrapper__logo"
            />
            <h1>{{ currentApp.name }}</h1>
          </div>
          <UpRightArrow
            class="about-app__column__title__wrapper__redirect-icon"
          />
        </nuxt-link>
      </div>
      <p class="about-app__column__description">
        {{ currentApp.description }}
      </p>
    </div>
    <div class="about-app__column">
      <div class="about-app__column__stats">
        <div class="about-app__column__stats__section">
          <h2>{{ shortcutsLength }}</h2>
          <p>Shortcuts</p>
        </div>
        <div ref="matchTip" class="about-app__column__stats__section">
          <h2>{{ matches }}</h2>
          <p>Matching</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import UpRightArrow from "@/assets/icons/UpRightArrow.svg?component";
import { useTippy } from "vue-tippy";
const route = useRoute();
const { $apps } = useNuxtApp();
const id = route.params.id;
const currentApp = computed(() =>
  $apps.$getApps().find((app: any) => app.id === id),
);
const shortcuts = computed(() => ({
  ...currentApp.value.shortcuts,
  ...currentApp.value.globals,
}));
const shortcutsLength = computed(() => Object.keys(shortcuts.value).length);
const matches = computed(() => $apps.$getMatchesCount(currentApp.value.id));
const matchTip = ref();
useTippy(matchTip, {
  content: `<div class=tooltip>The number of shortcuts that match at least 1 shortcut from another app.</div>`,
  placement: "top",
  duration: 0,
  delay: 0,
  allowHTML: true,
  trigger: "mouseenter focus",
});
</script>
<style lang="scss" scoped>
.about-app {
  margin-top: 0.875rem;
  display: grid;
  align-items: flex-start;
  justify-content: space-between;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: $xlarge) {
    grid-template-columns: 1fr 1fr;
    gap: 3.875rem;
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
        align-items: flex-start;
        justify-content: space-between;
        gap: 1.5rem;
        border-radius: 1.875rem;
        border: 2px solid rgba(255, 255, 255, 0.2);
        padding: 1.25rem 1.5rem;
        width: 100%;

        &__text {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.15);
          .about-app__column__title__wrapper__redirect-icon {
            transform: translate(4px, -4px);
          }
        }

        &__logo {
          height: 3.875rem;
        }

        h1 {
          @include h1(system-ui);
          font-size: 3.475rem;
          font-style: normal;
          font-weight: 400;
          line-height: 3.825rem;
          text-align: left;
        }

        &__redirect-icon {
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          color: $white;
          flex-shrink: 0;
        }
      }
    }

    &__description {
      @include p;
      width: 100%;
      color: #d7d7d7;
      margin-top: 1.125rem;
    }

    &__stats {
      @include p;
      display: flex;
      align-items: flex-start;
      gap: 1.0625rem;
      width: 100%;
      height: 100%;
      color: #d7d7d7;

      h2 {
        @include h1(system-ui);
        font-size: 4.875rem;
        font-weight: 400;
      }

      &__section {
        width: 100%;
        height: 100%;
        padding: 1.25rem;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        gap: 4.625rem;

        border-radius: 1.875rem;
        border: 2px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
}
</style>
