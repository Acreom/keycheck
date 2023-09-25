<template>
  <h1>Browse by apps</h1>
  <div class="apps">
    <AppDetails v-for="app in $apps.$getApps()" :key="app.id" :app="app" />
  </div>
</template>
<script setup lang="ts">
const {$apps} = useNuxtApp();
</script>
<style lang="scss" scoped>
h1 {
  @include sizer;
  @include h1;
}
.apps {
  @include list;
}
</style>