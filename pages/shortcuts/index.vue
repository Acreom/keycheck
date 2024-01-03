<template>
  <Search @search="onSearch" />
  <ShortcutsList
    v-if="filteredResults.length || query.length"
    :shortcuts="filteredResults"
  />
  <AppAbout v-else />
</template>
<script setup lang="ts">
import ShortcutsList from "~/components/list/shortcuts/ShortcutsList.vue";
import { WEBSITE } from "~/helpers/constants";
import { preprocess } from "~/helpers/shortcuts";

const { $apps, $search } = useNuxtApp();

const searchResults = ref<any[]>([]);
const allShortcuts = computed(() => $apps.$getAllShortcuts());
const numResults = computed(() => Object.keys(filteredResults.value).length);
const query = ref<string>("");

const shortcutsUsages = computed(() => {
  const shortcutsMap = Object.keys(allShortcuts.value).reduce(
    (acc, key) => {
      acc[preprocess(key)] = [];
      return acc;
    },
    {} as Record<string, string[]>,
  );
  const { $apps } = useNuxtApp();
  for (const app of $apps.$getApps()) {
    const appShortcuts = {
      ...app.shortcuts,
      ...app.globals,
    };
    for (const key of Object.keys(appShortcuts)) {
      if (preprocess(key) in shortcutsMap) {
        shortcutsMap[preprocess(key)].push(app.id);
      }
    }
  }
  return shortcutsMap;
});

const allShortcutsRemapped = computed(() => {
  return Object.keys(allShortcuts.value).map((key, index) => {
    const keys = preprocess(key);
    const shortcutUsages = shortcutsUsages.value[keys].length;
    const description = `${shortcutUsages} app${
      shortcutUsages > 1 || shortcutUsages <= 0 ? "s" : ""
    }`;
    return {
      id: `${keys}-${description}-${index}`,
      keys,
      description,
      redirect: `/shortcuts/${encodeURIComponent(key.toLowerCase())}/`,
    };
  });
});

const filteredResults = computed(() => {
  if (query.value.length === 0) {
    return [];
  }
  if (searchResults.value.length === 0) {
    return [];
  }
  return searchResults.value;
});

const onSearch = (newQuery: string) => {
  query.value = newQuery.toLowerCase();
  searchResults.value = $search.$search(query.value);
};

const description = computed(
  () =>
    `Browse ${$apps.$allShortcutsCount()} Shortcuts. Check for Conflicts When Designing Your Own Shortcuts.`,
);

const title = computed(
  () =>
    `${query.value !== "" ? "Found" : "Search"} ${
      query.value !== "" ? numResults.value : "All"
    } Shortcuts | ${WEBSITE}`,
);

useSeoMeta({
  description,
  title,
  ogTitle: title,
  ogDescription: description,
  twitterCard: "summary_large_image",
});
</script>
<style lang="scss" scoped></style>
