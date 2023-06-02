<template>
  <div id="app">
    <CmsPage :mapping="mapping" />
  </div>
</template>

<script>
import { useMapping } from '~/composables/useMapping.js'
import { useContent } from "~/composables/useContent";

export default {
  name: 'App',
  setup(){
    const { mapping } = useMapping()

    return {
      mapping,
      useContent,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
