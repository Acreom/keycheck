<template>
  <div class="about-divider"></div>
  <div class="about">
    <div class="about__section">
      <div class="about__section__content">
        <h2 class="about__section__title">Made from pain</h2>
        <div class="about__section__paragraph">Designing products can be a challenge, especially when keyboard shortcuts need to align with those in other tools. Developers often face the painstaking task of finding the right shortcuts. That's why we developed a tool that checks and standardizes shortcut usage, making design seamless. What's more, we've made it open source, inviting everyone to contribute and expand its capabilities, ensuring it grows to meet evolving needs.</div>
      </div>
    </div>
    <div class="about__section">
      <div class="about__section__content">
          <h2 class="about__section__title">{{count}} Apps</h2>
          <div class="about__section__paragraph">Check the availability of shortcuts for your app and seamlessly match them with any of {{count}} supported applications. Keyboard Shortcut Checker simplifies this process. Help your fellow developers by expanding the list and submitting shortcuts for your favorite apps.</div>
      </div>
        <nuxt-link to="/contribute" class="about__section__content about__section__content--link">
          <h2 class="about__section__title about__section__title--link">Open Source <UpRightArrow class="icon" /></h2>
          <div class="about__section__paragraph">Contribute to grow. See contribution guidelines</div>
        </nuxt-link>
    </div>
  </div>
</template>
<script setup>
import UpRightArrow from '@/assets/icons/UpRightArrow.svg?component';
const { $apps } = useNuxtApp();
const count = computed(() => {
  return $apps.$getApps().length;
})
</script>
<style lang="scss" scoped>
.about-divider {
  width: 100%;
  height: 2px;
  opacity: 0.1;
  background: #E2E2E2;
  margin: 1.375rem 0;
}
.about {
  height: 100%;
  width: 100%;
  display: flex;
  gap: 1.25rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &__section {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1.25rem;

    &__content {
      border-radius: 1.875rem;
      background: rgba(241, 241, 241, 0.10);
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
            color: #676667;
          }
          background: $white;
        }

        .icon {
          color: $white;
          margin: 0.5rem 0;
        }
      }
    }

    &__title {
      @include h2;
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
      color: #D7D7D7;
      margin-top: 1.1875rem;
    }
  }
}
</style>