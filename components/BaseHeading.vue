<template>
  <div>
    <div>{{ properties.level }}</div>
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

    return { properties }
  },
}

</script>
