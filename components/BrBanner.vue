<template>
  <div>
    <p>Bannertext here below:</p>
    <h2>{{ bannerText }}</h2>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent ({
  name: 'BrBanner',
  props: {
    component: {
      type: Object
    },
  },
  setup(props){
    const properties = computed(() => props.component.getParameters());

    const bannerText = computed(() => properties.value?.bannerText || '#');

    return { bannerText }
  },
})
</script>
