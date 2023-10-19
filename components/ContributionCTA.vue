<template>
  <nuxt-link to="https://github.com/Acreom/keycheck/blob/main/CONTRIBUTING.md" target="_blank" class="contribution-cta">
    <div class="contribution-cta__wrapper">
      <div class="contribution-cta__text">
        <slot></slot>
      </div>
      <div class="contribution-cta__icon">
        <UpRightArrow class="icon" />
      </div>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
import UpRightArrow from "@/assets/icons/UpRightArrow.svg?component";
</script>
<style lang="scss" scoped>
.contribution-cta {
  @include listItem;

  &__wrapper {
    @include listItemWrapper;
    grid-template-columns: 1fr 1.75rem
  }

  &__icon{
    height: 1.5rem;
  }

  &__text {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.746rem;
    color: $white;
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  &__icon {
    color: #D9D9D9;
    .icon {
      scale: 0.8;
    }
  }
}
</style>