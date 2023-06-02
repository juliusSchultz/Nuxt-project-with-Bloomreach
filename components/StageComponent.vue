<template>
  <div class="stage">
    <div
        v-if="extractUrlOfImage(componentContent.image)"
        class="stage__image-block"
    >
      <img
          class="stage__image-block--image"
          :src="extractUrlOfImage(componentContent.image)"
          :alt="componentContent.alt"
      >
    </div>

    <div class="stage__text-block">
      <ContentWrapper class="stage__text-wrapper">
        <div class="stage__buttons">
          <div
              v-for="(button, index) in componentContent.buttons"
              :key="index"
          >
            <ButtonLabel
                :link="extractUrlOfLink(button.link)"
                :alt="button.alt"
                :text="button.text"
                :icon="button.icon"
                :iconalt="button.iconalt"
                class="stage__buttons--button"
            />
          </div>
        </div>
        <h2
            v-if="componentContent.subline.value"
            class="stage__text-block--subline"
            v-html="componentContent.subline.value"
        />
        <h1
            v-if="componentContent.headline"
            class="stage__text-block--headline"
        >
          {{ componentContent.headline }}
        </h1>
      </ContentWrapper>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ContentWrapper from '~/components/ContentWrapper';
import ButtonLabel from '~/components/ButtonLabel';
import { useContent } from "~/composables/useContent";

export default defineComponent({
  name: 'StageComponent',
  components: { ContentWrapper, ButtonLabel },
  props: {
    component: {
      type: Object
    },
    page: {
      type: Object
    }
  },
  setup(props){
    const {
      componentContent,
      extractUrlOfLink,
      extractUrlOfImage } = useContent(props.component, props.page)

    return { componentContent, extractUrlOfLink, extractUrlOfImage }
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
    justify-content: center;

    &--button {
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
