<template>
  <div class="banner">
    <h2>{{ content.title }}</h2>
    <div v-html="content.text.value"/>
    <img :src="imageSrc" alt="imageAlt"/>
    <p><a :href=link>{{ content.ctalabel }}</a></p>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    component: {
      type: Object
    },
    page: {
      type: Object
    }
  },
  setup(props){
    const content = computed(() => props.component.getContent(props.page) || {})
    const imageSrc = computed(() => props.page.getContent(content.value.image)?.getOriginal()?.getUrl() || '');
    const link = computed(() => props.page.getContent(content.value.ctalink)?.getUrl() || '');

    return {
      content,
      imageSrc,
      link
    }
  },
}
</script>

<style lang="scss">
.banner {
  background-color: orange;
  color: steelblue;
  padding: 10px;
}
</style>
