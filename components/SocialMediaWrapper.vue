/*
* Copyright 2023 diva-e
*
* This code was partly developed in a hackweek project at diva-e
*/

<template>
  <div class="social-media-wrapper">
    <a
      v-for="(item, index) in content"
      :key="index"
      class="social-media-link"
      :href="item.href"
    >
      {{ item.icon }}
    </a>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="scss">
@use '../assets/scss/variables' as *;

.social-media-wrapper {
  display: flex;
  grid-column-gap: 32px;
}

.social-media-link {
  color: $accent-link-color;
  cursor: pointer;
}
</style>
