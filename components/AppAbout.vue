<template>
  <div class="about">
    <div class="about__section">
      <div class="about__section__content">
        <h2 class="about__section__title">{{ shortcutsCount }} Shortcuts</h2>
        <div class="about__section__paragraph">
          Designing products can be a challenge, especially when keyboard
          shortcuts need to align with those in other tools. Developers often
          face the painstaking task of finding the right shortcuts. That's why
          we developed keycheck.dev - a tool that checks and standardizes
          shortcut usage, making design seamless. What's more, we've made it
          open source, inviting everyone to contribute and expand its
          capabilities, ensuring it grows to meet evolving needs.
        </div>
      </div>
    </div>
    <div class="about__section">
      <div class="about__section__content">
        <h2 class="about__section__title">{{ count }} Apps</h2>
        <div class="about__section__paragraph">
          Check the availability of shortcuts for your app and seamlessly match
          them with any of {{ count }} supported applications. Keycheck.dev
          simplifies this process. Help your fellow developers by expanding the
          list and submitting shortcuts for your favorite apps.
        </div>
      </div>
      <nuxt-link
        to="https://github.com/Acreom/keycheck/blob/main/CONTRIBUTING.md"
        target="_blank"
        class="about__section__content about__section__content--link"
      >
        <h2 class="about__section__title about__section__title--link">
          Open Source <UpRightArrow class="icon" />
        </h2>
        <div class="about__section__paragraph">
          Made with ❤️ from the people at acreom. Contribute to help
          keycheck.dev grow.
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import UpRightArrow from "@/assets/icons/UpRightArrow.svg?component";
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
          .about__section__title {
            color: #676667;
          }
          .about__section__paragraph {
            opacity: 0.6;
            color: #676667;
          }
          .icon {
            transform: translate(4px, -4px);
            color: #676667;
          }
          background: $white;
        }

        .icon {
          transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
          color: $white;
        }
      }
    }

    &__title {
      @include h2;
      font-weight: 400;
      color: $white;

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
