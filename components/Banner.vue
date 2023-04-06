<template>
  <div class="banner">
    <h2>{{ content.title }}</h2>
    <div v-html="content.text.value"/>
    <img v-if="imageSrc" :src="imageSrc" alt="image"/>
    <p><a :href=link>{{ content.ctalabel }}</a></p>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'Banner',
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
})
</script>

<style lang="scss">
.banner {
  background-color: white;
  color: steelblue;
  padding: 10px;
}
</style>
