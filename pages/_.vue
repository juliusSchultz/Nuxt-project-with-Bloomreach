<template>
  <div id="app">
    <div>Hallo</div>
    <br-page :configuration="configuration" :mapping="mapping">
      <template v-slot:default="props">
        <header>
          <br-component component="menu" />
        </header>
        <section>
          <br-component component="main" />
        </section>
        <footer>
          <br-component component="footer" />
        </footer>
      </template>
    </br-page>
  </div>
</template>

<script>
import { useConfiguration } from '~/composables/useConfiguration.js'
import { useMapping } from '~/composables/useMapping.js'

export default {
  name: 'App',
  setup(){
    const { configuration } = useConfiguration()
    const { mapping } = useMapping()

    return {
      configuration,
      mapping,
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
