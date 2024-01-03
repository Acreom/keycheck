<template>
  <div class="shortcuts-list">
    <Result
      v-for="shortcut of shortcuts"
      :key="shortcut.id"
      :result="shortcut"
    />
    <ContributionCTA
      >Don't see your shortcut? Learn how to contribute.</ContributionCTA
    >
  </div>
</template>
<script setup lang="ts">
import Result from "~/components/checker/Result.vue";

const props = defineProps({
  shortcuts: { type: Array<any>, required: true },
});
</script>
<style lang="scss" scoped>
.shortcuts-list {
  @include list(1rem);
}
</style>
