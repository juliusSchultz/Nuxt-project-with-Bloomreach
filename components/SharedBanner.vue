<template>
  <div style="background-color: grey; color: white; padding: 10px; position: relative">
    <br-manage-content-button :content="document" />
    <h2>{{ documentContent?.title }}</h2>
    <div v-html="documentContent?.text?.value"></div>
    <img :src="imageSrc" alt="image"/>
    <p>
      <a :href=link>{{documentContent?.ctalabel}}</a>
    </p>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useContent } from '~/composables/useContent.js'

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
    const { document, documentContent, imageSrc, link } = useContent(props.component, props.page)

    if (props.component.getProperties()?.document === ''){
      return
    }


    return {
      document,
      documentContent,
      imageSrc,
      link,
    }
  },
})
</script>
