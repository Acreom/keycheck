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

const { $apps, $search } = useNuxtApp();

const searchResults = ref<any[]>([]);
const numResults = computed(() => Object.keys(filteredResults.value).length);
const query = ref<string>("");

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
