<template>
  <div class="search">
    <input
        v-model="query"
        placeholder="Search by keybind, app, or description"
        @input="onInput"
        @keydown.enter="onEnter"
    />
    <button @click="onEnter">↵</button>
  </div>
</template>
<script setup lang="ts">
const query = ref<string>('');

const { $search } = useNuxtApp();
const emit = defineEmits(['search']);

const onInput = (inputEvent: InputEvent) => {
  const target = inputEvent.target as HTMLInputElement;
  query.value = target.value;
  if (query.value.length === 0) {
    emit('search', '');
  }
}

const onEnter = () => {
  console.log('onEnter', query.value);
  emit('search', query.value);
}
</script>
<style lang="scss" scoped>
.search {
  @include sizer(1.5rem);
  display: flex;
  align-items: center;
  gap: 0.25rem;

  input {
    padding: 0.5rem 1rem;
    border-radius: 24px;
    outline: none;
    min-width: 21rem;
  }

  button {
    background: $orange;
    padding: 0.5rem 0.75rem;
    border-radius: 24px;
    color: white;
    outline: none;
    transition: all 0.1s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      -webkit-box-shadow: 0.15rem 0.15rem 0px 0.1rem rgba(1,1,1,0.3);
      -moz-box-shadow: 0.15rem 0.15rem 0px 0.1rem rgba(1,1,1,0.3);
      box-shadow: 0.15rem 0.15rem 0px 0.1rem rgba(1,1,1,0.3);
    }

    &:active {
      transform: translate(0.1rem, 0.1rem);
      -webkit-box-shadow: 0.05rem 0.05rem 0px 0.07rem rgba(1,1,1,0.3);
      -moz-box-shadow: 0.05rem 0.05rem 0px 0.07rem rgba(1,1,1,0.3);
      box-shadow: 0.05rem 0.05rem 0px 0.1rem rgba(1,1,1,0.3);
    }
  }
}
</style>