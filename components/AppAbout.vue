<template>
  <div class="about">
    <div class="about__section">
      <div class="about__section__content">
        <h2 class="about__section__title">About Keycheck</h2>
        <div class="about__section__paragraph">
          Designing keyboard shortcuts for your app can be a daunting task. High
          consistency with other tools is key to ensuring a minimal learning
          curve for your users. Shortcuts should also be conflict free with the
          system shortcuts to spare your users of rage when they accidentally
          try to print your app. Keycheck enables you to find the right
          shortcuts for your app in seconds.
        </div>
      </div>
    </div>
    <div class="about__section">
      <div class="about__section__content">
        <h2 class="about__section__title about__section__title--split">
          {{ count }} <span>Apps</span>
        </h2>
        <h2 class="about__section__title about__section__title--split">
          {{ shortcutsCount }} <span>Shortcuts</span>
        </h2>
      </div>
      <nuxt-link
        to="https://github.com/Acreom/keycheck/blob/main/CONTRIBUTING.md"
        target="_blank"
        class="about__section__content about__section__content--link"
      >
        <h2 class="about__section__title about__section__title--link">
          Don't see your app? <GithubLogo class="gh-icon" />
        </h2>
        <div class="about__section__paragraph">Add it with a single PR.</div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import GithubLogo from "@/assets/icons/GithubLogo.svg?component";
const { $apps } = useNuxtApp();
const count = computed(() => {
  return $apps.$appsCount();
});
const shortcutsCount = computed(() => {
  return $apps.$allShortcutsCount();
});
</script>
<style lang="scss" scoped>
.about {
  @include sizer(4rem);
  height: 100%;
  width: 100%;
  display: flex;
  gap: 1.25rem;
  flex-direction: column;

  @media (min-width: $xlarge) {
    flex-direction: row;
  }

  &__section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1.25rem;

    &__content {
      border-radius: 1.875rem;
      background: rgba(241, 241, 241, 0.1);
      padding: 1.875rem;

      &--link {
        position: relative;

        &:hover {
          background: $white;
          .about__section__title {
            color: #676667;
          }

          .about__section__paragraph {
            opacity: 0.6;
            color: #676667;
          }

          .gh-icon {
            color: #676667;
          }
        }

        .gh-icon {
          color: $white;
        }
      }
    }

    &__title {
      @include h2;
      font-weight: 400;
      color: $white;

      &--split {
        display: flex;
        justify-content: space-between;

        span {
          opacity: 0.5;
        }

        &:not(:last-of-type) {
          padding-bottom: 1.375rem;
          border-bottom: 1px solid rgba(226, 226, 226, 0.1);
        }
        &:last-of-type {
          padding-top: 1.375rem;
        }
      }

      &--link {
        display: flex;
        width: 100%;
        align-items: flex-start;
        justify-content: space-between;
      }
    }

    &__paragraph {
      @include p;
      color: #d7d7d7;
      margin-top: 0.6875rem;
    }
  }
}
</style>
