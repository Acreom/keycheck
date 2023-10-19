<template>
  <div class="shortcuts-checker">
    <AppTitle />
    <CheckerCapture />
  </div>
</template>
<script setup lang="ts">
import {WEBSITE} from "~/helpers/constants";

const {$apps} = useNuxtApp();
const count = computed(() => $apps.$getApps().length);
const allShortcuts = computed(() => $apps.$getApps().reduce((acc, app) => ({...acc, ...app.shortcuts}), {}));
const description = computed(() => `Browse ${Object.keys(allShortcuts.value).length} Shortcuts Across ${count.value} Apps for Developers. Check for Conflicts When Designing Your Own Shortcuts.`);
const title = computed(() => `Check Shortcuts of ${count.value} Apps | ${WEBSITE}`);
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
.shortcuts-checker {
  @include sizer;
  height: 100%;
}
</style>