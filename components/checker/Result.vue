<template>
  <nuxt-link :to="`${result.redirect}`" class="result">
    <div
      class="result__wrapper"
      :class="{ 'result__wrapper--has-app': result.app }"
    >
      <img
        v-if="result.app"
        :src="result.app.icon"
        :alt="`${result.app.name} logo`"
        class="result__icon"
      />
      <div v-if="result.app" class="result__name">
        {{ result.app.name }}
        <GlobalShortcutIndicator v-if="result.global" />
      </div>
      <div class="result__description">{{ result.description }}</div>
      <div class="result__keys">
        <SmallKey v-for="key in resultKeys" :key="key" :kb-key="key" />
      </div>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
import { transformKeys } from "~/helpers/shortcuts";
import GlobalShortcutIndicator from "~/components/list/shortcuts/GlobalShortcutIndicator.vue";
import { Result } from "~/types";

const props = defineProps(["result"]);

const result = computed(() => props.result as Result);
const resultKeys = computed(() => {
  return transformKeys(result.value.keys.split("+"));
});
</script>
<style lang="scss" scoped>
.result {
  @include listItem;

  &__wrapper {
    @include listItemWrapper;
    grid-template-columns: 1fr minmax(1.75rem, 9.25rem);

    &--has-app {
      grid-template-columns: 1.75rem 0.5fr 1fr minmax(1.75rem, 9.25rem);
    }
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

  &__description {
    font-size: 1.125rem;
    color: #b7babf;
  }

  &__keys {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
  }
}
</style>
