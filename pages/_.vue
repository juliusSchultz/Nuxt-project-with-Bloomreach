<template>
  <div id="app">
    <br-page :configuration="configuration" :mapping="mapping">
      <main>
        <br-component component="main"/>
      </main>
    </br-page>
  </div>
</template>

<script>
import BrBanner from '~/components/BrBanner';
import axios from "axios";
import { ref } from 'vue';


export default {
  name: 'App',
  setup(){
    const accountName = process.env.ACCOUNT_NAME;
    const channelName = process.env.CHANNEL_NAME;
    const pathName = window.location.pathname
    const pathSearch = window.location.search

    const configuration = ref({
      path: `${pathName}${pathSearch}`,
      endpoint: `https://${accountName}/delivery/site/v1/channels/${channelName}/pages`,
      httpClient: axios,
    })
    const mapping = ref({ BrBanner })

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
