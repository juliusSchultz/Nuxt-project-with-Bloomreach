<template>
  <div>
    <p>Title here below:</p>
    <h2>{{ simplePropertiesContent.title }}</h2>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useContent } from "~/composables/useContent";

export default defineComponent({
  name: 'MyComponent',
  props: {
    component: {
      type: String
    },
  },
  setup(props){
    const { simplePropertiesContent } = useContent(props.component)

    return {
      simplePropertiesContent,
    }
  },
})
</script>

