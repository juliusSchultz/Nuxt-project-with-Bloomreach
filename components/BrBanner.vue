<template>
  <div>
    <p>Bannertext here below:</p>
    <h2>{{ bannerText }}</h2>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
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
}
</script>
