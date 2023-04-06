<template>
  <div style="background-color: grey; color: white; padding: 10px; position: relative">
    <br-manage-content-button :content="document" />
    <h2>{{ content?.title }}</h2>
    <div v-html="content?.text?.value"></div>
    <img :src="imageSrc" alt="image"/>
    <p><a :href=link>{{content?.ctalabel}}</a></p>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'SharedBanner',
  props: {
    component: {
      type: Object
    },
    page: {
      type: Object
    }
  },
  setup(props){
    const document = computed(() => props.page?.getContent(props.component.getProperties()?.document) || {})
    if (props.component.getProperties()?.document === ''){
      return
    }
    const content = computed(() => document?.value?.getData() || {})
    const imageSrc = computed(() => props.page.getContent(content.value.image)?.getOriginal()?.getUrl() || '');
    const link = computed(() => props.page.getContent(content.value.ctalink)?.getUrl() || '');


    return {
      document,
      content,
      imageSrc,
      link,
    }
  },
})
</script>
