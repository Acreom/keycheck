<template>
  <div class="shortcuts-checker">
    <CheckerCapture />
  </div>
</template>
<script setup lang="ts">
import { WEBSITE } from "~/helpers/constants";

const { $apps } = useNuxtApp();
const count = computed(() => $apps.$appsCount());
const description = computed(
  () =>
    `Browse ${$apps.$allShortcutsCount} Shortcuts Across ${count.value} Apps for Developers. Check for Conflicts When Designing Your Own Shortcuts.`,
);
const title = computed(
  () => `Check Shortcuts of ${count.value} Apps | ${WEBSITE}`,
);

useSeoMeta({
  description,
  title,
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});
</script>
<style lang="scss" scoped>
.shortcuts-checker {
  @include sizer(4rem);
  height: 100%;
}
</style>
