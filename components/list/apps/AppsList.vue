<template>
  <div class="apps-list">
    <p>{{ $apps.$appsCount() }} Apps</p>
    <AppDetails v-for="app in $apps.$getApps()" :key="app.id" :app="app" />
    <ContributionCTA
      >Can't see your app? Add it and help others.</ContributionCTA
    >
  </div>
</template>
<script setup lang="ts">
import AppDetails from "~/components/list/apps/AppDetails.vue";

const { $apps } = useNuxtApp();
</script>
<style lang="scss" scoped>
.apps-list {
  @include list(4rem);

  p {
    @include p;
    font-size: 1.25rem;
    padding: 1.125rem 1.5rem;
    line-height: 100%;
    font-weight: 300;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.4);
  }

  :deep(.contribution-cta__wrapper) {
    margin-top: 2rem;
    grid-template-columns: 1fr 2.65rem;
  }
}
</style>
