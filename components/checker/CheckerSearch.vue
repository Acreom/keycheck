<template>
  <div class="search">
    <div class="search__results">
      <Result v-for="result of fullMatches" :result="result" />
      <p v-if="partialMatches.length">Similar Results</p>
      <Result v-for="result of partialMatchesCutoff" :result="result" />
      <ContributionCTA
        >Don't see your shortcut? Learn how to contribute.</ContributionCTA
      >
    </div>
    <div class="search__show-more">
      <button
        v-if="partialMatches.length && cutoff < partialMatches.length"
        @click="showAll"
      >
        Show More
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import Result from "~/components/checker/Result.vue";

const { $apps } = useNuxtApp();
const props = defineProps({
  query: { type: Array<String>, required: true },
  includePartialMatches: { type: Boolean, default: true },
});
const cutoff = ref<number>(10);
const platform = useState("platform", () => "mac");
const matches = computed(() => {
  return $apps.$getShortcutsMatches(
    props.query.join("+").toLowerCase(),
    platform.value,
  );
});

const fullMatches = computed(() => {
  return matches.value.filter((match: any) => !match.partial);
});

const partialMatches = computed(() => {
  if (!props.includePartialMatches) return [];
  return matches.value.filter((match: any) => match.partial);
});

const partialMatchesCutoff = computed(() => {
  if (!props.includePartialMatches) return [];
  return matches.value
    .filter((match: any) => match.partial)
    .slice(0, cutoff.value);
});

watch(partialMatches, (val, prevVal) => {
  if (val.length !== prevVal.length) {
    cutoff.value = 10;
  }
});
const showAll = () => {
  cutoff.value = partialMatches.value.length;
};
</script>
<style lang="scss" scoped>
.search {
  margin-top: 2rem;
  padding: 0 0.5rem;

  &__results {
    @include list(1.75rem);

    p {
      @include p(Inter);
      padding: 2.0625rem 1.5rem 1.125rem;
      color: #a3c6e6;
    }
  }

  &__show-more {
    margin: 2rem auto 0;
    max-width: 21.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      background: none;
      border: none;
      color: $blueGrey400;
      padding: 1rem 2rem;

      &:hover {
        color: $white;
      }
    }
  }
}
</style>
