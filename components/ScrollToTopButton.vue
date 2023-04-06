<template>
  <div
    class="scroll-to-top-button"
    @click="scrollToTop"
  >
    <div class="scroll-to-top-button__inner-wrapper">
      <img alt="Arrow Up" src="~/assets/icons/arrowUp.svg">
      <span class="scroll-to-top-button__text">{{ backToTopText }}</span>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ScrollToTopButton',
  props: {
    backToTopText: {
      type: String,
      required: true,
    },
  },
  setup() {
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return {
      scrollToTop,
    };
  },
});
</script>

<style lang="scss">
@use '../assets/scss/variables' as *;
@import '../assets/scss/style.scss';

.scroll-to-top-button {
  border: 1px solid $color--white;
  border-radius: 5px;
  cursor: pointer;
  padding: 12px;

  &__text {
    display: none;
  }

  &:hover {
    border-color: $secondary-text-color;
    color: $secondary-text-color;
  }

  @include breakpoint (md) {
    .scroll-to-top-button__text {
      display: inline-block;
      margin-left: 8px;
    }
  }

  &__inner-wrapper {
    display: flex;
  }
}
</style>
