<template>
  <div class="app-details">
    <nuxt-link :to="`/apps/${app.id}/`" class="app-details__wrapper">
      <img
        :src="app.icon"
        :alt="`${app.name} logo`"
        class="app-details__logo"
      />
      <div class="app-details__homepage">{{ app.name }}</div>
      <ArrowBack class="icon" />
    </nuxt-link>
  </div>
</template>
<script lang="ts" setup>
import ArrowBack from "@/assets/icons/ArrowBack.svg?component";
const props = defineProps({
  app: { type: Object, required: true },
});
const app = computed(() => props.app);
</script>
<style lang="scss" scoped>
.app-details {
  @include listItem;

  &__wrapper {
    @include listItemWrapper;
    grid-template-columns: 1.75rem 1fr 3.125rem;
  }

  &__logo {
    height: 1.5rem;
  }

  &__homepage {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.746rem;
    color: $white;
    text-decoration: none;
  }

  .icon {
    transform: scale(-0.8);
    color: rgba(217, 217, 217, 0.5);
  }

  &:hover {
    .icon {
      color: $white;
    }
  }
}
</style>
