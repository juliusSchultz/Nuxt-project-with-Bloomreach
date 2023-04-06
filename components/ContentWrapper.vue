<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'ContentWrapper',
  props: {
    breakout: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classList = computed(() => ({
      'content-wrapper': !props.breakout,
      'content-wrapper--breakout': props.breakout,
      'content-wrapper--no-padding': props.noPadding,
    }));

    return {
      classList,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/style.scss";

.content-wrapper {
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 640px;

  @include breakpoint(md) {
    max-width: 768px;
    padding-left: 24px;
    padding-right: 24px;
  }

  @include breakpoint(lg) {
    max-width: 1024px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @include breakpoint(xl) {
    max-width: 1280px;
  }

  @include breakpoint(xxl) {
    max-width: 1536px;
  }

  &--no-padding {
    padding: 0;
  }

  &--breakout {
    position: relative;
    width: 100vw;
    left: 50%;
    margin-left: -50vw;
  }
}
</style>
