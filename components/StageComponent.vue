/*
* Copyright 2023 diva-e
*
* This code was partly developed in a hackweek project at diva-e
*/

<template>
  <div class="stage">
    <div
        v-if="imageSrc"
        class="stage__image-block"
    >
      <img
          class="stage__image-block--image"
          :src="imageSrc"
          :alt="alt"
      >
    </div>

    <div class="stage__text-block">
      <ContentWrapper class="stage__text-wrapper">
        <div class="stage__buttons">
          <div
              v-for="(button, index) in buttons"
              :key="index"
          >
            <ButtonLabel
                :component="{
                link: button.link, alt: button.alt, text: button.text
              }"
                class="stage__buttons--button"
            />
          </div>
        </div>
        <h2
            v-if="subline"
            class="stage__text-block--subline"
        >
          {{ subline }}
        </h2>
        <h1
            v-if="headline"
            class="stage__text-block--headline"
        >
          {{ headline }}
        </h1>
      </ContentWrapper>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import ContentWrapper from '~/components/ContentWrapper';
import ButtonLabel from '~/components/ButtonLabel';

export default defineComponent({
  components: { ContentWrapper, ButtonLabel },
  props: {
    component: {
      type: Object
    },
  },
  setup(props){
    const properties = computed(() => props.component.getParameters());

    const headline = computed(() => properties.value?.headline || '');
    const subline = computed(() => properties.value?.subline || '');
    const imageSrc = computed(() => properties.value?.imageSrc || '');
    const alt = computed(() => properties.value?.alt || '');
    const buttons = computed(() => properties.value?.buttons || []);

    return { properties, headline, subline, imageSrc, alt, buttons }
  },
})
</script>


<style lang="scss">
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins.scss' as *;

.stage {
  position: relative;
  height: 450px;
  overflow: hidden;
  &__image-block {
    z-index: 0;
    height: inherit;
    @include breakpoint(md) {
      height: unset;
    }
    &--image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @include breakpoint(md) {
        height: unset;
      }
    }
  }

  &__buttons{
    display: flex;
    gap: 10px;
    padding-bottom: 3px;

    &--button{
      border-radius: 50px;
      border: 1px solid white;
      background-color: initial;
      height: initial;
      width: unset;
      padding: 1px 16px;

      .button__text {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  &__text-block {
    color: $color--white;
    display: flex;
    -webkit-align-items: center;
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    &--headline {
      font-size: 32px;
      line-height: 42px;
      font-family: $font-primary;
      font-weight: 100;
      @include breakpoint(md) {
        font-size: 44px;
        line-height: 58px;
      }
    }

    &--subline {
      font-size: 22px;
      line-height: 32px;
      font-family: $font-primary;
      font-weight: 100;
      padding-bottom: $spacing-m;
    }
  }

  &__text-wrapper{
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
