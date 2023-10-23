<template>
  <div class="platform-switcher">
    <button @click="setPlatform('mac')" :class="{active: platform === 'mac'}">
      <MacIcon class="icon" />
    </button>
    <div class="platform-switcher__divider"></div>
    <button @click="setPlatform('win')" :class="{active: platform === 'win'}">
      <WindowsIcon class="icon" />
    </button>
  </div>
</template>
<script setup lang="ts">
import WindowsIcon from "@/assets/icons/WindowsIcon.svg?component";
import MacIcon from "@/assets/icons/MacIcon.svg?component";

const platform = useState('platform', () => "mac");

const setPlatform = (value: 'win' | 'mac') => {
  platform.value = value;
}
</script>
<style lang="scss" scoped>
.platform-switcher {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 82px;
  background: rgba(27, 28, 31, 0.75);
  backdrop-filter: blur(12px);

  &__divider {
    width: 1px;
    padding: 1rem 0;
    background: rgba(255,255,255,0.1);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    padding: 0.65rem 2.125rem 0.65rem 2.5rem;

    &:last-of-type {
      padding: 0.65rem 2.5rem 0.65rem 2.125rem;
    }

    &:hover {
      .icon {
        opacity: 0.6;
      }
    }

    .icon {
      color: $white;
      opacity: 0.2;
    }

    &.active {
      .icon {
        opacity: 1;
      }
    }

  }
}
</style>