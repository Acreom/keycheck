<template>
  <h1>About Keycheck.dev</h1>
  <AppAbout />
</template>
<script setup lang="ts">
import {WEBSITE} from "~/helpers/constants";

const {$apps} = useNuxtApp();
const title = computed(() => `About | ${WEBSITE}`);
const allShortcuts = computed(() => $apps.$getApps().reduce((acc, app) => ({...acc, ...app.shortcuts}), {}));
const count = computed(() => $apps.$getApps().length);
const description = computed(() => `Learn About keycheck.dev, the Shortcut Checker for Developers and Designers. Currently Containing ${Object.keys(allShortcuts.value).length} Shortcus from ${count.value} Apps.`);
const ogImageOptions = {
  title: title.value.split(' | ')[0],
  description: description.value
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