<template>
  <h1>How To Contribute</h1>
  <p>add app config as a file named `app-id.ts` to `/known-shortcuts`</p>
  <p>add app export to `known-shortcuts/index.ts` - something like `export { default as app-id } from "./app-id";`</p>
  <p>add app icon to `public/app-icons`. The name must match your defined icon in the app config file. There are not rules applying to the icon, but check it looks ok.</p>
</template>
<script setup lang="ts">
import {WEBSITE} from "~/helpers/constants";

const {$apps} = useNuxtApp();
const title = computed(() => `Contributing | ${WEBSITE}`);
const description = computed(() => `Learn How To Contribute to keycheck.dev, the Shortcut Checker for Developers and Designers.`);
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