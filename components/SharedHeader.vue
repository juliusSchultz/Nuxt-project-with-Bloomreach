<template>
  <header class="header">
    <br-manage-content-button :content="document" />
    <ContentWrapper>
      <div class="header__wrapper">
        <div class="header__logo">
          <img width="100" height="100" alt="Vue logo" src="~/assets/icons/vueLogo.svg">
        </div>

        <ul class="header__meta-navigation">
          <li
            v-for="(link, index) in metaLinks"
            :key="index"
            class="header__list-item"
          >
            <a
              :href="link.link"
              class="header__link"
            >
              {{ link.title }}
            </a>
          </li>
        </ul>

        <button
          class="header__button"
          type="button"
        >
          <img alt="Vue logo" src="~/assets/icons/loginLogo.svg">
          <span class="header__button-text">Login</span>
        </button>
      </div>
    </ContentWrapper>
  </header>
</template>

<script>
import { computed, defineComponent } from 'vue';
import ContentWrapper from '~/components/ContentWrapper';

export default defineComponent({
  name: 'SharedHeader',
  components: {
    ContentWrapper,
  },
  props: {
    component: {
      type: Object
    },
    page: {
      type: Object
    }
  },
  setup(props) {
    const document = computed(() => props.page?.getContent(props.component.getProperties()?.document) || {})
    if (props.component.getProperties()?.document === ''){
      return
    }
    const content = computed(() => document?.value?.getData() || {})

    const extractUrl = (link) => {
      return props.page.getContent(link.link)?.getUrl() || ''
    }

    const metaLinks = computed(() => {
      const internalLinks = []
      for (const link of content.value?.links) {
        internalLinks.push({
          link: extractUrl(link), title: link.title
        })
      }
      return internalLinks;
    })

    return {
      document,
      metaLinks,
    };
  },
});

</script>

<style lang="scss">
@use '../assets/scss/variables' as *;
@use '../assets/scss/mixins' as *;

.header {
  border-bottom: 1px solid $color--black;
  position: relative;

  &__wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 0.5rem 0;

    @include breakpoint(sm) {
      margin: 2rem 0;
    }
  }

  &__logo {
    padding-right: 0.5rem;
  }

  &__meta-navigation {
    display: none;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    padding: 0 2rem;

    @include breakpoint(lg) {
      display: flex;
    }
  }

  &__list-item {
    list-style: none;
    padding: 0 0.5rem;
    cursor: pointer;
  }

  &__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
    background-color: $color--black;
    border-radius: 5px;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: $color--white;

    @include breakpoint(sm) {
      padding: 0.5rem 1.5rem;
      align-self: flex-start;
    }
  }

  &__button-text {
    display: none;
    color: $color--white;
    padding-left: 1rem;

    @include breakpoint(sm) {
      display: block;
    }
  }

  &__link {
    color: $color--black;
    text-decoration: none;
  }
}
</style>
