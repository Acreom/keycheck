<template>
  <div class="result">
    <nuxt-img :src="result.icon" :alt="`${result.name} logo`" class="result__icon" />
    <div class="result__name">{{result.name}}</div>
    <div class="result__description">{{result.description}}</div>
    <div class="result__keys">
      <SmallKey v-for="key in resultKeys" :key="key">{{key}}</SmallKey>
    </div>
  </div>
</template>
<script lang="ts" setup>

import {transformKeys} from "~/helpers/shortcuts";

const props = defineProps({
  result: { type: Object, required: true },
});

const result = computed(() => props.result);
const resultKeys = computed(() => {
  return transformKeys(result.value.keys.split('+'));
})

</script>
<style lang="scss" scoped>
.result {
  color: $white;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 28px 0.5fr 1fr minmax(28px, 100px);
  align-items: center;
  gap: 16px;
  padding: 32px 8px;
  margin: 0 16px 4px;
  border-bottom: 1px solid $blueGrey400;

  &__icon{
    height: 24px;
  }
  &__name{
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.746rem;
    color: $white;
    text-decoration: none;
  }
  &__keys {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>