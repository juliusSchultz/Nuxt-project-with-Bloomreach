/*
* Copyright 2023 diva-e
*
* This code was partly developed in a hackweek project at diva-e
*/

<template>
  <footer class="footer">
    <ContentWrapper>
      <div class="footer__upper-wrapper">
        <SocialMediaWrapper :content="socialMediaItems" />
        <ScrollToTopButton :back-to-top-text="backToTopText" />
      </div>
      <div class="footer__link-wrapper">
        <a
          v-for="(link, index) in links"
          :key="index"
          :to="link.href"
          class="footer__link"
        >
          {{ link.title }}
        </a>
      </div>
      <div class="footer__sub-text">
        {{ subText }}
      </div>
    </ContentWrapper>
  </footer>
</template>

<script>

import {
  computed, defineComponent
} from 'vue';
import ContentWrapper from '~/components/ContentWrapper';
import ScrollToTopButton from '~/components/ScrollToTopButton';
import SocialMediaWrapper from '~/components/SocialMediaWrapper';

export default defineComponent({
  components: { ContentWrapper, ScrollToTopButton, SocialMediaWrapper },
  props: {
    component: {
      type: Object
    },
  },
  setup(props) {
    const properties = computed(() => props.component.getParameters());

    return {
      links: computed(() => properties.value.links),
      subText: computed(() => properties.value.subText),
      backToTopText: computed(() => properties.value.backToTopText),
      socialMediaItems: computed(() => properties.value.socialMediaItems),
    };
  },
});
</script>

<style lang="scss">
@use '../assets/scss/variables' as *;
@import '../assets/scss/style.scss';

.footer {
  color: $accent-text-color;
  background-color: $accent-background-color;
  padding: 24px 0;

  &__link {
    color: $accent-text-color;
    text-decoration: none;

    &:hover {
      color: $secondary-text-color;
    }
  }

  &__link-wrapper {
    display: flex;
    grid-gap: 24px;
    margin-bottom: 24px;
  }

  &__sub-text {
    font-size: 14px;
  }

  &__upper-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  @include breakpoint (md) {
    padding: 40px 0;
  }
}
</style>
