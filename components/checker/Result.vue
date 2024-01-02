<template>
  <nuxt-link :to="`/apps/${result.id}`" class="result">
    <div class="result__wrapper">
      <img
        :src="result.icon"
        :alt="`${result.name} logo`"
        class="result__icon"
      />
      <div class="result__name">
        {{ result.name }}
        <GlobalShortcutIndicator v-if="result.global" />
      </div>
      <div class="result__description">{{ result.description }}</div>
      <div class="result__keys">
        <SmallKey v-for="key in resultKeys" :key="key">{{ key }}</SmallKey>
      </div>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
import { transformKeys } from "~/helpers/shortcuts";
import GlobalShortcutIndicator from "~/components/list/shortcuts/GlobalShortcutIndicator.vue";

const props = defineProps({
  result: { type: Object, required: true },
});

const result = computed(() => props.result);
const resultKeys = computed(() => {
  return transformKeys(result.value.keys.split("+"));
});
</script>
<style lang="scss" scoped>
.result {
  @include listItem;

  &__wrapper {
    @include listItemWrapper;
    grid-template-columns: 1.75rem 0.5fr 1fr minmax(1.75rem, 6.25rem);
  }

  &__icon {
    height: 1.5rem;
  }

  &__name {
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

  &__keys {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
