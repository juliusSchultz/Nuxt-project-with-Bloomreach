<template>
  <button
      class="button"
      :href="link"
      :alt="alt"
  >
    <img
        v-if="icon"
        class="button__icon"
        :src="icon"
        :alt="iconalt"
    >
    <span class="button__text"> {{ text }} </span>
  </button>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonLabel',
  props: {
    link: {
      type: Object
    },
    alt: {
      type: String
    },
    text: {
      type: String
    },
    icon: {
      type: String
    },
    iconalt: {
      type: String
    }
  },
})
</script>

<style lang="scss">
@use '../assets/scss/variables' as *;
@import '../assets/scss/style.scss';

.button {
  color: white;
  cursor: pointer;

  &:hover {
    border-color: $secondary-text-color;
    color: $secondary-text-color;
  }
}
</style>
