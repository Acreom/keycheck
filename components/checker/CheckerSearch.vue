<template>
  <div class="search">
    <div class="search__results">
      <p>
        {{ fullMatches.length }} result{{ fullMatches.length === 1 ? "" : "s" }}
      </p>
      <div class="search__results__empty" v-if="!fullMatches.length">
        No Exact Matches Found
      </div>
      <Result
        v-for="result of fullMatches"
        :key="`${result.id}-${result.keys}`"
        :result="result"
      />
      <p v-if="partialMatches.length">
        {{ partialMatches.length }} similar result{{
          partialMatches.length === 1 ? "" : "s"
        }}
      </p>
      <Result
        v-for="result of partialMatchesCutoff"
        :key="`${result.id}-${result.keys}`"
        :result="result"
      />
      <button
        class="search__show-more"
        v-if="partialMatches.length && cutoff < partialMatches.length"
        @click="showAll"
      >
        Show More Results
      </button>
      <ContributionCTA
        >Don't see your shortcut? Learn how to contribute.</ContributionCTA
      >
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
const platform = useState("platform", () => "win");
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
    &__empty {
      color: rgba(255, 255, 255, 0.33);
      display: flex;
      justify-content: center;
    }

    p {
      @include p;
      font-size: 1.25rem;
      padding: 2.0625rem 1.5rem 1.125rem;
      line-height: 100%;
      font-weight: 300;
      letter-spacing: 1px;
      color: rgba(255, 255, 255, 0.4);
    }
  }

  &__show-more {
    outline: none;
    padding: 0.625rem;
    margin: 3rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.33);

    &:hover {
      color: $white;
      border: 1px solid rgba(255, 255, 255, 0.4);
    }
  }
}
</style>
