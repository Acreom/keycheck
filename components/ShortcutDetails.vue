<template>
  <div class="shortcut-details">
    <div class="shortcut-details__wrapper">
      <div class="shortcut-details__description">{{description}}</div>
      <div class="shortcut-details__keybind">
        <SmallKey v-for="key in resultKeys" :key="key">
          {{key}}
        </SmallKey>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {transformKeys} from "~/helpers/shortcuts";
import {useOptionsStore} from "~/store/options";

const props = defineProps({
  keybind: { type: String, required: true },
  description: {type: String, required: true}
});

const platformPreprocess = (shortcut: string, platform: "mac" | "win") => {
  return shortcut
      .toLowerCase()
      .replace(/(esc)/g, "escape")
      .replace(/(cmdorctrl)/g, platform === "mac" ? "meta" : "ctrl")
      .replace(/(cmd)/g, "meta")
      .replace(/(ctrl)/g, "ctrl");
}

const resultKeys = computed(() => {
  const store = useOptionsStore();
  return transformKeys(platformPreprocess(props.keybind, store.currentPlatform).split('+'));
});
</script>
<style lang="scss" scoped>
.shortcut-details {
  @include listItem;

  &__wrapper {
    @include listItemWrapper;
    grid-template-columns: 1fr minmax(1.75rem, 6.25rem);
  }

  &__description {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.746rem;
    color: $white;
    text-decoration: none;
  }

  &__keybind {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>