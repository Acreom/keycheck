<template>
  <h1>All Shortcuts</h1>
  <Search @search="onSearch"/>
  <ShortcutsList :shortcuts="filteredShortcuts" :group-by-shortcut="true" />
</template>
<script setup lang="ts">
import ShortcutsList from "~/components/list/shortcuts/ShortcutsList.vue";
import {WEBSITE} from "~/helpers/constants";
import {App} from "~/helpers/AppBase";

const { $apps, $search } = useNuxtApp();

const filterKeybinds = ref<string[]>([]);
const allShortcuts = computed(() => $apps.$getApps().reduce((acc: Record<string, string>, app: App) => ({...acc, ...app.shortcuts, ...app.globals}), {} as Record<string, string>));

const filteredShortcuts = computed(() => {
  if (filterKeybinds.value.length === 0) {
    return allShortcuts.value;
  }
  const filtered = Object.keys(allShortcuts.value).reduce((acc, keybind) => {
    if (filterKeybinds.value.includes(keybind)) {
      return {...acc, [keybind]: allShortcuts.value[keybind]}
    }
    return acc;
  }, {} as Record<string, string>);
  return filtered;
})

const onSearch = (query: string) => {
  const results = $search.$search(query.toLowerCase());
  filterKeybinds.value = Array.from(new Set(results.map((result: any) => result.keybind.split(' ').join('+'))));
}

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