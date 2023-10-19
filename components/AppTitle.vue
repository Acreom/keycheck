<template>
  <h2>{{count}} apps . MIT License . Open Source</h2>
  <h1>Keycheck.dev</h1>
</template>
<script setup lang="ts">
const { $apps } = useNuxtApp();
const count = computed(() => {
  return $apps.$getApps().length;
})
</script>
<style lang="scss" scoped>
h1 {
  @include title;
}

h2 {
  @include p;
  color: #91C6F6;
  text-align: center;
  margin-bottom: 1.3125rem;
}
</style>