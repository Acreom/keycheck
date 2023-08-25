<template>
  <div class="search-results">
    <Result v-for="result of results" :result="result" />
  </div>
  <div class="show-more">
    <button v-if="results.length && cutoff < matches.length" @click="showAll">Show All Results</button>
  </div>
</template>
<script setup lang="ts">
const {$apps} = useNuxtApp();
const props = defineProps({
  query: { type: Array, required: true },
})
const cutoff = ref<number>(10);

const matches = computed(() => {
  return $apps.$getShortcutsMatches(props.query.join('+').toLowerCase());
});
const results = computed(() => {
  return props.query.length ? matches.value.slice(0, cutoff.value) : [];
});

watch(
    matches,
    (val, prevVal) => {
      console.log('watch match', val.value, prevVal.value);
      if (val.length !== prevVal.length) {
        cutoff.value = 10;
      }
    }
)
const showAll = () => {
  cutoff.value = matches.value.length;
}
</script>
<style lang="scss" scoped>
.search-results {
  margin-top: 32px;
}
.show-more {
  margin: 32px auto 0;
  max-width: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background: none;
    border: none;
    color: $blueGrey400;
    padding: 16px 32px;

    &:hover {
      color: $white;
    }
  }
}
</style>