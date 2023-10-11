<template>
<div class="apps-list">
<AppDetails v-for="app in $apps.$getApps()" :key="app.id" :app="app" />
</div>
</template>
<script setup lang="ts">
import AppDetails from "~/components/list/apps/AppDetails.vue";

const {$apps} = useNuxtApp();
</script>
<style lang="scss" scoped>
.apps-list {
  @include list;
}
</style>