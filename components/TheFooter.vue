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
          :href="link.link"
          class="footer__link"
        >
          {{ link.title }}
        </a>
      </div>
      <div class="footer__sub-text" v-html="subText.value" />
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
    page: {
      type: Object
    }
  },
  setup: function (props) {
    // const properties = computed(() => props.component.getParameters());

    const content = computed(() => props.component.getContent(props.page) || {})

    const extractUrl = (link) => {
      return props.page.getContent(link)?.getUrl() || ''
    }

    const links = computed(() => {
      const internalLinks = []
      for (const link of content.value.links) {
        internalLinks.push({
          link: extractUrl(link), title: link.title
        })
      }
      return internalLinks;
    })

    return {
      links,
      subText: content.value.subText,
      backToTopText: content.value.backToTopText,
      socialMediaItems: content.value.socialMediaItems,
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
