<template>
  <div>
    <p>Title here below:</p>
    <h2>{{ title }}</h2>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  props: {
    component: {
      type: Object
    },
  },
  setup(props){
    const properties = computed(() => props.component.getParameters());

    const title = computed(() => properties.value?.title || '#');

    return { title }
  },
})
</script>

