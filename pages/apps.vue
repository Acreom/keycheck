<template>
<div class="apps">
  <AppDetails v-for="app in $apps.$getApps()" :key="app.id" :app="app" />
</div>
</template>
<script setup lang="ts">
const {$apps} = useNuxtApp();
</script>
<style lang="scss" scoped>
.apps {
  margin: 128px auto 0;
  max-width: 1150px;
  height: 100%;
}
</style>