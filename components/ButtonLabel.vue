/*
* Copyright 2023 diva-e
*
* This code was partly developed in a hackweek project at diva-e
*/

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
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    component: {
      type: Object
    },
  },
  setup(props){
    const properties = computed(() => props.component.getParameters());

    const link = computed(() => properties.value?.link || '#');
    const alt = computed(() => properties.value?.alt || 'Click Button');
    const text = computed(() => properties.value?.text || 'Click Me');
    const icon = computed(() => properties.value?.icon || '');
    const iconalt = computed(() => properties.value?.iconalt || '');

    return { link, alt, text, icon, iconalt }
  },
})
</script>

<Style lang="scss">
@use '../assets/scss/variables' as *;
@import '../assets/scss/style.scss';

.button {
  width: 100%;
  height: 48px;
  padding: 11px 24px;
  margin: 10px 0;
  border-radius: 5px;
  gap: 10px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: $primary-button-color;
  color: $accent-text-color;
  transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  &:hover{
    background-color: $hover-button-color;
    transform: scale(1.15);
    cursor: pointer;
  }
  &__text{
    font-size: 16px;
    font-weight: 400;
    font-family: $font-primary;
    font-kerning: normal;
    line-height: 26px;
  }
  &__icon{
    height: 20px;
  }
}

@include breakpoint (md) {
  .button{
    width: 142px;
  }
}
</Style>
