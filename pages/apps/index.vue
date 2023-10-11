<template>
  <h1>Browse by apps</h1>
  <AppsList />
</template>
<script setup lang="ts">
import AppsList from "~/components/list/apps/AppsList.vue";
import {WEBSITE} from "~/helpers/constants";

const {$apps} = useNuxtApp();
const count = computed(() => $apps.$getApps().length);
const description = computed(() => `Browse Shortcuts of ${count.value} Apps for Developers. Check for Conflicts When Designing Your Own Shortcuts.`);
const title = computed(() => `Browse ${count.value} Apps | ${WEBSITE}`);
const ogImageOptions = {
  title,
  provider: 'browser'
}

defineOgImage(ogImageOptions)
useSeoMeta({
  description,
  title,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image',
})
</script>
<style lang="scss" scoped>
h1 {
  @include sizer;
  @include h1;
}

</style>