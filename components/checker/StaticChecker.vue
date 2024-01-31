<template>
  <div class="static-checker">
    <div class="static-checker__checker">
      <Key
        v-for="(key, index) of capturedKeys"
        :key="key"
        :captured-key="transformKeys([key])[0]"
        :key-index="index"
      />
    </div>
  </div>
  <CheckerSearch
    v-if="capturedKeys.length"
    :query="capturedKeys"
    :include-partial-matches="false"
  />
</template>
<script setup lang="ts">
import {
  transformKeys,
  platformPreprocessCapturedKeys,
  routeToCapturedKeys,
  preprocess,
} from "~/helpers/shortcuts";
import Key from "~/components/checker/Key.vue";

const route = useRoute();
const router = useRouter();
const platform = useState("platform", () => "win");

const capturedKeys = computed(() => {
  if (!route.params?.keybind) return [];
  const raw = preprocess(
    routeToCapturedKeys(route.params.keybind as string),
  ).split("+");
  return platformPreprocessCapturedKeys(raw);
});

useAsyncData(async () => {
  if (!route.params?.keybind) return;
  const raw = routeToCapturedKeys(route.params.keybind as string).split("+");
  if (raw.includes("cmd")) {
    platform.value = "mac";
  }
});

onBeforeMount(() => {
  router.replace({ params: {} });
});
</script>
<style lang="scss" scoped>
.static-checker {
  margin: 6rem auto 0;
  max-width: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &__checker {
    position: relative;
    background: $dark-20;
    user-select: none;
    padding: 1rem;
    border-radius: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
  }

  &__controls {
    @include sizer(2rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
