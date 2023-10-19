<template>
  <h1>All Shortcuts</h1>
  <div class="switcher-wrapper">
    <PlatformSwitcher />
  </div>
  <ShortcutsList :shortcuts="allShortcuts" :group-by-shortcut="true" />
</template>
<script setup lang="ts">
import ShortcutsList from "~/components/list/shortcuts/ShortcutsList.vue";
import {WEBSITE} from "~/helpers/constants";

const { $apps } = useNuxtApp();
const allShortcuts = computed(() => $apps.$getApps().reduce((acc, app) => ({...acc, ...app.shortcuts}), {}));

const description = computed(() => `Browse ${Object.keys(allShortcuts.value).length} Shortcuts. Check for Conflicts When Designing Your Own Shortcuts.`);
const title = computed(() => `Browse ${Object.keys(allShortcuts.value).length} Shortcuts | ${WEBSITE}`);
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

.switcher-wrapper {
  @include sizer(2rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>