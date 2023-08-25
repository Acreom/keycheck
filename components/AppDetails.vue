<template>
  <div class="app-details">
    <nuxt-img :src="app.icon" :alt="`${app.name} logo`" class="app-details__icon" />
    <nuxt-link :to="app.homepage" target="_blank" class="app-details__homepage">{{app.name}}</nuxt-link>
    <button class="app-details__expand">+</button>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  app: { type: Object, required: true },
})

const app = computed(() => props.app);

</script>
<style lang="scss" scoped>
.app-details {
  color: $white;
  font-size: 1rem;
  display: grid;
  grid-template-columns: 28px 1fr 28px;
  align-items: center;
  gap: 8px;
  padding: 8px 8px;
  border: 1px solid $blueGrey700;
  border-radius: 12px;
  margin: 0 16px 4px;

  &__icon{
    height: 24px;
  }
  &__name{

  }
  &__homepage{
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.746rem;
    color: $white;
    text-decoration: none;
  }
  &__expand{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 0;
    background: $blueGrey600;
    border: none;
    border-radius: 6px;
    color: $blueGrey50;
    line-height: 1rem;
    &:hover {
      background: $blueGrey400;
      color: $white;
    }
  }
}
</style>