<template>
  <div class="search" :class="{ focused }">
    <SearchIcon class="search-icon" />
    <input
      v-model="query"
      placeholder="Search by keybind, app, or description"
      @input="onInput"
      @focus="focused = true"
      @blur="focused = false"
    />
    <button class="search__clear" v-if="query" @click="onClear">
      <CloseIcon class="close-icon" />
    </button>
  </div>
</template>
<script setup lang="ts">
import SearchIcon from "@/assets/icons/SearchIcon.svg?component";
import CloseIcon from "@/assets/icons/CloseIcon.svg?component";
import debounce from "lodash/debounce";

const query = ref<string>("");
const focused = ref<boolean>(false);
const emit = defineEmits(["search"]);

const onInput = debounce(() => {
  emit("search", query.value);
}, 500);

const onClear = () => {
  query.value = "";
  emit("search", query.value);
};
</script>
<style lang="scss" scoped>
.search {
  @include sizer(4rem);
  display: flex;
  align-items: center;
  gap: 1.25rem;
  border-radius: 36px;
  background: rgba(0, 0, 0, 0.2);
  background-blend-mode: color-burn, luminosity;
  box-shadow:
    0px 1.5px 4px 0px rgba(0, 0, 0, 0.1) inset,
    0px 1.5px 4px 0px rgba(0, 0, 0, 0.08) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.25) inset,
    0px -0.5px 1px 0px rgba(255, 255, 255, 0.3) inset;
  padding: 0 1.6875rem;

  &.focused {
    background: rgba(0, 0, 0, 0.25);
  }

  &__clear {
    outline: none;
    &:hover {
      .close-icon {
        color: #fff;
      }
    }
    .close-icon {
      color: #d9d9d9;
      flex-shrink: 0;
    }
  }
  .search-icon {
    color: $white;
    opacity: 0.5;
    flex-shrink: 0;
  }

  input {
    @include p(Inter);
    outline: none;
    width: 100%;
    color: $white;
    background: none;
    padding: 1.1875rem 0;

    &::placeholder {
      color: $white;
      opacity: 0.7; /* Firefox */
    }
  }
}
</style>
