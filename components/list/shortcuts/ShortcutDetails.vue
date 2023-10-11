<template>
  <div class="shortcut-details" @click="onClick">
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
import {transformKeys, platformPreprocess} from "~/helpers/shortcuts";

const props = defineProps({
  keybind: { type: String, required: true },
  description: {type: String, required: true},
  link: {type: Boolean, default: false}
});

const platform = useState('platform', () => "mac");

const resultKeys = computed(() => {
  return transformKeys(platformPreprocess(props.keybind, platform.value).split('+'));
});

const onClick = () => {
  if (props.link) {
    const router = useRouter();
    router.push({
      path: encodeURI(`/shortcuts/${props.keybind?.toLowerCase()}`),
    })
  }
}
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